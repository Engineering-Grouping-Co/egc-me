import { Link } from 'react-router-dom';
import { FileText, Image as ImageIcon, Download, ExternalLink, Eye } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';

/* ──────────────────────────────────────────────
   Saudi-compliant legal profile page.
   CR 7040750007 | VAT 314367391500003
   Design inspired by Aramco / SABIC investor profiles.
────────────────────────────────────────────── */

const CR_DATA = {
  number:       '7040750007',
  entity:       'Engineering Grouping Co.',
  entityAr:     'شركة المجموعة الهندسية',
  legalType:    'Limited Liability Company (LLC)',
  issuingCity:  'Jeddah',
  region:       'Makkah',
  status:       'Active',
};

const VAT_NUMBER = '314367391500003';

const NATIONAL_ADDRESS = {
  code:        'JDJA8188',
  district:    'Almanar District',
  city:        'Jeddah',
  country:     'Kingdom of Saudi Arabia',
};

const CONTACTS = [
  { label: 'General Enquiries', value: 'info@egc-me.com',  href: 'mailto:info@egc-me.com' },
  { label: 'Phone',             value: '+966 50 434 1861', href: 'tel:+966504341861' },
  { label: 'Supplier Portal',   value: 'erp.egc-me.com',  href: 'https://erp.egc-me.com', external: true },
];

/* ──────────────────────────────────────────────
   DOCUMENTS — files in /public/legal-documents/
   type: 'pdf' | 'image'
   status: 'available' | 'request'
────────────────────────────────────────────── */
const DOCUMENTS = [
  // ── AVAILABLE (uploaded) ──
  {
    id: 'cr',
    title: 'Commercial Registration',
    titleAr: 'السجل التجاري',
    desc: 'Official CR issued by the Ministry of Commerce. CR No. 7040750007.',
    file: '/legal-documents/Commercial Register.pdf',
    type: 'pdf',
    status: 'available',
    authority: 'Ministry of Commerce (MC)',
    category: 'Registration',
  },
  {
    id: 'national-address',
    title: 'National Address Certificate',
    titleAr: 'شهادة العنوان الوطني',
    desc: 'Registered national address JDJA8188, Almanar District, Jeddah.',
    file: '/legal-documents/National Address.jpeg',
    type: 'image',
    status: 'available',
    authority: 'Saudi Post (SPL)',
    category: 'Registration',
  },
  {
    id: 'zatca',
    title: 'ZATCA VAT Certificate',
    titleAr: 'شهادة تسجيل ضريبة القيمة المضافة',
    desc: `VAT registration certificate. VAT No. ${VAT_NUMBER}.`,
    file: '/legal-documents/ZATCA Certificate.pdf',
    type: 'pdf',
    status: 'available',
    authority: 'ZATCA',
    category: 'Tax',
  },
  {
    id: 'membership',
    title: 'Membership Certificate',
    titleAr: 'شهادة العضوية',
    desc: 'Chamber of Commerce membership certificate confirming EGC\'s active registration.',
    file: '/legal-documents/Membership Certifcate.pdf',
    type: 'pdf',
    status: 'available',
    authority: 'Chamber of Commerce — Jeddah',
    category: 'Membership',
  },

  // ── REQUEST ON DEMAND ──
  {
    id: 'iso-9001',
    title: 'ISO 9001 — Quality Management',
    titleAr: 'شهادة الجودة ISO 9001',
    desc: 'ISO 9001 quality management system certificate covering all fabrication and site operations.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'Certification Body',
    category: 'Certification',
  },
  {
    id: 'iso-45001',
    title: 'ISO 45001 — Occupational Health & Safety',
    titleAr: 'شهادة السلامة المهنية ISO 45001',
    desc: 'Occupational health and safety management system certificate.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'Certification Body',
    category: 'Certification',
  },
  {
    id: 'iso-14001',
    title: 'ISO 14001 — Environmental Management',
    titleAr: 'شهادة الإدارة البيئية ISO 14001',
    desc: 'Environmental management system certificate covering waste and site impact procedures.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'Certification Body',
    category: 'Certification',
  },
  {
    id: 'gosi',
    title: 'GOSI Certificate',
    titleAr: 'شهادة التأمينات الاجتماعية (جوسي)',
    desc: 'General Organisation for Social Insurance registration and compliance certificate.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'GOSI',
    category: 'Registration',
  },
  {
    id: 'muqeem',
    title: 'Muqeem / Iqama Compliance',
    titleAr: 'شهادة الامتثال (مقيم)',
    desc: 'Compliance confirmation for expatriate employee residency documentation.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'Ministry of Interior',
    category: 'Compliance',
  },
  {
    id: 'vat-return',
    title: 'Latest VAT Return Acknowledgement',
    titleAr: 'إقرار ضريبة القيمة المضافة',
    desc: 'Most recent ZATCA VAT return filing acknowledgement confirming tax compliance.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'ZATCA',
    category: 'Tax',
  },
  {
    id: 'bank-letter',
    title: 'Bank Comfort / Reference Letter',
    titleAr: 'خطاب المصرف',
    desc: 'Official bank reference letter confirming EGC\'s account standing and financial relationship.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'EGC Banking Partner',
    category: 'Financial',
  },
  {
    id: 'hse-policy',
    title: 'HSE Policy Statement',
    titleAr: 'سياسة الصحة والسلامة والبيئة',
    desc: 'Health, Safety and Environment policy statement signed by company management.',
    file: null,
    type: 'pdf',
    status: 'request',
    authority: 'Engineering Grouping Co.',
    category: 'Compliance',
  },
];

