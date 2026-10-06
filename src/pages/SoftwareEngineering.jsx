import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import ModulesDiagram from '../components/ModulesDiagram';
import { ChildServices, CtaBand, PageHero, SectionHead, Steps } from '../components/Parts';
import './pages.css';

export default function SoftwareEngineering() {
  const lp = useLocalePath();
  const { SOFTWARE: S, SITE } = useContent();

  return (
    <>
      <PageHero
        routeKey="software"
        title={S.h1}
        lead={S.lead}
        actions={<Link className="btn btn--primary btn--lg" to={lp('contact')}>{S.cta.primary}</Link>}
        wide
        aside={
          <figure className="sheet frame">
            <div className="sheet__bar">{S.diagram.label}</div>
            <div className="sheet__body">
              <ModulesDiagram
                nodes={S.pillars.map((p) => p.tag)}
                chips={['ZATCA', 'GOSI', 'PDPL']}
                core={S.diagram.core}
                label={S.diagram.label}
              />
            </div>
          </figure>
        }
      />

      <section className="sec">
        <div className="wrap">
          <ul className="spillars">
            {S.pillars.map((p) => (
              <li key={p.id} id={p.id}>
                <div>
                  <h2>{p.t}</h2>
                  <span className="tag">{p.tag}</span>
                </div>
                <div>
                  <p className="lead">{p.d}</p>
                  <ul className="checks">
                    {p.pts.map((pt) => (
                      <li key={pt}>
                        <Check size={20} strokeWidth={2.2} aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--ink">
        <div className="wrap">
          <SectionHead title={S.compliance.title} lead={S.compliance.lead} />
          <div className="grid-3 lines lines--ink">
            {S.compliance.items.map((c) => (
              <article key={c.c} className="line-block">
                <p className="cert__code cert__code--ink">{c.c}</p>
                <h3>{c.t}</h3>
                <p>{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title={S.approach.title} />
          <Steps items={S.approach.steps} />
        </div>
      </section>

      <ChildServices group="software" />

      <CtaBand
        title={S.cta.title}
        text={S.cta.text}
        primary={{ label: S.cta.primary, to: `${lp('contact')}?topic=software` }}
        secondary={{ label: SITE.email, href: `mailto:${SITE.email}` }}
      />
    </>
  );
}
