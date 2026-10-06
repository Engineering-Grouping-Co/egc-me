import { useLayoutEffect } from 'react';
import { useLocale } from '../i18n/LocaleContext';
import { LOCALES, DEFAULT_LOCALE, SITE_URL, routeUrl, findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import { SITE } from '../content/site';
import { SERVICES } from '../content/services';
import { CATALOG_KEYS } from '../content/catalog';
import LASTMOD from '../content/lastmod.json';

const ORG_ID = `${SITE_URL}/#organization`;
const siteId = (locale) => `${routeUrl(locale, '')}#website`;
const serviceId = (locale, key) => `${routeUrl(locale, findRoute(key).segment)}#service`;
const COUNTRY = { '@type': 'Country', name: 'Saudi Arabia' };

const PAGE_TYPES = { about: 'AboutPage', contact: 'ContactPage', projects: 'CollectionPage', services: 'CollectionPage' };
const SERVICE_KEYS = ['hub', 'shielding', 'doors', 'mep', 'surfaces', 'manufacturing', 'software', ...CATALOG_KEYS];
// what the Organization offers: the four disciplines, the factory, the software business and the catalogue pages
const OFFER_KEYS = ['shielding', 'doors', 'mep', 'surfaces', 'manufacturing', 'software', ...CATALOG_KEYS];
const KNOWS_ABOUT = {
  en: [
    'Healthcare construction', 'MRI room construction', 'CT room construction', 'PET-CT room design', 'X-ray room construction',
    'RF shielding', 'Radiation shielding', 'Lead-lined doors', 'Hermetic doors', 'Wooden doors', 'Architectural joinery',
    'Healthcare MEP', 'Medical gas systems', 'Hospital HVAC', 'Fire protection', 'Nurse call installation',
    'Hospital fit-out', 'Operating-room ceilings', 'Hospital wall panels', 'Corian fabrication',
    'Hospital information systems', 'ERP software', 'ZATCA e-invoicing', 'Website development',
  ],
  ar: [
    'الإنشاءات الصحية', 'إنشاء غرف الرنين المغناطيسي', 'إنشاء غرف الأشعة المقطعية', 'تصميم غرف PET-CT', 'إنشاء غرف الأشعة السينية',
    'التدريع ضد الترددات الراديوية', 'التدريع الإشعاعي', 'الأبواب المبطنة بالرصاص', 'الأبواب الهيرمتية', 'الأبواب الخشبية', 'النجارة المعمارية',
    'الأعمال الكهروميكانيكية الطبية', 'الغازات الطبية', 'تكييف المستشفيات', 'الحماية من الحريق', 'تركيب أنظمة نداء الممرضات',
    'تجهيز المستشفيات', 'أسقف غرف العمليات', 'الألواح الجدارية للمستشفيات', 'تصنيع الكوريان',
    'أنظمة معلومات المستشفيات', 'برمجيات تخطيط الموارد', 'الفوترة الإلكترونية (هيئة الزكاة والضريبة والجمارك)', 'تطوير المواقع الإلكترونية',
  ],
};
const PHONE = (site) => site.phone.replace(/\s/g, '');
const offer = (locale, key) => {
  const svc = SERVICES[locale].find((s) => s.id === key);
  return {
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', '@id': serviceId(locale, key), name: svc ? svc.full : getSeo(key, locale).name, url: routeUrl(locale, findRoute(key).segment) },
  };
};

function organization(locale) {
  const site = SITE[locale];
  return {
    '@type': ['GeneralContractor', 'Organization'],
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.alternateNames.filter((n) => n !== site.name),
    url: `${SITE_URL}/`,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo-mark.png`, width: 256, height: 256 },
    image: `${SITE_URL}/og-image${locale === 'ar' ? '-ar' : ''}.png`,
    slogan: site.tagline,
    description:
      locale === 'ar'
        ? 'مقاول مشاريع صحية في السعودية مقره جدة: غرف الرنين المغناطيسي والأشعة المقطعية وPET-CT والأشعة السينية، تدريع إشعاعي ومغناطيسي، أبواب طبية وخشبية، غازات طبية وتكييف وحماية من الحريق وتركيب أنظمة نداء الممرضات، تجهيز المستشفيات، كوريان ونجارة، مع مصنع خاص وفريق لهندسة البرمجيات.'
        : 'Healthcare contractor in Saudi Arabia, based in Jeddah: MRI, CT, PET-CT and X-ray rooms, radiation and magnetic shielding, medical and wooden doors, medical gas, HVAC, fire protection, nurse call installation, hospital fit-outs, Corian and joinery, with its own factory and software engineering team.',
    foundingDate: site.founded,
    telephone: PHONE(site),
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
      telephone: PHONE(site),
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
    knowsAbout: KNOWS_ABOUT[locale],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'ar' ? 'خدمات التجمع الهندسي' : 'EGC services',
      itemListElement: OFFER_KEYS.map((k) => offer(locale, k)),
    },
    sameAs: [site.linkedin],
  };
}

function buildJsonLd({ routeKey, locale, seo, canonical }) {
  const route = findRoute(routeKey);
  const graph = [];
  const isHome = routeKey === 'home';

  graph.push(organization(locale));

  // one WebSite per language home page: Google reads the site name from it
  graph.push({
    '@type': 'WebSite',
    '@id': siteId(locale),
    url: routeUrl(locale, ''),
    name: SITE[locale].name,
    alternateName: [...new Set(['EGC', 'Engineering Group', SITE.en.name, SITE.ar.name, ...SITE[locale].alternateNames])].filter((n) => n !== SITE[locale].name),
    inLanguage: locale,
    publisher: { '@id': ORG_ID },
  });

  graph.push({
    '@type': PAGE_TYPES[routeKey] || 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: seo.title,
    description: seo.description,
    inLanguage: locale,
    isPartOf: { '@id': siteId(locale) },
    ...(LASTMOD[routeKey] ? { dateModified: LASTMOD[routeKey] } : {}),
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
              itemListElement: SERVICES[locale].map((s) => offer(locale, s.id)),
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
      <meta property="og:image:alt" content={`${SITE[locale].name} — ${seo.name}`} />
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
