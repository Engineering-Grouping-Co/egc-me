import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, ArrowRight, Download, CheckCircle2, ExternalLink, Wifi, Lock, Globe2 } from 'lucide-react';

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
    { num: '01', title: 'Open app.egc-me.com in Chrome', desc: 'Navigate to app.egc-me.com in Google Chrome on your desktop.' },
    {
      num: '02', title: 'Click the install icon in the address bar',
      desc: "Look for the small screen icon (⊞) on the far right of the Chrome address bar and click it.",
      img: (
        <div className="inst-browser-mock">
          <div className="inst-browser-bar">
            <span className="inst-browser-url">app.egc-me.com</span>
            <span className="inst-install-badge">⊞ Install</span>
          </div>
        </div>
      ),
    },
    { num: '03', title: 'Click "Install" to confirm', desc: 'A dialog will appear — click the blue "Install" button.' },
    { num: '04', title: "Done — it's on your desktop", desc: 'The EGC App opens as a standalone window on your desktop and taskbar.' },
  ],
  android: [
    { num: '01', title: 'Open app.egc-me.com in Chrome', desc: 'Open Chrome on your Android device and go to app.egc-me.com.' },
    {
      num: '02', title: 'Tap "Add to Home Screen"',
      desc: 'Chrome shows a banner: "Add EGC App to Home Screen". Tap it. If you miss it, use the three-dot menu (⋮) → "Add to Home Screen".',
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
    { num: '03', title: 'Tap "Add" to confirm', desc: 'Confirm the dialog — the EGC App icon will appear on your home screen.' },
    { num: '04', title: 'Launch from your home screen', desc: 'Tap the icon to open the EGC App in full-screen mode.' },
  ],
  ios: [
    { num: '01', title: 'Open app.egc-me.com in Safari', desc: 'Use Safari on your iPhone or iPad — not Chrome. Navigate to app.egc-me.com.' },
    {
      num: '02', title: 'Tap the Share button',
      desc: 'Tap the Share icon at the bottom of Safari — it looks like a box with an upward-pointing arrow.',
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
    { num: '03', title: 'Select "Add to Home Screen"', desc: 'Scroll the share sheet, tap "Add to Home Screen", then tap "Add" to confirm.' },
    { num: '04', title: 'Launch from your home screen', desc: 'The EGC App icon will be on your home screen — tap it to launch full-screen.' },
  ],
};

export default function Install() {
  const [platform, setPlatform] = useState('desktop');

  useEffect(() => { setPlatform(detectPlatform()); }, []);

  const TAB_DEFS = [
    { id: 'desktop', label: 'Desktop',      icon: Monitor },
    { id: 'android', label: 'Android',      icon: Smartphone },
    { id: 'ios',     label: 'iPhone / iPad', icon: Smartphone },
  ];

  return (
    <>
      {/* ── NAV ── */}
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

      {/* ── MAIN (hero + guide, one dark background) ── */}
      <div className="inst-dark-canvas">

        {/* HERO */}
        <div className="container">
          <div className="inst-hero-layout">

            {/* Left */}
            <div className="inst-hero-left">
              <div className="inst-app-badge">
                <div className="inst-app-icon">EGC</div>
                <div>
                  <div className="inst-app-name">EGC App</div>
                  <div className="inst-app-domain">app.egc-me.com</div>
                </div>
              </div>

              <h1 className="inst-headline">Your work,<br />in your pocket.</h1>

              <p className="inst-sub">
                The EGC Employee Self-Service app — your one-stop centre for HR requests,
                payslips, leave, attendance, and company announcements, on any device.
              </p>

              <div className="inst-trust">
                {[
                  [CheckCircle2, 'No App Store needed'],
                  [Wifi,         'Works offline'],
                  [Globe2,       'Desktop · Android · iOS'],
                  [Lock,         'Always up-to-date'],
                ].map(([Icon, label]) => (
                  <span key={label} className="inst-trust-item">
                    <Icon size={13} /> {label}
                  </span>
                ))}
              </div>

              <div className="inst-hero-btns">
                <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                  <Download size={15} /> Open &amp; Install
                </a>
                <a href="#how-to-install" className="btn btn-outline-white btn-lg">
                  How to install <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right — phone with screenshot */}
            <div className="inst-hero-right">
              <div className="inst-phone">
                {/* Black status bar — matches the nav */}
                <div className="inst-phone-statusbar">
                  <span className="inst-phone-time">9:41</span>
                  <div className="inst-phone-icons">
                    <span>▲</span><span>WiFi</span><span>🔋</span>
                  </div>
                </div>
                <img
                  src="/images/egc-app-screenshot.png"
                  alt="EGC App screenshot showing employee dashboard"
                  className="inst-phone-screenshot"
                />
              </div>
              <div className="inst-phone-glow" aria-hidden="true" />
            </div>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="inst-section-divider" />

        {/* INSTALLATION GUIDE */}
        <div className="container" id="how-to-install">
          <div className="inst-guide-header">
            <p className="inst-overline">Installation Guide</p>
            <h2 className="inst-guide-title">Install it in under a minute.</h2>
            <p className="inst-guide-sub">
              Detected:{' '}
              <strong>
                {platform === 'ios' ? 'iOS · use Safari' : platform === 'android' ? 'Android · use Chrome' : 'Desktop · use Chrome'}
              </strong>
              . Switch below if needed.
            </p>
          </div>

          {/* Tabs */}
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
                <div className="inst-cta-title">Ready? Start here.</div>
                <div className="inst-cta-sub">Visit <strong>app.egc-me.com</strong> — Chrome will prompt you to install automatically.</div>
              </div>
              <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                Open app.egc-me.com <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── FOOTER STRIP ── */}
      <div className="inst-footer-strip">
        <div className="container">
          <span>© 2026 Engineering Grouping Co. &nbsp;·&nbsp;</span>
          <Link to="/">Back to egc-me.com</Link>
          <span>&nbsp;·&nbsp;</span>
          <Link to="/legal-profile">Legal Profile</Link>
        </div>
      </div>

      <style>{`
        /* ── Nav ── */
        .inst-nav {
          background: #060A12;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          padding: 13px 0;
          position: sticky; top: 0; z-index: 100;
        }
        .inst-nav .container { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .inst-nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .inst-logo-egc { color: #fff; font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; letter-spacing: 0.04em; line-height: 1; }
        .inst-logo-sub { font-family: var(--font-body); font-size: 0.48rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.45); }

        /* ── Dark canvas — entire page below nav ── */
        .inst-dark-canvas {
          background: #060A12;
          padding-top: 72px;
          padding-bottom: 72px;
        }

        /* ── Hero ── */
        .inst-hero-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 64px;
          align-items: center;
          padding-bottom: 72px;
        }

        /* App badge */
        .inst-app-badge {
          display: inline-flex; align-items: center; gap: 11px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 11px; padding: 9px 14px;
          margin-bottom: 26px;
        }
        .inst-app-icon {
          width: 36px; height: 36px; border-radius: 8px;
          background: linear-gradient(135deg, #1D4ED8 0%, #0EA5E9 100%);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 0.65rem; font-weight: 900;
          color: #fff; letter-spacing: 0.04em; flex-shrink: 0;
        }
        .inst-app-name { font-family: var(--font-display); font-size: 0.88rem; font-weight: 700; color: #fff; }
        .inst-app-domain { font-size: 0.7rem; color: rgba(255,255,255,0.38); }

        /* Headline */
        .inst-headline {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 900; line-height: 1.06;
          color: #fff; letter-spacing: -0.028em;
          margin: 0 0 18px;
        }
        .inst-sub {
          font-size: 1rem; color: rgba(255,255,255,0.55);
          line-height: 1.74; max-width: 480px; margin-bottom: 24px;
        }

        /* Trust */
        .inst-trust { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 32px; }
        .inst-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.78rem; color: rgba(255,255,255,0.45); font-weight: 500;
        }
        .inst-trust-item svg { color: #10B981; flex-shrink: 0; }

        /* Buttons */
        .inst-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }

        /* ── Phone ── */
        .inst-hero-right { position: relative; display: flex; justify-content: center; }
        .inst-phone {
          width: 240px;
          border-radius: 28px 28px 28px 28px;
          overflow: hidden;
          border: 1.5px solid rgba(255,255,255,0.1);
          box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04);
          position: relative; z-index: 2;
          background: #000;
        }
        .inst-phone-statusbar {
          background: #000;
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 16px 4px;
        }
        .inst-phone-time { font-size: 0.7rem; font-weight: 700; color: #fff; letter-spacing: 0.02em; }
        .inst-phone-icons { display: flex; gap: 5px; font-size: 0.55rem; color: rgba(255,255,255,0.7); align-items: center; }
        .inst-phone-screenshot {
          display: block; width: 100%;
          /* slight crop at bottom to avoid excess whitespace */
        }
        .inst-phone-glow {
          position: absolute; bottom: -20px; left: 50%; transform: translateX(-50%);
          width: 260px; height: 160px;
          background: radial-gradient(ellipse, rgba(14,165,233,0.14) 0%, transparent 70%);
          z-index: 1; pointer-events: none;
        }

        /* ── Section divider ── */
        .inst-section-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin: 0 0 64px;
        }

        /* ── Guide ── */
        .inst-guide-header { margin-bottom: 28px; }
        .inst-overline { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: #93C5FD; display: block; margin-bottom: 10px; }
        .inst-guide-title { font-family: var(--font-display); font-size: clamp(1.6rem, 3vw, 2.2rem); font-weight: 800; color: #fff; letter-spacing: -0.02em; margin: 0 0 10px; }
        .inst-guide-sub { font-size: 0.92rem; color: rgba(255,255,255,0.45); }
        .inst-guide-sub strong { color: rgba(255,255,255,0.75); font-weight: 600; }

        /* Tabs */
        .inst-tabs {
          display: flex; gap: 0; flex-wrap: wrap;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          margin-bottom: 32px;
        }
        .inst-tab {
          display: flex; align-items: center; gap: 7px;
          padding: 10px 20px;
          font-size: 0.83rem; font-weight: 600;
          border: none; border-bottom: 2.5px solid transparent;
          background: none; cursor: pointer; color: rgba(255,255,255,0.35);
          transition: color 0.15s, border-color 0.15s;
          margin-bottom: -1px;
        }
        .inst-tab:hover { color: rgba(255,255,255,0.75); }
        .inst-tab.active { color: #93C5FD; border-bottom-color: #93C5FD; }

        /* Steps */
        .inst-steps { display: flex; flex-direction: column; max-width: 680px; }
        .inst-step {
          display: flex; gap: 18px; align-items: flex-start;
          padding: 22px 0; border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .inst-step:last-child { border-bottom: none; }
        .inst-step-num {
          font-family: 'Courier New', monospace; font-size: 0.6rem; font-weight: 800;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 5px; padding: 4px 9px; flex-shrink: 0; margin-top: 2px;
        }
        .inst-step-title { font-family: var(--font-display); font-size: 0.97rem; font-weight: 700; color: #fff; margin-bottom: 5px; }
        .inst-step-desc { font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.68; }
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
        .inst-mobile-mock { max-width: 200px; border: 1.5px solid rgba(255,255,255,0.12); border-radius: 18px; overflow: hidden; background: #111; }
        .inst-mock-inner { display: flex; flex-direction: column; min-height: 280px; }
        .inst-mock-statusbar { background: #000; height: 20px; }
        .inst-mock-urlbar { background: #1A1A2E; padding: 7px 12px; font-size: 0.66rem; color: rgba(255,255,255,0.4); text-align: center; }
        .inst-mock-body { flex: 1; background: #0D1117; }
        .inst-mock-banner {
          display: flex; align-items: center; gap: 9px; padding: 10px 12px;
          background: #1A1A2E; border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 0.7rem;
        }
        .inst-mock-banner-icon { font-size: 1.1rem; }
        .inst-mock-banner-title { font-weight: 700; color: #fff; font-size: 0.72rem; }
        .inst-mock-banner-sub { color: rgba(255,255,255,0.4); font-size: 0.62rem; }
        .inst-mock-banner-btn {
          margin-left: auto; background: #2563EB; color: #fff;
          padding: 4px 10px; border-radius: 5px; font-size: 0.66rem; font-weight: 700; white-space: nowrap;
        }
        .inst-ios-toolbar {
          display: flex; justify-content: space-around; padding: 10px 8px;
          background: #1A1A2E; border-top: 1px solid rgba(255,255,255,0.08);
          font-size: 0.95rem; color: rgba(255,255,255,0.4);
        }
        .inst-ios-share-icon { color: #93C5FD; }

        /* CTA */
        .inst-cta {
          margin-top: 40px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          background: rgba(255,255,255,0.04);
          padding: 28px 32px;
        }
        .inst-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .inst-cta-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .inst-cta-sub { font-size: 0.87rem; color: rgba(255,255,255,0.45); }
        .inst-cta-sub strong { color: rgba(255,255,255,0.75); }

        /* Footer strip */
        .inst-footer-strip {
          background: #060A12;
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 20px 0;
          font-size: 0.82rem; color: rgba(255,255,255,0.35);
        }
        .inst-footer-strip .container { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
        .inst-footer-strip a { color: rgba(255,255,255,0.5); text-decoration: none; }
        .inst-footer-strip a:hover { color: #fff; }

        /* ── Responsive ── */
        @media (max-width: 820px) {
          .inst-hero-layout { grid-template-columns: 1fr; gap: 48px; padding-bottom: 56px; }
          .inst-hero-right { display: none; }
        }
        @media (max-width: 580px) {
          .inst-dark-canvas { padding-top: 48px; padding-bottom: 48px; }
          .inst-logo-sub { display: none; }
          .inst-cta { padding: 20px; }
          .inst-cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
