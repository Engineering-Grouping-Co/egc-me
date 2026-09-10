import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LocaleLayout from './i18n/LocaleLayout';
import RootRedirect from './pages/RootRedirect';
import Seo from './components/Seo';
import { ROUTES, DEFAULT_LOCALE } from './content/routes';

import Home from './pages/Home';
import About from './pages/About';
import WhatWeBuild from './pages/WhatWeBuild';
import Manufacturing from './pages/Manufacturing';
import SoftwareEngineering from './pages/SoftwareEngineering';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Suppliers from './pages/Suppliers';
import Contact from './pages/Contact';
import LegalProfile from './pages/LegalProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Install from './pages/Install';

const PAGES = {
  home: Home,
  about: About,
  whatWeBuild: WhatWeBuild,
  manufacturing: Manufacturing,
  softwareEngineering: SoftwareEngineering,
  projects: Projects,
  careers: Careers,
  suppliers: Suppliers,
  contact: Contact,
  legalProfile: LegalProfile,
  privacyPolicy: PrivacyPolicy,
  terms: Terms,
};

export default function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        <Route path="/:locale" element={<LocaleLayout />}>
          {ROUTES.map((r) => {
            const Page = PAGES[r.key];
            return (
              <Route
                key={r.key}
                index={r.segment === ''}
                path={r.segment || undefined}
                element={
                  <>
                    <Seo routeKey={r.key} />
                    <Page />
                  </>
                }
              />
            );
          })}
          <Route path="*" element={<Navigate to="." replace />} />
        </Route>

        {/* Install — standalone, no site Layout, no locale prefix, not
            touched by this redesign. Static path wins over /:locale
            regardless of declaration order (React Router ranks static
            segments above dynamic ones). */}
        <Route path="/install" element={<Install />} />

        {/* Legacy pre-redesign redirects */}
        <Route path="/divisions" element={<Navigate to={`/${DEFAULT_LOCALE}/what-we-build`} replace />} />
        <Route path="/our-work" element={<Navigate to={`/${DEFAULT_LOCALE}/what-we-build`} replace />} />

        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}
