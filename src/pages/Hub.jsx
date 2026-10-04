import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import Img from '../components/Img';
import { CtaBand, DisciplineRows, PageHero, PartnerStrip, SectionHead, Steps } from '../components/Parts';
import './pages.css';

export default function Hub() {
  const lp = useLocalePath();
  const { HUB, HOME, SERVICES, PROCESS, SITE, UI } = useContent();

  return (
    <>
      <PageHero
        routeKey="hub"
        title={HUB.h1}
        lead={HUB.lead}
        actions={
          <>
            <Link className="btn btn--primary btn--lg" to={lp('contact')}>{UI.requestProposal}</Link>
            <a className="btn btn--ghost btn--lg" href={`tel:${SITE.phone.replace(/\s/g, '')}`} dir="ltr">{SITE.phone}</a>
          </>
        }
        aside={
          <div className="frame">
            <Img name="healthcare-xray" alt={HUB.h1} eager sizes="(min-width: 900px) 42vw, 100vw" />
          </div>
        }
      />

      <section className="sec">
        <div className="wrap split split--5-7 split--top">
          <h2>{HUB.answer.title}</h2>
          <div className="prose">
            {HUB.answer.p.map((t) => <p key={t}>{t}</p>)}
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={HUB.rooms.title} />
          <div className="grid-3 lines">
            {HUB.rooms.items.map((r) => (
              <article key={r.t} className="line-block">
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title={HUB.disciplines.title} lead={HUB.disciplines.lead} />
          <DisciplineRows items={SERVICES} />
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap split split--5-7 split--top">
          <div>
            <h2>{HUB.oem.title}</h2>
          </div>
          <div className="stack" style={{ '--stack': '28px' }}>
            {HUB.oem.p.map((t) => <p key={t} className="lead">{t}</p>)}
            <PartnerStrip label={HOME.hero.partners} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title={HUB.model.title} />
          <div className="grid-4 lines">
            {HUB.model.items.map((m) => (
              <article key={m.t} className="line-block">
                <h3>{m.t}</h3>
                <p>{m.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--ink">
        <div className="wrap">
          <SectionHead title={HUB.process.title} />
          <Steps items={PROCESS} tone="ink" />
        </div>
      </section>

      <CtaBand
        title={HUB.cta.title}
        text={HUB.cta.text}
        primary={{ label: HUB.cta.primary, to: lp('contact') }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}
