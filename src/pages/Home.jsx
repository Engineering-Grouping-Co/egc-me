import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { STATS, DIVISIONS, PROJECTS } from '../data';

const TRUST = [
  'ISO 9001 Certified',
  '18+ Years in KSA',
  '3 Active Divisions',
];

const DIV_ICONS = {
  steel: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M6 6H34V14H22V26H34V34H6V26H18V14H6V6Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  wood: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="16" width="32" height="9" rx="1" stroke="#2563EB" strokeWidth="2"/>
      <path d="M8 20c2-1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0 4-1 5 .5" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round"/>
      <rect x="4" y="27" width="32" height="9" rx="1" stroke="#2563EB" strokeWidth="2"/>
    </svg>
  ),
  leadsheet: (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="4" y="24" width="32" height="5" rx="1" stroke="#2563EB" strokeWidth="2"/>
      <rect x="4" y="17" width="32" height="5" rx="1" stroke="#2563EB" strokeWidth="2"/>
      <rect x="4" y="10" width="32" height="5" rx="1" stroke="#2563EB" strokeWidth="2"/>
    </svg>
  ),
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="h-hero">
        <div className="container">
          <FadeIn className="h-hero-inner">
            <p className="h-label">Since [YEAR] · Riyadh, Kingdom of Saudi Arabia</p>
            <h1 className="h-headline">
              Steel, Wood &amp; Lead Sheet —<br />
              Designed, Fabricated, Delivered.
            </h1>
            <p className="h-sub">
              EGC designs, fabricates, and installs structural steel, timber joinery,
              and lead sheet works for government and private sector projects across
              the Kingdom — from first drawing to final handover.
            </p>
            <div className="h-btn-group">
              <Link to="/divisions" className="btn btn-primary btn-lg">Explore Divisions <ArrowRight size={16}/></Link>
              <Link to="/about"     className="btn btn-secondary btn-lg">About EGC</Link>
            </div>
            <div className="h-trust">
              {TRUST.map(t => (
                <span key={t} className="h-trust-item">
                  <CheckCircle2 size={13}/> {t}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS */}
      <section className="h-stats">
        <div className="container">
          <div className="h-stats-grid">
            {STATS.map(s => (
              <div className="h-stat" key={s.l}>
                <div className="h-stat-num">{s.n}</div>
                <div className="h-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section">
        <div className="container">
          <div className="h-feature-grid">
            <FadeIn>
              <p className="label">About EGC</p>
              <h2 className="headline-medium">Built for the Kingdom's most demanding projects.</h2>
              <p className="body-text">
                Engineering Grouping Co. (EGC) is a Riyadh-based specialty contracting
                and manufacturing company. We run our own fabrication shops for steel,
                timber, and lead sheet — every project moves from design to site under
                one roof, one schedule, and one quality standard.
              </p>
              <p className="body-text">
                From government infrastructure and industrial facilities to hospitality
                fit-outs and giga-project packages, EGC is the contractor that builds
                what others only draw.
              </p>
              <Link to="/about" className="btn btn-secondary">Our story <ArrowRight size={14}/></Link>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="h-photo-placeholder">Company / site photo</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DIVISIONS */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="h-section-head">
            <p className="label">Our Expertise</p>
            <h2 className="headline-medium">Three materials. One standard.</h2>
            <p className="section-sub">
              EGC runs its own fabrication shops — every project moves from design
              to site under one roof, one schedule, and one quality standard.
            </p>
          </FadeIn>
          <div className="h-div-grid">
            {DIVISIONS.map((d, i) => (
              <FadeIn delay={i + 1} key={d.id}>
                <div className="h-div-card">
                  <div className="h-div-card-top">
                    <span className="h-div-num">Division {d.num}</span>
                    {d.badge && <span className="h-div-badge">{d.badge}</span>}
                  </div>
                  {DIV_ICONS[d.id]}
                  <h3 className="headline-small" style={{ margin: '12px 0 4px' }}>{d.label}</h3>
                  <p className="tag-mono">{d.tag}</p>
                  <p className="body-text" style={{ fontSize: '0.9rem', marginTop: 6, marginBottom: 18 }}>{d.summary}</p>
                  <Link to="/divisions" className="btn btn-secondary btn-sm">
                    Learn more <ArrowRight size={13}/>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section">
        <div className="container">
          <FadeIn className="h-row-head">
            <div>
              <p className="label">Selected Projects</p>
              <h2 className="headline-medium" style={{ marginBottom: 0 }}>Where we build.</h2>
            </div>
            <Link to="/projects" className="btn btn-secondary btn-sm">All projects <ArrowRight size={13}/></Link>
          </FadeIn>
          <div className="h-proj-grid">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <FadeIn delay={i + 1} key={p.id}>
                <div className="h-proj-card">
                  <div className="h-proj-card-top">
                    <span className="h-proj-city">{p.city}</span>
                    <span className={`status-pill status-${p.status.toLowerCase()}`}>{p.status}</span>
                  </div>
                  <h3 className="h-proj-name">{p.name}</h3>
                  <div className="h-proj-meta">
                    <span>{p.sector}</span><span>·</span>
                    <span>{DIVISIONS.find(d => d.id === p.division)?.label}</span><span>·</span>
                    <span>{p.year}</span>
                  </div>
                  <p className="h-proj-blurb">{p.blurb}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS STRIP */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="h-careers-strip">
            <div>
              <p className="label">Work With Us</p>
              <h2 className="headline-medium" style={{ marginBottom: 8 }}>We're building our team.</h2>
              <p className="section-sub" style={{ marginTop: 0 }}>
                EGC is growing across all three divisions. Fabricators, site supervisors,
                engineers, and support professionals across Riyadh and on sites Kingdom-wide.
              </p>
            </div>
            <Link to="/careers" className="btn btn-primary">
              View open positions <ArrowRight size={15}/>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <FadeIn className="h-cta-banner">
            <p className="label">Get In Touch</p>
            <h2 className="headline-medium" style={{ marginBottom: 10 }}>Ready to start your project?</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px', textAlign: 'center' }}>
              Consult with our team for solutions tailored to your scope, timeline, and budget.
            </p>
            <div className="h-cta-btns">
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <a href={`tel:${'+966110000000'}`} className="btn btn-secondary btn-lg">+966 11 000 0000</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* ── HERO ── */
        .h-hero {
          padding: 100px 0 80px;
          background: linear-gradient(180deg, var(--blue-light) 0%, var(--white) 100%);
          border-bottom: 1px solid var(--blue-mid);
          text-align: center;
        }
        .h-hero-inner { display: flex; flex-direction: column; align-items: center; }
        .h-label { font-size: 0.72rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blue); margin-bottom: 18px; }
        .h-headline {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800; line-height: 1.07;
          color: var(--dark); letter-spacing: -0.02em;
          max-width: 820px; margin: 0 auto 20px;
        }
        .h-sub {
          font-size: 1.08rem; color: var(--muted);
          max-width: 600px; margin: 0 auto; line-height: 1.72;
        }
        .h-btn-group { display: flex; gap: 12px; margin-top: 28px; flex-wrap: wrap; justify-content: center; }
        .h-trust { display: flex; gap: 24px; margin-top: 28px; flex-wrap: wrap; justify-content: center; }
        .h-trust-item { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; font-weight: 500; color: var(--muted); }
        .h-trust-item svg { color: var(--blue); }

        /* ── STATS ── */
        .h-stats { background: var(--blue); }
        .h-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .h-stat { padding: 40px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.15); }
        .h-stat:last-child { border-right: none; }
        .h-stat-num { font-family: var(--font-display); font-size: 2.8rem; font-weight: 800; color: var(--white); line-height: 1; margin-bottom: 6px; }
        .h-stat-lbl { font-size: 0.8rem; font-weight: 500; color: rgba(255,255,255,0.7); letter-spacing: 0.04em; }

        /* ── FEATURE GRID ── */
        .h-feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .h-photo-placeholder {
          width: 100%; aspect-ratio: 16/10;
          background: var(--gray-bg); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); display: flex; align-items: center;
          justify-content: center; color: var(--muted); font-size: 0.85rem; font-weight: 500;
        }

        /* ── SECTION HEAD ── */
        .h-section-head { margin-bottom: 48px; }
        .h-section-head .section-sub { max-width: 560px; }
        .h-row-head {
          display: flex; justify-content: space-between; align-items: flex-end;
          gap: 20px; flex-wrap: wrap; margin-bottom: 28px;
        }

        /* ── DIVISIONS ── */
        .h-div-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .h-div-card {
          background: var(--white); border: 1.5px solid var(--border);
          border-top: 3px solid var(--blue);
          border-radius: var(--radius-lg); padding: 28px 24px;
          display: flex; flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .h-div-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(37,99,235,0.1); }
        .h-div-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .h-div-num { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); }
        .h-div-badge { font-size: 0.6rem; font-weight: 800; background: var(--blue); color: var(--white); padding: 3px 8px; border-radius: 4px; letter-spacing: 0.06em; }

        /* ── PROJECT CARDS ── */
        .h-proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .h-proj-card {
          background: var(--white); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 22px;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
        }
        .h-proj-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(37,99,235,0.08); border-color: var(--blue-mid); }
        .h-proj-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .h-proj-city { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blue); }
        .h-proj-name { font-family: var(--font-display); font-size: 1.02rem; font-weight: 700; color: var(--dark); margin-bottom: 8px; line-height: 1.3; }
        .h-proj-meta { display: flex; gap: 6px; font-size: 0.76rem; color: var(--muted); margin-bottom: 10px; flex-wrap: wrap; }
        .h-proj-blurb { font-size: 0.875rem; color: var(--muted); line-height: 1.6; margin: 0; }

        /* ── CAREERS STRIP ── */
        .h-careers-strip {
          background: var(--white); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 40px 48px;
          display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap;
        }

        /* ── CTA ── */
        .h-cta-banner {
          background: var(--gray-bg); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); padding: 60px 48px; text-align: center;
        }
        .h-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .h-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .h-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .h-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
          .h-stat:nth-last-child(-n+2) { border-bottom: none; }
          .h-div-grid { grid-template-columns: 1fr 1fr; }
          .h-proj-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .h-hero { padding: 72px 0 60px; }
          .h-feature-grid { grid-template-columns: 1fr; gap: 32px; }
          .h-careers-strip { padding: 32px 28px; flex-direction: column; align-items: flex-start; }
          .h-cta-banner { padding: 44px 28px; }
        }
        @media (max-width: 560px) {
          .h-div-grid { grid-template-columns: 1fr; }
          .h-proj-grid { grid-template-columns: 1fr; }
          .h-btn-group { flex-direction: column; align-items: center; }
        }
      `}</style>
    </>
  );
}