const CATEGORIES = [...new Set(DOCUMENTS.map(d => d.category))];

const CATEGORY_COLORS = {
  Registration:  { bg: '#EFF6FF', text: '#1E40AF', border: '#BFDBFE' },
  Tax:           { bg: '#FEF3C7', text: '#92400E', border: '#FDE68A' },
  Membership:    { bg: '#F0FDF4', text: '#166534', border: '#BBF7D0' },
  Certification: { bg: '#F5F3FF', text: '#4C1D95', border: '#DDD6FE' },
  Compliance:    { bg: '#FFF7ED', text: '#9A3412', border: '#FDBA74' },
  Financial:     { bg: '#F0FDFA', text: '#134E4A', border: '#99F6E4' },
};

/* ── helpers ── */
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

function DocCard({ doc }) {
  const cat = CATEGORY_COLORS[doc.category] ?? CATEGORY_COLORS.Compliance;
  const isPdf = doc.type === 'pdf';
  const isAvailable = doc.status === 'available';

  return (
    <div className={`lp-doc-card${isAvailable ? ' lp-doc-available' : ' lp-doc-request'}`}>
      {/* top row */}
      <div className="lp-doc-top">
        <div className="lp-doc-icon-wrap" style={{ background: cat.bg, borderColor: cat.border }}>
          {isPdf
            ? <FileText size={18} style={{ color: cat.text }} />
            : <ImageIcon size={18} style={{ color: cat.text }} />}
        </div>
        <span className="lp-doc-cat" style={{ background: cat.bg, color: cat.text, borderColor: cat.border }}>
          {doc.category}
        </span>
        {isAvailable
          ? <span className="lp-doc-status lp-doc-status-ok">Available</span>
          : <span className="lp-doc-status lp-doc-status-req">On Request</span>}
      </div>

      {/* content */}
      <div className="lp-doc-body">
        <h3 className="lp-doc-title">{doc.title}</h3>
        <p className="lp-doc-ar">{doc.titleAr}</p>
        <p className="lp-doc-desc">{doc.desc}</p>
        <p className="lp-doc-auth">Issued by: <strong>{doc.authority}</strong></p>
      </div>

      {/* actions */}
      <div className="lp-doc-actions">
        {isAvailable && doc.file ? (
          <>
            <a
              href={doc.file}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary btn-sm lp-doc-btn"
            >
              <Eye size={13} /> View
            </a>
            <a
              href={doc.file}
              download
              className="btn btn-primary btn-sm lp-doc-btn"
            >
              <Download size={13} /> Download
            </a>
          </>
        ) : (
          <a
            href={`mailto:info@egc-me.com?subject=Document Request — ${doc.title}&body=Dear EGC,%0D%0A%0D%0APlease provide a copy of the following document:%0D%0A%0D%0A${doc.title}%0D%0A%0D%0AThank you.`}
            className="btn btn-secondary btn-sm lp-doc-btn"
          >
            <ExternalLink size={13} /> Request
          </a>
        )}
      </div>
    </div>
  );
}

