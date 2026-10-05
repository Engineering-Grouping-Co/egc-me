import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocale, useLocalePath } from '../i18n/LocaleContext';
import { getSeo } from '../content/seo';
import Img from '../components/Img';
import SuiteDrawing from '../components/SuiteDrawing';
import { CtaBand, DataTable, DisciplineRows, PageHero, Rich, SectionHead, Steps } from '../components/Parts';
import './pages.css';

/** One template for the four discipline pages. `id` matches the services.js entry and the route key. */
export default function ServicePage({ id }) {
  const locale = useLocale();
  const lp = useLocalePath();
  const { SERVICES, HOME, UI, SITE } = useContent();
  const svc = SERVICES.find((s) => s.id === id);
  const others = SERVICES.filter((s) => s.id !== id);

  const aside = svc.image ? (
    <div className="frame">
      <Img name={svc.image} alt={svc.imageAlt} eager sizes="(min-width: 900px) 42vw, 100vw" position={svc.imagePosition} />
    </div>
  ) : (
    <figure className="sheet frame">
      <div className="sheet__bar">{HOME.drawing.title}</div>
      <div className="sheet__body">
        <SuiteDrawing labels={HOME.drawing} active={id} title={HOME.drawing.title} />
      </div>
    </figure>
  );

  return (
    <>
      <PageHero
        routeKey={id}
        title={svc.h1}
        lead={svc.lead}
        actions={
          <>
            <Link className="btn btn--primary btn--lg" to={lp('contact')}>{UI.requestProposal}</Link>
            <Link className="btn btn--ghost btn--lg" to={lp('healthcare-contractor')}>{getSeo('hub', locale).name}</Link>
          </>
        }
        aside={aside}
      />

      <section className="sec">
        <div className="wrap split split--7-5 split--top">
          <div className="prose">
            <h2>{svc.explainTitle}</h2>
            {svc.explain.map((t) => <p key={t}><Rich>{t}</Rich></p>)}
          </div>
          <div>
            <h2 className="h-side">{UI.rooms}</h2>
            <ul className="ticks ticks--lines">
              {svc.rooms.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap split split--5-7 split--top">
          <h2>{UI.deliver}</h2>
          <ul className="checks">
            {svc.deliver.map((d) => (
              <li key={d}>
                <Check size={20} strokeWidth={2.2} aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title={svc.compare.title} />
          <DataTable {...svc.compare} />
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={svc.roles.title} />
          <DataTable {...svc.roles} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title={UI.howWeWork} />
          <Steps items={svc.process.map((p) => ({ t: p.t, d: p.d }))} />
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={UI.relatedDisciplines} />
          <DisciplineRows items={others} />
        </div>
      </section>

      <CtaBand
        title={HOME.cta.title}
        text={HOME.cta.text}
        primary={{ label: HOME.cta.primary, to: lp('contact') }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}
