// Static prerendering for GitHub Pages, run after `vite build` (see the
// "build" script in package.json). Crawls every LOCALES × ROUTES
// combination plus /install with a headless browser and writes real
// rendered HTML to dist/<route>/index.html, so every page ships with
// full content and correct <head> tags in the initial response instead
// of an empty <div id="root"> shell.
//
// "/" is handled separately (see buildRootRedirectPage) — it's a pure
// client-language-detecting redirect with no content of its own, so
// rather than crawl a transient React render, this script edits the
// Vite-built dist/index.html shell directly, preserving its hashed
// asset tags while adding a delayed no-JS <meta refresh> fallback and a
// <noscript> block.
import { chromium } from 'playwright';
import { preview } from 'vite';
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES, DEFAULT_LOCALE, ROUTES, STANDALONE_ROUTES, routePath, routeUrl } from '../src/content/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

async function buildRootRedirectPage() {
  const indexPath = path.join(DIST, 'index.html');
  let html = await fs.readFile(indexPath, 'utf8');

  // No <meta refresh> here deliberately: this exact file is also what
  // GitHub Pages' 404.html trick and (locally) vite preview's SPA
  // fallback serve for ANY unmatched path — including every trailing-
  // slash-less deep link the app's own <Link>s generate (/ar/about, not
  // /ar/about/). A timed refresh would fire on those too, forcing a
  // visitor correctly routed back to /ar/about by the 404 decoder script
  // (or already on the right pathname via vite preview) over to /en/ a
  // second later. RootRedirect's client JS handles the real "/" case;
  // <noscript> covers visitors with JS disabled.
  const hreflangLinks = [
    ...LOCALES.map((l) => `<link rel="alternate" hreflang="${l}" href="${routeUrl(l, '')}" />`),
    `<link rel="alternate" hreflang="x-default" href="${routeUrl(DEFAULT_LOCALE, '')}" />`,
  ].join('\n    ');
  html = html.replace('</head>', `    ${hreflangLinks}\n  </head>`);

  const noscript = `<noscript><div style="font-family:sans-serif;padding:40px;text-align:center;">` +
    `<p>JavaScript is required to view this site.</p>` +
    `<p><a href="/en/">Continue in English</a> &middot; <a href="/ar/">المتابعة بالعربية</a></p>` +
    `</div></noscript>`;
  html = html.replace('<div id="root">', `${noscript}\n    <div id="root">`);

  await fs.writeFile(indexPath, html, 'utf8');
}

function buildCrawlList() {
  const list = [];
  for (const locale of LOCALES) {
    for (const r of ROUTES) {
      list.push({
        url: routePath(locale, r.segment),
        outDir: path.join(DIST, locale, r.segment),
        readySignal: true,
      });
    }
  }
  for (const r of STANDALONE_ROUTES) {
    if (r.path === '/') continue; // handled by buildRootRedirectPage instead
    list.push({ url: r.path, outDir: path.join(DIST, r.path.replace(/^\//, '')), readySignal: false });
  }
  return list;
}

async function main() {
  await buildRootRedirectPage();

  const crawlList = buildCrawlList();
  const server = await preview({ root: ROOT, preview: { port: 4173, strictPort: false } });
  const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, '');

  const browser = await chromium.launch();
  let hadError = false;

  for (const route of crawlList) {
    const page = await browser.newPage();
    page.on('pageerror', (err) => {
      hadError = true;
      console.error(`[prerender] client error on ${route.url}:`, err.message);
    });

    await page.addInitScript(() => {
      window.__PRERENDER__ = true;
    });

    await page.goto(`${baseUrl}${route.url}`, { waitUntil: 'load' });

    if (route.readySignal) {
      await page.waitForFunction(() => window.__APP_READY__ === true, { timeout: 15000 });
    } else {
      await page.waitForLoadState('networkidle');
    }

    const html = await page.content();
    await fs.mkdir(route.outDir, { recursive: true });
    await fs.writeFile(path.join(route.outDir, 'index.html'), html, 'utf8');
    console.log(`[prerender] wrote ${path.relative(ROOT, route.outDir)}/index.html`);

    await page.close();
  }

  await browser.close();
  await server.httpServer.close();

  if (hadError) {
    console.error('[prerender] one or more routes threw a client-side error — failing the build.');
    process.exit(1);
  }

  console.log(`[prerender] done — ${crawlList.length} routes + / prerendered.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
