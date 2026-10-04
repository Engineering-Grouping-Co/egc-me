import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import Img from '../components/Img';
import { CtaBand, PageHero } from '../components/Parts';
import './pages.css';

export default function Manufacturing() {
  const lp = useLocalePath();
  const { MANUFACTURING: M, SITE } = useContent();

  return (
    <>
      <PageHero
        routeKey="manufacturing"
        title={M.h1}
        lead={M.lead}
        actions={<Link className="btn btn--primary btn--lg" to={lp('contact')}>{M.cta.primary}</Link>}
        aside={
          <div className="frame">
            <Img name="corian-surfaces" alt={M.wood.imageAlt} eager sizes="(min-width: 900px) 42vw, 100vw" />
          </div>
        }
      />

      <section className="sec">
        <div className="wrap split split--top">
          <div className="prose">
            <span className="tag tag--live">{M.wood.badge}</span>
            <h2>{M.wood.title}</h2>
            {M.wood.p.map((t) => <p key={t}>{t}</p>)}
            <ul className="checks">
              {M.wood.capabilities.map((c) => (
                <li key={c}>
                  <Check size={20} strokeWidth={2.2} aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="frame mfg-photo">
            <Img name="joinery-doors" alt={M.wood.title} sizes="(min-width: 900px) 42vw, 100vw" />
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap split split--5-7 split--top">
          <h2>{M.work.title}</h2>
          <div className="stack">
            <p className="lead" style={{ maxWidth: '56ch' }}>{M.work.text}</p>
            <p className="small">{M.work.note}</p>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split split--5-7 split--top">
          <div>
            <span className="tag tag--paused">{M.steel.badge}</span>
            <h2 style={{ marginTop: 14 }}>{M.steel.title}</h2>
          </div>
          <p className="lead" style={{ maxWidth: '58ch' }}>{M.steel.text}</p>
        </div>
      </section>

      <CtaBand
        title={M.cta.title}
        text={M.cta.text}
        primary={{ label: M.cta.primary, to: lp('contact') }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}
