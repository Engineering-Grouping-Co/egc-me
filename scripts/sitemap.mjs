// Generates dist/sitemap.xml and dist/robots.txt from the same route
// manifest App.jsx and prerender.mjs use, run as the final step of
// `npm run build` (after prerender.mjs).
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES, DEFAULT_LOCALE, ROUTES, SITE_URL, routeUrl } from '../src/content/routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

function alternateLinks(segment) {
  const links = LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${routeUrl(l, segment)}" />`);
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${routeUrl(DEFAULT_LOCALE, segment)}" />`);
  return links.join('\n');
}

function urlEntry(loc, segment) {
  return `  <url>\n    <loc>${loc}</loc>\n${alternateLinks(segment)}\n  </url>`;
}

async function main() {
  const entries = [];

  // Root — canonical is /en/, alternates included for completeness.
  entries.push(urlEntry(`${SITE_URL}/`, ''));

  for (const r of ROUTES) {
    for (const locale of LOCALES) {
      entries.push(urlEntry(routeUrl(locale, r.segment), r.segment));
    }
  }

  // /install is a standalone, non-localized PWA landing page.
  entries.push(`  <url>\n    <loc>${SITE_URL}/install</loc>\n  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    `${entries.join('\n')}\n` +
    `</urlset>\n`;

  await fs.writeFile(path.join(DIST, 'sitemap.xml'), xml, 'utf8');
  console.log('[sitemap] wrote dist/sitemap.xml');

  const robots = `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  await fs.writeFile(path.join(DIST, 'robots.txt'), robots, 'utf8');
  console.log('[sitemap] wrote dist/robots.txt');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
