import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, ArrowRight, Building2, Calendar, Briefcase, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { PROJECTS, PROJECT_FILTERS, KSA_PATH, DIVISIONS } from '../data';

/* ── Colour maps ── */
const DIV_ACCENT = {
  steel:     { border: '#2563EB', light: '#EFF6FF', mid: '#BFDBFE', text: '#1E40AF', badgeBg: '#DBEAFE', label: 'Steel' },
  wood:      { border: '#D97706', light: '#FFFBEB', mid: '#FDE68A', text: '#92400E', badgeBg: '#FDE68A', label: 'Wood' },
  leadsheet: { border: '#475569', light: '#F1F5F9', mid: '#CBD5E1', text: '#1E293B', badgeBg: '#CBD5E1', label: 'Lead Sheet' },
};

const STATUS_CLASS = {
  'Completed':  'status-completed',
  'Ongoing':    'status-ongoing',
  'Mobilizing': 'status-mobilizing',
};

/* ── Group projects by city ── */
const CITIES = Array.from(
  PROJECTS.reduce((m, p) => {
    if (!m.has(p.city)) m.set(p.city, { city: p.city, x: p.x, y: p.y, projects: [] });
    m.get(p.city).projects.push(p);
    return m;
  }, new Map()).values()
);

function cityColour(cityData) {
  const counts = {};
  cityData.projects.forEach(p => { counts[p.division] = (counts[p.division] || 0) + 1; });
  const dom = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return DIV_ACCENT[dom]?.border ?? '#2563EB';
}

const ACTIVE_COUNT = PROJECTS.filter(p => p.status !== 'Completed').length;
const CITY_COUNT   = CITIES.length;

/* ── Division SVG icons ── */
function DivisionGraphic({ division, size = 40 }) {
  const s = size;
  if (division === 'steel') return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="36" height="8" rx="1.5" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1.5"/>
      <rect x="22" y="18" width="8" height="16" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5"/>
      <rect x="8" y="34" width="36" height="8" rx="1.5" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1.5"/>
      <line x1="8" y1="42" x2="8" y2="48" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      <line x1="44" y1="42" x2="44" y2="48" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (division === 'wood') return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="6" y="18" width="40" height="16" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5"/>
      <ellipse cx="26" cy="26" rx="12" ry="7" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.7"/>
      <ellipse cx="26" cy="26" rx="7" ry="4" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.5"/>
      <ellipse cx="26" cy="26" rx="3" ry="2" fill="#D97706" opacity="0.4"/>
      <line x1="6" y1="22" x2="46" y2="22" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5"/>
      <line x1="6" y1="30" x2="46" y2="30" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5"/>
    </svg>
  );
  return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="40" height="7" rx="1" fill="#475569" stroke="#334155" strokeWidth="1.5"/>
      <rect x="6" y="22" width="40" height="7" rx="1" fill="#64748B" stroke="#64748B" strokeWidth="1.5"/>
      <rect x="6" y="32" width="40" height="7" rx="1" fill="#94A3B8" stroke="#94A3B8" strokeWidth="1.5"/>
      <ellipse cx="16" cy="8" rx="2.5" ry="4" fill="#BFDBFE" opacity="0.8"/>
      <ellipse cx="26" cy="6" rx="2.5" ry="4" fill="#BFDBFE" opacity="0.7"/>
      <ellipse cx="36" cy="8" rx="2.5" ry="4" fill="#BFDBFE" opacity="0.8"/>
    </svg>
  );
}

