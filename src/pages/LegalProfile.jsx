import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

/* ──────────────────────────────────────────────
   Saudi-compliant legal profile page.
   Displays CR, ZATCA, National Address, ISO certs,
   and other publicly required registration data.
   Design inspired by Aramco / SABIC investor profiles.
────────────────────────────────────────────── */

const CR_DATA = {
  number:       '7040750007',
  entity:       'Engineering Grouping Co.',
  legalType:    'Limited Liability Company (LLC)',
  issueDate:    '—',          // fill when available
  expiryDate:   '—',
  issuingCity:  'Jeddah',
  region:       'Makkah',
  status:       'Active',
};

const NATIONAL_ADDRESS = {
  code:        'JDJA8188',
  buildingNo:  '—',           // fill when available
  street:      '—',
  district:    'Almanar',
  city:        'Jeddah',
  postalCode:  '—',
  addlNumber:  '—',
  country:     'Kingdom of Saudi Arabia',
};

const ZATCA = {
  vatNumber:   '—',           // fill when registered
  taxScheme:   'VAT',
  registered:  '—',
};

const CONTACTS = [
  { label: 'General Enquiries', value: 'info@egc-me.com',     href: 'mailto:info@egc-me.com' },
  { label: 'Phone',             value: '+966 50 434 1861',     href: 'tel:+966504341861' },
  { label: 'Supplier Portal',   value: 'erp.egc-me.com',      href: 'https://erp.egc-me.com', external: true },
];

const ISO_CERTS = [
  { code: 'ISO 9001',  title: 'Quality Management System',         desc: 'Governing all fabrication and site operations.' },
  { code: 'ISO 45001', title: 'Occupational Health & Safety',       desc: 'Active HSE programme across all worksites.' },
  { code: 'ISO 14001', title: 'Environmental Management',           desc: 'Waste, hazardous materials, and site impact procedures.' },
];

