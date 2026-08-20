import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, ArrowRight, Download, CheckCircle2, ExternalLink, Wifi, Bell, Lock, Globe2, Users, Calendar, FileText, Clock } from 'lucide-react';

const APP_URL = 'https://app.egc-me.com';

/* ── Detect platform ── */
function detectPlatform() {
  const ua = navigator.userAgent;
  const isIOS = /iphone|ipad|ipod/i.test(ua);
  const isAndroid = /android/i.test(ua);
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
      desc: "The EGC App works best in Google Chrome on Desktop. Open Chrome and navigate to app.egc-me.com.",
    },
    {
      num: '02',
      title: 'Look for the install icon in the address bar',
      desc: "In the Chrome address bar on the far right, you'll see a small screen icon (⊞). Click it.",
      img: (
        <div className="inst-browser-mock">
          <div className="inst-browser-bar">
            <span className="inst-browser-url">app.egc-me.com</span>
            <span className="inst-install-icon" title="Install icon">⊞ Install</span>
          </div>
        </div>
      ),
    },
    {
      num: '03',
      title: 'Click "Install"',
      desc: 'A dialog will appear asking if you want to install "EGC App". Click the blue "Install" button to confirm.',
    },
    {
      num: '04',
      title: "Done — it's now on your desktop",
      desc: 'The EGC App will appear on your desktop and taskbar, opening as a standalone window with no browser chrome.',
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
      desc: 'Chrome will show a banner at the bottom: "Add EGC App to Home Screen". Tap it. If you miss it, tap the three-dot menu (⋮) in the top-right and choose "Add to Home Screen".',
      img: (
        <div className="inst-mobile-mock android">
          <div className="inst-mobile-inner">
            <div className="inst-mobile-topbar">app.egc-me.com</div>
            <div className="inst-mobile-content" />
            <div className="inst-mobile-banner">
              <span style={{ fontSize: '1.2rem' }}>🏗</span>
              <div>
                <div className="inst-mobile-banner-title">EGC App</div>
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
      desc: 'Confirm the dialog and the EGC App icon will appear on your home screen.',
    },
    {
      num: '04',
      title: 'Launch from your home screen',
      desc: 'Tap the EGC App icon to launch in full-screen mode — no browser bar, just the app.',
    },
  ],
  ios: [
    {
      num: '01',
      title: 'Open app.egc-me.com in Safari',
      desc: 'On iPhone or iPad, you must use Safari (not Chrome). Navigate to app.egc-me.com.',
    },
    {
      num: '02',
      title: 'Tap the Share button',
      desc: 'Tap the Share icon at the bottom of the screen — it looks like a box with an upward arrow.',
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
      desc: 'Scroll the share sheet and tap "Add to Home Screen". Give it a name if prompted, then tap "Add".',
    },
    {
      num: '04',
      title: 'Launch from your home screen',
      desc: 'The EGC App icon appears on your home screen. Tap to open in full-screen mode.',
    },
  ],
};

