import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { PROJECTS, PROJECT_FILTERS, KSA_PATH, DIVISIONS } from '../data';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [activePin, setActivePin] = useState(null);

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.division === filter);

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Projects</span></nav>
          <FadeIn>
            <p className="overline">Where We Build</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Projects across the Kingdom</h1>
            <p className="section-sub">
              A schematic view of where EGC is on the ground across Saudi Arabia.
              Select a location marker or browse the project cards below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MAP + CARDS */}
      <section className="section">
        <div className="container">

          {/* Quick stats row */}
          <FadeIn className="proj-stats-row">
            <div className="proj-stat"><span>{PROJECTS.length}</span><p>Projects Listed</p></div>
            <div className="proj-stat"><span>9</span><p>Regions Covered</p></div>
            <div className="proj-stat"><span>3</span><p>Active Divisions</p></div>
            <div className="proj-stat"><span>Since [YEAR]</span><p>Track Record</p></div>
          </FadeIn>

          {/* Filters */}
          <FadeIn className="chip-row" style={{ marginBottom: 24, marginTop: 36 }}>
            {PROJECT_FILTERS.map(f => (
              <button
                key={f.id}
                className={`chip${filter === f.id ? ' active' : ''}`}
                onClick={() => { setFilter(f.id); setActivePin(null); }}
              >
                {f.label}
              </button>
            ))}
          </FadeIn>

          {/* KSA Map */}
          <FadeIn className="map-wrap">
            <svg viewBox="0 0 680 562" className="ksa-svg" aria-label="Map of Saudi Arabia showing EGC project locations" role="img">
              <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="1" fill="#BFDBFE" opacity="0.6" />
                </pattern>
              </defs>
              <rect width="680" height="562" fill="url(#dots)" />
              <path d={KSA_PATH} fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />

              {visible.map(p => {
                const isActive = activePin === p.id;
                return (
                  <g
                    key={p.id}
                    transform={`translate(${p.x},${p.y})`}
                    onClick={() => setActivePin(isActive ? null : p.id)}
                    onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActivePin(isActive ? null : p.id); }}
                    role="button" tabIndex={0} aria-label={`${p.city} — ${p.name}`}
                    style={{ cursor: 'pointer', outline: 'none' }}
                  >
                    {isActive && <circle r="18" fill="none" stroke="#2563EB" strokeWidth="1.5" opacity="0.3" className="pin-ring" />}
                    <circle r="7" fill={isActive ? '#1D4ED8' : '#2563EB'} stroke="#fff" strokeWidth="2.5" />
                    <text x="10" y="-9" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" fill="#111">{p.code}</text>
                  </g>
                );
              })}
            </svg>
            <p className="map-caption">KINGDOM OF SAUDI ARABIA — EGC PROJECT LOCATIONS (SCHEMATIC)</p>
          </FadeIn>

          {/* Project Cards Grid */}
          <div className="proj-grid" style={{ marginTop: 36 }}>
            {visible.map((p, i) => (
              <FadeIn delay={(i % 3) + 1} key={p.id}>
                <div
                  className={`proj-detail-card${activePin === p.id ? ' proj-card-active' : ''}`}
                  onClick={() => setActivePin(activePin === p.id ? null : p.id)}
                >
                  <div className="pdc-top">
                    <div>
                      <span className="pdc-city">{p.city}</span>
                      <span className="pdc-div">{DIVISIONS.find(d => d.id === p.division)?.label}</span>
                    </div>
                    <span className={`status-pill status-${p.status.toLowerCase()}`}>{p.status}</span>
                  </div>
                  <h3 className="pdc-name">{p.name}</h3>
                  <div className="pdc-meta">
                    <span><strong>Client:</strong> {p.client}</span>
                    <span><strong>Sector:</strong> {p.sector}</span>
                    <span><strong>Year:</strong> {p.year}</span>
                  </div>
                  <p className="body-sm" style={{ margin: 0 }}>{p.blurb}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {visible.length === 0 && (
            <div className="empty-state">No projects match this filter yet.</div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">Your Project</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Discuss your scope with our team.</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Whether you have tender documents or just a concept, we're ready to discuss
              how EGC can deliver for you.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <Link to="/divisions" className="btn btn-secondary btn-lg">Our Divisions</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .proj-stats-row {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden;
        }
        .proj-stat {
          padding: 24px; text-align: center;
          border-right: 1px solid var(--border);
        }
        .proj-stat:last-child { border-right: none; }
        .proj-stat span { font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; color: var(--blue); display: block; }
        .proj-stat p { font-size: 0.78rem; font-weight: 600; color: var(--muted); margin: 4px 0 0; text-transform: uppercase; letter-spacing: 0.06em; }

        .map-wrap { background: var(--white); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 20px; }
        .ksa-svg { width: 100%; height: auto; max-height: 460px; display: block; }
        .map-caption { text-align: center; font-size: 0.64rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; margin-top: 12px; }
        .pin-ring { animation: pinPulse 1.8s ease-out infinite; }
        @keyframes pinPulse { 0% { r: 10; opacity: 0.6; } 100% { r: 22; opacity: 0; } }

        .proj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .proj-detail-card {
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          padding: 22px; background: var(--white); cursor: pointer;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .proj-detail-card:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(37,99,235,0.08); border-color: var(--blue-mid); }
        .proj-card-active { border-color: var(--blue) !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.1) !important; }
        .pdc-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px; }
        .pdc-city { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--blue); display: block; margin-bottom: 4px; }
        .pdc-div { font-size: 0.68rem; font-weight: 600; background: var(--blue-light); color: var(--blue); padding: 2px 8px; border-radius: 4px; }
        .pdc-name { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--dark); margin: 0 0 10px; line-height: 1.3; }
        .pdc-meta { display: flex; flex-direction: column; gap: 3px; font-size: 0.78rem; color: var(--muted); margin-bottom: 10px; }
        .pdc-meta strong { color: var(--dark); }
        .empty-state { text-align: center; padding: 64px 24px; color: var(--muted); font-size: 1rem; }

        @media (max-width: 860px) { .proj-grid { grid-template-columns: repeat(2, 1fr); } .proj-stats-row { grid-template-columns: repeat(2, 1fr); } .proj-stat { border-bottom: 1px solid var(--border); } .proj-stat:nth-child(2n) { border-right: none; } .proj-stat:nth-last-child(-n+2) { border-bottom: none; } }
        @media (max-width: 580px) { .proj-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
