import { Download, ExternalLink, Eye } from 'lucide-react';
import { useContent } from '../content';
import { Facts, PageHero } from '../components/Parts';
import { CR_DATA, VAT_NUMBER, NATIONAL_ADDRESS, CONTACTS, getDocuments, CATEGORY_LABELS, LP_COPY } from '../content/legalProfile';
import './pages.css';

function Doc({ doc, t, email, locale }) {
  const available = doc.status === 'available' && doc.file;
  const request = `mailto:${email}?subject=${encodeURIComponent(t.requestMailSubjectPrefix + doc.title)}&body=${encodeURIComponent(t.requestMailBody + doc.title + t.requestMailBodySuffix)}`;
  return (
    <li className="doc">
      <div className="doc__main">
        <h4>{doc.title}</h4>
        <p className="doc__alt" lang={locale === 'en' ? 'ar' : 'en'} dir={locale === 'en' ? 'rtl' : 'ltr'}>{doc.titleAr}</p>
        <p className="small">{doc.desc} {t.docIssuedBy} {doc.authority}.</p>
      </div>
      <div className="doc__actions">
        <span className={`tag ${available ? 'tag--live' : 'tag--paused'}`}>{available ? t.docAvailable : t.docOnRequest}</span>
        {available ? (
          <>
            <a className="btn btn--ghost btn--sm" href={doc.file} target="_blank" rel="noreferrer"><Eye size={16} />{t.docView}</a>
            <a className="btn btn--primary btn--sm" href={doc.file} download><Download size={16} />{t.docDownload}</a>
          </>
        ) : (
          <a className="btn btn--ghost btn--sm" href={request}><ExternalLink size={16} />{t.docRequest}</a>
        )}
      </div>
    </li>
  );
}

export default function LegalProfile() {
  const { locale, SITE, CERTIFICATIONS } = useContent();
  const t = LP_COPY[locale];
  const cr = CR_DATA[locale];
  const na = NATIONAL_ADDRESS[locale];
  const contacts = CONTACTS[locale];
  const documents = getDocuments(locale);
  const categories = [...new Set(documents.map((d) => d.category))];

  return (
    <>
      <PageHero routeKey="legalProfile" title={t.pageTitle} lead={t.pageSubtitle} />

      <section className="sec sec--tight">
        <div className="wrap legal">
          <dl className="idbar">
            <div><dt>{t.idCrLabel}</dt><dd dir="ltr">{cr.number}</dd></div>
            <div><dt>{t.idVatLabel}</dt><dd dir="ltr">{VAT_NUMBER}</dd></div>
            <div><dt>{t.idAddressLabel}</dt><dd dir="ltr">{na.code}</dd></div>
            <div><dt>{t.idCityLabel}</dt><dd>{cr.issuingCity}, {`${cr.region} ${t.regionSuffix}`.trim()}</dd></div>
          </dl>

          <h2>{t.docsTitle}</h2>
          <p className="muted">{t.docsIntro}</p>
          {categories.map((cat) => (
            <div key={cat} className="legal__group">
              <h3>{CATEGORY_LABELS[locale][cat]}</h3>
              <ul className="docs">
                {documents.filter((d) => d.category === cat).map((d) => <Doc key={d.id} doc={d} t={t} email={SITE.email} locale={locale} />)}
              </ul>
            </div>
          ))}

          <h2>{t.crTitle}</h2>
          <Facts
            rows={[
              [t.crRows[0], cr.entity],
              [t.crRows[1], cr.entityAr],
              [t.crRows[2], cr.legalType],
              [t.crRows[3], `${locale === 'ar' ? 'وزارة التجارة —' : 'Ministry of Commerce —'} ${cr.issuingCity}`],
              [t.crRows[4], `${cr.region} ${t.regionSuffix}`.trim()],
              [t.crRows[5], cr.status],
            ]}
          />
          <p className="small">{t.crVerify} <a className="tlink" href="https://mc.gov.sa" target="_blank" rel="noreferrer">mc.gov.sa</a> {t.crVerifySuffix}</p>

          <h2>{t.naTitle}</h2>
          <Facts
            rows={[
              [t.naCodeLabel, na.code],
              [t.naRows[0], na.building],
              [t.naRows[1], na.street],
              [t.naRows[2], na.additional],
              [t.naRows[3], na.district],
              [t.naRows[4], na.postal],
              [t.naRows[5], na.city],
              [t.naRows[6], na.country],
            ]}
          />
          <p className="small">{t.naVerify} <a className="tlink" href="https://splonline.com.sa" target="_blank" rel="noreferrer">splonline.com.sa</a>.</p>

          <h2>{t.zatcaTitle}</h2>
          <Facts rows={[[t.zatcaRows[0], VAT_NUMBER], [t.zatcaRows[1], t.zatcaTaxScheme], [t.zatcaRows[2], t.zatcaEinvoice]]} />
          <p className="small">{t.zatcaNote} <a className="tlink" href="https://zatca.gov.sa" target="_blank" rel="noreferrer">zatca.gov.sa</a>. {t.zatcaNoteSuffix}</p>

          <h2>{t.certsTitle}</h2>
          <div className="grid-3 lines">
            {CERTIFICATIONS.map((c) => (
              <article key={c.code} className="line-block">
                <p className="cert__code" dir="ltr">{c.code}</p>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>

          <h2>{t.contactsTitle}</h2>
          <p className="muted">{t.contactsIntro}</p>
          <ul className="legal__contacts">
            {contacts.map((c) => (
              <li key={c.label}>
                <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  <span className="small">{c.label}</span>
                  <strong dir="ltr">{c.value}</strong>
                </a>
              </li>
            ))}
          </ul>

          <p className="small legal__disclaimer">
            {t.disclaimer1} {t.disclaimer2} {cr.number}, {t.disclaimer3} {VAT_NUMBER}, {t.disclaimer4} {na.code}. {t.disclaimer5}{' '}
            <a className="tlink" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
