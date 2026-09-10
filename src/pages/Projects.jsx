import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, MapPin, Building2, Calendar, Briefcase } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';

/* Colours are locale-independent; labels are pulled from PROJECT_FILTERS. */
const DIV_ACCENT = {
  shielding:     { border: '#0EA5E9', light: '#F0F9FF', mid: '#BAE6FD', text: '#0369A1', badgeBg: '#BAE6FD' },
  doors:         { border: '#7C3AED', light: '#F5F3FF', mid: '#DDD6FE', text: '#5B21B6', badgeBg: '#DDD6FE' },
  mep:           { border: '#059669', light: '#ECFDF5', mid: '#A7F3D0', text: '#065F46', badgeBg: '#A7F3D0' },
  surfaces:      { border: '#D97706', light: '#FFFBEB', mid: '#FDE68A', text: '#92400E', badgeBg: '#FDE68A' },
  manufacturing: { border: '#475569', light: '#F1F5F9', mid: '#CBD5E1', text: '#1E293B', badgeBg: '#CBD5E1' },
};

const STATUS_CLASS = { completed: 'status-completed', ongoing: 'status-ongoing', mobilizing: 'status-mobilizing' };

function DivisionGraphic({ division, size = 40 }) {
  const s = size;
  if (division === 'mep') return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="8" y="10" width="36" height="8" rx="1.5" fill="#A7F3D0" stroke="#059669" strokeWidth="1.5"/>
      <rect x="22" y="18" width="8" height="16" fill="#D1FAE5" stroke="#059669" strokeWidth="1.5"/>
      <rect x="8" y="34" width="36" height="8" rx="1.5" fill="#A7F3D0" stroke="#059669" strokeWidth="1.5"/>
      <line x1="8" y1="42" x2="8" y2="48" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
      <line x1="44" y1="42" x2="44" y2="48" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (division === 'surfaces') return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="6" y="18" width="40" height="16" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5"/>
      <ellipse cx="26" cy="26" rx="12" ry="7" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.7"/>
      <ellipse cx="26" cy="26" rx="7" ry="4" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.5"/>
      <ellipse cx="26" cy="26" rx="3" ry="2" fill="#D97706" opacity="0.4"/>
    </svg>
  );
  if (division === 'doors') return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="14" y="8" width="24" height="38" rx="1.5" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5"/>
      <circle cx="32" cy="27" r="1.8" fill="#7C3AED"/>
      <line x1="14" y1="46" x2="38" y2="46" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
  if (division === 'shielding') return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <path d="M26 6 L42 12 V26 C42 36 35 43 26 46 C17 43 10 36 10 26 V12 Z" fill="#E0F2FE" stroke="#0EA5E9" strokeWidth="1.5"/>
      <path d="M26 16 V36 M18 26 H34" stroke="#0369A1" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  return (
    <svg width={s} height={s} viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <rect x="6" y="12" width="40" height="7" rx="1" fill="#475569" stroke="#334155" strokeWidth="1.5"/>
      <rect x="6" y="22" width="40" height="7" rx="1" fill="#64748B" stroke="#64748B" strokeWidth="1.5"/>
      <rect x="6" y="32" width="40" height="7" rx="1" fill="#94A3B8" stroke="#94A3B8" strokeWidth="1.5"/>
    </svg>
  );
}

