import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, ArrowRight, Building2, Calendar, Briefcase } from 'lucide-react';
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
    if (!m.has(p.city)) m.set(p.city, { city: p.city, code: p.code, x: p.x, y: p.y, projects: [] });
    m.get(p.city).projects.push(p);
    return m;
  }, new Map()).values()
);

/* ── Determine dominant division colour for a city ── */
function cityColour(cityData) {
  const counts = {};
  cityData.projects.forEach(p => { counts[p.division] = (counts[p.division] || 0) + 1; });
  const dom = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
  return DIV_ACCENT[dom]?.border ?? '#2563EB';
}

/* ── Summary stats ── */
const ACTIVE_COUNT  = PROJECTS.filter(p => p.status !== 'Completed').length;
const CITY_COUNT    = CITIES.length;

/* ══════════════════════════════════════════════════════
   PROJECT CARD COMPONENT
══════════════════════════════════════════════════════ */
function ProjectCard({ p, delay = 1 }) {
  const c = DIV_ACCENT[p.division] ?? DIV_ACCENT.steel;
  const divLabel = DIVISIONS.find(d => d.id === p.division)?.label ?? p.division;
  return (
    <FadeIn delay={delay}>
      <div className="pj-card" style={{ '--pj-accent': c.border, '--pj-badge': c.badgeBg, '--pj-text': c.text }}>
        <div className="pj-card-bar" />
        <div className="pj-card-inner">
          {/* Top row */}
          <div className="pj-card-top">
            <span className="pj-card-city-label" style={{ color: c.border }}>{p.city.toUpperCase()}</span>
            <span className={`status-pill ${STATUS_CLASS[p.status] ?? 'status-completed'}`}>{p.status}</span>
          </div>
          {/* Graphic placeholder */}
          <div className="pj-card-graphic" style={{ background: c.light, borderColor: c.mid }}>
            <ProjectGraphic division={p.division} />
            <span className="pj-card-graphic-label" style={{ color: c.text }}>{divLabel} Division</span>
          </div>
          {/* Name */}
          <h3 className="pj-card-name">{p.name}</h3>
          {/* Meta */}
          <div className="pj-card-meta">
            <span className="pj-card-badge" style={{ background: c.badgeBg, color: c.text }}>{divLabel}</span>
            <span className="pj-meta-sep">·</span>
            <Briefcase size={11} style={{ color: 'var(--muted)', flexShrink: 0 }} />
            <span className="pj-meta-txt">{p.sector}</span>
            <span className="pj-meta-sep">·</span>
            <Calendar size={11} style={{ color: 'var(--muted)', flexShrink: 0 }} />
            <span className="pj-meta-txt">{p.year}</span>
          </div>
          {/* Client */}
          <div className="pj-card-client">
            <Building2 size={11} style={{ color: 'var(--muted)', flexShrink: 0 }} />
            <span>{p.client}</span>
          </div>
          {/* Blurb */}
          <p className="pj-card-blurb">{p.blurb}</p>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Small SVG icons per division for the card graphic area ── */
function ProjectGraphic({ division }) {
  if (division === 'steel') return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="36" height="8" rx="1.5" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1.5"/>
      <rect x="22" y="18" width="8" height="16" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5"/>
      <rect x="8" y="34" width="36" height="8" rx="1.5" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1.5"/>
      <line x1="8" y1="42" x2="8" y2="48" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
      <line x1="44" y1="42" x2="44" y2="48" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (division === 'wood') return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="6" y="18" width="40" height="16" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5"/>
      <ellipse cx="26" cy="26" rx="12" ry="7" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.7"/>
      <ellipse cx="26" cy="26" rx="7" ry="4" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.5"/>
      <ellipse cx="26" cy="26" rx="3" ry="2" fill="#D97706" opacity="0.4"/>
      <line x1="6" y1="22" x2="46" y2="22" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5"/>
      <line x1="6" y1="30" x2="46" y2="30" stroke="#F59E0B" strokeWidth="0.8" strokeDasharray="2 4" opacity="0.5"/>
    </svg>
  );
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="40" height="7" rx="1" fill="#475569" stroke="#334155" strokeWidth="1.5"/>
      <rect x="6" y="22" width="40" height="7" rx="1" fill="#64748B" stroke="#64748B" strokeWidth="1.5"/>
      <rect x="6" y="32" width="40" height="7" rx="1" fill="#94A3B8" stroke="#94A3B8" strokeWidth="1.5"/>
      <ellipse cx="16" cy="8" rx="2.5" ry="4" fill="#BFDBFE" opacity="0.8"/>
      <ellipse cx="26" cy="6" rx="2.5" ry="4" fill="#BFDBFE" opacity="0.7"/>
      <ellipse cx="36" cy="8" rx="2.5" ry="4" fill="#BFDBFE" opacity="0.8"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════
   CITY PANEL (right-side drawer when pin is clicked)
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
    <div className="city-panel">
      {/* Panel header */}
      <div className="city-panel-head">
        <div>
          <div className="city-panel-loc">
            <MapPin size={14} style={{ color: 'var(--blue)' }} />
            <span>{cityData.city}</span>
          </div>
          <h2 className="city-panel-title">
            {cityData.projects.length} Project{cityData.projects.length !== 1 ? 's' : ''}
          </h2>
          {/* Division breakdown pills */}
          <div className="city-panel-divs">
            {Object.entries(divCounts).map(([div, n]) => {
              const c = DIV_ACCENT[div];
              return (
                <span key={div} className="city-div-pill" style={{ background: c.badgeBg, color: c.text }}>
                  {c.label} × {n}
                </span>
              );
            })}
          </div>
        </div>
        <button className="city-panel-close" onClick={onClose} aria-label="Close panel">
          <X size={18} />
        </button>
      </div>

      {/* Projects list */}
      <div className="city-panel-list">
        {filtered.map(p => {
          const c = DIV_ACCENT[p.division];
          const divLabel = DIVISIONS.find(d => d.id === p.division)?.label ?? p.division;
          return (
            <div key={p.id} className="city-proj-row" style={{ '--cp-accent': c.border, '--cp-badge': c.badgeBg, '--cp-text': c.text }}>
              <div className="city-proj-bar" />
              <div className="city-proj-content">
                <div className="city-proj-top">
                  <span className="city-proj-badge" style={{ background: c.badgeBg, color: c.text }}>{divLabel}</span>
                  <span className={`status-pill ${STATUS_CLASS[p.status] ?? 'status-completed'}`} style={{ fontSize: '0.6rem' }}>{p.status}</span>
                </div>
                <h4 className="city-proj-name">{p.name}</h4>
                <div className="city-proj-meta">
                  <span>{p.sector}</span>
                  <span className="pj-meta-sep">·</span>
                  <span>{p.year}</span>
                  <span className="pj-meta-sep">·</span>
                  <span>{p.client}</span>
                </div>
                <p className="city-proj-blurb">{p.blurb}</p>
              </div>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <p className="city-panel-empty">No projects match this filter for {cityData.city}.</p>
        )}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   PAGE COMPONENT
══════════════════════════════════════════════════════ */
export default function Projects() {
  const [divFilter, setDivFilter] = useState('all');
  const [activeCity, setActiveCity] = useState(null); // city name string
  const panelRef = useRef(null);

  const activeCityData = activeCity ? CITIES.find(c => c.city === activeCity) : null;

  // visible project cards = pinned city (if any) + division filter
  const visibleCards = PROJECTS.filter(p => {
    const divOk = divFilter === 'all' || p.division === divFilter;
    const cityOk = !activeCity || p.city === activeCity;
    return divOk && cityOk;
  });

  // Scroll panel top when city changes
  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [activeCity]);

  // Visible pins = those matching division filter
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
              Government infrastructure, industrial facilities, hospitality fit-outs, and
              giga-project packages — delivered by EGC's own fabrication and site crews.
              Click any city pin to explore that location's projects.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SUMMARY STATS ── */}
      <section className="pj-stats-bar">
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
              <span className="pj-stat-l">Cities &amp; Regions</span>
            </div>
            <div className="pj-stat-divider" />
            <div className="pj-stat">
              <span className="pj-stat-n">3</span>
              <span className="pj-stat-l">Active Divisions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAP + PANEL ── */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">

          {/* Division filter */}
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
            {/* Legend */}
            <span className="pj-filter-sep" />
            {Object.entries(DIV_ACCENT).map(([id, c]) => (
              <span key={id} className="pj-legend-item">
                <span className="pj-legend-dot" style={{ background: c.border }} />
                {c.label}
              </span>
            ))}
          </FadeIn>

          {/* Map + side panel layout */}
          <FadeIn className={`pj-map-layout${activeCityData ? ' pj-map-layout--open' : ''}`}>
            {/* KSA MAP */}
            <div className="pj-map-wrap">
              <svg
                viewBox="0 0 680 562"
                className="pj-ksa-svg"
                aria-label="Map of Saudi Arabia — click a city pin to explore projects"
                role="img"
              >
                <defs>
                  <pattern id="map-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.9" fill="#CBD5E1" opacity="0.5" />
                  </pattern>
                  <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#111" floodOpacity="0.2"/>
                  </filter>
                </defs>

                {/* Dot background */}
                <rect width="680" height="562" fill="url(#map-dots)" />

                {/* KSA outline */}
                <path
                  d={KSA_PATH}
                  fill="#F0F4FF"
                  stroke="#2563EB"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />

                {/* City pins */}
                {visibleCities.map(cd => {
                  const isActive = activeCity === cd.city;
                  const col = cityColour(cd);
                  const n = cd.projects.filter(p => divFilter === 'all' || p.division === divFilter).length;
                  const r = 8 + Math.min(n - 1, 3) * 3; // larger pin for more projects

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
                      {/* Pulse ring when active */}
                      {isActive && (
                        <circle
                          r={r + 10}
                          fill="none"
                          stroke={col}
                          strokeWidth="2"
                          opacity="0.35"
                          className="pj-pin-ring"
                        />
                      )}
                      {/* Shadow */}
                      <circle r={r} fill={col} opacity="0.18" transform="translate(0,3)" />
                      {/* Main pin */}
                      <circle
                        r={r}
                        fill={isActive ? col : '#fff'}
                        stroke={col}
                        strokeWidth="2.5"
                        filter={isActive ? 'url(#pin-shadow)' : undefined}
                      />
                      {/* Project count */}
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
                      {/* City label */}
                      <text
                        x="0"
                        y={-(r + 7)}
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

            {/* CITY PANEL */}
            {activeCityData && (
              <div className="city-panel-wrap" ref={panelRef}>
                <CityPanel
                  cityData={activeCityData}
                  divFilter={divFilter}
                  onClose={() => setActiveCity(null)}
                />
              </div>
            )}

            {/* Empty map state hint */}
            {!activeCityData && (
              <div className="pj-map-hint">
                <div className="pj-map-hint-inner">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="18" cy="18" r="17" stroke="#2563EB" strokeWidth="1.5" fill="#EFF6FF"/>
                    <path d="M18 10v8l4 4" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                  <p className="pj-map-hint-title">Select a city</p>
                  <p className="pj-map-hint-sub">Click any numbered pin on the map to explore projects in that city or region.</p>
                  <div className="pj-map-hint-legend">
                    {Object.entries(DIV_ACCENT).map(([id, c]) => (
                      <span key={id} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.78rem', color: 'var(--muted)', fontWeight: 500 }}>
                        <span style={{ width: 10, height: 10, borderRadius: 2, background: c.border, display: 'inline-block' }} />
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </FadeIn>

        </div>
      </section>

      {/* ── ALL PROJECTS GRID ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="pj-all-head">
            <div>
              <p className="overline">All Projects</p>
              <h2 className="headline-md" style={{ marginBottom: 0 }}>
                {activeCity ? `${visibleCards.length} project${visibleCards.length !== 1 ? 's' : ''} in ${activeCity}` : `${visibleCards.length} project${visibleCards.length !== 1 ? 's' : ''} shown`}
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
            <p className="pj-empty">No projects match the current filters — try selecting a different division.</p>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">Your Project</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Discuss your scope with our team.</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Whether you have tender documents or just a concept, we're ready to discuss
              how EGC can deliver — steel, timber, or lead sheet.
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
        .pj-stats-bar { background: var(--dark); padding: 0; }
        .pj-stats-inner { display: flex; align-items: stretch; }
        .pj-stat { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 36px 20px; text-align: center; }
        .pj-stat-divider { width: 1px; background: rgba(255,255,255,0.1); margin: 20px 0; flex-shrink: 0; }
        .pj-stat-n { font-family: var(--font-display); font-size: 2.4rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 6px; display: block; }
        .pj-stat-l { font-size: 0.72rem; font-weight: 500; color: rgba(255,255,255,0.5); letter-spacing: 0.07em; text-transform: uppercase; }

        /* ── Filter row ── */
        .pj-filter-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }
        .pj-filter-sep { width: 1px; height: 20px; background: var(--border); margin: 0 4px; }
        .pj-legend-item { display: flex; align-items: center; gap: 5px; font-size: 0.78rem; color: var(--muted); font-weight: 500; }
        .pj-legend-dot { width: 9px; height: 9px; border-radius: 2px; flex-shrink: 0; }

        /* ── Map layout ── */
        .pj-map-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #fff;
          transition: grid-template-columns 0.3s ease;
        }
        .pj-map-layout--open {
          grid-template-columns: 1fr 360px;
        }
        .pj-map-wrap {
          background: linear-gradient(135deg, #F0F4FF 0%, #F8FAFC 100%);
          padding: 16px;
          border-right: 1.5px solid var(--border);
        }
        .pj-ksa-svg { width: 100%; height: auto; max-height: 480px; display: block; }
        .pj-map-caption { text-align: center; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; margin-top: 10px; }

        /* Pin animations */
        .pj-pin-ring { animation: pinPulse 2s ease-out infinite; }
        @keyframes pinPulse { 0% { r: 18; opacity: 0.5; } 100% { r: 32; opacity: 0; } }

        /* ── Map hint panel ── */
        .city-panel-wrap {
          overflow-y: auto;
          max-height: 520px;
          background: #fff;
        }
        .pj-map-hint {
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--gray-bg);
          border-left: 1.5px solid var(--border);
        }
        .pj-map-hint-inner {
          text-align: center;
          padding: 40px 28px;
          max-width: 220px;
        }
        .pj-map-hint-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--dark); margin: 12px 0 6px; }
        .pj-map-hint-sub { font-size: 0.82rem; color: var(--muted); line-height: 1.6; margin: 0 0 20px; }
        .pj-map-hint-legend { display: flex; flex-direction: column; gap: 8px; text-align: left; }

        /* ── City panel ── */
        .city-panel { height: 100%; display: flex; flex-direction: column; }
        .city-panel-head {
          padding: 20px 20px 16px;
          border-bottom: 1.5px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          position: sticky;
          top: 0;
          background: #fff;
          z-index: 1;
        }
        .city-panel-loc { display: flex; align-items: center; gap: 5px; font-size: 0.7rem; font-weight: 700; color: var(--blue); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 4px; }
        .city-panel-title { font-family: var(--font-display); font-size: 1.4rem; font-weight: 800; color: var(--dark); margin: 0 0 10px; line-height: 1.1; }
        .city-panel-divs { display: flex; flex-wrap: wrap; gap: 6px; }
        .city-div-pill { font-size: 0.65rem; font-weight: 700; padding: 3px 9px; border-radius: 999px; }
        .city-panel-close {
          width: 32px; height: 32px; border-radius: 8px; background: var(--gray-bg); border: 1.5px solid var(--border);
          display: flex; align-items: center; justify-content: center; color: var(--muted); cursor: pointer;
          flex-shrink: 0; transition: background var(--transition), color var(--transition);
        }
        .city-panel-close:hover { background: var(--dark); color: #fff; border-color: var(--dark); }
        .city-panel-list { flex: 1; overflow-y: auto; padding: 12px 0; }
        .city-panel-empty { color: var(--muted); font-size: 0.9rem; padding: 24px 20px; text-align: center; margin: 0; }

        /* City panel project row */
        .city-proj-row {
          display: flex;
          gap: 0;
          margin: 0 16px 10px;
          border: 1.5px solid var(--border);
          border-radius: 10px;
          overflow: hidden;
          transition: box-shadow var(--transition), border-color var(--transition);
        }
        .city-proj-row:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); border-color: var(--cp-accent); }
        .city-proj-bar { width: 3px; background: var(--cp-accent); flex-shrink: 0; }
        .city-proj-content { padding: 14px 14px 14px; flex: 1; min-width: 0; }
        .city-proj-top { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; flex-wrap: wrap; }
        .city-proj-badge { font-size: 0.62rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .city-proj-name { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--dark); margin: 0 0 5px; line-height: 1.3; }
        .city-proj-meta { font-size: 0.72rem; color: var(--muted); display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 6px; }
        .city-proj-blurb { font-size: 0.78rem; color: var(--muted); line-height: 1.55; margin: 0; }

        /* ── All projects head ── */
        .pj-all-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 28px;
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
          display: flex;
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .pj-card:hover { transform: translateY(-4px); box-shadow: 0 10px 36px rgba(0,0,0,0.08); border-color: var(--pj-accent); }
        .pj-card-bar { width: 4px; background: var(--pj-accent); flex-shrink: 0; }
        .pj-card-inner { padding: 18px 18px 20px; flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 0; }
        .pj-card-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 6px; margin-bottom: 10px; }
        .pj-card-city-label { font-size: 0.62rem; font-weight: 800; letter-spacing: 0.12em; }
        .pj-card-graphic {
          width: 100%; aspect-ratio: 16/8; border-radius: 8px;
          border: 1.5px solid; margin-bottom: 14px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 6px;
        }
        .pj-card-graphic-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; }
        .pj-card-name { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); line-height: 1.3; margin: 0 0 10px; }
        .pj-card-meta { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; margin-bottom: 6px; }
        .pj-card-badge { font-size: 0.65rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .pj-meta-sep { color: var(--muted); font-size: 0.7rem; }
        .pj-meta-txt { font-size: 0.75rem; color: var(--muted); font-weight: 500; }
        .pj-card-client { display: flex; align-items: center; gap: 5px; font-size: 0.75rem; color: var(--muted); margin-bottom: 10px; }
        .pj-card-blurb { font-size: 0.84rem; color: var(--muted); line-height: 1.65; margin: 0; flex: 1; }

        /* ── Empty state ── */
        .pj-empty { text-align: center; padding: 56px 24px; color: var(--muted); font-size: 1rem; margin: 0; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .pj-map-layout--open { grid-template-columns: 1fr 300px; }
        }
        @media (max-width: 860px) {
          .pj-map-layout--open { grid-template-columns: 1fr; }
          .city-panel-wrap { max-height: 380px; border-top: 1.5px solid var(--border); }
          .pj-map-wrap { border-right: none; }
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
