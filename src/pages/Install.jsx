import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, ExternalLink, Download, ChevronDown } from 'lucide-react';

const APP_URL = 'https://app.egc-me.com';

function detectPlatform() {
  const ua = navigator.userAgent;
  if (/iphone|ipad|ipod/i.test(ua)) return 'ios';
  if (/android/i.test(ua)) return 'android';
  return 'desktop';
}

function Step({ num, title, desc, img }) {
  return (
    <div className="inst-step">
      <div className="inst-step-num">{num}</div>
      <div className="inst-step-body">
        <div className="inst-step-title">{title}</div>
        <div className="inst-step-desc">{desc}</div>
        {img && <div className="inst-step-img">{img}</div>}
      </div>
    </div>
  );
}

const INSTRUCTIONS = {
  desktop: [
    { num: '01', title: 'Open app.egc-me.com in Chrome', desc: 'Navigate to app.egc-me.com in Google Chrome.' },
    {
      num: '02', title: 'Click the install icon in the address bar',
      desc: 'Look for the small screen icon (⊞) on the far right of the Chrome address bar and click it.',
      img: (
        <div className="inst-browser-mock">
          <div className="inst-browser-bar">
            <span className="inst-browser-url">app.egc-me.com</span>
            <span className="inst-install-badge">⊞ Install</span>
          </div>
        </div>
      ),
    },
    { num: '03', title: 'Click "Install" to confirm', desc: 'A dialog will appear — click "Install".' },
    { num: '04', title: "Done", desc: 'The EGC App opens as a standalone window on your desktop and taskbar.' },
  ],
  android: [
    { num: '01', title: 'Open app.egc-me.com in Chrome', desc: 'Open Chrome on your Android device and go to app.egc-me.com.' },
    {
      num: '02', title: 'Tap "Add to Home Screen"',
      desc: 'Chrome shows a banner at the bottom. Tap it. If you miss it, use the three-dot menu (⋮) → "Add to Home Screen".',
      img: (
        <div className="inst-mobile-mock">
          <div className="inst-mock-inner">
            <div className="inst-mock-statusbar" />
            <div className="inst-mock-urlbar">app.egc-me.com</div>
            <div className="inst-mock-body" />
            <div className="inst-mock-banner">
              <span className="inst-mock-banner-icon">🏗</span>
              <div>
                <div className="inst-mock-banner-title">EGC App</div>
                <div className="inst-mock-banner-sub">Add to Home Screen</div>
              </div>
              <div className="inst-mock-banner-btn">Add</div>
            </div>
          </div>
        </div>
      ),
    },
    { num: '03', title: 'Confirm', desc: 'Tap "Add" — the EGC App icon will appear on your home screen.' },
    { num: '04', title: 'Launch from your home screen', desc: 'Tap the icon to open the EGC App.' },
  ],
  ios: [
    { num: '01', title: 'Open app.egc-me.com in Safari', desc: 'Use Safari on your iPhone or iPad — not Chrome.' },
    {
      num: '02', title: 'Tap the Share button',
      desc: 'Tap the Share icon at the bottom — a box with an upward arrow.',
      img: (
        <div className="inst-mobile-mock">
          <div className="inst-mock-inner">
            <div className="inst-mock-statusbar" />
            <div className="inst-mock-urlbar">app.egc-me.com</div>
            <div className="inst-mock-body" />
            <div className="inst-ios-toolbar">
              <span>←</span><span>→</span>
              <span className="inst-ios-share-icon">⎋</span>
              <span>⊞</span><span>⋯</span>
            </div>
          </div>
        </div>
      ),
    },
    { num: '03', title: 'Select "Add to Home Screen"', desc: 'Scroll the share sheet, tap "Add to Home Screen", then tap "Add".' },
    { num: '04', title: 'Done', desc: 'Tap the EGC App icon on your home screen to launch.' },
  ],
};

