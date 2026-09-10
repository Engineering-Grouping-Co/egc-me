import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';
import { TERMS } from '../content/legalPages';

export default function Terms() {
  const locale = useLocale();
  const { SITE } = useContent();
  const t = TERMS[locale];

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: t.pageTitle }]}
        overline={t.pageOverline}
        title={t.pageTitle}
        subtitle={t.lastUpdated}
      />

      <div className="legal-body">
        {t.sections.map((s) => (
          <div key={s.h}>
            <h2>{s.h}</h2>
            {s.p.map((para, i) => (
              <p key={para}>
                {para}
                {s.hasPrivacyLink && i === s.p.length - 1 && (
                  <>
                    {' '}
                    <Link to={`/${locale}/privacy-policy`} style={{ color: 'var(--blue)', fontWeight: 600 }}>
                      {t.privacyLinkText}
                    </Link>{' '}
                    {s.pAfterLink}
                  </>
                )}
              </p>
            ))}
            {s.list && (
              <ul>
                {s.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            )}
            {s.pAfter && s.pAfter.map((para) => <p key={para}>{para}</p>)}
          </div>
        ))}
        <p>
          {SITE.name}<br />
          {SITE.address}<br />
          {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}: {SITE.email}<br />
          {locale === 'ar' ? 'الهاتف' : 'Phone'}: {SITE.phone}
        </p>
      </div>
    </>
  );
}
