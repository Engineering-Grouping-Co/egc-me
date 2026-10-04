import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import { findRoute } from '../content/routes';
import { getSeo } from '../content/seo';
import { CtaBand, DisciplineRows, Faq, PageHero } from '../components/Parts';
import './pages.css';

const MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
};
// Deterministic (no Intl) so build-time and browser output are identical.
function formatDate(iso, locale) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[locale][m - 1]} ${y}`;
}

export default function Article({ slug }) {
  const lp = useLocalePath();
  const { locale, ARTICLES, SERVICES, UI, SITE, HOME, faqs } = useContent();
  const a = ARTICLES[slug];
  const t = a[locale];
  const routeKey = `article:${slug}`;
  const related = SERVICES.filter((s) => a.related.includes(s.id));
  const sibling = Object.keys(ARTICLES).filter((s) => s !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        routeKey={routeKey}
        title={t.title}
        lead={t.summary}
      />

      <article className="sec article">
        <div className="wrap article__grid">
          <div className="prose">
            <p className="article__meta">
              <time dateTime={a.published}>{UI.published} {formatDate(a.published, locale)}</time>
              <span> — {a.minutes} {UI.minRead}</span>
            </p>
            <p className="article__intro">{t.intro}</p>
            {t.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p?.map((para) => <p key={para}>{para}</p>)}
                {s.ul && (
                  <ul>{s.ul.map((li) => <li key={li}>{li}</li>)}</ul>
                )}
                {s.table && (
                  <div className="table-wrap">
                    <table className="table">
                      <thead><tr>{s.table.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
                      <tbody>
                        {s.table.rows.map((r) => (
                          <tr key={r[0]}>
                            <th scope="row">{r[0]}</th>
                            {r.slice(1).map((c, i) => <td key={i}>{c}</td>)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>

          <aside className="article__aside">
            <div className="takeaways">
              <h2>{UI.keyTakeaways}</h2>
              <ul className="checks checks--sm">
                {t.takeaways.map((k) => (
                  <li key={k}>
                    <Check size={18} strokeWidth={2.2} aria-hidden="true" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="article__cta">
              <p>{HOME.cta.title}</p>
              <Link className="btn btn--primary btn--block" to={lp('contact')}>{UI.requestProposal}</Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="sec sec--paper">
        <div className="wrap">
          <Faq title={UI.faqTitle} items={faqs(routeKey)} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <h2 className="h-side">{UI.relatedDisciplines}</h2>
          <DisciplineRows items={related} />
          <p className="home-more">
            {sibling.map((s) => (
              <Link key={s} className="tlink article__sibling" to={lp(findRoute(`article:${s}`).segment)}>
                {getSeo(`article:${s}`, locale).name}
              </Link>
            ))}
          </p>
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
