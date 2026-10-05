import { useEffect, useState, useSyncExternalStore } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { useContent } from '../content';
import './Layout.css';

const BANNER_KEY = 'egc_dev_banner_dismissed';

const noopSubscribe = () => () => {};
const clientVisible = () => {
  if (window.__PRERENDER__) return false;
  try { return !sessionStorage.getItem(BANNER_KEY); } catch { return false; }
};

function DevBanner() {
  const { UI } = useContent();
  // useSyncExternalStore: hydration renders the server value (hidden) first, then the real one,
  // so a visitor-specific notice never mismatches the prerendered HTML.
  const shouldShow = useSyncExternalStore(noopSubscribe, clientVisible, () => false);
  const [dismissed, setDismissed] = useState(false);
  if (!shouldShow || dismissed) return null;
  const dismiss = () => {
    try { sessionStorage.setItem(BANNER_KEY, '1'); } catch { /* storage unavailable */ }
    setDismissed(true);
  };
  return (
    <div className="notice" role="note">
      <div className="notice__inner">
        <p>{UI.devBanner}</p>
        <button type="button" onClick={dismiss} aria-label={UI.devBannerDismiss}><X size={16} /></button>
      </div>
    </div>
  );
}

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();
  const { UI } = useContent();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  useEffect(() => {
    // Readiness signal for scripts/prerender.mjs: layout effects (<Seo> head tags) always
    // flush before this passive effect in the same commit.
    window.__APP_READY__ = true;
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">{UI.skipToContent}</a>
      <DevBanner />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
