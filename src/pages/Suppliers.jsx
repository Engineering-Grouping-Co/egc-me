import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ExternalLink, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { SUPPLIER_STEPS, SITE } from '../data';

const WHAT_WE_SOURCE = [
  {
    title: 'Steel & Metal Materials',
    items: ['Structural steel sections (IPE, HEA, SHS, RHS)', 'Steel plate — A36, A572, S275, S355', 'Welding consumables and gases', 'Primers, topcoats, and surface treatment materials', 'Bolts, nuts, and structural fixings'],
  },
  {
    title: 'Timber & Wood Products',
    items: ['Hardwoods — oak, teak, walnut, ash', 'MDF, plywood, and engineered boards', 'Veneers and laminates', 'Timber hardware — hinges, fittings, handles', 'Lacquers, stains, and finishing materials'],
  },
  {
    title: 'Lead Sheet & Roofing',
    items: ['Milled lead sheet — Code 3 to Code 8 (BS EN 12588)', 'Copper fixings — clips, nails, screws', 'Bituminous and waterproofing accessories', 'Flashings and pre-formed lead components', 'Related roofing consumables and sealants'],
  },
];

const REQUIREMENTS = [
  'Valid Commercial Registration (CR) issued by MISA',
  'ZATCA (VAT) registration certificate',
  'Bank letter or IBAN confirmation',
  'Product catalogue or service description',
  'ISO 9001 or other quality certifications (if applicable)',
  'HSE policy or OSHA compliance statement (for site suppliers)',
];

const FAQS = [
  { q: 'Who can register as an EGC supplier?', a: 'Any legally registered company or individual trader operating in Saudi Arabia or internationally that supplies materials, products, or services relevant to steel fabrication, timber works, lead sheet, or construction support services.' },
  { q: 'How long does the prequalification process take?', a: 'Standard prequalification takes 5–10 business days from receipt of a complete submission. Complex or high-value vendor categories may take longer if a factory or site visit is required.' },
  { q: 'Do I need ISO certification to register?', a: 'ISO certification is not mandatory for all categories, but it is required for suppliers in quality-critical product categories. The portal will indicate which documents are required for each category.' },
  { q: 'How are RFQs issued once I am approved?', a: 'Approved vendors receive RFQs directly through the EGC ERP Supplier Portal. You will be notified by email when an RFQ is available for your product or service category.' },
  { q: 'Can I update my supplier profile after registration?', a: 'Yes. You can update your profile, upload new certifications, and manage your product catalogue at any time through the Supplier Portal at erp.egc-me.com.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="faq-a"><p>{a}</p></div>}
    </div>
  );
}