function ProjectCard({ p, delay = 1, filterLabels, statusKeys }) {
  const c = DIV_ACCENT[p.service] ?? DIV_ACCENT.shielding;
  const divLabel = filterLabels[p.service] ?? p.service;
  return (
    <FadeIn delay={delay}>
      <div className="pj-card" style={{ '--pj-accent': c.border, '--pj-badge': c.badgeBg, '--pj-text': c.text }}>
        <div className="pj-card-graphic" style={{ background: c.light, borderColor: c.mid }}>
          <DivisionGraphic division={p.service} size={44} />
          <span className="pj-card-graphic-label" style={{ color: c.text }}>{divLabel}</span>
          <span className={`status-pill ${STATUS_CLASS[statusKeys[p.id]] ?? 'status-completed'} pj-card-status`}>{p.status}</span>
        </div>
        <div className="pj-card-body">
          <div className="pj-card-top">
            <span className="pj-card-city-lbl" style={{ color: c.border }}>
              <MapPin size={10} style={{ display: 'inline-block' }} /> {p.city}
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

function CityPanel({ cityData, onClose, divFilter, filterLabels, statusKeys, t }) {
  const filtered = divFilter === 'all' ? cityData.projects : cityData.projects.filter((p) => p.service === divFilter);
  const divCounts = cityData.projects.reduce((acc, p) => { acc[p.service] = (acc[p.service] || 0) + 1; return acc; }, {});

  return (
    <div className="cp-root">
      <div className="cp-head">
        <div className="cp-head-left">
          <div className="cp-city-row">
            <MapPin size={13} style={{ color: 'var(--blue)', flexShrink: 0 }} />
            <span className="cp-city-name">{cityData.city}</span>
          </div>
          <p className="cp-project-count">
            {cityData.projects.length} {cityData.projects.length !== 1 ? t.cityPanelProjectsSuffix : t.cityPanelProjectSuffix}
          </p>
          <div className="cp-div-pills">
            {Object.entries(divCounts).map(([div, n]) => {
              const c = DIV_ACCENT[div];
              if (!c) return null;
              return (
                <span key={div} className="cp-div-pill" style={{ background: c.badgeBg, color: c.text }}>
                  {filterLabels[div]} × {n}
                </span>
              );
            })}
          </div>
        </div>
        <button className="cp-close-btn" onClick={onClose} aria-label={t.closePanel}>
          <X size={16} />
        </button>
      </div>

      <div className="cp-list">
        {filtered.length === 0 ? (
          <p className="cp-empty">{t.cityPanelEmpty} {cityData.city}.</p>
        ) : filtered.map((p) => {
          const c = DIV_ACCENT[p.service] ?? DIV_ACCENT.shielding;
          const divLabel = filterLabels[p.service] ?? p.service;
          return (
            <div key={p.id} className="cp-row" style={{ '--cpr-accent': c.border }}>
              <div className="cp-row-graphic" style={{ background: c.light, borderColor: c.mid }}>
                <DivisionGraphic division={p.service} size={32} />
              </div>
              <div className="cp-row-content">
                <div className="cp-row-top">
                  <span className="cp-row-badge" style={{ background: c.badgeBg, color: c.text }}>{divLabel}</span>
                  <span className={`status-pill ${STATUS_CLASS[statusKeys[p.id]] ?? 'status-completed'}`} style={{ fontSize: '0.58rem' }}>{p.status}</span>
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
              <div className="cp-row-bar" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Projects() {
  const locale = useLocale();
  const { PROJECTS, PROJECT_FILTERS, KSA_PATH, STATUS_KEYS, STATS, COPY } = useContent();
  const t = COPY.projects;
  const to = (segment) => `/${locale}/${segment}`;
  const FILTER_LABELS = Object.fromEntries(PROJECT_FILTERS.map((f) => [f.id, f.label]));

  const [divFilter, setDivFilter] = useState('all');
  const [activeCity, setActiveCity] = useState(null);
  const panelRef = useRef(null);

  const CITIES = Array.from(
    PROJECTS.reduce((m, p) => {
      if (!m.has(p.city)) m.set(p.city, { city: p.city, x: p.x, y: p.y, projects: [] });
      m.get(p.city).projects.push(p);
      return m;
    }, new Map()).values(),
  );

  function cityColour(cityData) {
    const counts = {};
    cityData.projects.forEach((p) => { counts[p.service] = (counts[p.service] || 0) + 1; });
    const dom = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    return DIV_ACCENT[dom]?.border ?? '#0EA5E9';
  }

  const ACTIVE_COUNT = PROJECTS.filter((p) => STATUS_KEYS[p.id] !== 'completed').length;
  const CITY_COUNT = CITIES.length;

  const activeCityData = activeCity ? CITIES.find((c) => c.city === activeCity) : null;

  const visibleCards = PROJECTS.filter((p) => {
    const divOk = divFilter === 'all' || p.service === divFilter;
    const cityOk = !activeCity || p.city === activeCity;
    return divOk && cityOk;
  });

  useEffect(() => {
    if (panelRef.current) panelRef.current.scrollTop = 0;
  }, [activeCity]);

  const visibleCities = CITIES.filter((cd) => divFilter === 'all' || cd.projects.some((p) => p.service === divFilter));

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: t.pageTitle }]}
        overline={t.pageOverline}
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        decorNum="05"
      />

      <div className="pj-stats-bar">
        <div className="container">
          <div className="pj-stats-inner">
            <div className="pj-stat"><span className="pj-stat-n">{STATS[0].n}</span><span className="pj-stat-l">{t.statDelivered}</span></div>
            <div className="pj-stat-divider" />
            <div className="pj-stat"><span className="pj-stat-n">{ACTIVE_COUNT}</span><span className="pj-stat-l">{t.statActive}</span></div>
            <div className="pj-stat-divider" />
            <div className="pj-stat"><span className="pj-stat-n">{CITY_COUNT}</span><span className="pj-stat-l">{t.statCities}</span></div>
            <div className="pj-stat-divider" />
            <div className="pj-stat"><span className="pj-stat-n">4</span><span className="pj-stat-l">{t.statServiceLines}</span></div>
          </div>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--gray-bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <FadeIn className="pj-filter-row">
            {PROJECT_FILTERS.map((f) => (
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
                {FILTER_LABELS[id]}
              </span>
            ))}
          </FadeIn>

          <FadeIn className="pj-workspace">
            <div className="pj-map-col">
              <svg viewBox="0 0 680 562" className="pj-ksa-svg" aria-label={t.mapCaption}>
                <defs>
                  <pattern id="map-dots" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.9" fill="#CBD5E1" opacity="0.45" />
                  </pattern>
                  <filter id="pin-shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#111" floodOpacity="0.22"/>
                  </filter>
                </defs>
                <rect width="680" height="562" fill="url(#map-dots)" />
                <path d={KSA_PATH} fill="#EEF3FF" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
                {visibleCities.map((cd) => {
                  const isActive = activeCity === cd.city;
                  const col = cityColour(cd);
                  const n = cd.projects.filter((p) => divFilter === 'all' || p.service === divFilter).length;
                  const r = 9 + Math.min(n - 1, 3) * 3;
                  return (
                    <g
                      key={cd.city}
                      transform={`translate(${cd.x},${cd.y})`}
                      onClick={() => setActiveCity(isActive ? null : cd.city)}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveCity(isActive ? null : cd.city); }}
                      role="button"
                      tabIndex={0}
                      aria-label={`${cd.city} — ${n}`}
                      style={{ cursor: 'pointer', outline: 'none' }}
                    >
                      {isActive && <circle r={r + 10} fill="none" stroke={col} strokeWidth="2" opacity="0.3" className="pj-pin-pulse" />}
                      <circle r={r} fill={col} opacity="0.15" transform="translate(0,3)" />
                      <circle r={r} fill={isActive ? col : '#ffffff'} stroke={col} strokeWidth="2.5" filter={isActive ? 'url(#pin-shadow)' : undefined} />
                      <text textAnchor="middle" dominantBaseline="central" fontSize={n > 9 ? '8' : '9'} fontFamily="Inter,sans-serif" fontWeight="800" fill={isActive ? '#fff' : col}>{n}</text>
                      <text x="0" y={-(r + 8)} textAnchor="middle" fontSize="9" fontFamily="Inter,sans-serif" fontWeight="700" fill={isActive ? col : '#374151'} stroke="#fff" strokeWidth="3" paintOrder="stroke">{cd.city}</text>
                    </g>
                  );
                })}
              </svg>
              <p className="pj-map-caption">{t.mapCaption}</p>
            </div>

            <div className="pj-panel-col" ref={panelRef}>
              {activeCityData ? (
                <CityPanel
                  cityData={activeCityData}
                  onClose={() => setActiveCity(null)}
                  divFilter={divFilter}
                  filterLabels={FILTER_LABELS}
                  statusKeys={STATUS_KEYS}
                  t={t}
                />
              ) : (
                <div className="pj-hint">
                  <div className="pj-hint-icon"><MapPin size={24} style={{ color: 'var(--blue)' }} /></div>
                  <p className="pj-hint-title">{t.hintTitle}</p>
                  <p className="pj-hint-sub">{t.hintSub}</p>
                  <div className="pj-hint-dividers">
                    {Object.entries(DIV_ACCENT).map(([id, c]) => (
                      <div key={id} className="pj-hint-div-row">
                        <span className="pj-hint-div-swatch" style={{ background: c.border }} />
                        <span>{FILTER_LABELS[id]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FadeIn className="pj-grid-head">
            <div>
              <p className="overline">{t.allProjectsLabel}</p>
              <h2 className="headline-md" style={{ marginBottom: 0 }}>
                {activeCity
                  ? `${visibleCards.length} ${t.projectsInSuffix} ${activeCity}`
                  : `${visibleCards.length} ${t.projectsShownSuffix}`}
              </h2>
            </div>
            {activeCity && (
              <button className="pj-clear-btn" onClick={() => setActiveCity(null)}>
                <X size={13} /> {t.clearCityFilter}
              </button>
            )}
          </FadeIn>

          <div className="pj-grid">
            {visibleCards.map((p, i) => (
              <ProjectCard key={p.id} p={p} delay={(i % 3) + 1} filterLabels={FILTER_LABELS} statusKeys={STATUS_KEYS} />
            ))}
          </div>

          {visibleCards.length === 0 && <p className="pj-empty">{t.emptyState}</p>}
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">{t.ctaOverline}</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>{t.ctaHeadline}</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>{t.ctaSub}</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to={to('contact')} className="btn btn-primary btn-lg">{t.ctaPrimary}</Link>
              <Link to={to('what-we-build')} className="btn btn-secondary btn-lg">{t.ctaSecondary}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .pj-stats-bar { background: var(--dark); }
        .pj-stats-inner { display: flex; align-items: stretch; }
        .pj-stat { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 32px 20px; text-align: center; }
        .pj-stat-divider { width: 1px; background: rgba(255,255,255,0.1); margin: 16px 0; flex-shrink: 0; }
        .pj-stat-n { font-family: var(--font-display); font-size: 2.2rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 6px; display: block; }
        .pj-stat-l { font-size: 0.7rem; font-weight: 500; color: rgba(255,255,255,0.5); letter-spacing: 0.07em; text-transform: uppercase; }

        .pj-filter-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin-bottom: 20px; }
        .pj-filter-sep { width: 1px; height: 20px; background: var(--border); margin: 0 4px; flex-shrink: 0; }
        .pj-legend-item { display: flex; align-items: center; gap: 5px; font-size: 0.78rem; color: var(--muted); font-weight: 500; }
        .pj-legend-dot { width: 9px; height: 9px; border-radius: 2px; flex-shrink: 0; }

        .pj-workspace { display: flex; gap: 0; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: #fff; min-height: 480px; }
        .pj-map-col { flex: 0 0 56%; min-width: 360px; background: linear-gradient(145deg, #EEF3FF 0%, #F7F9FF 100%); padding: 20px 16px 12px; border-inline-end: 1.5px solid var(--border); display: flex; flex-direction: column; }
        .pj-ksa-svg { width: 100%; flex: 1; display: block; height: auto; }
        .pj-map-caption { text-align: center; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.12em; color: var(--muted); text-transform: uppercase; margin-top: 8px; flex-shrink: 0; }
        .pj-pin-pulse { animation: pinPulse 1.8s ease-out infinite; }
        @keyframes pinPulse { 0% { r: 20; opacity: 0.4; } 100% { r: 36; opacity: 0; } }
        .pj-panel-col { flex: 1 1 0; min-width: 0; overflow-y: auto; max-height: 520px; display: flex; flex-direction: column; }

        .pj-hint { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 48px 32px; height: 100%; background: var(--gray-bg); }
        .pj-hint-icon { width: 56px; height: 56px; background: var(--blue-light); border: 1.5px solid var(--blue-mid); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .pj-hint-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--dark); margin: 0 0 8px; }
        .pj-hint-sub { font-size: 0.84rem; color: var(--muted); line-height: 1.6; margin: 0 0 24px; max-width: 220px; }
        .pj-hint-dividers { display: flex; flex-direction: column; gap: 8px; text-align: start; width: 100%; max-width: 180px; }
        .pj-hint-div-row { display: flex; align-items: center; gap: 8px; font-size: 0.78rem; color: var(--muted); font-weight: 500; }
        .pj-hint-div-swatch { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }

        .cp-root { display: flex; flex-direction: column; height: 100%; }
        .cp-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 20px 20px 16px; border-bottom: 1.5px solid var(--border); position: sticky; top: 0; background: #fff; z-index: 2; flex-shrink: 0; }
        .cp-head-left { min-width: 0; }
        .cp-city-row { display: flex; align-items: center; gap: 5px; margin-bottom: 3px; }
        .cp-city-name { font-size: 0.7rem; font-weight: 700; color: var(--blue); text-transform: uppercase; letter-spacing: 0.1em; }
        .cp-project-count { font-family: var(--font-display); font-size: 1.25rem; font-weight: 800; color: var(--dark); margin: 0 0 10px; line-height: 1.15; }
        .cp-div-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .cp-div-pill { font-size: 0.62rem; font-weight: 700; padding: 2px 8px; border-radius: 999px; }
        .cp-close-btn { width: 32px; height: 32px; border-radius: 8px; background: var(--gray-bg); border: 1.5px solid var(--border); display: flex; align-items: center; justify-content: center; color: var(--muted); flex-shrink: 0; cursor: pointer; transition: background var(--transition), color var(--transition), border-color var(--transition); }
        .cp-close-btn:hover { background: var(--dark); color: #fff; border-color: var(--dark); }

        .cp-list { flex: 1; overflow-y: auto; padding: 12px 0 16px; }
        .cp-empty { color: var(--muted); font-size: 0.88rem; padding: 24px; text-align: center; margin: 0; }
        .cp-row { display: flex; gap: 12px; margin: 0 14px 10px; padding: 14px; border: 1.5px solid var(--border); border-radius: 10px; position: relative; overflow: hidden; transition: box-shadow 0.2s ease, border-color 0.2s ease; background: #fff; }
        .cp-row:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); border-color: var(--cpr-accent); }
        .cp-row-bar { position: absolute; top: 0; inset-inline-start: 0; bottom: 0; width: 3px; background: var(--cpr-accent); }
        .cp-row-graphic { flex-shrink: 0; width: 52px; height: 52px; border-radius: 8px; border: 1.5px solid; display: flex; align-items: center; justify-content: center; margin-inline-start: 3px; }
        .cp-row-content { flex: 1; min-width: 0; }
        .cp-row-top { display: flex; align-items: center; gap: 6px; margin-bottom: 5px; flex-wrap: wrap; }
        .cp-row-badge { font-size: 0.6rem; font-weight: 700; padding: 2px 7px; border-radius: 4px; }
        .cp-row-name { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--dark); margin: 0 0 5px; line-height: 1.3; }
        .cp-row-meta { font-size: 0.7rem; color: var(--muted); display: flex; gap: 5px; flex-wrap: wrap; margin-bottom: 5px; align-items: center; }
        .cp-row-blurb { font-size: 0.78rem; color: var(--muted); line-height: 1.55; margin: 0; }

        .pj-grid-head { display: flex; justify-content: space-between; align-items: center; gap: 16px; flex-wrap: wrap; margin-bottom: 28px; }
        .pj-clear-btn { display: flex; align-items: center; gap: 6px; font-size: 0.82rem; font-weight: 600; color: var(--blue); background: var(--blue-light); border: 1.5px solid var(--blue-mid); border-radius: 999px; padding: 6px 14px; cursor: pointer; transition: background var(--transition); }
        .pj-clear-btn:hover { background: var(--blue-mid); }

        .pj-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .pj-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; height: 100%; }
        .pj-card:hover { transform: translateY(-4px); box-shadow: 0 10px 36px rgba(0,0,0,0.08); border-color: var(--pj-accent); }
        .pj-card-graphic { width: 100%; aspect-ratio: 16/7; border-bottom: 1.5px solid; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; position: relative; flex-shrink: 0; }
        .pj-card-graphic-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; }
        .pj-card-status { position: absolute; top: 10px; inset-inline-end: 10px; }
        .pj-card-body { padding: 16px 16px 20px; display: flex; flex-direction: column; flex: 1; }
        .pj-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; gap: 6px; }
        .pj-card-city-lbl { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; display: flex; align-items: center; gap: 3px; }
        .pj-card-badge { font-size: 0.62rem; font-weight: 700; padding: 2px 8px; border-radius: 4px; }
        .pj-card-name { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); line-height: 1.3; margin: 0 0 8px; }
        .pj-card-meta { display: flex; align-items: center; gap: 5px; flex-wrap: wrap; margin-bottom: 5px; font-size: 0.75rem; color: var(--muted); }
        .pj-meta-sep { color: var(--muted); font-size: 0.7rem; }
        .pj-card-client { display: flex; align-items: center; gap: 5px; font-size: 0.74rem; color: var(--muted); margin-bottom: 10px; }
        .pj-card-blurb { font-size: 0.83rem; color: var(--muted); line-height: 1.65; margin: 0; flex: 1; }

        .pj-empty { text-align: center; padding: 56px 24px; color: var(--muted); font-size: 1rem; margin: 0; }

        @media (max-width: 1024px) { .pj-map-col { flex-basis: 50%; } }
        @media (max-width: 860px) {
          .pj-workspace { flex-direction: column; min-height: unset; }
          .pj-map-col { flex: none; width: 100%; min-width: unset; border-inline-end: none; border-bottom: 1.5px solid var(--border); }
          .pj-panel-col { max-height: 400px; }
          .pj-grid { grid-template-columns: repeat(2, 1fr); }
          .pj-stats-inner { flex-wrap: wrap; }
          .pj-stat { flex: 0 0 50%; }
          .pj-stat-divider { display: none; }
        }
        @media (max-width: 580px) { .pj-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
