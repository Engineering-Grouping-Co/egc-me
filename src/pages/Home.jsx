import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import { findRoute } from '../content/routes';
import SuiteDrawing from '../components/SuiteDrawing';
import KsaMap from '../components/KsaMap';
import Img from '../components/Img';
import { ArticleCard, CtaBand, DisciplineRows, Facts, Faq, PartnerStrip, SectionHead, Steps } from '../components/Parts';
import './Home.css';

const FEATURED_GUIDES = ['what-is-a-healthcare-contractor', 'mri-room-shielding', 'ct-pet-ct-radiation-shielding'];

export default function Home() {
  const lp = useLocalePath();
  const { HOME, SERVICES, PROCESS, PROJECTS, KSA_PATH, SITE, faqs } = useContent();
  const [active, setActive] = useState('shielding');
  const detail = SERVICES.find((s) => s.id === active);

  const pins = Object.values(
    PROJECTS.reduce((acc, p) => {
      acc[p.city] ??= { city: p.city, x: p.x, y: p.y, count: 0 };
      acc[p.city].count += 1;
      return acc;
    }, {}),
  );

  return (
    <>
      {/* ── hero: the plan drawing is the one bold thing on the page ── */}
      <section className="phero home-hero">
        <div className="wrap home-hero__grid">
          <div className="home-hero__text">
            <h1 className="h-display">{HOME.hero.h1}</h1>
            <p className="lead">{HOME.hero.lead}</p>
            <div className="row home-hero__actions">
              <Link className="btn btn--primary btn--lg" to={lp('healthcare-contractor')}>{HOME.hero.primary}</Link>
              <Link className="btn btn--ghost btn--lg" to={lp('contact')}>{HOME.hero.secondary}</Link>
            </div>
            <PartnerStrip label={HOME.hero.partners} />
          </div>

          <figure className="sheet frame">
            <div className="sheet__bar">{HOME.drawing.title}</div>
            <div className="sheet__body">
              <SuiteDrawing labels={HOME.drawing} active={active} onSelect={setActive} title={HOME.drawing.title} />
            </div>
            <figcaption className="sheet__foot">
              <p className="small">{HOME.drawing.hint}</p>
              <div className="legend" role="group" aria-label={HOME.drawing.title}>
                {SERVICES.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    className="legend__btn"
                    aria-pressed={active === s.id}
                    onClick={() => setActive(s.id)}
                    onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(s.id)}
                  >
                    <span className="legend__n">{i + 1}</span>
                    {s.short}
                  </button>
                ))}
              </div>
              <div className="sheet__detail" aria-live="polite">
                <h2>{detail.full}</h2>
                <p>{detail.summary}</p>
                <Link className="tlink" to={lp(findRoute(detail.id).segment)}>{HOME.drawing.open}</Link>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── disciplines ── */}
      <section className="sec">
        <div className="wrap">
          <SectionHead title={HOME.disciplines.title} lead={HOME.disciplines.lead} />
          <DisciplineRows items={SERVICES} />
          <p className="home-more">
            <Link className="tlink" to={lp('healthcare-contractor')}>{HOME.disciplines.cta}</Link>
          </p>
        </div>
      </section>

      {/* ── other businesses ── */}
      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={HOME.sectors.title} lead={HOME.sectors.lead} />
          <div className="sectors">
            <article className="sector sector--lead">
              <div className="frame">
                <Img name="corian-surfaces" alt={HOME.sectors.items.manufacturing.title} sizes="(min-width: 1024px) 58vw, 100vw" />
              </div>
              <h3>{HOME.sectors.items.manufacturing.title}</h3>
              <p>{HOME.sectors.items.manufacturing.text}</p>
              <Link className="tlink" to={lp('manufacturing')}>{HOME.sectors.items.manufacturing.cta}</Link>
            </article>
            <div className="sectors__side">
              <article className="sector">
                <h3>{HOME.sectors.items.software.title}</h3>
                <p>{HOME.sectors.items.software.text}</p>
                <Link className="tlink" to={lp('software-engineering')}>{HOME.sectors.items.software.cta}</Link>
              </article>
              <article className="sector">
                <h3>
                  {HOME.sectors.items.systems.title}
                  <span className="tag tag--soon">{HOME.sectors.items.systems.badge}</span>
                </h3>
                <p>{HOME.sectors.items.systems.text}</p>
                <Link className="tlink" to={lp('healthcare-systems')}>{HOME.sectors.items.systems.cta}</Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── process ── */}
      <section className="sec sec--ink">
        <div className="wrap">
          <SectionHead title={HOME.process.title} lead={HOME.process.lead} />
          <Steps items={PROCESS} tone="ink" />
        </div>
      </section>

      {/* ── reach ── */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <SectionHead title={HOME.reach.title} lead={HOME.reach.lead} />
            <Link className="btn btn--ghost" to={lp('projects')}>{HOME.reach.cta}</Link>
          </div>
          <KsaMap path={KSA_PATH} pins={pins} label={SITE.country} />
        </div>
      </section>

      {/* ── entity facts ── */}
      <section className="sec sec--paper">
        <div className="wrap split split--5-7 split--top">
          <h2>{HOME.glance.title}</h2>
          <Facts rows={HOME.glance.rows} />
        </div>
      </section>

      {/* ── knowledge ── */}
      <section className="sec">
        <div className="wrap">
          <SectionHead title={HOME.knowledge.title} lead={HOME.knowledge.lead} />
          <div className="grid-3">
            {FEATURED_GUIDES.map((slug) => <ArticleCard key={slug} slug={slug} />)}
          </div>
          <p className="home-more">
            <Link className="tlink" to={lp('knowledge')}>{HOME.knowledge.cta}</Link>
          </p>
        </div>
      </section>

      {/* ── faq ── */}
      <section className="sec sec--paper">
        <div className="wrap">
          <Faq title={HOME.faqTitle} items={faqs('home')} />
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