export default function Suppliers() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Suppliers</span></nav>
          <FadeIn>
            <p className="overline">Supplier Network</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Become a Registered EGC Supplier.</h1>
            <p className="section-sub">
              EGC sources steel, timber, lead sheet, and site materials through a single
              vendor network managed on our ERP platform. Register once — receive RFQs
              across all three divisions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WHAT WE SOURCE */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">Procurement Categories</p>
            <h2 className="headline-lg">What we source.</h2>
            <p className="section-sub">We procure materials, products, and services across three divisions year-round.</p>
          </FadeIn>
          <div className="grid-3">
            {WHAT_WE_SOURCE.map((cat, i) => (
              <FadeIn delay={i + 1} key={cat.title}>
                <div className="card src-card">
                  <div className="src-num">0{i + 1}</div>
                  <h3 className="headline-sm" style={{ margin: '12px 0 14px' }}>{cat.title}</h3>
                  <ul className="src-list">
                    {cat.items.map(item => (
                      <li key={item}><CheckCircle2 size={13} className="src-icon" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION PROCESS */}
      <section className="section section-gray">
        <div className="container">
          <div className="sup-reg-grid">
            <div>
              <FadeIn>
                <p className="overline">Registration Process</p>
                <h2 className="headline-lg" style={{ marginBottom: 12 }}>How to register.</h2>
                <p className="body-md" style={{ color: 'var(--muted)', marginBottom: 36 }}>
                  The process takes less than 30 minutes. Complete your registration on the
                  EGC ERP portal and our procurement team will review your submission.
                </p>
              </FadeIn>
              <FadeIn>
                <ol className="steps-ol">
                  {SUPPLIER_STEPS.map((s, i) => (
                    <li className="step-li" key={s.n}>
                      <div className={`step-circle${i === 0 ? ' step-circle-accent' : ''}`}>{s.n}</div>
                      <div className="step-body">
                        <strong>{s.title}</strong>
                        <p>{s.desc}</p>
                      </div>
                      {i < SUPPLIER_STEPS.length - 1 && <div className="step-connector" />}
                    </li>
                  ))}
                </ol>
              </FadeIn>
            </div>

            <FadeIn delay={2} className="portal-card-wrap">
              <div className="portal-card">
                <p className="overline" style={{ color: '#93C5FD' }}>EGC ERP — SUPPLIER PORTAL</p>
                <h3 className="portal-card-h">Register or sign in to the Supplier Portal.</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  Create your vendor profile, submit prequalification documents, and respond
                  to RFQs — all in one place.
                </p>
                <a href={SITE.supplierPortal} target="_blank" rel="noreferrer" className="btn btn-white btn-block" style={{ marginTop: 8 }}>
                  Register on the Supplier Portal <ExternalLink size={14} />
                </a>
                <a href={SITE.supplierPortal} target="_blank" rel="noreferrer" className="portal-signin">
                  Already registered? Sign in <ArrowRight size={13} />
                </a>
                <div className="portal-divider" />
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                  For portal access issues, contact{' '}
                  <a href={`mailto:${SITE.email}`} style={{ color: '#93C5FD' }}>{SITE.email}</a>
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="section">
        <div className="container">
          <FadeIn className="req-grid">
            <div>
              <p className="overline">What You'll Need</p>
              <h2 className="headline-lg" style={{ marginBottom: 12 }}>Registration requirements.</h2>
              <p className="body-md" style={{ color: 'var(--muted)' }}>
                Prepare these documents before starting your registration. Incomplete
                submissions may delay the prequalification review.
              </p>
            </div>
            <ul className="req-list">
              {REQUIREMENTS.map(r => (
                <li className="req-item" key={r}>
                  <CheckCircle2 size={16} className="req-icon" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">FAQs</p>
            <h2 className="headline-lg">Frequently asked questions.</h2>
          </FadeIn>
          <FadeIn className="faq-list">
            {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </FadeIn>
        </div>
      </section>

      <style>{`
        .src-card { padding: 28px 24px; }
        .src-num { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--blue-mid); line-height: 1; }
        .src-list { display: flex; flex-direction: column; gap: 8px; }
        .src-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 0.86rem; color: var(--body); line-height: 1.5; }
        .src-icon { color: var(--blue); flex-shrink: 0; margin-top: 2px; }

        .sup-reg-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 64px; align-items: start; }

        .steps-ol { display: flex; flex-direction: column; gap: 0; position: relative; padding: 0; }
        .step-li { display: flex; gap: 18px; position: relative; padding-bottom: 28px; }
        .step-li:last-child { padding-bottom: 0; }
        .step-circle { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--border); background: var(--white); color: var(--blue); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: var(--font-body); }
        .step-circle-accent { background: var(--blue); color: var(--white); border-color: var(--blue); }
        .step-body { padding-top: 8px; flex: 1; }
        .step-body strong { display: block; font-weight: 700; color: var(--dark); margin-bottom: 4px; font-size: 0.97rem; }
        .step-body p { font-size: 0.88rem; color: var(--muted); margin: 0; line-height: 1.6; }
        .step-connector { position: absolute; left: 21px; top: 44px; width: 2px; bottom: 0; background: var(--border); }

        .portal-card-wrap { }
        .portal-card { background: #1E3A8A; border-radius: var(--radius-lg); padding: 36px 30px; display: flex; flex-direction: column; gap: 16px; border-bottom: 4px solid var(--blue); box-shadow: 0 20px 48px rgba(30,58,138,0.2); }
        .portal-card-h { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: var(--white); line-height: 1.2; margin: 0; }
        .portal-signin { display: flex; align-items: center; gap: 5px; font-size: 0.84rem; color: #93C5FD; font-weight: 600; }
        .portal-signin:hover { text-decoration: underline; }
        .portal-divider { border: none; border-top: 1px solid rgba(255,255,255,0.1); }

        .req-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 48px; }
        .req-list { display: flex; flex-direction: column; gap: 14px; }
        .req-item { display: flex; align-items: flex-start; gap: 12px; font-size: 0.92rem; color: var(--body); line-height: 1.5; }
        .req-icon { color: var(--blue); flex-shrink: 0; margin-top: 2px; }

        .faq-list { display: flex; flex-direction: column; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-item:last-child { border-bottom: none; }
        .faq-item.open { background: var(--blue-light); }
        .faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 20px 24px; font-size: 0.97rem; font-weight: 600; color: var(--dark); text-align: left; transition: background var(--transition); }
        .faq-q:hover { background: var(--gray-bg); }
        .faq-item.open .faq-q { color: var(--blue); }
        .faq-q svg { flex-shrink: 0; color: var(--blue); }
        .faq-a { padding: 0 24px 20px; }
        .faq-a p { font-size: 0.92rem; color: var(--body); line-height: 1.7; margin: 0; }

        @media (max-width: 860px) {
          .sup-reg-grid { grid-template-columns: 1fr; gap: 48px; }
          .req-grid { grid-template-columns: 1fr; gap: 36px; padding: 32px 24px; }
        }
      `}</style>
    </>
  );
}
