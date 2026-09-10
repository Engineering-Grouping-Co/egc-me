import { FileText, Image as ImageIcon, Download, ExternalLink, Eye } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';
import { CR_DATA, VAT_NUMBER, NATIONAL_ADDRESS, CONTACTS, getDocuments, CATEGORY_LABELS, LP_COPY } from '../content/legalProfile';

const CATEGORY_COLORS = {
  registration: { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  tax: { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  membership: { bg: '#F0FDF4', text: '#166534', border: '#BBF7D0' },
  certification: { bg: '#F5F3FF', text: '#4C1D95', border: '#DDD6FE' },
  compliance: { bg: '#FFF7ED', text: '#9A3412', border: '#FDBA74' },
  financial: { bg: '#F0FDFA', text: '#134E4A', border: '#99F6E4' },
};

function Section({ title, badge, children }) {
  return (
    <FadeIn>
      <div className="lp-section">
        <div className="lp-section-head">
          <h2 className="lp-section-title">{title}</h2>
          {badge && <span className="lp-badge">{badge}</span>}
        </div>
        {children}
      </div>
    </FadeIn>
  );
}

function DataTable({ rows }) {
  return (
    <table className="lp-table">
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k}>
            <th>{k}</th>
            <td>{v ?? '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function DocCard({ doc, t, email, locale }) {
  const cat = CATEGORY_COLORS[doc.category] ?? CATEGORY_COLORS.compliance;
  const isPdf = doc.type === 'pdf';
  const isAvailable = doc.status === 'available';
  const requestHref = `mailto:${email}?subject=${encodeURIComponent(t.requestMailSubjectPrefix + doc.title)}&body=${encodeURIComponent(t.requestMailBody + doc.title + t.requestMailBodySuffix)}`;

  return (
    <div className={`lp-doc-card${isAvailable ? ' lp-doc-available' : ' lp-doc-request'}`}>
      <div className="lp-doc-top">
        <div className="lp-doc-icon-wrap" style={{ background: cat.bg, borderColor: cat.border }}>
          {isPdf ? <FileText size={18} style={{ color: cat.text }} /> : <ImageIcon size={18} style={{ color: cat.text }} />}
        </div>
        <span className="lp-doc-cat" style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}>
          {CATEGORY_LABELS[locale][doc.category]}
        </span>
        {isAvailable
          ? <span className="lp-doc-status lp-doc-status-ok">{t.docAvailable}</span>
          : <span className="lp-doc-status lp-doc-status-req">{t.docOnRequest}</span>}
      </div>

      <div className="lp-doc-body">
        <h3 className="lp-doc-title">{doc.title}</h3>
        <p className="lp-doc-ar" dir={locale === 'en' ? 'rtl' : 'ltr'}>{doc.titleAr}</p>
        <p className="lp-doc-desc">{doc.desc}</p>
        <p className="lp-doc-auth">{t.docIssuedBy} <strong>{doc.authority}</strong></p>
      </div>

      <div className="lp-doc-actions">
        {isAvailable && doc.file ? (
          <>
            <a href={doc.file} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm lp-doc-btn">
              <Eye size={13} /> {t.docView}
            </a>
            <a href={doc.file} download className="btn btn-primary btn-sm lp-doc-btn">
              <Download size={13} /> {t.docDownload}
            </a>
          </>
        ) : (
          <a href={requestHref} className="btn btn-secondary btn-sm lp-doc-btn">
            <ExternalLink size={13} /> {t.docRequest}
          </a>
        )}
      </div>
    </div>
  );
}

export default function LegalProfile() {
  const locale = useLocale();
  const { SITE } = useContent();
  const t = LP_COPY[locale];
  const cr = CR_DATA[locale];
  const na = NATIONAL_ADDRESS[locale];
  const contacts = CONTACTS[locale];
  const documents = getDocuments(locale);
  const categories = [...new Set(documents.map((d) => d.category))];

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: t.pageTitle }]}
        overline={t.pageOverline}
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
      />

      <div className="lp-identity-bar">
        <div className="container">
          <div className="lp-id-inner">
            <div className="lp-id-item">
              <span className="lp-id-label">{t.idCrLabel}</span>
              <span className="lp-id-value lp-id-mono">{cr.number}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">{t.idVatLabel}</span>
              <span className="lp-id-value lp-id-mono">{VAT_NUMBER}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">{t.idAddressLabel}</span>
              <span className="lp-id-value lp-id-mono">{na.code}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">{t.idCityLabel}</span>
              <span className="lp-id-value">{cr.issuingCity}, {cr.region} {t.regionSuffix}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container lp-body">
          <Section title={t.docsTitle} badge={t.docsBadge}>
            <p className="lp-docs-intro">{t.docsIntro}</p>
            {categories.map((cat) => {
              const docs = documents.filter((d) => d.category === cat);
              return (
                <div key={cat} className="lp-doc-group">
                  <h3 className="lp-doc-group-title">{CATEGORY_LABELS[locale][cat]}</h3>
                  <div className="lp-doc-grid">
                    {docs.map((d) => <DocCard key={d.id} doc={d} t={t} email={SITE.email} locale={locale} />)}
                  </div>
                </div>
              );
            })}
          </Section>

          <hr className="lp-divider" />

          <Section title={t.crTitle} badge={t.crBadge}>
            <div className="lp-cr-highlight">
              <div className="lp-cr-number-block">
                <span className="lp-cr-label">{t.crLabel}</span>
                <span className="lp-cr-number">{cr.number}</span>
                <span className="lp-cr-sub">{cr.entity}</span>
              </div>
              <DataTable rows={[
                [t.crRows[0], cr.entity],
                [t.crRows[1], cr.entityAr],
                [t.crRows[2], cr.legalType],
                [t.crRows[3], `${locale === 'ar' ? 'وزارة التجارة —' : 'Ministry of Commerce —'} ${cr.issuingCity}`],
                [t.crRows[4], `${cr.region} ${t.regionSuffix}`],
                [t.crRows[5], cr.status],
              ]} />
            </div>
            <p className="lp-note">
              {t.crVerify}{' '}
              <a href="https://mc.gov.sa" target="_blank" rel="noreferrer">mc.gov.sa</a>{' '}
              {t.crVerifySuffix}
            </p>
          </Section>

          <hr className="lp-divider" />

          <Section title={t.naTitle} badge={t.naBadge}>
            <div className="lp-na-grid">
              <div className="lp-na-code-block">
                <span className="lp-na-code-label">{t.naCodeLabel}</span>
                <span className="lp-na-code">{na.code}</span>
                <p className="lp-na-code-sub">{t.naCodeSub}</p>
              </div>
              <DataTable rows={[
                [t.naRows[0], na.district],
                [t.naRows[1], na.city],
                [t.naRows[2], na.country],
              ]} />
            </div>
            <p className="lp-note">
              {t.naVerify}{' '}
              <a href="https://splonline.com.sa" target="_blank" rel="noreferrer">splonline.com.sa</a>.
            </p>
          </Section>

          <hr className="lp-divider" />

          <Section title={t.zatcaTitle} badge={t.zatcaBadge}>
            <div className="lp-zatca-wrap">
              <div className="lp-vat-highlight">
                <div className="lp-vat-block">
                  <span className="lp-vat-label">{t.zatcaLabel}</span>
                  <span className="lp-vat-number">{VAT_NUMBER}</span>
                </div>
                <div className="lp-vat-auth">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <rect width="32" height="32" rx="8" fill="#EFF6FF"/>
                    <path d="M8 22l5-12 3 8 3-5 4 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <span className="lp-zatca-title">{t.zatcaAuthTitle}</span>
                    <span className="lp-zatca-sub">{t.zatcaAuthSub}</span>
                  </div>
                </div>
              </div>
              <DataTable rows={[
                [t.zatcaRows[0], VAT_NUMBER],
                [t.zatcaRows[1], t.zatcaTaxScheme],
                [t.zatcaRows[2], t.zatcaEinvoice],
              ]} />
              <p className="lp-note">
                {t.zatcaNote}{' '}
                <a href="https://zatca.gov.sa" target="_blank" rel="noreferrer">zatca.gov.sa</a>.{' '}
                {t.zatcaNoteSuffix}
              </p>
            </div>
          </Section>

          <hr className="lp-divider" />

          <Section title={t.certsTitle}>
            <div className="lp-certs-grid">
              {[
                { code: 'ISO 9001', title: locale === 'ar' ? 'نظام إدارة الجودة' : 'Quality Management System', desc: locale === 'ar' ? 'يحكم جميع عمليات التصنيع والموقع.' : 'Governing all fabrication and site operations.' },
                { code: 'ISO 45001', title: locale === 'ar' ? 'الصحة والسلامة المهنية' : 'Occupational Health & Safety', desc: locale === 'ar' ? 'برنامج صحة وسلامة فعّال في جميع المواقع.' : 'Active HSE programme across all worksites.' },
                { code: 'ISO 14001', title: locale === 'ar' ? 'الإدارة البيئية' : 'Environmental Management', desc: locale === 'ar' ? 'إجراءات النفايات والمواد الخطرة وأثر المواقع.' : 'Waste, hazardous materials, and site impact procedures.' },
              ].map((c) => (
                <div key={c.code} className="lp-cert-card">
                  <div className="lp-cert-badge">{c.code}</div>
                  <h3 className="lp-cert-title">{c.title}</h3>
                  <p className="lp-cert-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <hr className="lp-divider" />

          <Section title={t.contactsTitle}>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: 20 }}>{t.contactsIntro}</p>
            <div className="lp-contact-grid">
              {contacts.map((c) => (
                <a key={c.label} href={c.href} className="lp-contact-card" {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  <span className="lp-contact-label">{c.label}</span>
                  <span className="lp-contact-value">{c.value}</span>
                </a>
              ))}
            </div>
          </Section>

          <hr className="lp-divider" />

          <FadeIn>
            <div className="lp-disclaimer">
              <p>
                {t.disclaimer1}{' '}
                {t.disclaimer2} <strong>{cr.number}</strong> · {t.disclaimer3} <strong>{VAT_NUMBER}</strong> · {t.disclaimer4} <strong>{na.code}</strong>.{' '}
                {t.disclaimer5}{' '}
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .lp-identity-bar { background: var(--dark); border-bottom: 1px solid rgba(255,255,255,0.08); }
        .lp-id-inner { display: flex; align-items: center; flex-wrap: wrap; padding: 0; gap: 0; }
        .lp-id-item { display: flex; flex-direction: column; gap: 3px; padding: 20px 32px 20px 0; flex: 1; min-width: 160px; }
        .lp-id-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.1); flex-shrink: 0; margin-inline-end: 32px; }
        .lp-id-label { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-id-value { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: #fff; }
        .lp-id-mono { font-family: 'Courier New', monospace; letter-spacing: 0.04em; color: #93C5FD; font-size: 0.88rem; }

        .lp-body { max-width: 900px; }
        .lp-section { margin-bottom: 0; }
        .lp-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .lp-section-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--dark); margin: 0; }
        .lp-badge { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: var(--blue-light); color: var(--blue); padding: 3px 10px; border-radius: 999px; border: 1px solid var(--blue-mid); }
        .lp-divider { border: none; border-top: 1px solid var(--border); margin: 48px 0; }

        .lp-docs-intro { font-size: 0.88rem; color: var(--muted); line-height: 1.6; margin: 0 0 28px; }
        .lp-doc-group { margin-bottom: 32px; }
        .lp-doc-group:last-child { margin-bottom: 0; }
        .lp-doc-group-title { font-family: var(--font-display); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 0 0 14px; padding-bottom: 8px; border-bottom: 1px solid var(--border); }
        .lp-doc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }

        .lp-doc-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 18px; display: flex; flex-direction: column; gap: 12px; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease; }
        .lp-doc-available { border-inline-start: 3px solid #10B981; }
        .lp-doc-request { border-inline-start: 3px solid var(--border); }
        .lp-doc-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
        .lp-doc-top { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .lp-doc-icon-wrap { width: 34px; height: 34px; border-radius: 8px; border: 1px solid; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .lp-doc-cat { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; border: 1px solid; }
        .lp-doc-status { margin-inline-start: auto; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; flex-shrink: 0; }
        .lp-doc-status-ok { background: #D1FAE5; color: #065F46; }
        .lp-doc-status-req { background: var(--gray-bg); color: var(--muted); border: 1px solid var(--border); }
        .lp-doc-body { flex: 1; }
        .lp-doc-title { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: var(--dark); margin: 0 0 3px; line-height: 1.3; }
        .lp-doc-ar { font-size: 0.75rem; color: var(--muted); margin: 0 0 8px; }
        .lp-doc-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.55; margin: 0 0 6px; }
        .lp-doc-auth { font-size: 0.72rem; color: var(--muted); margin: 0; }
        .lp-doc-auth strong { color: var(--dark); }
        .lp-doc-actions { display: flex; gap: 8px; }
        .lp-doc-btn { display: inline-flex; align-items: center; gap: 5px; flex: 1; justify-content: center; }

        .lp-table { width: 100%; border-collapse: collapse; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
        .lp-table th, .lp-table td { padding: 10px 14px; text-align: start; font-size: 0.87rem; border-bottom: 1px solid var(--border); vertical-align: top; }
        .lp-table th { width: 38%; font-weight: 600; color: var(--muted); background: var(--gray-bg); white-space: nowrap; }
        .lp-table td { color: var(--dark); font-weight: 500; }
        .lp-table tr:last-child th, .lp-table tr:last-child td { border-bottom: none; }

        .lp-cr-highlight { display: grid; grid-template-columns: 200px 1fr; gap: 20px; margin-bottom: 16px; }
        .lp-cr-number-block { background: var(--dark); border-radius: var(--radius-lg); padding: 24px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; }
        .lp-cr-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-cr-number { font-family: 'Courier New', monospace; font-size: 1.25rem; font-weight: 700; color: #93C5FD; letter-spacing: 0.06em; }
        .lp-cr-sub { font-size: 0.68rem; color: rgba(255,255,255,0.45); line-height: 1.4; margin-top: 2px; }

        .lp-na-grid { display: grid; grid-template-columns: 180px 1fr; gap: 20px; margin-bottom: 16px; }
        .lp-na-code-block { background: var(--blue); border-radius: var(--radius-lg); padding: 24px 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; }
        .lp-na-code-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
        .lp-na-code { font-family: 'Courier New', monospace; font-size: 1.35rem; font-weight: 800; color: #fff; letter-spacing: 0.1em; }
        .lp-na-code-sub { font-size: 0.62rem; color: rgba(255,255,255,0.55); line-height: 1.4; }

        .lp-zatca-wrap { display: flex; flex-direction: column; gap: 18px; }
        .lp-vat-highlight { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-bottom: 4px; }
        .lp-vat-block { background: var(--dark); border-radius: var(--radius-lg); padding: 20px 28px; display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 240px; }
        .lp-vat-label { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-vat-number { font-family: 'Courier New', monospace; font-size: 1.3rem; font-weight: 700; color: #93C5FD; letter-spacing: 0.04em; }
        .lp-vat-auth { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 200px; }
        .lp-zatca-title { display: block; font-size: 0.88rem; font-weight: 700; color: var(--dark); }
        .lp-zatca-sub { display: block; font-size: 0.74rem; color: var(--muted); }

        .lp-certs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .lp-cert-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 20px; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .lp-cert-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
        .lp-cert-badge { display: inline-block; font-size: 0.68rem; font-weight: 800; letter-spacing: 0.06em; background: var(--dark); color: #fff; padding: 3px 10px; border-radius: 4px; margin-bottom: 12px; }
        .lp-cert-title { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--dark); margin: 0 0 6px; }
        .lp-cert-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.55; margin: 0; }

        .lp-contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .lp-contact-card { display: flex; flex-direction: column; gap: 4px; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 16px 18px; text-decoration: none; transition: border-color 0.2s, background 0.2s; }
        .lp-contact-card:hover { border-color: var(--blue); background: var(--blue-light); }
        .lp-contact-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
        .lp-contact-value { font-size: 0.88rem; font-weight: 600; color: var(--blue); }

        .lp-note { font-size: 0.8rem; color: var(--muted); line-height: 1.6; margin: 14px 0 0; }
        .lp-note a, .lp-disclaimer a { color: var(--blue); text-decoration: underline; }
        .lp-disclaimer { background: var(--gray-bg); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 20px 24px; font-size: 0.8rem; color: var(--muted); line-height: 1.65; margin-bottom: 48px; }
        .lp-disclaimer p { margin: 0; }

        @media (max-width: 860px) {
          .lp-doc-grid { grid-template-columns: 1fr; }
          .lp-cr-highlight { grid-template-columns: 1fr; }
          .lp-na-grid { grid-template-columns: 1fr; }
          .lp-certs-grid { grid-template-columns: 1fr 1fr; }
          .lp-contact-grid { grid-template-columns: 1fr 1fr; }
          .lp-id-item { padding: 14px 20px 14px 0; min-width: 140px; }
          .lp-id-divider { margin-inline-end: 20px; }
          .lp-vat-highlight { flex-direction: column; align-items: flex-start; gap: 12px; }
          .lp-vat-block { min-width: unset; width: 100%; }
        }
        @media (max-width: 580px) {
          .lp-certs-grid { grid-template-columns: 1fr; }
          .lp-contact-grid { grid-template-columns: 1fr; }
          .lp-id-inner { flex-direction: column; align-items: flex-start; }
          .lp-id-divider { display: none; }
          .lp-id-item { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); width: 100%; }
        }
      `}</style>
    </>
  );
}
