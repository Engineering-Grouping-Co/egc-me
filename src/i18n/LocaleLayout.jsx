import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import LocaleProvider from './LocaleProvider';
import Layout from '../components/Layout';

/** Wraps every page of one locale: sets <html lang/dir>, provides the locale, renders the site chrome. */
export default function LocaleLayout({ locale }) {
  useLayoutEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <LocaleProvider locale={locale}>
      <Layout>
        <Outlet />
      </Layout>
    </LocaleProvider>
  );
}
