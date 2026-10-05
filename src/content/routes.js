/**
 * Single source of truth for site routes — consumed by src/App.jsx (route
 * generation), scripts/prerender.mjs (crawl list), scripts/sitemap.mjs
 * (sitemap / robots / llms.txt). Plain data, no JSX, so plain Node ESM
 * scripts can import it unmodified.
 *
 * URL scheme: English lives at the root (/, /about/ …) so the domain's
 * homepage is a real, indexable page; Arabic lives under /ar/. Every URL
 * ends with a trailing slash because GitHub Pages 301-redirects the
 * slash-less form — canonicals, hreflang and sitemap must match the final URL.
 */

export const LOCALES = ['en', 'ar'];
export const DEFAULT_LOCALE = 'en';
export const SITE_URL = 'https://egc-me.com';

/* `parent` drives breadcrumbs (Seo JSON-LD + PageHero). */
export const ROUTES = [
  { key: 'home',          segment: '' },
  { key: 'about',         segment: 'about' },
  { key: 'hub',           segment: 'healthcare-contractor' },
  { key: 'shielding',     segment: 'healthcare-contractor/radiation-shielding',        parent: 'hub' },
  { key: 'doors',         segment: 'healthcare-contractor/medical-doors',              parent: 'hub' },
  { key: 'mep',           segment: 'healthcare-contractor/healthcare-mep',             parent: 'hub' },
  { key: 'surfaces',      segment: 'healthcare-contractor/infection-control-surfaces', parent: 'hub' },
  { key: 'manufacturing', segment: 'manufacturing' },
  { key: 'software',      segment: 'software-engineering' },
  { key: 'systems',       segment: 'healthcare-systems' },
  { key: 'projects',      segment: 'projects' },
  { key: 'careers',       segment: 'careers' },
  { key: 'suppliers',     segment: 'suppliers' },
  { key: 'contact',       segment: 'contact' },
  { key: 'legalProfile',  segment: 'legal-profile' },
  { key: 'privacyPolicy', segment: 'privacy-policy' },
  { key: 'terms',         segment: 'terms' },
];

/* Outside the locale scheme entirely: the separately-designed PWA landing page. */
export const STANDALONE_ROUTES = [
  { key: 'install', path: '/install/', title: 'Install the EGC app | Engineering Grouping Co.', description: 'Install the EGC staff app on your phone or computer.' },
];

export function routePath(locale, segment = '') {
  const base = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return segment ? `${base}/${segment}/` : `${base}/`;
}

export function routeUrl(locale, segment = '') {
  return `${SITE_URL}${routePath(locale, segment)}`;
}

export function findRoute(key) {
  return ROUTES.find((r) => r.key === key);
}

/**
 * Pre-redesign URLs that must keep resolving:
 *  - /en/** (live for a few weeks) now folds into the root English URLs
 *  - what-we-build was renamed healthcare-contractor
 * Static stubs are emitted by scripts/prerender.mjs; App.jsx handles the
 * same table client-side.
 */
const RENAMED = { 'what-we-build': 'healthcare-contractor' };

export function legacyRedirects() {
  const list = [];
  for (const [from, to] of Object.entries(RENAMED)) {
    list.push({ from: `/${from}/`, to: routePath('en', to) });
    list.push({ from: `/en/${from}/`, to: routePath('en', to) });
    list.push({ from: `/ar/${from}/`, to: routePath('ar', to) });
  }
  list.push({ from: '/divisions/', to: routePath('en', 'healthcare-contractor') });
  list.push({ from: '/our-work/', to: routePath('en', 'healthcare-contractor') });
  list.push({ from: '/ar/divisions/', to: routePath('ar', 'healthcare-contractor') });
  list.push({ from: '/ar/our-work/', to: routePath('ar', 'healthcare-contractor') });
  list.push({ from: '/en/', to: routePath('en', '') });
  for (const r of ROUTES) {
    if (r.segment) list.push({ from: `/en/${r.segment}/`, to: routePath('en', r.segment) });
  }
  return list;
}
