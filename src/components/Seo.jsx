import { useLayoutEffect } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { LOCALES, DEFAULT_LOCALE, ROUTES, SITE_URL, routeUrl } from '../content/routes';
import { SEO_CONTENT } from '../content/seo';
import { SITE } from '../content/site';

/**
 * Renders per-route <title>/<meta>/<link>/JSON-LD. Uses React 19's native
 * support for hoisting <title>/<meta>/<link> to <head> regardless of where
 * they're rendered in the tree — no react-helmet needed. The inline
 * JSON-LD <script> renders in place (valid anywhere in the document per
 * schema.org/Google guidance, not just <head>).
 *
 * Captured into static HTML as-is by scripts/prerender.mjs, since it's
 * just normal render output, not an imperative side effect.
 */
export default function Seo({ routeKey }) {
  const locale = useLocale();
  const route = ROUTES.find((r) => r.key === routeKey);
  const copy = SEO_CONTENT[routeKey]?.[locale];
  const site = SITE[locale];

  // index.html ships static title/meta/OG tags as a pre-hydration/no-JS
  // fallback (and for the un-prerendered "/" redirect page). React's
  // native title/meta hoisting only manages tags it renders itself, so
  // once this component takes over for a real route, strip the static
  // ones or they'd sit duplicated alongside the ones below.
  useLayoutEffect(() => {
    document.querySelectorAll('[data-default]').forEach((el) => el.remove());
  }, []);

  if (!route || !copy) return null;

  const canonical = routeUrl(locale, route.segment);
  const ogImage = `${SITE_URL}/images/hero-bg.jpg`;
  const jsonLd = buildJsonLd({ route, locale, copy, site, canonical });

  return (
    <>
      <title>{copy.title}</title>
      <meta name="description" content={copy.description} />
      <link rel="canonical" href={canonical} />
      {LOCALES.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={routeUrl(l, route.segment)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={routeUrl(DEFAULT_LOCALE, route.segment)} />

      <meta property="og:title" content={copy.title} />
      <meta property="og:description" content={copy.description} />
      <meta property="og:type" content={routeKey === 'home' ? 'website' : 'article'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={copy.title} />
      <meta name="twitter:description" content={copy.description} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

function buildJsonLd({ route, locale, copy, site, canonical }) {
  const organization = {
    '@type': 'Organization',
    name: site.name,
    url: routeUrl(DEFAULT_LOCALE, ''),
    logo: `${SITE_URL}/logo.png`,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address,
      addressLocality: site.city,
      addressCountry: 'SA',
    },
    sameAs: [site.linkedin],
  };

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: SEO_CONTENT.home[locale].name, item: routeUrl(locale, '') },
      ...(route.segment
        ? [{ '@type': 'ListItem', position: 2, name: copy.name, item: canonical }]
        : []),
    ],
  };

  let page;
  if (route.jsonLdType === 'Organization') {
    page = organization;
  } else if (route.jsonLdType === 'Service') {
    page = {
      '@type': 'Service',
      name: copy.name,
      description: copy.description,
      url: canonical,
      provider: organization,
      areaServed: 'SA',
    };
  } else {
    page = {
      '@type': route.jsonLdType || 'WebPage',
      name: copy.name,
      description: copy.description,
      url: canonical,
    };
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [page, breadcrumb, route.key !== 'home' ? organization : null].filter(Boolean),
  };
}
