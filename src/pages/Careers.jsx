import { useState } from 'react';
import { Building2, ShieldCheck, TrendingUp, Wrench } from 'lucide-react';
import { useContent } from '../content';
import { CtaBand, PageHero, SectionHead } from '../components/Parts';
import './pages.css';

const CULTURE_ICONS = { wrench: Wrench, building: Building2, 'trending-up': TrendingUp, 'shield-check': ShieldCheck };

export default function Careers() {
  const { SITE, CAREERS, CAREER_FILTERS, CULTURE, COPY } = useContent();
  const t = COPY.careers;
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? CAREERS : CAREERS.filter((c) => c.dept === filter);
  const deptLabel = (id) => CAREER_FILTERS.find((f) => f.id === id)?.label ?? id;
  const applyHref = (title) =>
    `mailto:${SITE.email}?subject=${encodeURIComponent(t.applySubject + title)}&body=${encodeURIComponent(t.applyBody + title)}`;
  const openHref = `mailto:${SITE.email}?subject=${encodeURIComponent(t.mailSubject)}&body=${encodeURIComponent(t.mailBody)}`;

  return (
    <>
      <PageHero routeKey="careers" title={t.h1} lead={t.lead} />

      <section className="sec">
        <div className="wrap">
          <SectionHead title={t.whyTitle} />
          <div className="grid-4 lines">
            {CULTURE.map((c) => {
              const Icon = CULTURE_ICONS[c.icon];
              return (
                <article key={c.title} className="line-block">
                  <Icon size={26} strokeWidth={1.6} className="line-block__icon" aria-hidden="true" />
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={t.positionsTitle} />
          <div className="chip-row jobs-filters" role="group">
            {CAREER_FILTERS.map((f) => (
              <button key={f.id} type="button" className="chip" aria-pressed={filter === f.id} onClick={() => setFilter(f.id)}>
                {f.label}
              </button>
            ))}
          </div>
          <ul className="jobs">
            {list.map((c) => (
              <li key={c.title} className="job">
                <div className="job__main">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="job__meta">
                  <span className="tag">{deptLabel(c.dept)}</span>
                  <span className="small">{c.location}, {c.type}</span>
                </div>
                <a className="btn btn--ghost btn--sm" href={applyHref(c.title)}>{t.apply}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title={t.openAppTitle}
        text={t.openAppText}
        primary={{ label: t.openAppButton, to: openHref }}
      />
    </>
  );
}
