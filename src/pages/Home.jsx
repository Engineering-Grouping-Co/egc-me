import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { STATS, DIVISIONS, PROJECTS } from '../data';

const TRUST = [
  { label: 'ISO 9001 Certified' },
  { label: '18+ Years in KSA' },
  { label: '3 Active Divisions' },
];

const DIV_ICONS = {
  steel: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M6 6H34V14H22V26H34V34H6V26H18V14H6Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  wood: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="15" width="32" height="10" rx="1" stroke="#2563EB" strokeWidth="2"/>
      <path d="M8 20c2-1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0 4-1 5 .5" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="4" y="27" width="32" height="9" rx="1" stroke="#2563EB" strokeWidth="2"/>
    </svg>
  ),
  leadsheet: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="9"  width="32" height="6" rx="1" stroke="#2563EB" strokeWidth="2"/>
      <rect x="4" y="17" width="32" height="6" rx="1" stroke="#2563EB" strokeWidth="2"/>
      <rect x="4" y="25" width="32" height="6" rx="1" stroke="#2563EB" strokeWidth="2"/>
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="home-hero">
        <div className="container">
          <FadeIn className="hero-inner">
            <p className="overline">Since [YEAR] · Riyadh, Kingdom of Saudi Arabia</p>
            <h1 className="headline-xl hero-h1">
              Steel, Wood &amp; Lead Sheet —<br />
              Designed, Fabricated, Delivered.
            </h1>
            <p className="body-lg hero-sub">
              EGC designs, fabricates, and installs structural steel, architectural joinery,
              and lead sheet works for government and private sector projects across the
              Kingdom — from first drawing to final handover.
            </p>
            <div className="btn-group">
              <Link to="/divisions" className="btn btn-primary btn-lg">Explore Divisions <ArrowRight size={17} /></Link>
              <Link to="/about"     className="btn btn-secondary btn-lg">About EGC</Link>
            </div>
            <div className="trust-row">
              {TRUST.map((t) => (
                <span className="trust-item" key={t.label}>
                  <CheckCircle2 size={14} className="trust-icon" /> {t.label}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-bar-inner">
            {STATS.map((s) => (
              <div className="stat-item" key={s.l}>
                <div className="stat-num">{s.n}</div>
                <div className="stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <FadeIn>
              <p className="overline">About EGC</p>
              <h2 className="headline-lg" style={{ marginBottom: 18 }}>
                Built for the Kingdom's most demanding projects.
              </h2>
              <p className="body-lg" style={{ marginBottom: 14 }}>
                Engineering Grouping Co. (EGC) is a Riyadh-based specialty contracting
                and manufacturing company. We run our own fabrication shops for steel,
                timber, and lead sheet — every project moves from design to site under
                one roof, one schedule, and one quality standard.
              </p>
              <p className="body-md" style={{ marginBottom: 28, color: 'var(--muted)' }}>
                From government infrastructure and industrial facilities to hospitality
                fit-outs and giga-project packages, EGC is the contractor that builds
                what others only draw.
              </p>
              <Link to="/about" className="btn btn-secondary">About our story <ArrowRight size={15} /></Link>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="photo-placeholder aspect-16-10">Company / site photo</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── DIVISIONS PREVIEW ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">Our Expertise</p>
            <h2 className="headline-lg">Three materials. One standard.</h2>
            <p className="section-sub">
              EGC runs its own fabrication shops — every project moves from design
              to site under one roof, one schedule, and one quality standard.
            </p>
          </FadeIn>
          <div className="grid-3">
            {DIVISIONS.map((d, i) => (
              <FadeIn delay={i + 1} key={d.id}>
                <div className={`card card-accent div-card`}>
                  <div className="div-card-top">
                    <span className="div-num">Division {d.num}</span>
                    {d.badge && <span className="div-badge">{d.badge}</span>}
                  </div>
                  <div className="div-icon">{DIV_ICONS[d.id]}</div>
                  <h3 className="headline-md" style={{ margin: '12px 0 6px' }}>{d.label}</h3>
                  <p className="div-tag">{d.tag}</p>
                  <p className="body-sm" style={{ margin: '10px 0 18px' }}>{d.summary}</p>
                  <Link to="/divisions" className="btn btn-secondary btn-sm">
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="div-cta-row">
            <Link to="/divisions" className="btn btn-primary">View all divisions</Link>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <p className="overline">Selected Projects</p>
              <h2 className="headline-lg" style={{ marginBottom: 0 }}>Where we build.</h2>
            </div>
            <Link to="/projects" className="btn btn-secondary btn-sm">
              All projects <ArrowRight size={13} />
            </Link>
          </FadeIn>
          <div className="grid-3">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <FadeIn delay={i + 1} key={p.id}>
                <div className="proj-card">
                  <div className="proj-card-top">
                    <span className="proj-city">{p.city}</span>
                    <span className={`status-pill status-${p.status.toLowerCase()}`}>{p.status}</span>
                  </div>
                  <h3 className="proj-name">{p.name}</h3>
                  <div className="proj-meta">
                    <span>{p.sector}</span><span className="sep">·</span>
                    <span>{DIVISIONS.find(d => d.id === p.division)?.label}</span><span className="sep">·</span>
                    <span>{p.year}</span>
                  </div>
                  <p className="body-sm">{p.blurb}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS BANNER ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="careers-banner">
            <div className="careers-banner-text">
              <p className="overline">Work With Us</p>
              <h2 className="headline-md">We're building our team.</h2>
              <p className="body-md" style={{ maxWidth: 520, marginBottom: 0 }}>
                EGC is growing across all three divisions. We're looking for fabricators,
                site supervisors, engineers, and support professionals to join our team
                in Riyadh and on sites across the Kingdom.
              </p>
            </div>
            <Link to="/careers" className="btn btn-primary">
              View open positions <ArrowRight size={15} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">Get In Touch</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Ready to start your project?</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Consult with our team for solutions tailored to your scope, timeline, and budget.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <a href="tel:+966110000000" className="btn btn-secondary btn-lg">+966 11 000 0000</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* Hero */
        .home-hero {
          padding: 116px 0 88px;
          background: linear-gradient(175deg, #EFF6FF 0%, #ffffff 60%);
          border-bottom: 1px solid var(--blue-mid);
          text-align: center;
        }
        .hero-inner { display: flex; flex-direction: column; align-items: center; }
        .hero-h1 { max-width: 820px; margin: 0 auto 20px; }
        .hero-sub { max-width: 620px; margin: 0 auto; color: var(--muted); }
        .hero-inner .btn-group { justify-content: center; }
        .trust-row {
          display: flex; align-items: center; gap: 24px;
          margin-top: 32px; flex-wrap: wrap; justify-content: center;
        }
        .trust-item {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 600; color: var(--muted);
        }
        .trust-icon { color: var(--blue); flex-shrink: 0; }

        /* Division cards */
        .div-card { display: flex; flex-direction: column; }
        .div-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .div-num { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; color: var(--muted); text-transform: uppercase; }
        .div-badge { font-size: 0.62rem; font-weight: 800; background: var(--blue); color: #fff; padding: 3px 8px; border-radius: 4px; letter-spacing: 0.06em; }
        .div-icon { margin-bottom: 4px; }
        .div-tag { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.06em; color: var(--blue); text-transform: uppercase; }
        .div-cta-row { margin-top: 36px; display: flex; justify-content: center; }

        /* Project cards */
        .proj-card {
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          padding: 22px; background: var(--white);
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .proj-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(37,99,235,0.09); border-color: var(--blue-mid); }
        .proj-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .proj-city { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--blue); }
        .proj-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--dark); margin-bottom: 8px; line-height: 1.3; }
        .proj-meta { display: flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--muted); margin-bottom: 10px; flex-wrap: wrap; }
        .proj-meta .sep { opacity: 0.4; }

        /* Careers banner */
        .careers-banner {
          background: var(--white); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); padding: 40px 48px;
          display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
        }
        .careers-banner-text { display: flex; flex-direction: column; gap: 8px; }

        @media (max-width: 860px) {
          .home-hero { padding: 80px 0 64px; }
          .hero-h1 { font-size: clamp(2rem, 6vw, 3.2rem); }
          .careers-banner { padding: 32px 28px; flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .home-hero { padding: 64px 0 52px; }
          .trust-row { gap: 16px; }
        }
      `}</style>
    </>
  );
}
