import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import WhatWeBuild from './pages/WhatWeBuild';
import Projects from './pages/Projects';
import Careers from './pages/Careers';
import Suppliers from './pages/Suppliers';
import Contact from './pages/Contact';
import LegalProfile from './pages/LegalProfile';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Install from './pages/Install';

const BASENAME = '/';

export default function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/"                element={<Layout><Home /></Layout>} />
        <Route path="/about"           element={<Layout><About /></Layout>} />
        <Route path="/what-we-build"   element={<Layout><WhatWeBuild /></Layout>} />
        <Route path="/projects"        element={<Layout><Projects /></Layout>} />
        <Route path="/careers"         element={<Layout><Careers /></Layout>} />
        <Route path="/suppliers"       element={<Layout><Suppliers /></Layout>} />
        <Route path="/contact"         element={<Layout><Contact /></Layout>} />
        <Route path="/legal-profile"   element={<Layout><LegalProfile /></Layout>} />
        <Route path="/privacy-policy"  element={<Layout><PrivacyPolicy /></Layout>} />
        <Route path="/terms"           element={<Layout><Terms /></Layout>} />
        {/* Install page — standalone, no site Layout wrapper */}
        <Route path="/install"         element={<Install />} />
        {/* Legacy redirects */}
        <Route path="/divisions"       element={<Navigate to="/what-we-build" replace />} />
        <Route path="/our-work"        element={<Navigate to="/what-we-build" replace />} />
        {/* Catch-all */}
        <Route path="*"                element={<Layout><Home /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
