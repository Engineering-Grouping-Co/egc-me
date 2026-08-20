import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, Globe2, ArrowRight, Download, CheckCircle2, ExternalLink, Wifi, Bell, Lock } from 'lucide-react';

const APP_URL = 'https://app.egc-me.com';

/* ── Detect platform ── */
function detectPlatform() {
  const ua = navigator.userAgent;
  const isIOS = /iphone|ipad|ipod/i.test(ua);
  const isAndroid = /android/i.test(ua);
  const isChrome = /chrome/i.test(ua) && !/edg|opr/i.test(ua);
  if (isIOS) return 'ios';
  if (isAndroid) return 'android';
  return 'desktop';
}

/* ── Step component ── */
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

/* ── Instruction sets ── */
const INSTRUCTIONS = {
  desktop: [
    {
      num: '01',
      title: 'Open app.egc-me.com in Chrome',
      desc: 'The EGC Platform works best in Google Chrome on Desktop. Open Chrome and navigate to app.egc-me.com.',
    },
    {
      num: '02',
      title: 'Look for the install icon',
      desc: 'In the Chrome address bar, you\'ll see a small screen icon (⊞) or a computer monitor icon on the far right. Click it.',
      img: (
        <div className="inst-browser-mock">
          <div className="inst-browser-bar">
            <span className="inst-browser-url">app.egc-me.com</span>
            <span className="inst-install-icon" title="Install icon">⊞</span>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Click "Install"',
      desc: 'A dialog will appear asking if you want to install "EGC Platform". Click the blue "Install" button.',
    },
    {
      num: '04',
      title: 'Done — find it in your apps',
      desc: 'The EGC Platform will appear on your desktop and taskbar, and will open as a standalone app without the browser chrome.',
    },
  ],
  android: [
    {
      num: '01',
      title: 'Open app.egc-me.com in Chrome',
      desc: 'Open the Chrome browser on your Android device and go to app.egc-me.com.',
    },
    {
      num: '02',
      title: 'Tap "Add to Home Screen"',
      desc: 'Chrome will show a banner at the bottom of the screen with "Add EGC Platform to Home Screen". Tap it. If you don\'t see it, tap the three-dot menu (⋮) in the top-right and choose "Add to Home Screen".',
      img: (
        <div className="inst-mobile-mock android">
          <div className="inst-mobile-inner">
            <div className="inst-mobile-topbar">app.egc-me.com</div>
            <div className="inst-mobile-content" />
            <div className="inst-mobile-banner">
              <span>🏗</span>
              <div>
                <div className="inst-mobile-banner-title">EGC Platform</div>
                <div className="inst-mobile-banner-sub">Add to Home Screen</div>
              </div>
              <div className="inst-mobile-banner-btn">Add</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Tap "Add" to confirm',
      desc: 'A confirmation dialog will appear. Tap "Add" and the EGC Platform icon will be placed on your home screen.',
    },
    {
      num: '04',
      title: 'Launch from your home screen',
      desc: 'Find the EGC Platform icon on your Android home screen. Tap it to launch the app in full-screen mode.',
    },
  ],
  ios: [
    {
      num: '01',
      title: 'Open app.egc-me.com in Safari',
      desc: 'On iPhone or iPad, use Safari (not Chrome). Navigate to app.egc-me.com.',
    },
    {
      num: '02',
      title: 'Tap the Share button',
      desc: 'Tap the Share icon at the bottom of the screen — it looks like a box with an arrow pointing upward.',
      img: (
        <div className="inst-mobile-mock ios">
          <div className="inst-mobile-inner">
            <div className="inst-mobile-topbar">app.egc-me.com</div>
            <div className="inst-mobile-content" />
            <div className="inst-ios-toolbar">
              <span>←</span>
              <span>→</span>
              <span className="inst-ios-share">⎋</span>
              <span>⊞</span>
              <span>⋯</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Select "Add to Home Screen"',
      desc: 'Scroll down in the share sheet and tap "Add to Home Screen". Give it a name if prompted, then tap "Add".',
    },
    {
      num: '04',
      title: 'Launch from your home screen',
      desc: 'The EGC Platform icon will appear on your home screen. Tap it to open the app in full-screen mode.',
    },
  ],
};

/* ── Feature item ── */
function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="inst-feature">
      <div className="inst-feature-icon"><Icon size={20} /></div>
      <div>
        <div className="inst-feature-title">{title}</div>
        <div className="inst-feature-desc">{desc}</div>
      </div>
    </div>
  );
}

export default function Install() {
  const [platform, setPlatform] = useState('desktop');

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const steps = INSTRUCTIONS[platform];

  const TAB_DEFS = [
    { id: 'desktop', label: 'Desktop', icon: Monitor },
    { id: 'android', label: 'Android',  icon: Smartphone },
    { id: 'ios',     label: 'iPhone / iPad', icon: Smartphone },
  ];

  return (
    <>
      {/* ── NAV ── */}
      <div className="inst-mini-nav">
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

      {/* ── HERO ── */}
      <section className="inst-hero">
        <div className="container">
          <div className="inst-hero-inner">
            <div className="inst-hero-text">
              <p className="inst-overline">EGC Platform</p>
              <h1 className="inst-headline">
                Install the EGC app<br />
                <span className="inst-headline-accent">on any device.</span>
              </h1>
              <p className="inst-sub">
                The EGC Platform works as a Progressive Web App — install it directly on
                your desktop or phone for fast, offline-capable access with no App Store required.
              </p>
              <div className="inst-hero-btns">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Open app.egc-me.com <ExternalLink size={15} />
                </a>
                <a href="#how-to-install" className="btn btn-secondary btn-lg">
                  How to install <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* App card mockup */}
            <div className="inst-app-card">
              <div className="inst-app-icon">
                <span>EGC</span>
              </div>
              <div className="inst-app-info">
                <div className="inst-app-name">EGC Platform</div>
                <div className="inst-app-domain">app.egc-me.com</div>
              </div>
              <div className="inst-app-features-mini">
                <span><CheckCircle2 size={12} /> No App Store</span>
                <span><CheckCircle2 size={12} /> Works offline</span>
                <span><CheckCircle2 size={12} /> Always up-to-date</span>
              </div>
              <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-block" style={{ marginTop: 12 }}>
                <Download size={15} /> Install Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY A PWA ── */}
      <section className="section section-gray">
        <div className="container">
          <div className="inst-why-header">
            <p className="overline">Why Install?</p>
            <h2 className="headline-medium">A better experience, without the App Store.</h2>
          </div>
          <div className="inst-features-grid">
            <Feature
              icon={Download}
              title="Install in seconds"
              desc="No download from the App Store or Play Store. One click from your browser and it's on your device."
            />
            <Feature
              icon={Wifi}
              title="Works offline"
              desc="Key content is cached locally so the app remains accessible even with a poor or no internet connection."
            />
            <Feature
              icon={Bell}
              title="Native-like experience"
              desc="Runs full-screen as a standalone app — no browser address bar, tabs, or distractions."
            />
            <Feature
              icon={Lock}
              title="Secure & always current"
              desc="Automatically updates when the app is updated. No manual updates needed, ever."
            />
            <Feature
              icon={Globe2}
              title="Works on every device"
              desc="Install on Windows, macOS, Android, and iPhone/iPad — the same app, everywhere."
            />
            <Feature
              icon={Lock}
              title="No extra permissions"
              desc="Runs in a sandboxed browser environment — no unusual OS permissions required."
            />
          </div>
        </div>
      </section>

      {/* ── HOW TO INSTALL ── */}
      <section className="section" id="how-to-install">
        <div className="container">
          <div className="inst-how-header">
            <p className="overline">Installation Guide</p>
            <h2 className="headline-medium">Step-by-step instructions.</h2>
            <p className="section-sub">
              We've detected you're on <strong>{platform === 'ios' ? 'iOS' : platform === 'android' ? 'Android' : 'Desktop'}</strong>.
              Follow the steps below, or switch to a different platform.
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
                <Icon size={15} />
                {label}
              </button>
            ))}
          </div>

          {/* Steps */}
          <div className="inst-steps">
            {steps.map(s => (
              <Step key={s.num} {...s} />
            ))}
          </div>

          {/* Open app CTA */}
          <div className="inst-open-cta">
            <div className="inst-open-cta-inner">
              <div>
                <div className="inst-open-cta-title">Ready? Open the app first.</div>
                <div className="inst-open-cta-sub">
                  Visit <strong>app.egc-me.com</strong> in your browser to trigger the install prompt.
                </div>
              </div>
              <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                Open app.egc-me.com <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER LINK ── */}
      <div className="inst-footer-strip">
        <div className="container">
          <span>© 2026 Engineering Grouping Co. &nbsp;·&nbsp;</span>
          <Link to="/">Back to egc-me.com</Link>
          <span> &nbsp;·&nbsp; </span>
          <Link to="/legal-profile">Legal Profile</Link>
        </div>
      </div>

      <style>{`
        /* ── Mini nav ── */
        .inst-mini-nav {
          background: var(--dark); border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 12px 0; position: sticky; top: 0; z-index: 100;
        }
        .inst-mini-nav .container { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .inst-nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .inst-logo-egc { color: var(--white); font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; letter-spacing: 0.04em; line-height: 1; }
        .inst-logo-sub { font-family: var(--font-body); font-size: 0.48rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.5); line-height: 1; }

        /* ── Hero ── */
        .inst-hero {
          padding: 80px 0 72px;
          background: linear-gradient(160deg, #0A0E14 0%, #0F172A 100%);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .inst-hero-inner {
          display: grid; grid-template-columns: 1fr 340px; gap: 64px; align-items: center;
        }
        .inst-overline {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; color: #93C5FD; margin-bottom: 16px; display: block;
        }
        .inst-headline {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 900; line-height: 1.06;
          color: #fff; letter-spacing: -0.025em;
          margin: 0 0 20px;
        }
        .inst-headline-accent { color: #93C5FD; }
        .inst-sub { font-size: 1.02rem; color: rgba(255,255,255,0.62); line-height: 1.72; max-width: 520px; margin-bottom: 32px; }
        .inst-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }

        /* App card */
        .inst-app-card {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
          border-radius: 16px; padding: 28px 24px;
          backdrop-filter: blur(8px);
        }
        .inst-app-icon {
          width: 64px; height: 64px; border-radius: 14px;
          background: linear-gradient(135deg, #1D4ED8 0%, #0EA5E9 100%);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 1.1rem; font-weight: 900;
          color: #fff; letter-spacing: 0.04em; margin-bottom: 14px;
        }
        .inst-app-info { margin-bottom: 16px; }
        .inst-app-name { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 3px; }
        .inst-app-domain { font-size: 0.8rem; color: rgba(255,255,255,0.4); }
        .inst-app-features-mini {
          display: flex; flex-direction: column; gap: 7px; margin-bottom: 4px;
        }
        .inst-app-features-mini span {
          display: flex; align-items: center; gap: 7px;
          font-size: 0.8rem; color: rgba(255,255,255,0.55);
        }
        .inst-app-features-mini svg { color: #10B981; flex-shrink: 0; }

        /* ── Why section ── */
        .inst-why-header { margin-bottom: 40px; }
        .inst-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .inst-feature {
          display: flex; align-items: flex-start; gap: 14px;
          background: #fff; border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); padding: 20px;
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .inst-feature:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
        .inst-feature-icon {
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--blue-light); color: var(--blue);
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .inst-feature-title { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
        .inst-feature-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.6; }

        /* ── How to install ── */
        .inst-how-header { margin-bottom: 28px; }
        .inst-how-header strong { color: var(--blue); }

        /* Tabs */
        .inst-tabs { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 36px; border-bottom: 1px solid var(--border); padding-bottom: 0; }
        .inst-tab {
          display: flex; align-items: center; gap: 7px;
          padding: 10px 18px; font-size: 0.85rem; font-weight: 600;
          border: none; border-bottom: 2.5px solid transparent;
          background: none; cursor: pointer; color: var(--muted);
          transition: color 0.15s, border-color 0.15s;
          margin-bottom: -1px;
        }
        .inst-tab:hover { color: var(--dark); }
        .inst-tab.active { color: var(--blue); border-bottom-color: var(--blue); }

        /* Steps */
        .inst-steps { display: flex; flex-direction: column; gap: 0; max-width: 740px; }
        .inst-step {
          display: flex; gap: 20px; align-items: flex-start;
          padding: 24px 0; border-bottom: 1px solid var(--border);
        }
        .inst-step:last-child { border-bottom: none; }
        .inst-step-num {
          font-family: 'Courier New', monospace; font-size: 0.65rem; font-weight: 800;
          letter-spacing: 0.1em; color: var(--muted);
          background: var(--gray-bg); border: 1.5px solid var(--border);
          border-radius: 6px; padding: 5px 10px; flex-shrink: 0;
          margin-top: 2px;
        }
        .inst-step-body { flex: 1; }
        .inst-step-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); margin-bottom: 6px; }
        .inst-step-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.68; }
        .inst-step-img { margin-top: 14px; }

        /* Browser mockup */
        .inst-browser-mock {
          background: #1E293B; border-radius: 8px; padding: 10px 14px;
          max-width: 380px;
        }
        .inst-browser-bar {
          background: #0F172A; border-radius: 6px; padding: 7px 12px;
          display: flex; align-items: center; justify-content: space-between;
          font-size: 0.78rem; color: rgba(255,255,255,0.5);
        }
        .inst-browser-url { color: rgba(255,255,255,0.7); }
        .inst-install-icon {
          background: #2563EB; color: white;
          padding: 3px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: 700;
          cursor: pointer; letter-spacing: 0.02em;
        }

        /* Mobile mockup */
        .inst-mobile-mock {
          max-width: 220px; border: 2px solid var(--border);
          border-radius: 20px; overflow: hidden; background: #fff;
        }
        .inst-mobile-inner { display: flex; flex-direction: column; min-height: 340px; }
        .inst-mobile-topbar {
          background: #F8FAFC; border-bottom: 1px solid var(--border);
          padding: 10px 14px; font-size: 0.72rem; color: var(--muted); text-align: center;
        }
        .inst-mobile-content { flex: 1; background: var(--gray-bg); }
        .inst-mobile-banner {
          display: flex; align-items: center; gap: 10px; padding: 12px 14px;
          background: #fff; border-top: 1px solid var(--border);
          font-size: 0.75rem;
        }
        .inst-mobile-banner-title { font-weight: 700; color: var(--dark); }
        .inst-mobile-banner-sub { color: var(--muted); font-size: 0.68rem; }
        .inst-mobile-banner-btn {
          margin-left: auto; background: var(--blue); color: white;
          padding: 5px 12px; border-radius: 6px; font-size: 0.72rem; font-weight: 700;
          white-space: nowrap;
        }
        .inst-ios-toolbar {
          display: flex; justify-content: space-around; padding: 12px 8px;
          background: #F8FAFC; border-top: 1px solid var(--border);
          font-size: 1rem; color: var(--muted);
        }
        .inst-ios-share { color: var(--blue); }

        /* Open CTA */
        .inst-open-cta {
          margin-top: 40px; border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          background: var(--gray-bg); padding: 28px 32px;
        }
        .inst-open-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .inst-open-cta-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
        .inst-open-cta-sub { font-size: 0.9rem; color: var(--muted); }

        /* Footer strip */
        .inst-footer-strip {
          background: var(--dark); border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 0; font-size: 0.82rem; color: rgba(255,255,255,0.4);
        }
        .inst-footer-strip .container { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
        .inst-footer-strip a { color: rgba(255,255,255,0.55); text-decoration: none; }
        .inst-footer-strip a:hover { color: #fff; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .inst-hero-inner { grid-template-columns: 1fr; }
          .inst-app-card { max-width: 340px; }
          .inst-features-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .inst-hero { padding: 52px 0 48px; }
          .inst-features-grid { grid-template-columns: 1fr; }
          .inst-logo-sub { display: none; }
          .inst-open-cta { padding: 20px; }
          .inst-open-cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
