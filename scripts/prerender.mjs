// Static prerendering for GitHub Pages, run after `vite build` (see "build" in package.json).
// Crawls every LOCALES × ROUTES page with a headless browser and writes real
// rendered HTML to dist/<route>/index.html, so every URL ships full content and correct <head>
// tags in the initial response instead of an empty <div id="root">.
//
// Pages are collected in memory and written only after the crawl finishes, so the Vite-built
// shell (dist/index.html) is the SPA fallback for every request while crawling.
//
// Also writes tiny redirect stubs for pre-redesign URLs (/en/**, /what-we-build/ …). GitHub Pages
// cannot issue real 301s, so each stub carries rel=canonical + an instant meta refresh — which
// Google treats as a permanent redirect.
import { chromium } from 'playwright';
import { preview } from 'vite';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES, ROUTES, STANDALONE_ROUTES, SITE_URL, routePath, legacyRedirects } from '../src/content/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const outFile = (urlPath) => path.join(DIST, urlPath.replace(/^\//, ''), 'index.html');

function crawlList() {
  const list = [];
  for (const locale of LOCALES) {
    for (const r of ROUTES) list.push({ url: routePath(locale, r.segment), ready: true });
  }
  return list;
}

/** The plain app shell for a standalone page, with its own title and a noindex, so the homepage's
 *  fallback tags are not repeated on a utility page that search engines have no reason to list. */
function standaloneShell(shell, route) {
  const title = route.title || 'EGC app';
  const description = route.description || 'EGC staff app.';
  return shell
    .replace(/<title[^>]*>.*?<\/title>/s, `<title>${title}</title>`)
    .replace(/<meta\s+name="description"[^>]*>/s, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title"[^>]*>/s, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:url"[^>]*>/s, `<meta property="og:url" content="${SITE_URL}${route.path}" />`)
    .replace('</head>', `  <meta name="robots" content="noindex,follow" />\n    <link rel="canonical" href="${SITE_URL}${route.path}" />\n  </head>`);
}

function redirectStub(to) {
  const abs = `${SITE_URL}${to}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${abs}">
<meta http-equiv="refresh" content="0; url=${to}">
<script>location.replace(${JSON.stringify(to)} + location.search + location.hash)</script>
</head>
<body><p>This page has moved to <a href="${to}">${abs}</a>.</p></body>
</html>
`;
}


/**
 * Runs inside the page. Serialises the live DOM so React can hydrate it:
 * `page.content()` merges adjacent text nodes (`"Hello " + name + "!"` becomes one node), which
 * React's hydrator treats as a mismatch. React's own server renderer separates such nodes with
 * `<!-- -->`, so we do the same.
 */
function serializeDocument() {
  const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
  const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escAttr = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const attrs = (el) => Array.from(el.attributes).map((a) => ` ${a.name}="${escAttr(a.value)}"`).join('');

  function children(node) {
    let out = '';
    let prevText = false;
    for (const c of node.childNodes) {
      const isText = c.nodeType === 3;
      if (isText && prevText) out += '<!-- -->';
      out += ser(c);
      prevText = isText;
    }
    return out;
  }
  function ser(n) {
    if (n.nodeType === 3) return esc(n.data);
    if (n.nodeType === 8) return `<!--${n.data}-->`;
    if (n.nodeType !== 1) return '';
    const tag = n.localName;
    const open = `<${tag}${attrs(n)}>`;
    if (VOID.has(tag)) return open;
    if (tag === 'script' || tag === 'style') return `${open}${n.textContent}</${tag}>`;
    return `${open}${children(n)}</${tag}>`;
  }

  const html = document.documentElement;
  return `<!DOCTYPE html><html${attrs(html)}><head>${document.head.innerHTML}</head><body${attrs(document.body)}>${children(document.body)}</body></html>`;
}

async function main() {
  const shell = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
  const server = await preview({ root: ROOT, preview: { port: 4173, strictPort: false } });
  const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, '');
  const browser = await chromium.launch();
  const results = [];
  let failed = false;

  for (const route of crawlList()) {
    const page = await browser.newPage();
    const fail = (msg) => {
      failed = true;
      console.error(`[prerender] ${route.url}: ${msg}`);
    };
    page.on('pageerror', (err) => fail(`client error — ${err.message}`));
    page.on('console', (m) => m.type() === 'error' && fail(`console error — ${m.text()}`));
    // only our own assets can fail the build; third-party hosts (fonts CDN) must not
    page.on('requestfailed', (r) => r.url().startsWith(baseUrl) && fail(`request failed — ${r.url()}`));
    page.on('response', (r) => r.url().startsWith(baseUrl) && r.status() >= 400 && fail(`HTTP ${r.status()} — ${r.url()}`));

    await page.addInitScript(() => { window.__PRERENDER__ = true; });
    await page.goto(`${baseUrl}${route.url}`, { waitUntil: 'load' });
    if (route.ready) await page.waitForFunction(() => window.__APP_READY__ === true, null, { timeout: 15000 });
    else await page.waitForLoadState('networkidle');

    // lets main.jsx tell a matching snapshot (hydrate) from the home page served via the 404 redirect
    await page.evaluate((u) => document.getElementById('root').setAttribute('data-prerendered', u), route.url);
    results.push({ url: route.url, html: await page.evaluate(serializeDocument) });
    console.log(`[prerender] rendered ${route.url}`);
    await page.close();
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));

  if (failed) {
    console.error('[prerender] errors above — failing the build.');
    process.exit(1);
  }

  for (const { url, html } of results) {
    const file = outFile(url);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, html, 'utf8');
  }
  // /install/ is a separately-designed, client-rendered page whose state is set in an effect, so a
  // snapshot of it would not hydrate. Serve the plain app shell, exactly as before.
  for (const r of STANDALONE_ROUTES) {
    const file = outFile(r.path);
    await fs.mkdir(path.dirname(file), { recursive: true });
    await fs.writeFile(file, standaloneShell(shell, r), 'utf8');
  }
  for (const { from, to } of legacyRedirects()) {
    const file = outFile(from);
    await fs.mkdir(path.dirname(file), { recursive: true });
    // never let a stub overwrite a real page (e.g. "/")
    if (results.some((r) => r.url === from)) continue;
    await fs.writeFile(file, redirectStub(to), 'utf8');
  }
  console.log(`[prerender] wrote ${results.length} pages and ${legacyRedirects().length} redirect stubs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
