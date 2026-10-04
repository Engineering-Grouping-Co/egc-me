import { useMemo } from 'react';
import { useLocale } from '../i18n/LocaleContext';

import { SITE } from './site';
import { UI } from './ui';
import { NAV } from './nav';
import { SERVICES } from './services';
import { ARTICLES } from './knowledge';
import { HOME, ABOUT, PROCESS } from './home';
import { HUB, MANUFACTURING, SOFTWARE, SYSTEMS } from './sectors';
import { VALUES, CERTIFICATIONS } from './company';
import { PROJECTS, PROJECT_FILTERS, KSA_PATH, STATUS_KEYS } from './projects';
import { CAREERS, CAREER_FILTERS, CULTURE } from './careers';
import { SUPPLIER_STEPS, WHAT_WE_SOURCE, REQUIREMENTS, FAQS as SUPPLIER_FAQS } from './suppliers';
import { COPY } from './copy';
import { getFaqs } from './faq';

/** Resolves every content module for the active locale in one call. */
export function useContent() {
  const locale = useLocale();
  return useMemo(
    () => ({
      locale,
      SITE: SITE[locale],
      UI: UI[locale],
      NAV: NAV[locale],
      SERVICES: SERVICES[locale],
      ARTICLES,
      HOME: HOME[locale],
      ABOUT: ABOUT[locale],
      PROCESS: PROCESS[locale],
      HUB: HUB[locale],
      MANUFACTURING: MANUFACTURING[locale],
      SOFTWARE: SOFTWARE[locale],
      SYSTEMS: SYSTEMS[locale],
      VALUES: VALUES[locale],
      CERTIFICATIONS: CERTIFICATIONS[locale],
      PROJECTS: PROJECTS[locale],
      PROJECT_FILTERS: PROJECT_FILTERS[locale],
      KSA_PATH,
      STATUS_KEYS,
      CAREERS: CAREERS[locale],
      CAREER_FILTERS: CAREER_FILTERS[locale],
      CULTURE: CULTURE[locale],
      SUPPLIER_STEPS: SUPPLIER_STEPS[locale],
      WHAT_WE_SOURCE: WHAT_WE_SOURCE[locale],
      REQUIREMENTS: REQUIREMENTS[locale],
      SUPPLIER_FAQS: SUPPLIER_FAQS[locale],
      COPY: Object.fromEntries(Object.entries(COPY).map(([k, v]) => [k, v[locale]])),
      faqs: (routeKey) => getFaqs(routeKey, locale),
    }),
    [locale],
  );
}
