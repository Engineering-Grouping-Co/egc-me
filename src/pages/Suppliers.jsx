import { Check, ExternalLink } from 'lucide-react';
import { useContent } from '../content';
import { PageHero, SectionHead, Steps } from '../components/Parts';
import './pages.css';

export default function Suppliers() {
  const { SITE, SUPPLIER_STEPS, WHAT_WE_SOURCE, REQUIREMENTS, COPY } = useContent();
  const t = COPY.suppliers;

  return (
    <>
      <PageHero
        routeKey="suppliers"
        title={t.h1}
        lead={t.lead}
        aside={
          <div className="portal">
            <p className="portal__label">{t.portalLabel}</p>
            <h2>{t.portalTitle}</h2>
            <p>{t.portalText}</p>
            <a className="btn btn--blue btn--block" href={SITE.supplierPortal} target="_blank" rel="noreferrer">
              {t.portalRegister}
              <ExternalLink size={16} aria-hidden="true" />
            </a>
            <a className="portal__signin" href={SITE.supplierPortal} target="_blank" rel="noreferrer">{t.portalSignin}</a>
            <p className="portal__help">
              {t.portalHelp} <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
        }
      />

      <section className="sec">
        <div className="wrap">
          <SectionHead title={t.sourceTitle} lead={t.sourceLead} />
          <div className="grid-4 lines">
            {WHAT_WE_SOURCE.map((cat) => (
              <article key={cat.title} className="line-block">
                <h3>{cat.title}</h3>
                <ul className="ticks ticks--sm">
                  {cat.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={t.regTitle} lead={t.regLead} />
          <Steps items={SUPPLIER_STEPS.map((s) => ({ t: s.title, d: s.desc }))} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap split split--5-7 split--top">
          <div>
            <h2>{t.reqTitle}</h2>
            <p className="lead" style={{ marginTop: 16 }}>{t.reqLead}</p>
          </div>
          <ul className="checks">
            {REQUIREMENTS.map((r) => (
              <li key={r}>
                <Check size={20} strokeWidth={2.2} aria-hidden="true" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
