/**
 * Single source of truth for site routes — consumed by src/App.jsx (route
 * generation), scripts/prerender.mjs (crawl list), and scripts/sitemap.mjs
 * (sitemap/robots generation). Plain data, no JSX, so it can be imported
 * unmodified by plain Node ESM scripts as well as the Vite client bundle.
 */

export const LOCALES = ['en', 'ar'];
export const DEFAULT_LOCALE = 'en';

export const SITE_URL = 'https://egc-me.com';

/* Every locale-prefixed route. `jsonLdType` drives the structured-data
 * block emitted by <Seo>. */
export const ROUTES = [
  { key: 'home',               segment: '',                     jsonLdType: 'Organization'    },
  { key: 'about',               segment: 'about',                jsonLdType: 'AboutPage'        },
  { key: 'whatWeBuild',         segment: 'what-we-build',        jsonLdType: 'Service'          },
  { key: 'manufacturing',       segment: 'manufacturing',        jsonLdType: 'Service'          },
  { key: 'softwareEngineering', segment: 'software-engineering', jsonLdType: 'Service'          },
  { key: 'projects',            segment: 'projects',             jsonLdType: 'CollectionPage'   },
  { key: 'careers',             segment: 'careers',              jsonLdType: 'CollectionPage'   },
  { key: 'suppliers',           segment: 'suppliers',            jsonLdType: 'WebPage'          },
  { key: 'contact',             segment: 'contact',              jsonLdType: 'ContactPage'      },
  { key: 'legalProfile',        segment: 'legal-profile',        jsonLdType: 'WebPage'          },
  { key: 'privacyPolicy',       segment: 'privacy-policy',       jsonLdType: 'WebPage'          },
  { key: 'terms',               segment: 'terms',                jsonLdType: 'WebPage'          },
];

/* Routes that live outside the /:locale prefix entirely. Install is a
 * separately-designed standalone page (untouched by this redesign); root
 * is a locale-detecting redirect page. */
export const STANDALONE_ROUTES = [
  { key: 'install', path: '/install', jsonLdType: null },
];

/* Legacy pre-redesign URLs (no locale prefix) that must keep resolving. */
export const LEGACY_REDIRECTS = [
  { from: '/divisions', to: `/${DEFAULT_LOCALE}/what-we-build` },
  { from: '/our-work',  to: `/${DEFAULT_LOCALE}/what-we-build` },
];

export function routePath(locale, segment) {
  return segment ? `/${locale}/${segment}` : `/${locale}/`;
}

export function routeUrl(locale, segment) {
  return `${SITE_URL}${routePath(locale, segment)}`;
}
