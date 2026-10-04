import { Link } from 'react-router-dom';
import { ArrowUpRight, Cable, DoorOpen, Layers, Plus, Shield } from 'lucide-react';
import { useContent } from '../content';
import { useLocale, useLocalePath } from '../i18n/LocaleContext';
import { findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import { PARTNERS } from '../content/partners';
import './Parts.css';

const ICONS = { shield: Shield, door: DoorOpen, cable: Cable, layers: Layers };
export function Icon({ name, size = 22 }) {
  const C = ICONS[name] || Shield;
  return <C size={size} strokeWidth={1.6} aria-hidden="true" />;
}

const shortName = (s) => s.replace(/:.*$/, '').replace(/([?؟]).*$/, '$1');

/** Page header: breadcrumb, h1, lead, actions, optional aside (image / drawing). */
export function PageHero({ routeKey, title, lead, actions, aside, badge, wide = false }) {
  const locale = useLocale();
  const lp = useLocalePath();
  const { UI } = useContent();
  const route = findRoute(routeKey);
  const crumbs = [{ label: UI.home, to: lp('') }];
  if (route?.parent) crumbs.push({ label: getSeo(route.parent, locale).name, to: lp(findRoute(route.parent).segment) });
  crumbs.push({ label: shortName(getSeo(routeKey, locale).name) });

  return (
    <section className="phero">
      <div className="wrap">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            {crumbs.map((c, i) => (
              <li key={i} aria-current={c.to ? undefined : 'page'}>
                {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <div className={`phero__grid${aside ? ' phero__grid--aside' : ''}${wide ? ' phero__grid--wide' : ''}`}>
          <div className="phero__main">
            {badge && <span className="tag tag--soon phero__badge">{badge}</span>}
            <h1>{title}</h1>
            {lead && <p className="lead">{lead}</p>}
            {actions && <div className="row phero__actions">{actions}</div>}
          </div>
          {aside && <div className="phero__aside">{aside}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHead({ title, lead, as: Tag = 'h2', children }) {
  return (
    <div className="sec-head">
      <Tag>{title}</Tag>
      {lead && <p className="lead">{lead}</p>}
      {children}
    </div>
  );
}

/** Native <details> accordion: answers stay in the DOM for crawlers and assistants. */
export function Faq({ items, title }) {
  if (!items?.length) return null;
  return (
    <div className="faq">
      {title && <h2>{title}</h2>}
      <div className="faq__list">
        {items.map((f) => (
          <details key={f.q} className="faq__item">
            <summary>
              <span>{f.q}</span>
              <Plus size={20} aria-hidden="true" />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

/** Closing call-to-action band. */
export function CtaBand({ title, text, primary, secondary }) {
  return (
    <section className="cta">
      <div className="wrap cta__inner">
        <div>
          <h2>{title}</h2>
          {text && <p className="lead">{text}</p>}
        </div>
        <div className="row cta__actions">
          {primary && <Link className="btn btn--blue btn--lg" to={primary.to}>{primary.label}</Link>}
          {secondary && (
            <a className="btn btn--ghost-light btn--lg" href={secondary.href} dir="ltr">{secondary.label}</a>
          )}
        </div>
      </div>
    </section>
  );
}

/** A genuine sequence — so the numbers carry meaning. */
export function Steps({ items, tone = 'light' }) {
  return (
    <ol className={`steps steps--${tone}`} style={{ '--n': items.length }}>
      {items.map((s, i) => (
        <li key={s.t}>
          <span className="steps__n" aria-hidden="true">{i + 1}</span>
          <h3>{s.t}</h3>
          <p>{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

export function Facts({ rows }) {
  return (
    <dl className="facts">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function DisciplineRows({ items }) {
  const lp = useLocalePath();
  return (
    <ul className="drows">
      {items.map((s) => (
        <li key={s.id}>
          <Link className="drow" to={lp(findRoute(s.id).segment)}>
            <span className="drow__icon"><Icon name={s.icon} /></span>
            <span className="drow__body">
              <h3>{s.label}</h3>
              <p>{s.summary}</p>
            </span>
            <span className="drow__go"><ArrowUpRight size={22} className="i-dir" aria-hidden="true" /></span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ArticleCard({ slug, featured = false }) {
  const locale = useLocale();
  const lp = useLocalePath();
  const { ARTICLES, UI } = useContent();
  const a = ARTICLES[slug];
  const t = a[locale];
  return (
    <Link className={`acard${featured ? ' acard--featured' : ''}`} to={lp(`knowledge/${slug}`)}>
      <h3>{t.title}</h3>
      <p>{t.summary}</p>
      <span className="acard__meta">{a.minutes} {UI.minRead}</span>
    </Link>
  );
}

function PartnerName({ p }) {
  if (!p.logo) return <span className="partners__name">{p.name}</span>;
  return <img className="partners__logo" src={p.logo} alt={p.name} height="28" loading="lazy" />;
}

export function PartnerStrip({ label, dark = false }) {
  return (
    <div className={`partners${dark ? ' partners--dark' : ''}`}>
      <p>{label}</p>
      <ul>
        {PARTNERS.map((p) => (
          <li key={p.id}><PartnerName p={p} /></li>
        ))}
      </ul>
    </div>
  );
}
