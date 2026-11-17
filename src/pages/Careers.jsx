import { Building2, ShieldCheck, TrendingUp, Wrench } from 'lucide-react';
import { useContent } from '../content';
import { PageHero, SectionHead } from '../components/Parts';
import './pages.css';

const CULTURE_ICONS = { wrench: Wrench, building: Building2, 'trending-up': TrendingUp, 'shield-check': ShieldCheck };

export default function Careers() {
  const { CULTURE, COPY } = useContent();
  const t = COPY.careers;

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
          <SectionHead title={t.positionsTitle} lead={t.noPositions} />
        </div>
      </section>

    </>
  );
}
