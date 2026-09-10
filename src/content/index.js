import { useMemo } from 'react';
import { useLocale } from '../i18n/LocaleContext';

import { SITE } from './site';
import { UI } from './ui';
import { STATS, VALUES, CERTIFICATIONS } from './company';
import { SERVICES } from './services';
import { PROJECTS, PROJECT_FILTERS, KSA_PATH, STATUS_KEYS } from './projects';
import { CAREERS, CAREER_FILTERS, CULTURE } from './careers';
import { SUPPLIER_STEPS, WHAT_WE_SOURCE, REQUIREMENTS, FAQS } from './suppliers';
import { MANUFACTURING } from './manufacturing';
import { SOFTWARE } from './software';
import { COPY } from './copy';

/**
 * Resolves every content module for the active locale in one call, so page
 * components do `const { SERVICES } = useContent();` instead of importing
 * from a dozen separate locale-keyed modules directly.
 */
export function useContent() {
  const locale = useLocale();
  return useMemo(
    () => ({
      locale,
      SITE: SITE[locale],
      UI: UI[locale],
      STATS: STATS[locale],
      VALUES: VALUES[locale],
      CERTIFICATIONS: CERTIFICATIONS[locale],
      SERVICES: SERVICES[locale],
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
      FAQS: FAQS[locale],
      MANUFACTURING: MANUFACTURING[locale],
      SOFTWARE: SOFTWARE[locale],
      COPY: Object.fromEntries(Object.entries(COPY).map(([k, v]) => [k, v[locale]])),
    }),
    [locale],
  );
}
