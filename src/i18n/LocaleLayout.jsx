import { useLayoutEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import LocaleProvider from './LocaleProvider';
import { DEFAULT_LOCALE, LOCALES } from '../content/routes';
import Layout from '../components/Layout';

/**
 * Parent element for every route under /:locale.
 *
 * If the :locale segment isn't actually "en" or "ar", it's almost certainly
 * a pre-redesign un-prefixed URL (e.g. the old /about, /legal-profile) —
 * every legacy route was a single top-level segment, which is exactly what
 * lands here as an "invalid locale" at index depth. Rather than 404ing,
 * treat that segment as the intended page under the default locale.
 */
export default function LocaleLayout() {
  const { locale } = useParams();
  const isValid = LOCALES.includes(locale);

  useLayoutEffect(() => {
    if (!isValid) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale, isValid]);

  if (!isValid) {
    return <Navigate to={`/${DEFAULT_LOCALE}/${locale}`} replace />;
  }

  return (
    <LocaleProvider locale={locale}>
      <Layout>
        <Outlet />
      </Layout>
    </LocaleProvider>
  );
}
