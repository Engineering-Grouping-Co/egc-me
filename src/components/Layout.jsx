import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useContent } from '../content';

const BANNER_KEY = 'egc_dev_banner_dismissed';

function DevBanner() {
  const { UI } = useContent();
  // Lazy initializer, not an effect: this needs to be correct on the very
  // first render so scripts/prerender.mjs's addInitScript-set
  // window.__PRERENDER__ flag (present before any page script runs) keeps
  // the "under development" notice out of the static HTML snapshot
  // entirely, rather than flashing it in before an effect can hide it.
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.__PRERENDER__) return false;
    return !sessionStorage.getItem(BANNER_KEY);
  });

  const dismiss = () => {
    sessionStorage.setItem(BANNER_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="dev-banner" role="alert">
      <div className="dev-banner-inner">
        <span className="dev-banner-icon" aria-hidden="true">🚧</span>
        <p className="dev-banner-text">{UI.devBanner}</p>
        <button className="dev-banner-close" onClick={dismiss} aria-label={UI.devBannerDismiss}>
          ✕
        </button>
      </div>
      <style>{`
        .dev-banner {
          background: #FFFBEB;
          border-bottom: 1px solid #FDE68A;
          z-index: 200;
          width: 100%;
        }
        .dev-banner-inner {
          max-width: var(--container);
          margin: 0 auto;
          padding: 10px 28px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .dev-banner-icon { font-size: 1rem; flex-shrink: 0; }
        .dev-banner-text {
          flex: 1;
          font-size: 0.83rem;
          color: #92400E;
          margin: 0;
          line-height: 1.5;
          font-weight: 500;
        }
        .dev-banner-close {
          flex-shrink: 0;
          background: none;
          border: none;
          font-size: 0.85rem;
          color: #92400E;
          cursor: pointer;
          padding: 4px 6px;
          border-radius: 4px;
          opacity: 0.6;
          transition: opacity 0.15s;
          line-height: 1;
        }
        .dev-banner-close:hover { opacity: 1; }
        @media (max-width: 600px) {
          .dev-banner-inner { padding: 10px 18px; gap: 8px; }
        }
      `}</style>
    </div>
  );
}

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const { UI } = useContent();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Readiness signal for scripts/prerender.mjs: layout effects (e.g.
    // <Seo>'s head tags) always flush before this passive effect in the
    // same commit, so by the time this runs the page is safe to snapshot.
    window.__APP_READY__ = true;
  }, [pathname]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {UI.skipToContent}
      </a>
      <DevBanner />
      <Header />
      <main id="main-content" className="page-fade">
        {children}
      </main>
      <Footer />
    </>
  );
}