export default function Install() {
  const [platform, setPlatform] = useState('desktop');

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  const steps = INSTRUCTIONS[platform];

  const TAB_DEFS = [
    { id: 'desktop', label: 'Desktop',        icon: Monitor },
    { id: 'android', label: 'Android',         icon: Smartphone },
    { id: 'ios',     label: 'iPhone / iPad',   icon: Smartphone },
  ];

  return (
    <>
      {/* ══════════════════════════════════════
          NAV — dark, sticky
      ══════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════
          APP HERO — dark, replaces old hero + why section
      ══════════════════════════════════════ */}
      <section className="inst-app-hero">
        <div className="container">
          <div className="inst-app-hero-layout">

            {/* Left — copy */}
            <div className="inst-app-hero-left">
              <div className="inst-app-badge">
                <div className="inst-app-badge-icon">EGC</div>
                <div>
                  <div className="inst-app-badge-name">EGC App</div>
                  <div className="inst-app-badge-domain">app.egc-me.com</div>
                </div>
              </div>

              <h1 className="inst-app-headline">
                Your work, in your pocket.
              </h1>
              <p className="inst-app-sub">
                The <strong>EGC Employee Self-Service App</strong> is your one-stop centre
                for everything at Engineering Grouping Co. — from HR requests and payslips
                to project updates and company announcements, all in one place, on any device.
              </p>

              {/* Feature chips */}
              <div className="inst-chips">
                {[
                  { icon: Users,    label: 'HR Self-Service' },
                  { icon: FileText, label: 'Payslips & Documents' },
                  { icon: Calendar, label: 'Leave Requests' },
                  { icon: Clock,    label: 'Attendance' },
                  { icon: Bell,     label: 'Company Announcements' },
                  { icon: Globe2,   label: 'Works on Every Device' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="inst-chip">
                    <Icon size={13} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="inst-app-hero-btns">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  <Download size={16} /> Open & Install
                </a>
                <a href="#how-to-install" className="btn btn-outline-white btn-lg">
                  How to install <ArrowRight size={15} />
                </a>
              </div>
            </div>

            {/* Right — visual */}
            <div className="inst-app-hero-right">
              <div className="inst-phone-shell">
                <div className="inst-phone-notch" />
                <div className="inst-phone-screen">
                  {/* Fake app UI */}
                  <div className="inst-fake-header">
                    <span className="inst-fake-greeting">Good morning 👋</span>
                    <span className="inst-fake-name">EGC Employee</span>
                  </div>
                  <div className="inst-fake-cards">
                    {[
                      { label: 'Leave Balance',  val: '14 days', color: '#0EA5E9' },
                      { label: 'Next Payslip',   val: 'Sep 01',  color: '#10B981' },
                      { label: 'Open Requests',  val: '2',        color: '#F59E0B' },
                    ].map(c => (
                      <div key={c.label} className="inst-fake-card" style={{ '--fc': c.color }}>
                        <div className="inst-fake-card-label">{c.label}</div>
                        <div className="inst-fake-card-val">{c.val}</div>
                      </div>
                    ))}
                  </div>
                  <div className="inst-fake-section-label">Recent Announcements</div>
                  {['Ramadan working hours update', 'New HSE policy — please review'].map(a => (
                    <div key={a} className="inst-fake-row">{a}</div>
                  ))}
                </div>
              </div>
              {/* Decorative glow */}
              <div className="inst-glow" aria-hidden="true" />
            </div>

          </div>

          {/* Trust strip */}
          <div className="inst-trust-strip">
            {[
              { icon: CheckCircle2, label: 'No App Store required' },
              { icon: Wifi,        label: 'Works offline' },
              { icon: Lock,        label: 'Secure & always up-to-date' },
              { icon: Globe2,      label: 'Desktop · Android · iOS' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="inst-trust-item">
                <Icon size={14} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INSTALLATION GUIDE
      ══════════════════════════════════════ */}
      <section className="section" id="how-to-install">
        <div className="container">
          <div className="inst-how-header">
            <p className="overline">Installation Guide</p>
            <h2 className="headline-medium">Install it in under a minute.</h2>
            <p className="section-sub">
              We've detected you're on{' '}
              <strong style={{ color: 'var(--blue)' }}>
                {platform === 'ios' ? 'iOS (Safari)' : platform === 'android' ? 'Android (Chrome)' : 'Desktop (Chrome)'}
              </strong>.{' '}
              Follow the steps below, or switch platform.
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
                <Icon size={14} />
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
                  Visit <strong>app.egc-me.com</strong> in your browser — Chrome will prompt you to install automatically.
                </div>
              </div>
              <a href={APP_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-lg">
                Open app.egc-me.com <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER STRIP
      ══════════════════════════════════════ */}
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
          background: var(--dark);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 12px 0;
          position: sticky; top: 0; z-index: 100;
        }
        .inst-mini-nav .container { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .inst-nav-logo { display: flex; align-items: center; gap: 10px; text-decoration: none; }
        .inst-logo-egc { color: #fff; font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; letter-spacing: 0.04em; line-height: 1; }
        .inst-logo-sub { font-family: var(--font-body); font-size: 0.48rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.5); line-height: 1; }

        /* ══ APP HERO ══ */
        .inst-app-hero {
          background: linear-gradient(160deg, #060A12 0%, #0D1526 60%, #0A1020 100%);
          padding: 80px 0 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .inst-app-hero-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 64px;
          align-items: center;
        }

        /* Badge */
        .inst-app-badge {
          display: inline-flex; align-items: center; gap: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 10px 16px;
          margin-bottom: 28px;
        }
        .inst-app-badge-icon {
          width: 38px; height: 38px; border-radius: 9px;
          background: linear-gradient(135deg, #1D4ED8 0%, #0EA5E9 100%);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-size: 0.7rem;
          font-weight: 900; color: #fff; letter-spacing: 0.04em;
          flex-shrink: 0;
        }
        .inst-app-badge-name {
          font-family: var(--font-display); font-size: 0.9rem;
          font-weight: 700; color: #fff;
        }
        .inst-app-badge-domain { font-size: 0.72rem; color: rgba(255,255,255,0.4); }

        /* Headline */
        .inst-app-headline {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.4rem);
          font-weight: 900; line-height: 1.06;
          color: #fff; letter-spacing: -0.025em;
          margin: 0 0 18px;
        }
        .inst-app-sub {
          font-size: 1.02rem; color: rgba(255,255,255,0.6);
          line-height: 1.74; max-width: 520px; margin-bottom: 28px;
        }
        .inst-app-sub strong { color: rgba(255,255,255,0.88); font-weight: 600; }

        /* Feature chips */
        .inst-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 32px; }
        .inst-chip {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 13px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          font-size: 0.78rem; font-weight: 500;
          color: rgba(255,255,255,0.65);
        }
        .inst-chip svg { color: #93C5FD; flex-shrink: 0; }

        /* Buttons */
        .inst-app-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }

        /* ── Phone shell ── */
        .inst-app-hero-right { position: relative; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 0; }
        .inst-phone-shell {
          width: 240px;
          background: #0F172A;
          border: 2px solid rgba(255,255,255,0.12);
          border-bottom: none;
          border-radius: 28px 28px 0 0;
          overflow: hidden;
          box-shadow: 0 -20px 60px rgba(14,165,233,0.12), 0 0 0 1px rgba(255,255,255,0.04);
          position: relative; z-index: 2;
        }
        .inst-phone-notch {
          width: 80px; height: 22px;
          background: #060A12;
          border-radius: 0 0 14px 14px;
          margin: 0 auto;
        }
        .inst-phone-screen { padding: 12px 14px 24px; }
        .inst-fake-header { margin-bottom: 14px; }
        .inst-fake-greeting { display: block; font-size: 0.68rem; color: rgba(255,255,255,0.4); margin-bottom: 2px; }
        .inst-fake-name { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: #fff; }
        .inst-fake-cards { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
        .inst-fake-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-left: 3px solid var(--fc);
          border-radius: 8px;
          padding: 9px 11px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .inst-fake-card-label { font-size: 0.62rem; color: rgba(255,255,255,0.45); }
        .inst-fake-card-val { font-family: var(--font-display); font-size: 0.85rem; font-weight: 700; color: #fff; }
        .inst-fake-section-label {
          font-size: 0.6rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: rgba(255,255,255,0.3);
          margin-bottom: 8px;
        }
        .inst-fake-row {
          font-size: 0.68rem; color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.04);
          border-radius: 6px; padding: 8px 10px;
          margin-bottom: 5px; line-height: 1.4;
        }

        /* Glow */
        .inst-glow {
          position: absolute; bottom: -40px; left: 50%; transform: translateX(-50%);
          width: 280px; height: 200px;
          background: radial-gradient(ellipse at center, rgba(14,165,233,0.18) 0%, transparent 70%);
          z-index: 1; pointer-events: none;
        }

        /* Trust strip */
        .inst-trust-strip {
          display: flex; align-items: center; justify-content: center;
          flex-wrap: wrap; gap: 28px;
          padding: 28px 0;
          border-top: 1px solid rgba(255,255,255,0.07);
          margin-top: 56px;
        }
        .inst-trust-item {
          display: flex; align-items: center; gap: 7px;
          font-size: 0.8rem; color: rgba(255,255,255,0.4); font-weight: 500;
        }
        .inst-trust-item svg { color: #10B981; flex-shrink: 0; }

        /* ══ INSTALL GUIDE ══ */
        .inst-how-header { margin-bottom: 28px; }
        .inst-how-header strong { font-weight: 700; }

        /* Tabs */
        .inst-tabs {
          display: flex; gap: 0; flex-wrap: wrap;
          border-bottom: 1px solid var(--border);
          margin-bottom: 36px;
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
        .inst-steps { display: flex; flex-direction: column; gap: 0; max-width: 720px; }
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
          padding: 3px 10px; border-radius: 4px;
          font-size: 0.7rem; font-weight: 700; letter-spacing: 0.02em;
        }

        /* Mobile mockups */
        .inst-mobile-mock {
          max-width: 200px; border: 2px solid var(--border);
          border-radius: 20px; overflow: hidden; background: #fff;
        }
        .inst-mobile-inner { display: flex; flex-direction: column; min-height: 300px; }
        .inst-mobile-topbar {
          background: #F8FAFC; border-bottom: 1px solid var(--border);
          padding: 8px 14px; font-size: 0.7rem; color: var(--muted); text-align: center;
        }
        .inst-mobile-content { flex: 1; background: var(--gray-bg); }
        .inst-mobile-banner {
          display: flex; align-items: center; gap: 10px; padding: 10px 12px;
          background: #fff; border-top: 1px solid var(--border); font-size: 0.72rem;
        }
        .inst-mobile-banner-title { font-weight: 700; color: var(--dark); }
        .inst-mobile-banner-sub { color: var(--muted); font-size: 0.64rem; }
        .inst-mobile-banner-btn {
          margin-left: auto; background: var(--blue); color: #fff;
          padding: 4px 10px; border-radius: 5px; font-size: 0.68rem; font-weight: 700; white-space: nowrap;
        }
        .inst-ios-toolbar {
          display: flex; justify-content: space-around; padding: 10px 8px;
          background: #F8FAFC; border-top: 1px solid var(--border); font-size: 1rem; color: var(--muted);
        }
        .inst-ios-share { color: var(--blue); }

        /* CTA */
        .inst-open-cta {
          margin-top: 40px;
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          background: var(--gray-bg); padding: 28px 32px;
        }
        .inst-open-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
        .inst-open-cta-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
        .inst-open-cta-sub { font-size: 0.88rem; color: var(--muted); }

        /* Footer strip */
        .inst-footer-strip {
          background: var(--dark); border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 0; font-size: 0.82rem; color: rgba(255,255,255,0.4);
        }
        .inst-footer-strip .container { display: flex; align-items: center; gap: 4px; flex-wrap: wrap; }
        .inst-footer-strip a { color: rgba(255,255,255,0.55); text-decoration: none; }
        .inst-footer-strip a:hover { color: #fff; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .inst-app-hero-layout { grid-template-columns: 1fr; }
          .inst-app-hero-right { display: none; }
          .inst-app-hero { padding: 52px 0 0; }
        }
        @media (max-width: 600px) {
          .inst-trust-strip { gap: 18px; justify-content: flex-start; }
          .inst-logo-sub { display: none; }
          .inst-open-cta { padding: 20px; }
          .inst-open-cta-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