/* ── Project card in the bottom grid ── */
function ProjectCard({ p, delay = 1 }) {
  const c = DIV_ACCENT[p.division] ?? DIV_ACCENT.steel;
  const divLabel = DIVISIONS.find(d => d.id === p.division)?.label ?? p.division;
  return (
    <FadeIn delay={delay}>
      <div className="pj-card" style={{ '--pj-accent': c.border, '--pj-badge': c.badgeBg, '--pj-text': c.text }}>
        {/* graphic area */}
        <div className="pj-card-graphic" style={{ background: c.light, borderColor: c.mid }}>
          <DivisionGraphic division={p.division} size={44} />
          <span className="pj-card-graphic-label" style={{ color: c.text }}>{divLabel} Division</span>
          <span className={`status-pill ${STATUS_CLASS[p.status] ?? 'status-completed'} pj-card-status`}>{p.status}</span>
        </div>
        <div className="pj-card-body">
          <div className="pj-card-top">
            <span className="pj-card-city-lbl" style={{ color: c.border }}>
              <MapPin size={10} style={{ display: 'inline', marginRight: 3 }} />
              {p.city}
            </span>
            <span className="pj-card-badge" style={{ background: c.badgeBg, color: c.text }}>{divLabel}</span>
          </div>
          <h3 className="pj-card-name">{p.name}</h3>
          <div className="pj-card-meta">
            <Briefcase size={11} style={{ color: 'var(--muted)', flexShrink: 0 }} />
            <span>{p.sector}</span>
            <span className="pj-meta-sep">·</span>
            <Calendar size={11} style={{ color: 'var(--muted)', flexShrink: 0 }} />
            <span>{p.year}</span>
          </div>
          <div className="pj-card-client">
            <Building2 size={11} style={{ color: 'var(--muted)', flexShrink: 0 }} />
            <span>{p.client}</span>
          </div>
          <p className="pj-card-blurb">{p.blurb}</p>
        </div>
      </div>
    </FadeIn>
  );
}

