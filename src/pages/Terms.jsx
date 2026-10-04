import { Link } from 'react-router-dom';
import { useContent } from '../content';
import { useLocalePath } from '../i18n/LocaleContext';
import { PageHero } from '../components/Parts';
import { TERMS } from '../content/legalPages';
import './pages.css';

export default function Terms() {
  const lp = useLocalePath();
  const { locale, SITE, UI } = useContent();
  const t = TERMS[locale];

  return (
    <>
      <PageHero routeKey="terms" title={t.pageTitle} lead={t.lastUpdated} />
      <section className="sec sec--tight">
        <div className="wrap">
          <div className="prose legal-text">
            {t.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.p.map((para, i) => (
                  <p key={para}>
                    {para}
                    {s.hasPrivacyLink && i === s.p.length - 1 && (
                      <>
                        {' '}
                        <Link className="tlink" to={lp('privacy-policy')}>{t.privacyLinkText}</Link>{' '}
                        {s.pAfterLink}
                      </>
                    )}
                  </p>
                ))}
                {s.list && <ul>{s.list.map((li) => <li key={li}>{li}</li>)}</ul>}
                {s.pAfter?.map((para) => <p key={para}>{para}</p>)}
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