export default function Install() {
  const [platform, setPlatform] = useState('desktop');

  useEffect(() => {
    setPlatform(detectPlatform());
    document.title = 'Install';
  }, []);

  const TAB_DEFS = [
    { id: 'desktop', label: 'Desktop',       icon: Monitor },
    { id: 'android', label: 'Android',       icon: Smartphone },
    { id: 'ios',     label: 'iPhone / iPad', icon: Smartphone },
  ];

  return (
    <>
      {/* NAV */}
      <div className="inst-nav">
        <div className="container">
          <Link to="/" className="inst-nav-logo">
            <span className="inst-logo-egc">EGC</span>
            <span className="inst-logo-sub">ENGINEERING GROUPING CO.</span>
          </Link>
          <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
            Open App <ExternalLink size={12} />
          </a>
        </div>
      </div>

      {/* WHITE BODY */}
      <div className="inst-body">

        {/* ABOVE-FOLD — app intro + phone */}
        <div className="inst-above-fold">
          <div className="container">
            <div className="inst-fold-layout">

              {/* Left */}
              <div className="inst-fold-left">

                <h1 className="inst-headline">Install the<br />EGC App.</h1>

                <p className="inst-sub">
                  Your employee self-service portal — HR requests, payslips,
                  leave, attendance, and company updates, all in one place.
                </p>

                <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg" style={{ marginBottom: 48 }}>
                  <Download size={15} /> Open &amp; Install
                </a>

                {/* Bouncing scroll hint */}
                <div className="inst-scroll-hint">
                  <ChevronDown size={18} className="inst-bounce" />
                  <span>Scroll for installation instructions</span>
                </div>
              </div>

              {/* Right — phone */}
              <div className="inst-fold-right">
                <img
                  src="/images/egc-app-frame.png"
                  alt="EGC App employee dashboard"
                  className="inst-hero-image"
                />
              </div>

            </div>
          </div>
        </div>

        {/* INSTALLATION GUIDE */}
        <div className="inst-guide-section" id="how-to-install">
          <div className="container">

            <div className="inst-guide-header">
              <p className="overline">Installation Guide</p>
              <h2 className="headline-medium" style={{ marginBottom: 6 }}>How to install.</h2>
              <p className="section-sub" style={{ marginTop: 0 }}>
                You're on{' '}
                <strong style={{ color: 'var(--dark)' }}>
                  {platform === 'ios' ? 'iOS · use Safari' : platform === 'android' ? 'Android · use Chrome' : 'Desktop · use Chrome'}
                </strong>.
                Switch below if needed.
              </p>
            </div>

            {/* Platform tabs */}
            <div className="inst-tabs">
              {TAB_DEFS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  className={`inst-tab${platform === id ? ' active' : ''}`}
                  onClick={() => setPlatform(id)}
                >
                  <Icon size={14} /> {label}
                </button>
              ))}
            </div>

            {/* Steps */}
            <div className="inst-steps">
              {INSTRUCTIONS[platform].map(s => <Step key={s.num} {...s} />)}
            </div>

            {/* CTA */}
            <div className="inst-cta">
              <div className="inst-cta-inner">
                <div>
                  <div className="inst-cta-title">Ready to install?</div>
                  <div className="inst-cta-sub">Open <strong>app.egc-me.com</strong> — your browser will prompt you to install.</div>
                </div>
                <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                  Open app.egc-me.com <ExternalLink size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER STRIP */}
      <div className="inst-footer-strip">
        <div className="container">
          <span>© 2026 Engineering Grouping Co. &nbsp;·&nbsp;</span>
          <Link to="/">Back to egc-me.com</Link>
          <span>&nbsp;·&nbsp;</span>
          <Link to="/legal-profile">Legal Profile</Link>
        </div>
      </div>

      <style>{`
        /* Nav */
        .inst-nav {
          background: var(--dark);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 13px 0;
          position: sticky; top: 0; z-index: 100;
        }
        .inst-nav .container { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .inst-nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .inst-logo-egc { color: #fff; font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; letter-spacing: 0.04em; line-height: 1; }
        .inst-logo-sub { font-family: var(--font-body); font-size: 0.48rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); }

        /* White body */
        .inst-body { background: #fff; }

        /* Above fold */
        .inst-above-fold { padding: 80px 0 72px; }
        .inst-fold-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 72px;
          align-items: center;
        }



        /* Headline */
        .inst-headline {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 900; line-height: 1.05;
          color: var(--dark); letter-spacing: -0.03em;
          margin: 0 0 18px;
        }
        .inst-sub {
          font-size: 1rem; color: var(--muted);
          line-height: 1.72; max-width: 440px; margin-bottom: 28px;
        }

        /* Scroll hint */
        .inst-scroll-hint {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.78rem; color: var(--muted); font-weight: 500;
        }
        .inst-bounce {
          animation: bounceDown 1.6s ease-in-out infinite;
          color: var(--blue);
        }
        @keyframes bounceDown {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        /* Phone */
        .inst-fold-right { display: flex; justify-content: center; }
        .inst-hero-image { display: block; width: 300px; height: auto; }

        /* Guide section */
        .inst-guide-section {
          background: #fff;
          border-top: 1px solid var(--border);
          padding: 72px 0 80px;
        }
        .inst-guide-header { margin-bottom: 28px; }

        /* Tabs */
        .inst-tabs {
          display: flex; flex-wrap: wrap;
          border-bottom: 1px solid var(--border);
          margin-bottom: 32px;
        }
        .inst-tab {
          display: flex; align-items: center; gap: 7px;
          padding: 11px 20px;
          font-size: 0.84rem; font-weight: 600;
          border: none; border-bottom: 2.5px solid transparent;
          background: none; cursor: pointer; color: var(--muted);
          transition: color 0.15s, border-color 0.15s;
          margin-bottom: -1px;
        }
        .inst-tab:hover { color: var(--dark); }
        .inst-tab.active { color: var(--blue); border-bottom-color: var(--blue); }

        /* Steps */
        .inst-steps { display: flex; flex-direction: column; max-width: 680px; }
        .inst-step {
          display: flex; gap: 18px; align-items: flex-start;
          padding: 22px 0; border-bottom: 1px solid var(--border);
        }
        .inst-step:last-child { border-bottom: none; }
        .inst-step-num {
          font-family: 'Courier New', monospace; font-size: 0.62rem; font-weight: 800;
          letter-spacing: 0.1em; color: var(--muted);
          background: var(--gray-bg); border: 1.5px solid var(--border);
          border-radius: 6px; padding: 4px 9px; flex-shrink: 0; margin-top: 2px;
        }
        .inst-step-title { font-family: var(--font-display); font-size: 0.97rem; font-weight: 700; color: var(--dark); margin-bottom: 5px; }
        .inst-step-desc { font-size: 0.88rem; color: var(--muted); line-height: 1.68; }
        .inst-step-img { margin-top: 14px; }

        /* Browser mockup */
        .inst-browser-mock { background: #1E293B; border-radius: 8px; padding: 10px 14px; max-width: 360px; }
        .inst-browser-bar {
          background: #0F172A; border-radius: 6px; padding: 7px 12px;
          display: flex; align-items: center; justify-content: space-between;
          font-size: 0.76rem; color: rgba(255,255,255,0.45);
        }
        .inst-browser-url { color: rgba(255,255,255,0.65); }
        .inst-install-badge {
          background: #2563EB; color: #fff;
          padding: 3px 10px; border-radius: 4px;
          font-size: 0.68rem; font-weight: 700;
        }

        /* Mobile mockup */
        .inst-mobile-mock { max-width: 200px; border: 1.5px solid var(--border); border-radius: 18px; overflow: hidden; }
        .inst-mock-inner { display: flex; flex-direction: column; min-height: 280px; background: #fff; }
        .inst-mock-statusbar { background: #000; height: 20px; }
        .inst-mock-urlbar { background: var(--gray-bg); padding: 7px 12px; font-size: 0.66rem; color: var(--muted); text-align: center; border-bottom: 1px solid var(--border); }
        .inst-mock-body { flex: 1; background: var(--gray-bg); }
        .inst-mock-banner {
          display: flex; align-items: center; gap: 9px; padding: 10px 12px;
          background: #fff; border-top: 1px solid var(--border); font-size: 0.7rem;
        }
        .inst-mock-banner-icon { font-size: 1.1rem; }
        .inst-mock-banner-title { font-weight: 700; color: var(--dark); font-size: 0.72rem; }
        .inst-mock-banner-sub { color: var(--muted); font-size: 0.62rem; }
        .inst-mock-banner-btn {
          margin-left: auto; background: var(--blue); color: #fff;
          padding: 4px 10px; border-radius: 5px; font-size: 0.66rem; font-weight: 700; white-space: nowrap;
        }
        .inst-ios-toolbar {
          display: flex; justify-content: space-around; padding: 10px 8px;
          background: var(--gray-bg); border-top: 1px solid var(--border);
          font-size: 0.95rem; color: var(--muted);
        }
        .inst-ios-share-icon { color: var(--blue); }

        /* CTA */
        .inst-cta {
          margin-top: 40px;
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          background: var(--gray-bg); padding: 28px 32px;
        }
        .inst-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .inst-cta-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
        .inst-cta-sub { font-size: 0.87rem; color: var(--muted); }
        .inst-cta-sub strong { color: var(--dark); font-weight: 600; }

        /* Footer strip */
        .inst-footer-strip {
          background: var(--dark);
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 0;
          font-size: 0.82rem; color: rgba(255,255,255,0.35);
        }
        .inst-footer-strip .container { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
        .inst-footer-strip a { color: rgba(255,255,255,0.5); text-decoration: none; }
        .inst-footer-strip a:hover { color: #fff; }

        /* Responsive */
        @media (max-width: 820px) {
          .inst-fold-layout { grid-template-columns: 1fr; }
          .inst-fold-right { display: none; }
          .inst-above-fold { padding: 56px 0 48px; }
        }
        @media (max-width: 580px) {
          .inst-logo-sub { display: none; }
          .inst-cta { padding: 20px; }
          .inst-cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
