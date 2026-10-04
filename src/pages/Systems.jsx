import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import { CtaBand, Faq, PageHero } from '../components/Parts';
import './pages.css';

export default function Systems() {
  const lp = useLocalePath();
  const { SYSTEMS: S, UI, SITE, faqs } = useContent();

  return (
    <>
      <PageHero
        routeKey="systems"
        badge={S.badge}
        title={S.h1}
        lead={S.lead}
        actions={<Link className="btn btn--primary btn--lg" to={`${lp('contact')}?topic=systems`}>{S.cta.primary}</Link>}
      />

      <section className="sec">
        <div className="wrap">
          <div className="grid-3 lines">
            {S.items.map((it) => (
              <article key={it.id} id={it.id} className="line-block">
                <h2 className="h-side">{it.t}</h2>
                <p>{it.d}</p>
                <ul className="checks checks--sm">
                  {it.pts.map((p) => (
                    <li key={p}>
                      <Check size={18} strokeWidth={2.2} aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--paper">
        <div className="wrap split split--5-7 split--top">
          <h2>{S.why.title}</h2>
          <p className="lead" style={{ maxWidth: '56ch' }}>{S.why.text}</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <Faq title={UI.faqTitle} items={faqs('systems')} />
        </div>
      </section>

      <CtaBand
        title={S.cta.title}
        text={S.cta.text}
        primary={{ label: S.cta.primary, to: `${lp('contact')}?topic=systems` }}
        secondary={{ label: SITE.phone, href: `tel:${SITE.phone.replace(/\s/g, '')}` }}
      />
    </>
  );
}
