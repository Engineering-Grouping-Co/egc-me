import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocale, useLocalePath } from '../i18n/LocaleContext';
import HeroSlides from '../components/HeroSlides';
import SuiteDrawing from '../components/SuiteDrawing';
import KsaMap from '../components/KsaMap';
import Img from '../components/Img';
import { PhotoMosaic } from '../components/Photos';
import { findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import { GROUPS } from '../content/catalog';
import { CtaBand, DisciplineRows, PartnerStrip, SectionHead, Steps } from '../components/Parts';
import './Home.css';

const DISCIPLINES = ['shielding', 'doors', 'mep', 'surfaces'];
const MOSAIC = ['reception-lobby-windows', 'lead-lined-room', 'carved-door-entrance', 'rooftop-ducts', 'vanity-dark-trough'];

export default function Home() {
  const locale = useLocale();
  const lp = useLocalePath();
  const { HOME, SERVICES, PROCESS, PROJECTS, KSA_PATH, SITE, UI, SERVICES_INDEX: SI } = useContent();
  const [active, setActive] = useState('shielding');

  const pins = Object.values(
    PROJECTS.reduce((acc, p) => {
      acc[p.city] ??= { city: p.city, x: p.x, y: p.y, count: 0 };
      acc[p.city].count += 1;
      return acc;
    }, {}),
  );

  return (
    <>
      {/* ── hero: what we do, as a slideshow ── */}
      <HeroSlides
        slides={HOME.slides}
        title={HOME.hero.h1}
        lead={HOME.hero.lead}
        primary={{ label: HOME.hero.secondary, to: lp('contact') }}
        secondary={{ label: HOME.hero.primary, to: lp('healthcare-contractor') }}
        ui={HOME.hero.carousel}
      />

      <div className="partners-band">
        <div className="wrap">
          <PartnerStrip label={HOME.hero.partners} />
        </div>
      </div>

      {/* ── everything we do: the wide range, one link per product ── */}
      <section className="sec sec--tight">
        <div className="wrap">
          <SectionHead title={SI.homeTitle} lead={SI.homeLead} />
          <div className="wwd">
            {GROUPS.map((g) => {
              const keys = g.disciplines ? [...DISCIPLINES, ...g.keys] : g.keys;
              return (
                <div key={g.id} className="line-block wwd__group">
                  <h3><Link to={lp(findRoute(g.core).segment)}>{SI.groups[g.id].title}</Link></h3>
                  <p>{SI.groups[g.id].lead}</p>
                  <ul className="wwd__links">
                    {keys.map((k) => (
                      <li key={k}><Link to={lp(findRoute(k).segment)}>{getSeo(k, locale).name}</Link></li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="home-more">
            <Link className="tlink" to={lp('services')}>{SI.all}</Link>
          </p>
        </div>
      </section>

      {/* ── disciplines, tied to the plan: the one bold, interactive thing on the page ── */}
      <section className="sec">
        <div className="wrap plan">
          <div className="plan__text">
            <SectionHead title={HOME.disciplines.title} lead={HOME.disciplines.lead} />
            <DisciplineRows items={SERVICES} active={active} onActive={setActive} compact />
            <p className="home-more">
              <Link className="tlink" to={lp('healthcare-contractor')}>{HOME.disciplines.cta}</Link>
            </p>
          </div>

          <figure className="sheet frame">
            <div className="sheet__bar">{HOME.drawing.title}</div>
            <div className="sheet__body">
              <SuiteDrawing labels={HOME.drawing} active={active} onSelect={setActive} title={HOME.drawing.title} />
            </div>
            <figcaption className="sheet__foot">
              <p className="small">{HOME.drawing.hint}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── other businesses ── */}
      <section className="sec sec--paper">
        <div className="wrap">
          <SectionHead title={HOME.sectors.title} lead={HOME.sectors.lead} />
          <div className="sectors">
            <article className="sector sector--lead">
              <div className="frame">
                <Img name="reception-counter-veined" sizes="(min-width: 1024px) 58vw, 100vw" />
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
                <h3>{HOME.sectors.items.fitout.title}</h3>
                <p>{HOME.sectors.items.fitout.text}</p>
                <Link className="tlink" to={lp('services')}>{HOME.sectors.items.fitout.cta}</Link>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ── photographs from site ── */}
      <section className="sec">
        <div className="wrap">
          <SectionHead title={UI.onSite} />
          <PhotoMosaic keys={MOSAIC} />
          <p className="home-more">
            <Link className="tlink" to={`${lp('projects')}#gallery`}>{UI.morePhotos}</Link>
          </p>
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
      <section className="sec sec--paper">
        <div className="wrap split">
          <div>
            <SectionHead title={HOME.reach.title} lead={HOME.reach.lead} />
            <Link className="btn btn--ghost" to={lp('projects')}>{HOME.reach.cta}</Link>
          </div>
          <KsaMap path={KSA_PATH} pins={pins} label={SITE.country} />
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