/* ══════════════════════════════════════════════════════
   RIGHT PANEL — project list for selected city
══════════════════════════════════════════════════════ */
function CityPanel({ cityData, divFilter, onClose }) {
  const filtered = divFilter === 'all'
    ? cityData.projects
    : cityData.projects.filter(p => p.division === divFilter);

  const divCounts = cityData.projects.reduce((acc, p) => {
    acc[p.division] = (acc[p.division] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="cp-root">
      {/* sticky header */}
      <div className="cp-head">
        <div className="cp-head-left">
          <div className="cp-city-row">
            <MapPin size={13} style={{ color: 'var(--blue)', flexShrink: 0 }} />
            <span className="cp-city-name">{cityData.city}</span>
          </div>
          <p className="cp-project-count">{cityData.projects.length} project{cityData.projects.length !== 1 ? 's' : ''} in this city</p>
          <div className="cp-div-pills">
            {Object.entries(divCounts).map(([div, n]) => {
              const c = DIV_ACCENT[div];
              if (!c) return null;
              return (
                <span key={div} className="cp-div-pill" style={{ background: c.badgeBg, color: c.text }}>
                  {c.label} × {n}
                </span>
              );
            })}
          </div>
        </div>
        <button className="cp-close-btn" onClick={onClose} aria-label="Close panel">
          <X size={16} />
        </button>
      </div>

      {/* project rows */}
      <div className="cp-list">
        {filtered.length === 0 ? (
          <p className="cp-empty">No projects match this filter for {cityData.city}.</p>
        ) : filtered.map(p => {
          const c = DIV_ACCENT[p.division] ?? DIV_ACCENT.steel;
          const divLabel = DIVISIONS.find(d => d.id === p.division)?.label ?? p.division;
          return (
            <div
              key={p.id}
              className="cp-row"
              style={{ '--cpr-accent': c.border, '--cpr-light': c.light, '--cpr-badge': c.badgeBg, '--cpr-text': c.text }}
            >
              {/* division graphic */}
              <div className="cp-row-graphic" style={{ background: c.light, borderColor: c.mid }}>
                <DivisionGraphic division={p.division} size={32} />
              </div>
              {/* content */}
              <div className="cp-row-content">
                <div className="cp-row-top">
                  <span className="cp-row-badge" style={{ background: c.badgeBg, color: c.text }}>{divLabel}</span>
                  <span className={`status-pill ${STATUS_CLASS[p.status] ?? 'status-completed'}`} style={{ fontSize: '0.58rem' }}>{p.status}</span>
                </div>
                <h4 className="cp-row-name">{p.name}</h4>
                <div className="cp-row-meta">
                  <span>{p.sector}</span>
                  <span className="pj-meta-sep">·</span>
                  <span>{p.year}</span>
                  <span className="pj-meta-sep">·</span>
                  <span>{p.client}</span>
                </div>
                <p className="cp-row-blurb">{p.blurb}</p>
              </div>
              {/* colour accent bar */}
              <div className="cp-row-bar" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════ */
export default function Projects() {
  const [divFilter, setDivFilter] = useState('all');
  const [activeCity, setActiveCity] = useState(null);
  const panelRef = useRef(null);

  const activeCityData = activeCity ? CITIES.find(c => c.city === activeCity) : null;

  const visibleCards = PROJECTS.filter(p => {
    const divOk = divFilter === 'all' || p.division === divFilter;
    const cityOk = !activeCity || p.city === activeCity;
    return divOk && cityOk;
  });

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [activeCity]);

  const visibleCities = CITIES.filter(cd =>
    divFilter === 'all' || cd.projects.some(p => p.division === divFilter)
  );

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
              Government infrastructure, industrial facilities, hospitality fit-outs, and giga-project
              packages — delivered by EGC's own fabrication and site crews. Click any city pin to explore.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="pj-stats-bar">
        <div className="container">
          <div className="pj-stats-inner">
            <div className="pj-stat">
              <span className="pj-stat-n">150+</span>
              <span className="pj-stat-l">Projects Delivered</span>
            </div>
            <div className="pj-stat-divider" />
            <div className="pj-stat">
              <span className="pj-stat-n">{ACTIVE_COUNT}</span>
              <span className="pj-stat-l">Active Right Now</span>
            </div>
            <div className="pj-stat-divider" />
            <div className="pj-stat">
              <span className="pj-stat-n">{CITY_COUNT}</span>
              <span className="pj-stat-l">Cities & Regions</span>
            </div>
            <div className="pj-stat-divider" />
            <div className="pj-stat">
              <span className="pj-stat-n">3</span>
              <span className="pj-stat-l">Active Divisions</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAP + PANEL ── */}
      <section className="section" style={{ background: 'var(--gray-bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">

          {/* Filter chips + legend */}
          <FadeIn className="pj-filter-row">
            {PROJECT_FILTERS.map(f => (
              <button
                key={f.id}
                className={`chip${divFilter === f.id ? ' active' : ''}`}
                onClick={() => { setDivFilter(f.id); setActiveCity(null); }}
              >
                {f.label}
              </button>
            ))}
            <span className="pj-filter-sep" />
            {Object.entries(DIV_ACCENT).map(([id, c]) => (
              <span key={id} className="pj-legend-item">
                <span className="pj-legend-dot" style={{ background: c.border }} />
                {c.label}
              </span>
            ))}
          </FadeIn>

          {/* ── MAP WORKSPACE: always flex-row ── */}
          <FadeIn className="pj-workspace">

            {/* LEFT: KSA map — always visible, fixed width */}
            <div className="pj-map-col">
              <svg
                viewBox="0 0 680 562"
                className="pj-ksa-svg"
                aria-label="Map of Saudi Arabia — click a city pin to explore projects"
              >
                <defs>
                  <pattern id="map-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.9" fill="#CBD5E1" opacity="0.45" />
                  </pattern>
                  <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#111" floodOpacity="0.22"/>
                  </filter>
                </defs>

                {/* dot background */}
                <rect width="680" height="562" fill="url(#map-dots)" />

                {/* KSA outline */}
                <path
                  d={KSA_PATH}
                  fill="#EEF3FF"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* City pins */}
                {visibleCities.map(cd => {
                  const isActive = activeCity === cd.city;
                  const col = cityColour(cd);
                  const n = cd.projects.filter(p => divFilter === 'all' || p.division === divFilter).length;
                  const r = 9 + Math.min(n - 1, 3) * 3;

                  return (
                    <g
                      key={cd.city}
                      transform={`translate(${cd.x},${cd.y})`}
                      onClick={() => setActiveCity(isActive ? null : cd.city)}
                      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setActiveCity(isActive ? null : cd.city); }}
                      role="button"
                      tabIndex={0}
                      aria-label={`${cd.city} — ${n} project${n !== 1 ? 's' : ''}`}
                      style={{ cursor: 'pointer', outline: 'none' }}
                    >
                      {/* pulse ring */}
                      {isActive && (
                        <circle
                          r={r + 10}
                          fill="none"
                          stroke={col}
                          strokeWidth="2"
                          opacity="0.3"
                          className="pj-pin-pulse"
                        />
                      )}
                      {/* shadow drop */}
                      <circle r={r} fill={col} opacity="0.15" transform="translate(0,3)" />
                      {/* main pin */}
                      <circle
                        r={r}
                        fill={isActive ? col : '#ffffff'}
                        stroke={col}
                        strokeWidth="2.5"
                        filter={isActive ? 'url(#pin-shadow)' : undefined}
                      />
                      {/* count */}
                      <text
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={n > 9 ? '8' : '9'}
                        fontFamily="Inter,sans-serif"
                        fontWeight="800"
                        fill={isActive ? '#fff' : col}
                      >
                        {n}
                      </text>
                      {/* city label */}
                      <text
                        x="0"
                        y={-(r + 8)}
                        textAnchor="middle"
                        fontSize="9"
                        fontFamily="Inter,sans-serif"
                        fontWeight="700"
                        fill={isActive ? col : '#374151'}
                        stroke="#fff"
                        strokeWidth="3"
                        paintOrder="stroke"
                      >
                        {cd.city}
                      </text>
                    </g>
                  );
                })}
              </svg>
              <p className="pj-map-caption">KINGDOM OF SAUDI ARABIA — EGC PROJECT FOOTPRINT</p>
            </div>

            {/* RIGHT: panel — hint when nothing selected, projects when a city is active */}
            <div className="pj-panel-col" ref={panelRef}>
              {activeCityData ? (
                <CityPanel
                  cityData={activeCityData}
                  divFilter={divFilter}
                  onClose={() => setActiveCity(null)}
                />
              ) : (
                /* default hint */
                <div className="pj-hint">
                  <div className="pj-hint-icon">
                    <MapPin size={24} style={{ color: 'var(--blue)' }} />
                  </div>
                  <p className="pj-hint-title">Select a city</p>
                  <p className="pj-hint-sub">
                    Click any numbered pin on the map to explore projects delivered in that city or region.
                  </p>
                  <div className="pj-hint-dividers">
                    {Object.entries(DIV_ACCENT).map(([id, c]) => (
                      <div key={id} className="pj-hint-div-row">
                        <span className="pj-hint-div-swatch" style={{ background: c.border }} />
                        <span>{c.label} Division</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── ALL PROJECTS GRID ── */}
      <section className="section">
        <div className="container">
          <FadeIn className="pj-grid-head">
            <div>
              <p className="overline">All Projects</p>
              <h2 className="headline-md" style={{ marginBottom: 0 }}>
                {activeCity
                  ? `${visibleCards.length} project${visibleCards.length !== 1 ? 's' : ''} in ${activeCity}`
                  : `${visibleCards.length} project${visibleCards.length !== 1 ? 's' : ''} shown`}
              </h2>
            </div>
            {activeCity && (
              <button className="pj-clear-btn" onClick={() => setActiveCity(null)}>
                <X size={13} /> Clear city filter
              </button>
            )}
          </FadeIn>

          <div className="pj-grid">
            {visibleCards.map((p, i) => (
              <ProjectCard key={p.id} p={p} delay={(i % 3) + 1} />
            ))}
          </div>

          {visibleCards.length === 0 && (
            <p className="pj-empty">No projects match the current filters.</p>
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
              Whether you have tender documents or just a concept, we're ready to discuss how EGC can deliver —
              steel, timber, or lead sheet.
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
        .pj-stats-bar { background: var(--dark); }
        .pj-stats-inner { display: flex; align-items: stretch; }
        .pj-stat {
          flex: 1; display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          padding: 32px 20px; text-align: center;
        }
        .pj-stat-divider { width: 1px; background: rgba(255,255,255,0.1); margin: 16px 0; flex-shrink: 0; }
        .pj-stat-n { font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 6px; display: block; }
        .pj-stat-l { font-size: 0.7rem; font-weight: 500; color: rgba(255,255,255,0.5); letter-spacing: 0.07em; text-transform: uppercase; }

        /* ── Filter row ── */
        .pj-filter-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }
        .pj-filter-sep { width: 1px; height: 20px; background: var(--border); margin: 0 4px; flex-shrink: 0; }
        .pj-legend-item { display: flex; align-items: center; gap: 5px; font-size: 0.78rem; color: var(--muted); font-weight: 500; }
        .pj-legend-dot { width: 9px; height: 9px; border-radius: 2px; flex-shrink: 0; }

        /* ══════════════════════════════════════════════════════
           MAP WORKSPACE — flex row, map NEVER shrinks
        ══════════════════════════════════════════════════════ */
        .pj-workspace {
          display: flex;
          gap: 0;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #fff;
          min-height: 480px;
        }

        /* Map column: fixed min-width so it NEVER collapses */
        .pj-map-col {
          flex: 0 0 56%;     /* always 56% of the workspace */
          min-width: 360px;
          background: linear-gradient(145deg, #EEF3FF 0%, #F7F9FF 100%);
          padding: 20px 16px 12px;
          border-right: 1.5px solid var(--border);
          display: flex;
          flex-direction: column;
        }
        .pj-ksa-svg {
          width: 100%;
          flex: 1;
          display: block;
          height: auto;
        }
        .pj-map-caption {
          text-align: center;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: var(--muted);
          text-transform: uppercase;
          margin-top: 8px;
          flex-shrink: 0;
        }

        /* Pin pulse animation */
        .pj-pin-pulse { animation: pinPulse 1.8s ease-out infinite; }
        @keyframes pinPulse {
          0%   { r: 20; opacity: 0.4; }
          100% { r: 36; opacity: 0; }
        }

        /* Panel column: fills remaining space, scrollable */
        .pj-panel-col {
          flex: 1 1 0;
          min-width: 0;
          overflow-y: auto;
          max-height: 520px;
          display: flex;
          flex-direction: column;
        }

        /* ── Default hint panel ── */
        .pj-hint {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 32px;
          height: 100%;
          gap: 0;
          background: var(--gray-bg);
        }
        .pj-hint-icon {
          width: 56px; height: 56px;
          background: var(--blue-light);
          border: 1.5px solid var(--blue-mid);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 16px;
        }
        .pj-hint-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--dark); margin: 0 0 8px; }
        .pj-hint-sub { font-size: 0.84rem; color: var(--muted); line-height: 1.6; margin: 0 0 24px; max-width: 220px; }
        .pj-hint-dividers { display: flex; flex-direction: column; gap: 8px; text-align: left; width: 100%; max-width: 160px; }
        .pj-hint-div-row { display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: var(--muted); font-weight: 500; }
        .pj-hint-div-swatch { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }

        /* ── City panel ── */
        .cp-root { display: flex; flex-direction: column; height: 100%; }
        .cp-head {
          display: flex; justify-content: space-between; align-items: flex-start;
          gap: 12px; padding: 20px 20px 16px;
          border-bottom: 1.5px solid var(--border);
          position: sticky; top: 0; background: #fff; z-index: 2;
          flex-shrink: 0;
        }
        .cp-head-left { min-width: 0; }
        .cp-city-row { display: flex; align-items: center; gap: 5px; margin-bottom: 3px; }
        .cp-city-name { font-size: 0.7rem; font-weight: 700; color: var(--blue); text-transform: uppercase; letter-spacing: 0.1em; }
        .cp-project-count { font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--dark); margin: 0 0 10px; line-height: 1.15; }
        .cp-div-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .cp-div-pill { font-size: 0.62rem; font-weight: 700; padding: 2px 8px; border-radius: 999px; }
        .cp-close-btn {
          width: 32px; height: 32px; border-radius: 8px; background: var(--gray-bg); border: 1.5px solid var(--border);
          display: flex; align-items: center; justify-content: center; color: var(--muted);
          flex-shrink: 0; cursor: pointer;
          transition: background var(--transition), color var(--transition), border-color var(--transition);
        }
        .cp-close-btn:hover { background: var(--dark); color: #fff; border-color: var(--dark); }

        /* project rows in the panel */
        .cp-list { flex: 1; overflow-y: auto; padding: 12px 0 16px; }
        .cp-empty { color: var(--muted); font-size: 0.88rem; padding: 24px; text-align: center; margin: 0; }
        .cp-row {
          display: flex; gap: 12px;
          margin: 0 14px 10px;
          padding: 14px;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          background: #fff;
        }
        .cp-row:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); border-color: var(--cpr-accent); }
        .cp-row-bar {
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 3px; background: var(--cpr-accent);
        }
        .cp-row-graphic {
          flex-shrink: 0;
          width: 52px; height: 52px;
          border-radius: 8px;
          border: 1.5px solid;
          display: flex; align-items: center; justify-content: center;
          margin-left: 3px; /* account for bar */
        }
        .cp-row-content { flex: 1; min-width: 0; }
        .cp-row-top { display: flex; align-items: center; gap: 6px; margin-bottom: 5px; flex-wrap: wrap; }
        .cp-row-badge { font-size: 0.6rem; font-weight: 700; padding: 2px 7px; border-radius: 4px; }
        .cp-row-name { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--dark); margin: 0 0 5px; line-height: 1.3; }
        .cp-row-meta { font-size: 0.7rem; color: var(--muted); display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 5px; align-items: center; }
        .cp-row-blurb { font-size: 0.78rem; color: var(--muted); line-height: 1.55; margin: 0; }

        /* ── Grid head ── */
        .pj-grid-head {
          display: flex; justify-content: space-between; align-items: center;
          gap: 16px; flex-wrap: wrap; margin-bottom: 28px;
        }
        .pj-clear-btn {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.82rem; font-weight: 600; color: var(--blue);
          background: var(--blue-light); border: 1.5px solid var(--blue-mid);
          border-radius: 999px; padding: 6px 14px; cursor: pointer;
          transition: background var(--transition);
        }
        .pj-clear-btn:hover { background: var(--blue-mid); }

        /* ── Project card grid ── */
        .pj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }

        /* ── Project card ── */
        .pj-card {
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          height: 100%;
        }
        .pj-card:hover { transform: translateY(-4px); box-shadow: 0 10px 36px rgba(0,0,0,0.08); border-color: var(--pj-accent); }
        .pj-card-graphic {
          width: 100%; aspect-ratio: 16/7; border-bottom: 1.5px solid;
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
          position: relative; flex-shrink: 0;
        }
        .pj-card-graphic-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; }
        .pj-card-status { position: absolute; top: 10px; right: 10px; }
        .pj-card-body { padding: 16px 16px 20px; display: flex; flex-direction: column; flex: 1; }
        .pj-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 6px; }
        .pj-card-city-lbl { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; display: flex; align-items: center; }
        .pj-card-badge { font-size: 0.62rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .pj-card-name { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); line-height: 1.3; margin: 0 0 8px; }
        .pj-card-meta { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; margin-bottom: 5px; font-size: 0.75rem; color: var(--muted); }
        .pj-meta-sep { color: var(--muted); font-size: 0.7rem; }
        .pj-card-client { display: flex; align-items: center; gap: 5px; font-size: 0.74rem; color: var(--muted); margin-bottom: 10px; }
        .pj-card-blurb { font-size: 0.83rem; color: var(--muted); line-height: 1.65; margin: 0; flex: 1; }

        /* ── Empty state ── */
        .pj-empty { text-align: center; padding: 56px 24px; color: var(--muted); font-size: 1rem; margin: 0; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pj-map-col { flex-basis: 50%; }
        }
        @media (max-width: 860px) {
          .pj-workspace { flex-direction: column; min-height: unset; }
          .pj-map-col { flex: none; width: 100%; min-width: unset; border-right: none; border-bottom: 1.5px solid var(--border); }
          .pj-panel-col { max-height: 400px; }
          .pj-grid { grid-template-columns: repeat(2, 1fr); }
          .pj-stats-inner { flex-wrap: wrap; }
          .pj-stat { flex: 0 0 50%; }
          .pj-stat-divider { display: none; }
          .pj-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.1); }
          .pj-stat:nth-child(1),.pj-stat:nth-child(2) { border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
        @media (max-width: 580px) {
          .pj-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
