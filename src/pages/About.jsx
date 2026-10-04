import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import { findRoute } from '../content/routes';
import Img from '../components/Img';
import { CtaBand, Facts, PageHero, PartnerStrip, SectionHead } from '../components/Parts';
import './pages.css';

export default function About() {
  const lp = useLocalePath();
  const { ABOUT, HOME, UI, VALUES, CERTIFICATIONS, SITE } = useContent();

  return (
    <>
      <PageHero
        routeKey="about"
        title={ABOUT.h1}
        lead={ABOUT.lead}
        aside={
          <div className="frame">
            <Img name="hero-bg" alt={ABOUT.story.title} eager sizes="(min-width: 900px) 42vw, 100vw" />
          </div>
        }
      />

      <section className="sec">
        <div className="wrap split split--7-5 split--top">
          <div className="prose">
            <h2>{ABOUT.story.title}</h2>
            {ABOUT.story.p.map((t) => <p key={t}>{t}</p>)}
          </div>
          <div>
            <h2 className="h-side">{HOME.glance.title}</h2>
            <Facts rows={HOME.glance.rows} />
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={ABOUT.group.title} />
          <div className="grid-3 lines">
            {ABOUT.group.items.map((g) => (
              <article key={g.id} className="line-block">
                <h3>{g.t}</h3>
                <p>{g.d}</p>
                <Link className="tlink" to={lp(findRoute(g.id).segment)}>{UI.learnMore}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title={ABOUT.values.title} lead={ABOUT.values.lead} />
          <div className="grid-4 lines">
            {VALUES.map((v) => (
              <article key={v.title} className="line-block">
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--paper" id="quality">
        <div className="wrap">
          <SectionHead title={ABOUT.quality.title} lead={ABOUT.quality.lead} />
          <div className="grid-3">
            {CERTIFICATIONS.map((c) => (
              <article key={c.code} className="cert">
                <p className="cert__code" dir="ltr">{c.code}</p>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
          <div className="about-partners">
            <PartnerStrip label={HOME.hero.partners} />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <SectionHead title={ABOUT.clients.title} />
          <div className="grid-2 about-clients">
            {ABOUT.clients.cards.map((c) => (
              <article key={c.t}>
                <h3>{c.t}</h3>
                <p className="muted">{c.d}</p>
                <ul className="ticks">
                  {c.ul.map((li) => <li key={li}>{li}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--paper sec--tight">
        <div className="wrap">
          <h2 className="h-side">{ABOUT.leadership.title}</h2>
          <p className="muted">{ABOUT.leadership.text}</p>
        </div>
      </section>

      <CtaBand
        title={ABOUT.cta.title}
        text={ABOUT.cta.text}
        primary={{ label: ABOUT.cta.primary, to: lp('contact') }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}
