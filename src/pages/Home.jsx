import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { STATS, SERVICES, PROJECTS, SITE } from '../data';

/* ── Scroll-down indicator ── */
function ScrollIndicator() {
  return (
    <div className="h-scroll-ind" aria-hidden="true">
      <div className="h-scroll-line" />
      <ArrowDown size={14} />
    </div>
  );
}

/* ── Service quick-card for hero strip ── */
function ServicePill({ svc, index }) {
  return (
    <FadeIn delay={index + 1}>
      <Link to="/what-we-build" className="h-svc-pill">
        <span className="h-svc-pill-num">{svc.num}</span>
        <span className="h-svc-pill-label">{svc.shortLabel}</span>
        <ChevronRight size={13} className="h-svc-pill-arrow" />
      </Link>
    </FadeIn>
  );
}

export default function Home() {
  /* Track scroll position for hero parallax */
  const heroRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ════════════════════════════════════════
          HERO — full viewport height
      ════════════════════════════════════════ */}
      <section className="h-hero" ref={heroRef}>
        {/* Background image */}
        <div
          className="h-hero-bg"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        {/* Overlay gradient */}
        <div className="h-hero-overlay" />

        <div className="container h-hero-content">
          <FadeIn className="h-hero-inner">
            <p className="h-hero-label">
              <span className="h-hero-dot" />
              Jeddah · Kingdom of Saudi Arabia
            </p>
            <h1 className="h-hero-headline">
              We build the inside<br />
              <span className="h-hero-headline-accent">of your building.</span>
            </h1>
            <p className="h-hero-sub">
              Specialist interior contractor for healthcare environments,
              architectural joinery, surface works, and metalwork —
              across the Kingdom of Saudi Arabia.
            </p>
            <div className="h-hero-btns">
              <Link to="/what-we-build" className="btn btn-white btn-lg">
                What We Build <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Get In Touch
              </Link>
            </div>
            <div className="h-hero-trust">
              {['ISO 9001 Certified', '18+ Years in Saudi Arabia', '150+ Projects Delivered'].map(t => (
                <span key={t} className="h-hero-trust-item">
                  <CheckCircle2 size={13} /> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>

        <ScrollIndicator />
      </section>

      {/* ════════════════════════════════════════
          SERVICES STRIP
      ════════════════════════════════════════ */}
      <div className="h-svc-strip">
        <div className="container">
          <div className="h-svc-strip-inner">
            <span className="h-svc-strip-label">What We Build</span>
            <div className="h-svc-pills">
              {SERVICES.map((svc, i) => (
                <ServicePill key={svc.id} svc={svc} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          HEALTHCARE SPOTLIGHT
          (most distinctive capability first)
      ════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <div className="h-spotlight-grid">
            <FadeIn className="h-spotlight-left">
              <p className="overline">Our Core Expertise</p>
              <h2 className="headline-medium" style={{ marginBottom: 18 }}>
                Hospital environments<br />
                demand a different standard.
              </h2>
              <p className="body-text">
                EGC's most specialist work is inside hospitals — constructing the rooms where
                radiation is present and tolerances are non-negotiable. We build MRI suites, CT rooms,
                x-ray departments, and nuclear medicine facilities from structural shielding
                layer to final surface finish.
              </p>
              <p className="body-text" style={{ color: 'var(--muted)' }}>
                Our teams work alongside radiation physicists and hospital project managers
                to deliver rooms that pass attenuation compliance testing first time —
                on the programme dates that matter to clinical operations.
              </p>
              <div className="h-spotlight-checklist">
                {['MRI & CT suite construction', 'Lead-lined and radiation-shielded doors', 'X-ray and nuclear medicine rooms', 'Medical-grade joinery and surfaces'].map(c => (
                  <div key={c} className="h-spotlight-check">
                    <CheckCircle2 size={15} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <Link to="/what-we-build" className="btn btn-primary" style={{ marginTop: 28 }}>
                Healthcare Services <ArrowRight size={14} />
              </Link>
            </FadeIn>
            <FadeIn delay={2} className="h-spotlight-right">
              <div className="h-spotlight-img-wrap">
                <img
                  src="/images/healthcare-xray.jpg"
                  alt="Completed x-ray room with radiation shielding and specialist door"
                  className="h-spotlight-img"
                />
                <div className="h-spotlight-img-badge">
                  <span className="h-badge-num">01</span>
                  <span className="h-badge-lbl">Healthcare &amp; Medical Environments</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          ALL SERVICES — 4 CARDS
      ════════════════════════════════════════ */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="h-section-head">
            <p className="label">Full Scope of Work</p>
            <h2 className="headline-medium">Four service lines. One contractor.</h2>
            <p className="section-sub">
              Healthcare environments are our speciality, but EGC also delivers architectural
              joinery, surface works, and steel fabrication — all under one quality programme.
            </p>
          </FadeIn>

          <div className="h-services-grid">
            {SERVICES.map((svc, i) => (
              <FadeIn delay={(i % 4) + 1} key={svc.id}>
                <div className="h-svc-card">
                  <div className="h-svc-card-num">{svc.num}</div>
                  {svc.thumb && (
                    <div className="h-svc-card-img-wrap">
                      <img src={svc.thumb} alt={svc.label} className="h-svc-card-img" />
                    </div>
                  )}
                  {!svc.thumb && (
                    <div className="h-svc-card-img-placeholder" />
                  )}
                  <div className="h-svc-card-body">
                    <h3 className="h-svc-card-title">{svc.label}</h3>
                    <p className="h-svc-card-tag">{svc.tag}</p>
                    <p className="h-svc-card-desc">{svc.summary}</p>
                  </div>
                  <Link to="/what-we-build" className="h-svc-card-link">
                    Learn more <ChevronRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          WORK GALLERY TEASER
      ════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <FadeIn className="h-row-head">
            <div>
              <p className="label">Our Work</p>
              <h2 className="headline-medium" style={{ marginBottom: 0 }}>Built across the Kingdom.</h2>
            </div>
            <Link to="/what-we-build" className="btn btn-secondary btn-sm">
              See all work <ArrowRight size={13} />
            </Link>
          </FadeIn>

          <div className="h-gallery-grid">
            <div className="h-gallery-main">
              <img src="/images/hero-bg.jpg" alt="MRI suite installation in progress" className="h-gallery-img" />
              <div className="h-gallery-caption">
                <span className="h-gallery-service">Healthcare</span>
                <span>MRI suite installation — Jeddah hospital project</span>
              </div>
            </div>
            <div className="h-gallery-side">
              <div className="h-gallery-item">
                <img src="/images/joinery-doors.jpg" alt="Architectural walnut doors" className="h-gallery-img" />
                <div className="h-gallery-caption">
                  <span className="h-gallery-service">Joinery</span>
                  <span>Architectural door installation</span>
                </div>
              </div>
              <div className="h-gallery-item">
                <img src="/images/corian-surfaces.jpg" alt="Corian nurse station countertop" className="h-gallery-img" />
                <div className="h-gallery-caption">
                  <span className="h-gallery-service">Surfaces</span>
                  <span>Corian nurse station — hospital project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          STATS BAR
      ════════════════════════════════════════ */}
      <div className="h-stats-bar">
        <div className="container">
          <div className="h-stats-grid">
            {STATS.map((s, i) => (
              <div key={s.l} className="h-stat" style={{ '--delay': `${i * 0.08}s` }}>
                <div className="h-stat-num">{s.n}</div>
                <div className="h-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          ABOUT SNIPPET
      ════════════════════════════════════════ */}
      <section className="section section-gray">
        <div className="container">
          <div className="h-about-grid">
            <FadeIn>
              <p className="label">About EGC</p>
              <h2 className="headline-medium">Built in Jeddah. Working across the Kingdom.</h2>
              <p className="body-text">
                Engineering Grouping Co. (EGC) is a Jeddah-based specialist interior contractor.
                We design, fabricate, and install healthcare environments, architectural joinery,
                Corian surface works, and steel fabrication — with our own crews, our own workshops,
                and our own quality programme.
              </p>
              <p className="body-text" style={{ color: 'var(--muted)' }}>
                We don't subcontract the core of what we do. Every MRI room, every reception counter,
                every Corian countertop is built by our people — from first drawing to final handover.
              </p>
              <Link to="/about" className="btn btn-secondary">
                About EGC <ArrowRight size={14} />
              </Link>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="h-about-features">
                {[
                  { icon: '🏥', title: 'Healthcare Specialist', desc: 'Hospital interiors where compliance is non-negotiable.' },
                  { icon: '🪵', title: 'In-House Joinery', desc: 'Our own timber workshop, our own craftsmen.' },
                  { icon: '🔧', title: 'Single Contractor', desc: 'One quality standard across every discipline.' },
                ].map(f => (
                  <div key={f.title} className="h-about-feat">
                    <span className="h-about-feat-icon">{f.icon}</span>
                    <div>
                      <div className="h-about-feat-title">{f.title}</div>
                      <div className="h-about-feat-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA
      ════════════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <FadeIn className="h-cta-banner">
            <p className="label">Start a Conversation</p>
            <h2 className="headline-medium" style={{ marginBottom: 10 }}>
              Ready to discuss your project?
            </h2>
            <p className="section-sub" style={{ margin: '0 auto 28px', textAlign: 'center' }}>
              Whether it's a hospital radiology department, a full interior fit-out, or a
              specialist fabrication scope — our team is ready to respond.
            </p>
            <div className="h-cta-btns">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn btn-secondary btn-lg">{SITE.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* ── HERO ── */
        .h-hero {
          position: relative; height: 100vh; min-height: 620px;
          display: flex; align-items: center;
          overflow: hidden;
        }
        .h-hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center 30%;
          background-repeat: no-repeat;
          transform: scale(1.04);
          transition: transform 12s ease;
        }
        .h-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            135deg,
            rgba(10,14,20,0.78) 0%,
            rgba(10,14,20,0.55) 60%,
            rgba(10,14,20,0.45) 100%
          );
        }
        .h-hero-content {
          position: relative; z-index: 2;
          padding-top: 80px; /* offset for nav */
        }
        .h-hero-inner {
          max-width: 760px;
        }
        .h-hero-label {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.6);
          margin-bottom: 24px;
        }
        .h-hero-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #10B981; flex-shrink: 0;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.25);
        }
        .h-hero-headline {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 6vw, 4.8rem);
          font-weight: 900; line-height: 1.03;
          color: #fff; letter-spacing: -0.03em;
          margin: 0 0 22px;
        }
        .h-hero-headline-accent { color: #93C5FD; }
        .h-hero-sub {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(255,255,255,0.72); line-height: 1.72;
          max-width: 600px; margin-bottom: 32px;
        }
        .h-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .h-hero-trust {
          display: flex; gap: 20px; flex-wrap: wrap;
          margin-top: 28px;
        }
        .h-hero-trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.8rem; color: rgba(255,255,255,0.55); font-weight: 500;
        }
        .h-hero-trust-item svg { color: #10B981; }

        /* ── Scroll indicator ── */
        .h-scroll-ind {
          position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          color: rgba(255,255,255,0.35); z-index: 2;
          animation: scrollBob 2s ease-in-out infinite;
        }
        .h-scroll-line { width: 1px; height: 40px; background: rgba(255,255,255,0.25); }
        @keyframes scrollBob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }

        /* ── Service strip ── */
        .h-svc-strip { background: var(--dark); border-bottom: 1px solid rgba(255,255,255,0.08); }
        .h-svc-strip-inner {
          display: flex; align-items: center; gap: 20px;
          padding: 16px 0; flex-wrap: wrap;
        }
        .h-svc-strip-label {
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(255,255,255,0.35);
          white-space: nowrap; flex-shrink: 0;
        }
        .h-svc-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .h-svc-pill {
          display: flex; align-items: center; gap: 7px;
          padding: 7px 14px; border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          font-size: 0.8rem; font-weight: 500;
          color: rgba(255,255,255,0.7); text-decoration: none;
          transition: all 0.18s ease; cursor: pointer;
        }
        .h-svc-pill:hover { border-color: rgba(147,197,253,0.5); color: #93C5FD; background: rgba(147,197,253,0.06); }
        .h-svc-pill-num { font-family: 'Courier New', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.3); }
        .h-svc-pill-arrow { opacity: 0; transform: translateX(-4px); transition: all 0.18s ease; }
        .h-svc-pill:hover .h-svc-pill-arrow { opacity: 1; transform: translateX(0); }

        /* ── Healthcare spotlight ── */
        .h-spotlight-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center;
        }
        .h-spotlight-checklist { display: flex; flex-direction: column; gap: 10px; margin-top: 22px; }
        .h-spotlight-check {
          display: flex; align-items: center; gap: 10px;
          font-size: 0.9rem; color: var(--body); font-weight: 500;
        }
        .h-spotlight-check svg { color: var(--blue); flex-shrink: 0; }
        .h-spotlight-img-wrap { position: relative; }
        .h-spotlight-img {
          width: 100%; border-radius: var(--radius-lg);
          aspect-ratio: 4/3; object-fit: cover;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .h-spotlight-img-badge {
          position: absolute; bottom: -18px; left: 20px;
          background: var(--dark); border-radius: var(--radius-lg);
          padding: 14px 18px; display: flex; align-items: center; gap: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        .h-badge-num {
          font-family: 'Courier New', monospace; font-size: 1.1rem;
          font-weight: 800; color: #93C5FD;
        }
        .h-badge-lbl {
          font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.7);
          max-width: 180px; line-height: 1.35;
        }

        /* ── Services grid ── */
        .h-section-head { margin-bottom: 48px; }
        .h-section-head .section-sub { max-width: 580px; }
        .h-services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .h-svc-card {
          background: #fff; border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
          display: flex; flex-direction: column;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .h-svc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.08); border-color: var(--blue-mid); }
        .h-svc-card-num {
          font-family: 'Courier New', monospace; font-size: 0.65rem;
          font-weight: 800; color: var(--muted); padding: 14px 16px 0;
          letter-spacing: 0.08em;
        }
        .h-svc-card-img-wrap { height: 140px; overflow: hidden; }
        .h-svc-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .h-svc-card:hover .h-svc-card-img { transform: scale(1.04); }
        .h-svc-card-img-placeholder { height: 140px; background: var(--gray-bg); }
        .h-svc-card-body { padding: 16px; flex: 1; }
        .h-svc-card-title { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: var(--dark); margin-bottom: 6px; line-height: 1.3; }
        .h-svc-card-tag { font-size: 0.65rem; font-weight: 600; color: var(--blue); letter-spacing: 0.04em; margin-bottom: 8px; }
        .h-svc-card-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; margin: 0; }
        .h-svc-card-link {
          display: flex; align-items: center; gap: 4px;
          padding: 12px 16px; font-size: 0.82rem; font-weight: 600;
          color: var(--blue); text-decoration: none;
          border-top: 1px solid var(--border);
          transition: gap 0.15s ease, background 0.15s ease;
        }
        .h-svc-card-link:hover { gap: 8px; background: var(--blue-light); }

        /* ── Gallery ── */
        .h-row-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; flex-wrap: wrap; margin-bottom: 28px; }
        .h-gallery-grid { display: grid; grid-template-columns: 3fr 2fr; gap: 12px; }
        .h-gallery-main, .h-gallery-side { display: flex; flex-direction: column; gap: 12px; }
        .h-gallery-item { flex: 1; position: relative; overflow: hidden; border-radius: var(--radius-lg); }
        .h-gallery-main { position: relative; overflow: hidden; border-radius: var(--radius-lg); }
        .h-gallery-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; aspect-ratio: auto; min-height: 220px; }
        .h-gallery-main .h-gallery-img { aspect-ratio: 16/10; min-height: unset; }
        .h-gallery-item .h-gallery-img { aspect-ratio: 4/3; min-height: unset; }
        .h-gallery-main:hover .h-gallery-img,
        .h-gallery-item:hover .h-gallery-img { transform: scale(1.03); }
        .h-gallery-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%);
          padding: 20px 14px 12px;
          display: flex; flex-direction: column; gap: 2px;
        }
        .h-gallery-service {
          font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em;
          text-transform: uppercase; color: #93C5FD;
        }
        .h-gallery-caption > span:last-child { font-size: 0.78rem; color: rgba(255,255,255,0.85); font-weight: 500; }

        /* ── Stats ── */
        .h-stats-bar { background: var(--blue); }
        .h-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .h-stat { padding: 40px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.15); }
        .h-stat:last-child { border-right: none; }
        .h-stat-num { font-family: var(--font-display); font-size: 2.8rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 6px; }
        .h-stat-lbl { font-size: 0.78rem; font-weight: 500; color: rgba(255,255,255,0.68); letter-spacing: 0.04em; }

        /* ── About snippet ── */
        .h-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .h-about-features { display: flex; flex-direction: column; gap: 0; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; margin-top: 8px; }
        .h-about-feat {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 20px 22px; border-bottom: 1px solid var(--border);
          transition: background 0.18s ease;
        }
        .h-about-feat:last-child { border-bottom: none; }
        .h-about-feat:hover { background: var(--gray-bg); }
        .h-about-feat-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 2px; }
        .h-about-feat-title { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--dark); margin-bottom: 3px; }
        .h-about-feat-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }

        /* ── CTA ── */
        .h-cta-banner { background: var(--gray-bg); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 60px 48px; text-align: center; }
        .h-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .h-services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 900px) {
          .h-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .h-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .h-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
          .h-stat:nth-last-child(-n+2) { border-bottom: none; }
          .h-gallery-grid { grid-template-columns: 1fr; }
          .h-gallery-side { flex-direction: row; }
        }
        @media (max-width: 800px) {
          .h-spotlight-grid { grid-template-columns: 1fr; gap: 40px; }
          .h-spotlight-img-badge { bottom: -14px; }
          .h-about-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 768px) {
          .h-hero { min-height: 100svh; }
          .h-hero-headline { font-size: clamp(2rem, 8vw, 3.5rem); }
          .h-hero-trust { gap: 14px; }
          .h-cta-banner { padding: 40px 24px; }
        }
        @media (max-width: 640px) {
          .h-services-grid { grid-template-columns: 1fr; }
          .h-gallery-side { flex-direction: column; }
          .h-hero-btns { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
