import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocale, useLocalePath } from '../i18n/LocaleContext';
import { findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import { GROUPS } from '../content/catalog';
import { CtaBand, DisciplineRows, PageHero, SectionHead } from '../components/Parts';
import { useServiceItems } from '../components/useServiceItems';
import './pages.css';

const DISCIPLINES = ['shielding', 'doors', 'mep', 'surfaces'];

function Group({ group, index }) {
  const locale = useLocale();
  const lp = useLocalePath();
  const { SERVICES_INDEX: S } = useContent();
  const g = S.groups[group.id];
  const rooms = useServiceItems(group.keys);
  const disciplines = useServiceItems(DISCIPLINES);
  return (
    <section className={`sec${index % 2 ? ' sec--paper' : ''}`} id={group.id}>
      <div className="wrap">
        <SectionHead title={g.title} lead={g.lead} />
        {group.disciplines && (
          <>
            <h3 className="h-side">{g.disciplinesTitle}</h3>
            <DisciplineRows items={disciplines} />
            <h3 className="h-side services__sub">{g.roomsTitle}</h3>
          </>
        )}
        <DisciplineRows items={rooms} />
        {!group.keys.includes(group.core) && (
          <p className="home-more">
            <Link className="tlink" to={lp(findRoute(group.core).segment)}>{getSeo(group.core, locale).name}</Link>
          </p>
        )}
      </div>
    </section>
  );
}

export default function Services() {
  const lp = useLocalePath();
  const { SERVICES_INDEX: S, SITE } = useContent();
  return (
    <>
      <PageHero
        routeKey="services"
        title={S.h1}
        lead={S.lead}
        actions={<Link className="btn btn--primary btn--lg" to={lp('contact')}>{S.cta.primary}</Link>}
      />
      {GROUPS.map((g, i) => <Group key={g.id} group={g} index={i} />)}
      <CtaBand
        title={S.cta.title}
        text={S.cta.text}
        primary={{ label: S.cta.primary, to: lp('contact') }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}
