import { Building2, ShieldCheck, TrendingUp, Wrench } from 'lucide-react';
import { useContent } from '../content';
import { CtaBand, PageHero, SectionHead } from '../components/Parts';
import './pages.css';

const CULTURE_ICONS = { wrench: Wrench, building: Building2, 'trending-up': TrendingUp, 'shield-check': ShieldCheck };

export default function Careers() {
  const { SITE, CAREERS, CULTURE, COPY } = useContent();
  const t = COPY.careers;
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
          <ul className="jobs">
            {CAREERS.map((c) => (
              <li key={c.title} className="job">
                <div className="job__main">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
                <div className="job__meta">
                  <span className="tag">{c.team}</span>
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
