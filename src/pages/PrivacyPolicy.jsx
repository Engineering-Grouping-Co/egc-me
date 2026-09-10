import PageHeader from '../components/PageHeader';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';
import { PRIVACY_POLICY } from '../content/legalPages';

export default function PrivacyPolicy() {
  const locale = useLocale();
  const { SITE } = useContent();
  const t = PRIVACY_POLICY[locale];

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
            {s.p.map((para) => <p key={para}>{para}</p>)}
            {s.list && (
              <ul>
                {s.list.map((li) => <li key={li}>{li}</li>)}
              </ul>
            )}
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
