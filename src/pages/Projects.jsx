import { useState } from 'react';
import { Cable, DoorOpen, Factory, Layers, Shield, X } from 'lucide-react';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import KsaMap from '../components/KsaMap';
import { CtaBand, PageHero } from '../components/Parts';
import './Projects.css';

const SVC_ICON = { shielding: Shield, doors: DoorOpen, mep: Cable, surfaces: Layers, manufacturing: Factory };
const STATUS_CLASS = { completed: 'status-completed', ongoing: 'status-ongoing' };

function Project({ p, filterLabels, statusKeys, sep }) {
  const Icon = SVC_ICON[p.service] || Shield;
  return (
    <article className="pcard">
      <div className="pcard__top">
        <span className="pcard__svc"><Icon size={16} aria-hidden="true" />{filterLabels[p.service]}</span>
        <span className={`status-pill ${STATUS_CLASS[statusKeys[p.id]]}`}>{p.status}</span>
      </div>
      <h3>{p.name}</h3>
      <p className="pcard__meta">{p.city}{sep} {p.year}</p>
      <p>{p.blurb}</p>
      <p className="small">{p.client}{sep} {p.sector}</p>
    </article>
  );
}

export default function Projects() {
  const lp = useLocalePath();
  const { locale, PROJECTS, PROJECT_FILTERS, KSA_PATH, STATUS_KEYS, COPY, SITE, UI } = useContent();
  const t = COPY.projects;
  const [filter, setFilter] = useState('all');
  const [city, setCity] = useState(null);
  const labels = Object.fromEntries(PROJECT_FILTERS.map((f) => [f.id, f.label]));

  const inFilter = (p) => filter === 'all' || p.service === filter;
  const pins = Object.values(
    PROJECTS.filter(inFilter).reduce((acc, p) => {
      acc[p.city] ??= { city: p.city, x: p.x, y: p.y, count: 0 };
      acc[p.city].count += 1;
      return acc;
    }, {}),
  );
  const visible = PROJECTS.filter((p) => inFilter(p) && (!city || p.city === city));
  const cities = new Set(PROJECTS.map((p) => p.city)).size;
  const active = PROJECTS.filter((p) => STATUS_KEYS[p.id] !== 'completed').length;
  const sep = locale === 'ar' ? '،' : ',';

  return (
    <>
      <PageHero routeKey="projects" title={t.h1} lead={t.lead} />

      <section className="sec sec--tight">
        <div className="wrap">
          <p className="notice-inline">{t.notice}</p>

          <dl className="pstats">
            <div><dt>{t.statDelivered}</dt><dd>150+</dd></div>
            <div><dt>{t.statActive}</dt><dd>{active}</dd></div>
            <div><dt>{t.statCities}</dt><dd>{cities}</dd></div>
            <div><dt>{t.statRegions}</dt><dd>9</dd></div>
          </dl>

          <div className="chip-row pfilters" role="group">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                className="chip"
                aria-pressed={filter === f.id}
                onClick={() => { setFilter(f.id); setCity(null); }}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="pwork">
            <div className="pwork__map">
              <KsaMap path={KSA_PATH} pins={pins} activeCity={city} onSelect={setCity} label={t.mapLabel} />
            </div>
            <div className="pwork__panel" aria-live="polite">
              {city ? (
                <>
                  <div className="pwork__head">
                    <h2>{city}</h2>
                    <button type="button" className="icon-btn" onClick={() => setCity(null)} aria-label={t.close}><X size={18} /></button>
                  </div>
                  <ul>
                    {PROJECTS.filter((p) => inFilter(p) && p.city === city).map((p) => (
                      <li key={p.id}>
                        <strong>{p.name}</strong>
                        <span>{p.year}{sep} {p.status}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <h2>{t.hintTitle}</h2>
                  <p className="muted">{t.hintText}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <div className="pgrid-head">
            <h2>
              {`${PROJECT_FILTERS.find((f) => f.id === filter)?.label ?? t.allProjects}${city ? ` ${t.inCity} ${city}` : ''} (${visible.length})`}
            </h2>
            {city && <button type="button" className="chip" onClick={() => setCity(null)}>{t.clearCity}</button>}
          </div>
          <div className="grid-3">
            {visible.map((p) => <Project key={p.id} p={p} filterLabels={labels} statusKeys={STATUS_KEYS} sep={sep} />)}
          </div>
          {visible.length === 0 && <p className="muted">{t.empty}</p>}
        </div>
      </section>

      <CtaBand
        title={t.ctaTitle}
        text={t.ctaText}
        primary={{ label: UI.requestProposal, to: lp('contact') }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}
