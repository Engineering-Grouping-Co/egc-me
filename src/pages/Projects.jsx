import { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import { PROJECTS, PROJECT_FILTERS, DIVISIONS } from '../data';

/* Division accent colours for card left border */
const DIV_ACCENT = {
  steel:     { border: '#2563EB', bg: '#EFF6FF', text: '#1E40AF', badgeBg: '#DBEAFE' },
  wood:      { border: '#D97706', bg: '#FFFBEB', text: '#92400E', badgeBg: '#FDE68A' },
  leadsheet: { border: '#475569', bg: '#F8FAFC', text: '#1E293B', badgeBg: '#CBD5E1' },
};

const STATUS_CLASS = {
  'Completed':  'status-completed',
  'Ongoing':    'status-ongoing',
  'Mobilizing': 'status-mobilizing',
};

/* ── Summary stats derived from project data ── */
const TOTAL    = PROJECTS.length;
const ACTIVE   = PROJECTS.filter(p => p.status !== 'Completed').length;
const CITIES   = [...new Set(PROJECTS.map(p => p.city))].length;

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.division === filter);

  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Projects</span>
          </nav>
          <FadeIn>
            <p className="overline">Our Track Record</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Projects across the Kingdom.</h1>
            <p className="section-sub">
              Government infrastructure, industrial facilities, hospitality fit-outs, and
              giga-project packages — delivered by EGC's own fabrication and site crews.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SUMMARY STATS ── */}
      <section className="pj-stats-bar">
        <div className="container">
          <FadeIn className="pj-stats-inner">
            <div className="pj-stat">
              <span className="pj-stat-n">150+</span>
              <span className="pj-stat-l">Projects Delivered</span>
            </div>
            <div className="pj-stat-divider"/>
            <div className="pj-stat">
              <span className="pj-stat-n">{ACTIVE}</span>
              <span className="pj-stat-l">Active Right Now</span>
            </div>
            <div className="pj-stat-divider"/>
            <div className="pj-stat">
              <span className="pj-stat-n">{CITIES}</span>
              <span className="pj-stat-l">Cities &amp; Regions</span>
            </div>
            <div className="pj-stat-divider"/>
            <div className="pj-stat">
              <span className="pj-stat-n">3</span>
              <span className="pj-stat-l">Divisions Working</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="section">
        <div className="container">

          {/* Filter chips */}
          <FadeIn className="pj-filter-row">
            {PROJECT_FILTERS.map(f => (
              <button
                key={f.id}
                id={`filter-${f.id}`}
                className={`chip${filter === f.id ? ' active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
            {filter !== 'all' && (
              <span className="pj-filter-count">{visible.length} project{visible.length !== 1 ? 's' : ''}</span>
            )}
          </FadeIn>

          {/* Division legend */}
          <FadeIn className="pj-legend">
            {DIVISIONS.map(d => {
              const c = DIV_ACCENT[d.id];
              return (
                <span key={d.id} className="pj-legend-item">
                  <span className="pj-legend-dot" style={{ background: c.border }}/>
                  {d.label}
                </span>
              );
            })}
          </FadeIn>

          {/* Project cards grid */}
          <div className="pj-grid">
            {visible.map((p, i) => {
              const c = DIV_ACCENT[p.division];
              const divLabel = DIVISIONS.find(d => d.id === p.division)?.label ?? p.division;
              return (
                <FadeIn delay={(i % 3) + 1} key={p.id}>
                  <div
                    className="pj-card"
                    style={{ '--pj-accent': c.border, '--pj-bg': c.bg, '--pj-badge': c.badgeBg, '--pj-text': c.text }}
                  >
                    {/* Left division accent bar */}
                    <div className="pj-card-bar"/>

                    <div className="pj-card-content">
                      {/* Top row — city + status */}
                      <div className="pj-card-top">
                        <span className="pj-card-city">{p.city.toUpperCase()}</span>
                        <span className={`status-pill ${STATUS_CLASS[p.status] || 'status-completed'}`}>
                          {p.status}
                        </span>
                      </div>

                      {/* Project name */}
                      <h3 className="pj-card-name">{p.name}</h3>

                      {/* Meta row */}
                      <div className="pj-card-meta">
                        <span
                          className="pj-card-div"
                          style={{ background: c.badgeBg, color: c.text }}
                        >
                          {divLabel}
                        </span>
                        <span className="pj-card-dot">·</span>
                        <span className="pj-card-sector">{p.sector}</span>
                        <span className="pj-card-dot">·</span>
                        <span className="pj-card-year">{p.year}</span>
                      </div>

                      {/* Description */}
                      <p className="pj-card-blurb">{p.blurb}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {visible.length === 0 && (
            <p className="pj-empty">No projects match this filter yet — check back soon.</p>
          )}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">Your Project</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Discuss your scope with our team.</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Whether you have tender documents or just a concept, we're ready to discuss
              how EGC can deliver for you — steel, timber, or lead sheet.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <Link to="/divisions" className="btn btn-secondary btn-lg">Our Divisions</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* ── Stats bar ── */
        .pj-stats-bar {
          background: var(--dark);
          padding: 0;
        }
        .pj-stats-inner {
          display: flex;
          align-items: stretch;
        }
        .pj-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 36px 24px;
          text-align: center;
        }
        .pj-stat-divider {
          width: 1px;
          background: rgba(255,255,255,0.1);
          margin: 24px 0;
          flex-shrink: 0;
        }
        .pj-stat-n {
          font-family: var(--font-display);
          font-size: 2.4rem;
          font-weight: 800;
          color: var(--white);
          line-height: 1;
          margin-bottom: 6px;
          display: block;
        }
        .pj-stat-l {
          font-size: 0.75rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* ── Filter row ── */
        .pj-filter-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 16px;
        }
        .pj-filter-count {
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
          margin-left: 4px;
        }

        /* ── Legend ── */
        .pj-legend {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .pj-legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--muted);
          font-weight: 500;
        }
        .pj-legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 2px;
          flex-shrink: 0;
        }

        /* ── Project grid ── */
        .pj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        /* ── Project card ── */
        .pj-card {
          display: flex;
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .pj-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.07);
          border-color: var(--pj-accent);
        }
        .pj-card-bar {
          width: 4px;
          background: var(--pj-accent);
          flex-shrink: 0;
        }
        .pj-card-content {
          padding: 20px 20px 22px;
          flex: 1;
          min-width: 0;
        }
        .pj-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 8px;
        }
        .pj-card-city {
          font-size: 0.64rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: var(--pj-accent);
        }
        .pj-card-name {
          font-family: var(--font-display);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--dark);
          line-height: 1.3;
          margin: 0 0 10px;
        }
        .pj-card-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .pj-card-div {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 4px;
        }
        .pj-card-dot {
          color: var(--muted);
          font-size: 0.75rem;
        }
        .pj-card-sector {
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 500;
        }
        .pj-card-year {
          font-size: 0.78rem;
          color: var(--muted);
          font-weight: 500;
        }
        .pj-card-blurb {
          font-size: 0.865rem;
          color: var(--muted);
          line-height: 1.65;
          margin: 0;
        }

        /* ── Empty state ── */
        .pj-empty {
          text-align: center;
          padding: 64px 24px;
          color: var(--muted);
          font-size: 1rem;
          margin: 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pj-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 860px) {
          .pj-stats-inner { flex-wrap: wrap; }
          .pj-stat { flex: 0 0 50%; border-bottom: 1px solid rgba(255,255,255,0.1); }
          .pj-stat:nth-child(odd)  { border-right: 1px solid rgba(255,255,255,0.1); }
          .pj-stat:nth-last-child(-n+2) { border-bottom: none; }
          .pj-stat-divider { display: none; }
        }
        @media (max-width: 600px) {
          .pj-grid { grid-template-columns: 1fr; }
          .pj-stat { flex: 0 0 50%; }
        }
      `}</style>
    </>
  );
}
