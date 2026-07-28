import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const BANNER_KEY = 'egc_dev_banner_dismissed';

function DevBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show once per session (not if already dismissed this session)
    if (!sessionStorage.getItem(BANNER_KEY)) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(BANNER_KEY, '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="dev-banner" role="alert">
      <div className="dev-banner-inner">
        <span className="dev-banner-icon" aria-hidden="true">🚧</span>
        <p className="dev-banner-text">
          This website is currently under development — some sections and information may not be fully up to date.
        </p>
        <button className="dev-banner-close" onClick={dismiss} aria-label="Dismiss notice">
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const routeTitles = {
      '/':               'Home',
      '/about':          'About',
      '/what-we-build':  'What We Build',
      '/projects':       'Projects',
      '/careers':        'Careers',
      '/suppliers':      'Suppliers',
      '/contact':        'Contact Us',
      '/legal-profile':  'Legal Profile',
      '/privacy-policy': 'Privacy Policy',
      '/terms':          'Terms & Conditions',
    };
    document.title = routeTitles[pathname] || 'EGC';
  }, [pathname]);

  return (
    <>
      <DevBanner />
      <Header />
      <main id="main-content" className="page-fade">
        {children}
      </main>
      <Footer />
    </>
  );
}
