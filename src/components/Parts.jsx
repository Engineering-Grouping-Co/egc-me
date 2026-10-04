import { Link } from 'react-router-dom';
import { ArrowUpRight, Cable, DoorOpen, Layers, Shield } from 'lucide-react';
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

/** Closing call-to-action band: white, ruled in black like the other content blocks. */
export function CtaBand({ title, text, primary, secondary }) {
  return (
    <section className="cta">
      <div className="wrap">
        <div className="cta__inner">
          <div className="cta__text">
            <h2>{title}</h2>
            {text && <p className="lead">{text}</p>}
          </div>
          <div className="row cta__actions">
            {primary && <Link className="btn btn--primary btn--lg" to={primary.to}>{primary.label}</Link>}
            {secondary && (
              <a className="btn btn--ghost btn--lg" href={secondary.href} dir="ltr">{secondary.label}</a>
            )}
          </div>
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

/** Rows linking to the four discipline pages. With `onActive`, hovering or focusing a row drives the plan drawing. */
export function DisciplineRows({ items, active, onActive, compact = false }) {
  const lp = useLocalePath();
  return (
    <ul className={`drows${compact ? ' drows--compact' : ''}`}>
      {items.map((s) => (
        <li key={s.id}>
          <Link
            className={`drow${active === s.id ? ' is-active' : ''}`}
            to={lp(findRoute(s.id).segment)}
            onPointerEnter={onActive ? (e) => e.pointerType === 'mouse' && onActive(s.id) : undefined}
            onFocus={onActive ? () => onActive(s.id) : undefined}
          >
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