export default function LegalProfile() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'Legal Profile' }]}
        overline="Company Disclosures"
        title="Legal & Commercial Profile"
        subtitle="Official commercial registration, national address, ZATCA, and certification records for Engineering Grouping Co. — maintained for public transparency and legal compliance within the Kingdom of Saudi Arabia."
      />

      {/* ── IDENTITY BAR ── */}
      <div className="lp-identity-bar">
        <div className="container">
          <div className="lp-id-inner">
            <div className="lp-id-item">
              <span className="lp-id-label">CR Number</span>
              <span className="lp-id-value lp-id-mono">{CR_DATA.number}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">VAT Number</span>
              <span className="lp-id-value lp-id-mono">{VAT_NUMBER}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">National Address</span>
              <span className="lp-id-value lp-id-mono">{NATIONAL_ADDRESS.code}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">Registered City</span>
              <span className="lp-id-value">{CR_DATA.issuingCity}, {CR_DATA.region} Region</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="section">
        <div className="container lp-body">

          {/* ── DOCUMENTS SECTION ── */}
          <Section title="Official Documents" badge="Download">
            <p className="lp-docs-intro">
              Documents currently on file are available to view and download directly. All other documents
              can be requested via email for tender submissions, procurement, or legal purposes.
            </p>

            {CATEGORIES.map(cat => {
              const docs = DOCUMENTS.filter(d => d.category === cat);
              return (
                <div key={cat} className="lp-doc-group">
                  <h3 className="lp-doc-group-title">{cat}</h3>
                  <div className="lp-doc-grid">
                    {docs.map(d => <DocCard key={d.id} doc={d} />)}
                  </div>
                </div>
              );
            })}
          </Section>

          <hr className="lp-divider" />

          {/* ── COMMERCIAL REGISTRATION ── */}
          <Section title="Commercial Registration" badge="CR">
            <div className="lp-cr-highlight">
              <div className="lp-cr-number-block">
                <span className="lp-cr-label">CR Number</span>
                <span className="lp-cr-number">{CR_DATA.number}</span>
                <span className="lp-cr-sub">{CR_DATA.entity}</span>
              </div>
              <DataTable rows={[
                ['Registered Entity',    CR_DATA.entity],
                ['Arabic Name',          CR_DATA.entityAr],
                ['Legal Structure',      CR_DATA.legalType],
                ['Issuing Authority',    `Ministry of Commerce — ${CR_DATA.issuingCity}`],
                ['Region',               `${CR_DATA.region} Region`],
                ['CR Status',            CR_DATA.status],
              ]} />
            </div>
            <p className="lp-note">
              Verify independently at{' '}
              <a href="https://mc.gov.sa" target="_blank" rel="noreferrer">mc.gov.sa</a>{' '}
              using the CR number above.
            </p>
          </Section>

          <hr className="lp-divider" />

          {/* ── NATIONAL ADDRESS ── */}
          <Section title="National Address" badge="SPL">
            <div className="lp-na-grid">
              <div className="lp-na-code-block">
                <span className="lp-na-code-label">Short Address</span>
                <span className="lp-na-code">{NATIONAL_ADDRESS.code}</span>
                <p className="lp-na-code-sub">Registered with Saudi Post (Wasel)</p>
              </div>
              <DataTable rows={[
                ['District',  NATIONAL_ADDRESS.district],
                ['City',      NATIONAL_ADDRESS.city],
                ['Country',   NATIONAL_ADDRESS.country],
              ]} />
            </div>
            <p className="lp-note">
              Verify at{' '}
              <a href="https://splonline.com.sa" target="_blank" rel="noreferrer">splonline.com.sa</a>.
            </p>
          </Section>

          <hr className="lp-divider" />

          {/* ── ZATCA / VAT ── */}
          <Section title="Tax Registration — ZATCA" badge="VAT">
            <div className="lp-zatca-wrap">
              <div className="lp-vat-highlight">
                <div className="lp-vat-block">
                  <span className="lp-vat-label">VAT Registration Number</span>
                  <span className="lp-vat-number">{VAT_NUMBER}</span>
                </div>
                <div className="lp-vat-auth">
                  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <rect width="32" height="32" rx="8" fill="#EFF6FF"/>
                    <path d="M8 22l5-12 3 8 3-5 4 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <span className="lp-zatca-title">Zakat, Tax & Customs Authority</span>
                    <span className="lp-zatca-sub">Kingdom of Saudi Arabia</span>
                  </div>
                </div>
              </div>
              <DataTable rows={[
                ['VAT Registration No.', VAT_NUMBER],
                ['Tax Scheme',           'Value Added Tax (VAT) — 15%'],
                ['E-Invoice Compliance', 'Fatoorah Phase II — QR code on all invoices'],
              ]} />
              <p className="lp-note">
                VAT registration can be verified at{' '}
                <a href="https://zatca.gov.sa" target="_blank" rel="noreferrer">zatca.gov.sa</a>.
                All EGC invoices include the VAT number and a ZATCA-compliant QR code as required under
                the e-invoicing (Fatoorah) mandate.
              </p>
            </div>
          </Section>

          <hr className="lp-divider" />

          {/* ── QUALITY CERTIFICATIONS ── */}
          <Section title="Quality & Compliance Certifications">
            <div className="lp-certs-grid">
              {[
                { code: 'ISO 9001',  title: 'Quality Management System',        desc: 'Governing all fabrication and site operations.' },
                { code: 'ISO 45001', title: 'Occupational Health & Safety',      desc: 'Active HSE programme across all worksites.' },
                { code: 'ISO 14001', title: 'Environmental Management',          desc: 'Waste, hazardous materials, and site impact procedures.' },
              ].map(c => (
                <div key={c.code} className="lp-cert-card">
                  <div className="lp-cert-badge">{c.code}</div>
                  <h3 className="lp-cert-title">{c.title}</h3>
                  <p className="lp-cert-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <hr className="lp-divider" />

          {/* ── CONTACT / REQUEST DOCUMENTS ── */}
          <Section title="Request Documents">
            <p style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: 20 }}>
              For documents not available above, or for certified copies required for tender, procurement,
              or legal submissions:
            </p>
            <div className="lp-contact-grid">
              {CONTACTS.map(c => (
                <a
                  key={c.label}
                  href={c.href}
                  className="lp-contact-card"
                  {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="lp-contact-label">{c.label}</span>
                  <span className="lp-contact-value">{c.value}</span>
                </a>
              ))}
            </div>
          </Section>

          <hr className="lp-divider" />

          {/* ── DISCLAIMER ── */}
          <FadeIn>
            <div className="lp-disclaimer">
              <p>
                The information on this page reflects EGC's publicly registered corporate and legal details.
                CR No. <strong>{CR_DATA.number}</strong> · VAT No. <strong>{VAT_NUMBER}</strong> · National Address <strong>{NATIONAL_ADDRESS.code}</strong>.
                EGC is committed to maintaining accurate public disclosures in compliance with Saudi Arabian
                commercial law. For queries contact{' '}
                <a href="mailto:info@egc-me.com">info@egc-me.com</a>.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      <style>{`
        /* ── Identity bar ── */
        .lp-identity-bar { background: var(--dark); border-bottom: 1px solid rgba(255,255,255,0.08); }
        .lp-id-inner { display: flex; align-items: center; flex-wrap: wrap; padding: 0; gap: 0; }
        .lp-id-item { display: flex; flex-direction: column; gap: 3px; padding: 20px 32px 20px 0; flex: 1; min-width: 160px; }
        .lp-id-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.1); flex-shrink: 0; margin-right: 32px; }
        .lp-id-label { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-id-value { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: #fff; }
        .lp-id-mono { font-family: 'Courier New', monospace; letter-spacing: 0.04em; color: #93C5FD; font-size: 0.88rem; }

        /* ── Layout ── */
        .lp-body { max-width: 900px; }
        .lp-section { margin-bottom: 0; }
        .lp-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .lp-section-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--dark); margin: 0; }
        .lp-badge { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; background: var(--blue-light); color: var(--blue); padding: 3px 10px; border-radius: 999px; border: 1px solid var(--blue-mid); }
        .lp-divider { border: none; border-top: 1px solid var(--border); margin: 48px 0; }

        /* ── Document groups ── */
        .lp-docs-intro { font-size: 0.88rem; color: var(--muted); line-height: 1.6; margin: 0 0 28px; }
        .lp-doc-group { margin-bottom: 32px; }
        .lp-doc-group:last-child { margin-bottom: 0; }
        .lp-doc-group-title {
          font-family: var(--font-display); font-size: 0.78rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted);
          margin: 0 0 14px; padding-bottom: 8px; border-bottom: 1px solid var(--border);
        }
        .lp-doc-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }

        /* ── Document card ── */
        .lp-doc-card {
          background: #fff; border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); padding: 18px;
          display: flex; flex-direction: column; gap: 12px;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .lp-doc-available { border-left: 3px solid #10B981; }
        .lp-doc-request   { border-left: 3px solid var(--border); }
        .lp-doc-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.07); }
        .lp-doc-top { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .lp-doc-icon-wrap {
          width: 34px; height: 34px; border-radius: 8px; border: 1px solid;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .lp-doc-cat { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; border: 1px solid; }
        .lp-doc-status { margin-left: auto; font-size: 0.6rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; padding: 2px 8px; border-radius: 999px; flex-shrink: 0; }
        .lp-doc-status-ok  { background: #D1FAE5; color: #065F46; }
        .lp-doc-status-req { background: var(--gray-bg); color: var(--muted); border: 1px solid var(--border); }
        .lp-doc-body { flex: 1; }
        .lp-doc-title { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: var(--dark); margin: 0 0 3px; line-height: 1.3; }
        .lp-doc-ar { font-size: 0.75rem; color: var(--muted); direction: rtl; text-align: left; margin: 0 0 8px; }
        .lp-doc-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.55; margin: 0 0 6px; }
        .lp-doc-auth { font-size: 0.72rem; color: var(--muted); margin: 0; }
        .lp-doc-auth strong { color: var(--dark); }
        .lp-doc-actions { display: flex; gap: 8px; }
        .lp-doc-btn { display: inline-flex; align-items: center; gap: 5px; flex: 1; justify-content: center; }

        /* ── Data table ── */
        .lp-table { width: 100%; border-collapse: collapse; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
        .lp-table th, .lp-table td { padding: 10px 14px; text-align: left; font-size: 0.87rem; border-bottom: 1px solid var(--border); vertical-align: top; }
        .lp-table th { width: 38%; font-weight: 600; color: var(--muted); background: var(--gray-bg); white-space: nowrap; }
        .lp-table td { color: var(--dark); font-weight: 500; }
        .lp-table tr:last-child th, .lp-table tr:last-child td { border-bottom: none; }

        /* ── CR ── */
        .lp-cr-highlight { display: grid; grid-template-columns: 200px 1fr; gap: 20px; margin-bottom: 16px; }
        .lp-cr-number-block { background: var(--dark); border-radius: var(--radius-lg); padding: 24px 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; }
        .lp-cr-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-cr-number { font-family: 'Courier New', monospace; font-size: 1.25rem; font-weight: 700; color: #93C5FD; letter-spacing: 0.06em; }
        .lp-cr-sub { font-size: 0.68rem; color: rgba(255,255,255,0.45); line-height: 1.4; margin-top: 2px; }

        /* ── National Address ── */
        .lp-na-grid { display: grid; grid-template-columns: 180px 1fr; gap: 20px; margin-bottom: 16px; }
        .lp-na-code-block { background: var(--blue); border-radius: var(--radius-lg); padding: 24px 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 6px; }
        .lp-na-code-label { font-size: 0.58rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
        .lp-na-code { font-family: 'Courier New', monospace; font-size: 1.35rem; font-weight: 800; color: #fff; letter-spacing: 0.1em; }
        .lp-na-code-sub { font-size: 0.62rem; color: rgba(255,255,255,0.55); line-height: 1.4; }

        /* ── VAT / ZATCA ── */
        .lp-zatca-wrap { display: flex; flex-direction: column; gap: 18px; }
        .lp-vat-highlight { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; margin-bottom: 4px; }
        .lp-vat-block {
          background: var(--dark); border-radius: var(--radius-lg);
          padding: 20px 28px; display: flex; flex-direction: column; gap: 5px;
          flex: 1; min-width: 240px;
        }
        .lp-vat-label { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-vat-number { font-family: 'Courier New', monospace; font-size: 1.3rem; font-weight: 700; color: #93C5FD; letter-spacing: 0.04em; }
        .lp-vat-auth { display: flex; align-items: center; gap: 12px; flex: 1; min-width: 200px; }
        .lp-zatca-title { display: block; font-size: 0.88rem; font-weight: 700; color: var(--dark); }
        .lp-zatca-sub   { display: block; font-size: 0.74rem; color: var(--muted); }

        /* ── ISO certs ── */
        .lp-certs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .lp-cert-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 20px; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .lp-cert-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
        .lp-cert-badge { display: inline-block; font-size: 0.68rem; font-weight: 800; letter-spacing: 0.06em; background: var(--dark); color: #fff; padding: 3px 10px; border-radius: 4px; margin-bottom: 12px; }
        .lp-cert-title { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--dark); margin: 0 0 6px; }
        .lp-cert-desc  { font-size: 0.8rem; color: var(--muted); line-height: 1.55; margin: 0; }

        /* ── Contact cards ── */
        .lp-contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .lp-contact-card { display: flex; flex-direction: column; gap: 4px; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 16px 18px; text-decoration: none; transition: border-color 0.2s, background 0.2s; }
        .lp-contact-card:hover { border-color: var(--blue); background: var(--blue-light); }
        .lp-contact-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
        .lp-contact-value { font-size: 0.88rem; font-weight: 600; color: var(--blue); }

        /* ── Note / disclaimer ── */
        .lp-note { font-size: 0.8rem; color: var(--muted); line-height: 1.6; margin: 14px 0 0; }
        .lp-note a, .lp-disclaimer a { color: var(--blue); text-decoration: underline; }
        .lp-disclaimer { background: var(--gray-bg); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 20px 24px; font-size: 0.8rem; color: var(--muted); line-height: 1.65; margin-bottom: 48px; }
        .lp-disclaimer p { margin: 0; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .lp-doc-grid { grid-template-columns: 1fr; }
          .lp-cr-highlight { grid-template-columns: 1fr; }
          .lp-na-grid { grid-template-columns: 1fr; }
          .lp-certs-grid { grid-template-columns: 1fr 1fr; }
          .lp-contact-grid { grid-template-columns: 1fr 1fr; }
          .lp-id-item { padding: 14px 20px 14px 0; min-width: 140px; }
          .lp-id-divider { margin-right: 20px; }
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