function Section({ title, badge, children }) {
  return (
    <FadeIn>
      <div className="lp-section">
        <div className="lp-section-head">
          <h2 className="lp-section-title">{title}</h2>
          {badge && <span className="lp-status-badge">{badge}</span>}
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

export default function LegalProfile() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Legal Profile</span>
          </nav>
          <FadeIn>
            <p className="overline">Company Disclosures</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Legal & Commercial Profile</h1>
            <p className="section-sub">
              Official commercial registration, national address, ZATCA, and certification records for
              Engineering Grouping Co. This page is maintained for public transparency and legal compliance
              within the Kingdom of Saudi Arabia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── QUICK IDENTITY BAR ── */}
      <div className="lp-identity-bar">
        <div className="container">
          <div className="lp-id-inner">
            <div className="lp-id-item">
              <span className="lp-id-label">CR Number</span>
              <span className="lp-id-value lp-id-mono">{CR_DATA.number}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">Legal Form</span>
              <span className="lp-id-value">{CR_DATA.legalType}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">Registered City</span>
              <span className="lp-id-value">{CR_DATA.issuingCity}</span>
            </div>
            <div className="lp-id-divider" />
            <div className="lp-id-item">
              <span className="lp-id-label">Status</span>
              <span className="lp-id-value lp-id-active">
                <span className="lp-active-dot" />
                {CR_DATA.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="section">
        <div className="container lp-body">

          {/* ── COMMERCIAL REGISTRATION ── */}
          <Section title="Commercial Registration" badge="CR">
            <div className="lp-cr-highlight">
              <div className="lp-cr-number-block">
                <span className="lp-cr-label">CR Number</span>
                <span className="lp-cr-number">{CR_DATA.number}</span>
              </div>
              <div className="lp-cr-meta">
                <DataTable rows={[
                  ['Registered Entity', CR_DATA.entity],
                  ['Legal Structure',   CR_DATA.legalType],
                  ['Issuing Authority', `Ministry of Commerce — ${CR_DATA.issuingCity}`],
                  ['Region',            `${CR_DATA.region} Region`],
                  ['Issue Date',        CR_DATA.issueDate],
                  ['Expiry Date',       CR_DATA.expiryDate],
                  ['CR Status',         CR_DATA.status],
                ]} />
              </div>
            </div>
            <p className="lp-note">
              The commercial registration above is issued by the Ministry of Commerce of the Kingdom of Saudi
              Arabia. CR validity can be independently verified on the Ministry of Commerce portal at{' '}
              <a href="https://mc.gov.sa" target="_blank" rel="noreferrer">mc.gov.sa</a>.
            </p>
          </Section>

          <hr className="lp-divider" />

          {/* ── NATIONAL ADDRESS ── */}
          <Section title="National Address" badge="SPLONLINE">
            <div className="lp-na-grid">
              <div className="lp-na-code-block">
                <span className="lp-na-code-label">Short Address Code</span>
                <span className="lp-na-code">{NATIONAL_ADDRESS.code}</span>
                <p className="lp-na-code-sub">Registered with Saudi Post (Wasel)</p>
              </div>
              <div>
                <DataTable rows={[
                  ['Building No.',      NATIONAL_ADDRESS.buildingNo],
                  ['Street',           NATIONAL_ADDRESS.street],
                  ['District',         NATIONAL_ADDRESS.district],
                  ['City',             NATIONAL_ADDRESS.city],
                  ['Postal Code',      NATIONAL_ADDRESS.postalCode],
                  ['Additional No.',   NATIONAL_ADDRESS.addlNumber],
                  ['Country',          NATIONAL_ADDRESS.country],
                ]} />
              </div>
            </div>
            <p className="lp-note">
              The national address is registered through the Saudi Post National Address system.
              It can be verified at{' '}
              <a href="https://splonline.com.sa" target="_blank" rel="noreferrer">splonline.com.sa</a>.
            </p>
          </Section>

          <hr className="lp-divider" />

          {/* ── ZATCA / VAT ── */}
          <Section title="Tax & ZATCA" badge="ZATCA">
            <div className="lp-zatca-wrap">
              <div className="lp-zatca-badge-block">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <rect width="32" height="32" rx="8" fill="#EFF6FF"/>
                  <path d="M8 22l5-12 3 8 3-5 4 9" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <span className="lp-zatca-title">Zakat, Tax & Customs Authority</span>
                  <span className="lp-zatca-sub">Kingdom of Saudi Arabia</span>
                </div>
              </div>
              <DataTable rows={[
                ['VAT Registration No.', ZATCA.vatNumber],
                ['Tax Scheme',           ZATCA.taxScheme],
                ['Registration Date',    ZATCA.registered],
              ]} />
              <p className="lp-note">
                VAT registration can be verified through the ZATCA portal at{' '}
                <a href="https://zatca.gov.sa" target="_blank" rel="noreferrer">zatca.gov.sa</a>.
                All invoices issued by EGC carry the VAT registration number and QR code in compliance with
                the e-invoicing (Fatoorah) mandate.
              </p>
            </div>
          </Section>

          <hr className="lp-divider" />

          {/* ── ISO CERTIFICATIONS ── */}
          <Section title="Quality & Compliance Certifications">
            <div className="lp-certs-grid">
              {ISO_CERTS.map(c => (
                <div key={c.code} className="lp-cert-card">
                  <div className="lp-cert-badge">{c.code}</div>
                  <h3 className="lp-cert-title">{c.title}</h3>
                  <p className="lp-cert-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          <hr className="lp-divider" />

          {/* ── CONTACT FOR LEGAL DOCUMENTS ── */}
          <Section title="Requesting Documents">
            <div className="lp-docs-wrap">
              <p className="lp-docs-intro body-md" style={{ color: 'var(--muted)', marginBottom: 24 }}>
                If you require official copies of our Commercial Registration, National Address certificate,
                ZATCA certificate, ISO certificates, or any other compliance documentation for tender,
                procurement, or legal purposes, please contact us directly:
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
            </div>
          </Section>

          <hr className="lp-divider" />

          {/* ── DISCLAIMER ── */}
          <FadeIn>
            <div className="lp-disclaimer">
              <p>
                The information on this page reflects EGC's publicly registered corporate and legal
                details as of the date of last update. EGC is committed to maintaining accurate and
                up-to-date public disclosures in compliance with Saudi Arabian commercial law.
                For queries regarding specific document requests, please contact{' '}
                <a href="mailto:info@egc-me.com">info@egc-me.com</a>.
              </p>
            </div>
          </FadeIn>

        </div>
      </section>

      <style>{`
        /* ── Identity bar ── */
        .lp-identity-bar {
          background: var(--dark);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .lp-id-inner {
          display: flex; align-items: center; flex-wrap: wrap;
          padding: 0; gap: 0;
        }
        .lp-id-item {
          display: flex; flex-direction: column; gap: 3px;
          padding: 20px 32px 20px 0;
          flex: 1; min-width: 140px;
        }
        .lp-id-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.1); flex-shrink: 0; margin-right: 32px; }
        .lp-id-label { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-id-value { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: #fff; }
        .lp-id-mono { font-family: 'Courier New', monospace; letter-spacing: 0.06em; color: #93C5FD; }
        .lp-id-active { display: flex; align-items: center; gap: 6px; }
        .lp-active-dot { width: 7px; height: 7px; border-radius: 50%; background: #10B981; flex-shrink: 0; }

        /* ── Layout ── */
        .lp-body { max-width: 860px; }
        .lp-section { margin-bottom: 0; }
        .lp-section-head { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .lp-section-title {
          font-family: var(--font-display); font-size: 1.3rem; font-weight: 700;
          color: var(--dark); margin: 0;
        }
        .lp-status-badge {
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          background: var(--blue-light); color: var(--blue);
          padding: 3px 10px; border-radius: 999px;
          border: 1px solid var(--blue-mid);
        }
        .lp-divider { border: none; border-top: 1px solid var(--border); margin: 48px 0; }

        /* ── Data table ── */
        .lp-table { width: 100%; border-collapse: collapse; }
        .lp-table th, .lp-table td {
          padding: 10px 14px; text-align: left;
          font-size: 0.88rem; border-bottom: 1px solid var(--border);
          vertical-align: top;
        }
        .lp-table th {
          width: 40%; font-weight: 600; color: var(--muted);
          background: var(--gray-bg); white-space: nowrap;
        }
        .lp-table td { color: var(--dark); font-weight: 500; }
        .lp-table tr:last-child th,
        .lp-table tr:last-child td { border-bottom: none; }
        .lp-table { border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }

        /* ── CR section ── */
        .lp-cr-highlight {
          display: grid; grid-template-columns: 220px 1fr; gap: 24px;
          margin-bottom: 16px;
        }
        .lp-cr-number-block {
          background: var(--dark); border-radius: var(--radius-lg);
          padding: 28px 20px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; gap: 8px;
        }
        .lp-cr-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .lp-cr-number { font-family: 'Courier New', monospace; font-size: 1.35rem; font-weight: 700; color: #93C5FD; letter-spacing: 0.08em; }

        /* ── National Address ── */
        .lp-na-grid { display: grid; grid-template-columns: 200px 1fr; gap: 24px; margin-bottom: 16px; }
        .lp-na-code-block {
          background: var(--blue); border-radius: var(--radius-lg);
          padding: 28px 16px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          text-align: center; gap: 8px;
        }
        .lp-na-code-label { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
        .lp-na-code { font-family: 'Courier New', monospace; font-size: 1.5rem; font-weight: 800; color: #fff; letter-spacing: 0.1em; }
        .lp-na-code-sub { font-size: 0.65rem; color: rgba(255,255,255,0.55); line-height: 1.4; }

        /* ── ZATCA ── */
        .lp-zatca-wrap { display: flex; flex-direction: column; gap: 20px; }
        .lp-zatca-badge-block {
          display: flex; align-items: center; gap: 14px;
          padding: 16px 20px;
          background: var(--blue-light); border: 1.5px solid var(--blue-mid);
          border-radius: var(--radius-lg);
        }
        .lp-zatca-title { display: block; font-size: 0.9rem; font-weight: 700; color: var(--dark); }
        .lp-zatca-sub { display: block; font-size: 0.75rem; color: var(--muted); }

        /* ── ISO certs ── */
        .lp-certs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .lp-cert-card {
          background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          padding: 22px 20px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .lp-cert-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.06); }
        .lp-cert-badge {
          display: inline-block; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.06em;
          background: var(--dark); color: #fff; padding: 3px 10px;
          border-radius: 4px; margin-bottom: 12px;
        }
        .lp-cert-title { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: var(--dark); margin: 0 0 6px; }
        .lp-cert-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.55; margin: 0; }

        /* ── Contact cards ── */
        .lp-contact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .lp-contact-card {
          display: flex; flex-direction: column; gap: 4px;
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          padding: 16px 18px; text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .lp-contact-card:hover { border-color: var(--blue); background: var(--blue-light); }
        .lp-contact-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
        .lp-contact-value { font-size: 0.88rem; font-weight: 600; color: var(--blue); }

        /* ── Note / disclaimer ── */
        .lp-note { font-size: 0.8rem; color: var(--muted); line-height: 1.6; margin: 16px 0 0; }
        .lp-note a, .lp-disclaimer a { color: var(--blue); text-decoration: underline; }
        .lp-disclaimer {
          background: var(--gray-bg); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); padding: 20px 24px;
          font-size: 0.8rem; color: var(--muted); line-height: 1.65;
          margin-bottom: 48px;
        }
        .lp-disclaimer p { margin: 0; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .lp-cr-highlight { grid-template-columns: 1fr; }
          .lp-cr-number-block { padding: 20px; }
          .lp-na-grid { grid-template-columns: 1fr; }
          .lp-certs-grid { grid-template-columns: 1fr 1fr; }
          .lp-contact-grid { grid-template-columns: 1fr 1fr; }
          .lp-id-item { padding: 16px 20px 16px 0; min-width: 120px; }
          .lp-id-divider { margin-right: 20px; }
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
