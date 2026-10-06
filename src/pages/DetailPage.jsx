import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocale, useLocalePath } from '../i18n/LocaleContext';
import { byKey } from '../content/catalog';
import { findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import Img from '../components/Img';
import { CtaBand, DataTable, DisciplineRows, FlowSheet, PageHero, Rich, SectionHead, Steps } from '../components/Parts';
import { useServiceItems } from '../components/useServiceItems';
import './pages.css';

const TOPIC = { specialist: 'healthcare', building: 'healthcare', interiors: 'healthcare', factory: 'manufacturing', software: 'software' };

/** One template for every catalogue page (imaging rooms, building services, interiors, factory products, software). */
export default function DetailPage({ id }) {
  const locale = useLocale();
  const lp = useLocalePath();
  const { UI, SITE, SERVICES_INDEX } = useContent();
  const c = byKey(id);
  const t = c[locale];
  const related = useServiceItems(c.related);
  const phone = `tel:${SITE.phone.replace(/\s/g, '')}`;

  const aside = c.image ? (
    <div className="frame">
      <Img name={c.image} alt={t.imageAlt} eager sizes="(min-width: 900px) 42vw, 100vw" position={c.imagePosition} />
    </div>
  ) : t.flow ? (
    <FlowSheet title={t.flow.title} steps={t.flow.steps} />
  ) : null;

  // alternate white / paper bands down the page
  let band = 0;
  const next = () => (band++ % 2 === 0 ? 'sec' : 'sec sec--paper');

  return (
    <>
      <PageHero
        routeKey={id}
        title={t.h1}
        lead={t.lead}
        actions={
          <>
            <Link className="btn btn--primary btn--lg" to={`${lp('contact')}?topic=${TOPIC[c.group]}`}>{UI.requestProposal}</Link>
            <Link className="btn btn--ghost btn--lg" to={lp(findRoute(c.parent).segment)}>{getSeo(c.parent, locale).name}</Link>
          </>
        }
        aside={aside}
      />

      <section className={next()}>
        <div className="wrap split split--7-5 split--top">
          <div className="prose">
            <h2>{t.answerTitle}</h2>
            {t.answer.map((p) => <p key={p}><Rich>{p}</Rich></p>)}
          </div>
          <div>
            <h2 className="h-side">{t.usesTitle}</h2>
            <ul className="ticks ticks--lines">
              {t.uses.map((u) => <li key={u}>{u}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className={next()}>
        <div className="wrap split split--5-7 split--top">
          <h2>{t.deliverTitle}</h2>
          <ul className="checks">
            {t.deliver.map((d) => (
              <li key={d}>
                <Check size={20} strokeWidth={2.2} aria-hidden="true" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {t.table && (
        <section className={next()}>
          <div className="wrap">
            <SectionHead title={t.table.title} />
            <DataTable {...t.table} />
          </div>
        </section>
      )}

      <section className={next()}>
        <div className="wrap">
          <SectionHead title={UI.howWeWork} />
          <Steps items={t.process} />
        </div>
      </section>

      <section className={next()}>
        <div className="wrap">
          <SectionHead title={UI.relatedServices} />
          <DisciplineRows items={related} />
          <p className="home-more">
            <Link className="tlink" to={lp('services')}>{SERVICES_INDEX.all}</Link>
          </p>
        </div>
      </section>

      <CtaBand
        title={t.ctaTitle}
        text={t.ctaText}
        primary={{ label: UI.requestProposal, to: `${lp('contact')}?topic=${TOPIC[c.group]}` }}
        secondary={{ label: SITE.phone, href: phone }}
      />
    </>
  );
}
