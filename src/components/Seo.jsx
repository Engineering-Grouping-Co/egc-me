import { useLayoutEffect } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { LOCALES, DEFAULT_LOCALE, SITE_URL, routeUrl, findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import { SITE } from '../content/site';
import { SERVICES } from '../content/services';
import { UI } from '../content/ui';

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const COUNTRY = { '@type': 'Country', name: 'Saudi Arabia' };

const PAGE_TYPES = { about: 'AboutPage', contact: 'ContactPage', projects: 'CollectionPage' };
const SERVICE_KEYS = ['hub', 'shielding', 'doors', 'mep', 'surfaces', 'manufacturing', 'software', 'systems'];

function organization(locale) {
  const site = SITE[locale];
  const services = SERVICES[locale];
  return {
    '@type': ['GeneralContractor', 'Organization'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.alternateNames,
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-mark.png`, width: 256, height: 256 },
    image: `${SITE_URL}/og-image.png`,
    slogan: site.tagline,
    description:
      locale === 'ar'
        ? 'مقاول مشاريع صحية في جدة يجهّز غرف الرنين المغناطيسي والأشعة المقطعية وPET-CT: تدريع إشعاعي ومغناطيسي، أبواب طبية، أعمال كهروميكانيكية متخصصة، وأسطح مقاومة للعدوى، مع مصنع للكوريان وفريق لهندسة البرمجيات.'
        : 'Healthcare contractor in Jeddah preparing MRI, CT, PET-CT and X-ray rooms: radiation and magnetic shielding, medical doors, specialised MEP and infection-control surfaces, with its own Wood & Corian factory and software engineering team.',
    foundingDate: site.founded,
    telephone: site.phone,
    email: site.email,
    vatID: site.vat,
    identifier: { '@type': 'PropertyValue', propertyID: 'Commercial Registration', value: site.cr },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.en.district,
      addressLocality: 'Jeddah',
      addressRegion: 'Makkah Region',
      addressCountry: 'SA',
    },
    areaServed: COUNTRY,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: site.phone,
      email: site.email,
      areaServed: 'SA',
      availableLanguage: ['English', 'Arabic'],
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:00',
      closes: '17:00',
    },
    knowsAbout: [
      'Healthcare construction', 'MRI room shielding', 'RF shielding', 'Radiation shielding', 'PET-CT room design',
      'Lead-lined doors', 'Healthcare MEP', 'Corian fabrication', 'Hospital information systems', 'ZATCA e-invoicing',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'ar' ? 'خدمات التجمع الهندسي' : 'EGC services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.full, url: routeUrl(locale, findRoute(s.id).segment) },
      })),
    },
    sameAs: [site.linkedin],
  };
}

function buildJsonLd({ routeKey, locale, seo, canonical }) {
  const route = findRoute(routeKey);
  const graph = [];
  const isHome = routeKey === 'home';

  graph.push(organization(locale));

  if (isHome) {
    graph.push({
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: `${SITE_URL}/`,
      name: 'EGC',
      alternateName: [...new Set([SITE.en.name, 'Engineering Group', SITE.ar.name, SITE.ar.legalName])],
      inLanguage: LOCALES,
      publisher: { '@id': ORG_ID },
    });
  }

  graph.push({
    '@type': PAGE_TYPES[routeKey] || 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: seo.title,
    description: seo.description,
    inLanguage: locale,
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    breadcrumb: { '@id': `${canonical}#breadcrumb` },
  });

  // breadcrumbs: Home › (parent) › page
  const trail = [{ name: getSeo('home', locale).name, url: routeUrl(locale, '') }];
  if (route?.parent) trail.push({ name: getSeo(route.parent, locale).name, url: routeUrl(locale, findRoute(route.parent).segment) });
  if (!isHome) trail.push({ name: seo.name, url: canonical });
  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${canonical}#breadcrumb`,
    itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, item: t.url })),
  });

  if (SERVICE_KEYS.includes(routeKey)) {
    const svc = SERVICES[locale].find((s) => s.id === routeKey);
    graph.push({
      '@type': 'Service',
      '@id': `${canonical}#service`,
      name: svc ? svc.full : seo.name,
      description: seo.description,
      url: canonical,
      serviceType: svc ? svc.full : seo.name,
      provider: { '@id': ORG_ID },
      areaServed: COUNTRY,
      ...(routeKey === 'hub'
        ? {
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: seo.name,
              itemListElement: SERVICES[locale].map((s) => ({
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: s.full, url: routeUrl(locale, findRoute(s.id).segment) },
              })),
            },
          }
        : {}),
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/**
 * Per-route <title>, meta, canonical, hreflang and JSON-LD. React 19 hoists
 * <title>/<meta>/<link> into <head> wherever they render; the inline JSON-LD
 * renders in place (valid anywhere in the document). scripts/prerender.mjs
 * captures all of it as static HTML.
 */
export default function Seo({ routeKey, noindex = false }) {
  const locale = useLocale();
  const route = findRoute(routeKey);
  const seo = getSeo(routeKey, locale);

  // index.html ships static fallback tags marked data-default; once a route's own
  // <Seo> mounts, drop them so nothing is duplicated.
  useLayoutEffect(() => {
    document.querySelectorAll('[data-default]').forEach((el) => el.remove());
  }, []);

  const canonical = route ? routeUrl(locale, route.segment) : `${SITE_URL}/`;
  const ogImage = `${SITE_URL}/og-image${locale === 'ar' ? '-ar' : ''}.png`;
  const jsonLd = route && !noindex ? buildJsonLd({ routeKey, locale, seo, canonical }) : null;

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1'} />
      {!noindex && route && (
        <>
          <link rel="canonical" href={canonical} />
          {LOCALES.map((l) => (
            <link key={l} rel="alternate" hrefLang={l} href={routeUrl(l, route.segment)} />
          ))}
          <link rel="alternate" hrefLang="x-default" href={routeUrl(DEFAULT_LOCALE, route.segment)} />
        </>
      )}
      <link rel="alternate" type="text/plain" href="/llms.txt" title="EGC summary for AI assistants" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE[locale].name} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale === 'ar' ? 'ar_SA' : 'en_US'} />
      <meta property="og:locale:alternate" content={locale === 'ar' ? 'en_US' : 'ar_SA'} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE[locale].name} — ${UI[locale].home}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
}
