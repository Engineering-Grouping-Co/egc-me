import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LocaleLayout from './i18n/LocaleLayout';
import Seo from './components/Seo';
import { ROUTES, legacyRedirects } from './content/routes';

import Home from './pages/Home';
import About from './pages/About';
import Hub from './pages/Hub';
import ServicePage from './pages/ServicePage';
import Manufacturing from './pages/Manufacturing';
import SoftwareEngineering from './pages/SoftwareEngineering';
import Systems from './pages/Systems';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Suppliers from './pages/Suppliers';
import Contact from './pages/Contact';
import LegalProfile from './pages/LegalProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Install from './pages/Install';

const PAGES = {
  home: <Home />,
  about: <About />,
  hub: <Hub />,
  shielding: <ServicePage id="shielding" />,
  doors: <ServicePage id="doors" />,
  mep: <ServicePage id="mep" />,
  surfaces: <ServicePage id="surfaces" />,
  manufacturing: <Manufacturing />,
  software: <SoftwareEngineering />,
  systems: <Systems />,
  projects: <Projects />,
  careers: <Careers />,
  suppliers: <Suppliers />,
  contact: <Contact />,
  legalProfile: <LegalProfile />,
  privacyPolicy: <PrivacyPolicy />,
  terms: <Terms />,
};

function localeRoutes() {
  return [
    ...ROUTES.map((r) => (
      <Route
        key={r.key}
        index={r.segment === ''}
        path={r.segment || undefined}
        element={
          <>
            <Seo routeKey={r.key} />
            {PAGES[r.key]}
          </>
        }
      />
    )),
    <Route key="*" path="*" element={<NotFound />} />,
  ];
}

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        {/* English is the root; Arabic lives under /ar */}
        <Route element={<LocaleLayout locale="en" />}>{localeRoutes()}</Route>
        <Route path="/ar" element={<LocaleLayout locale="ar" />}>{localeRoutes()}</Route>

        {/* Standalone PWA landing page — outside the site chrome and locale scheme */}
        <Route path="/install" element={<Install />} />

        {/* Pre-redesign URLs (/en/**, what-we-build, …) */}
        {legacyRedirects().map(({ from, to }) => (
          <Route key={from} path={from.replace(/\/$/, '') || '/'} element={<Navigate to={to} replace />} />
        ))}
        <Route path="/en/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
