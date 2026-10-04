import { useContent } from '../content';
import { PageHero } from '../components/Parts';
import { PRIVACY_POLICY } from '../content/legalPages';
import './pages.css';

export default function PrivacyPolicy() {
  const { locale, SITE, UI } = useContent();
  const t = PRIVACY_POLICY[locale];

  return (
    <>
      <PageHero routeKey="privacyPolicy" title={t.pageTitle} lead={t.lastUpdated} />
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="prose legal-text">
            {t.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para) => <p key={para}>{para}</p>)}
                {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
              </section>
            ))}
            <p>
              {SITE.legalName}<br />
              {SITE.address}<br />
              {UI.email}: <a className="tlink" href={`mailto:${SITE.email}`}>{SITE.email}</a><br />
              {UI.phone}: <span dir="ltr">{SITE.phone}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
