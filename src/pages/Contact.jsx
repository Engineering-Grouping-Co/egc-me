import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Send, ShieldCheck, ArrowUpRight, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { SITE } from '../data';

const SECTORS   = ['Government', 'Private', 'Industrial', 'Other'];
const DIVISIONS = ['Steel', 'Wood', 'Lead Sheet', 'Multiple', 'Not sure'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', sector: 'Government', division: 'Not sure', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const set = field => e => setForm(v => ({ ...v, [field]: e.target.value }));

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Contact</span></nav>
          <FadeIn>
            <p className="overline">Get In Touch</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Tell us about your project.</h1>
            <p className="section-sub">
              Our business development team responds within 1–2 business days.
              For urgent enquiries, call us directly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* FORM */}
            <FadeIn className="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon"><ShieldCheck size={36} /></div>
                  <h3>Message received.</h3>
                  <p>Our team will be in touch within 1–2 business days.</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', sector: 'Government', division: 'Not sure', message: '' }); }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  className="c-form"
                  onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                  noValidate
                >
                  <h2 className="form-title">Project Enquiry</h2>
                  <div className="form-row-2">
                    <label className="f-label">
                      <span>Full name *</span>
                      <input required value={form.name} onChange={set('name')} type="text" placeholder="Your full name" />
                    </label>
                    <label className="f-label">
                      <span>Company</span>
                      <input value={form.company} onChange={set('company')} type="text" placeholder="Company name" />
                    </label>
                  </div>
                  <div className="form-row-2">
                    <label className="f-label">
                      <span>Email *</span>
                      <input required value={form.email} onChange={set('email')} type="email" placeholder="you@company.com" />
                    </label>
                    <label className="f-label">
                      <span>Phone</span>
                      <input value={form.phone} onChange={set('phone')} type="tel" placeholder="+966 5x xxx xxxx" />
                    </label>
                  </div>
                  <div className="form-row-2">
                    <label className="f-label">
                      <span>Sector</span>
                      <select value={form.sector} onChange={set('sector')}>
                        {SECTORS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </label>
                    <label className="f-label">
                      <span>Division of interest</span>
                      <select value={form.division} onChange={set('division')}>
                        {DIVISIONS.map(d => <option key={d}>{d}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className="f-label">
                    <span>Message *</span>
                    <textarea
                      required value={form.message} onChange={set('message')} rows={5}
                      placeholder="Tell us about your project — scope, location, timeline, and any technical requirements."
                    />
                  </label>
                  <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: 8 }}>
                    Send message <Send size={16} />
                  </button>
                </form>
              )}
            </FadeIn>

            {/* OFFICE INFO */}
            <FadeIn delay={2} className="office-card">
              <h2 className="office-card-title">Head Office</h2>
              <div className="office-row"><MapPin size={15} className="office-icon" /><span>{SITE.address}</span></div>
              <div className="office-row"><Phone size={15} className="office-icon" /><a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a></div>
              <div className="office-row"><Mail size={15} className="office-icon" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
              <div className="office-row"><Globe size={15} className="office-icon" /><span>Sun – Thu, 8:00 AM – 5:00 PM</span></div>

              <hr className="office-hr" />
              <p className="office-sub-label">Supplier Portal</p>
              <a href={SITE.supplierPortal} target="_blank" rel="noreferrer" className="office-portal-link">
                Open the Supplier Portal <ArrowUpRight size={14} />
              </a>

              <hr className="office-hr" />
              <p className="office-sub-label">Connect</p>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="office-li-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>
                LinkedIn — EGC
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ALTERNATIVE CONTACT CARDS */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">Other Ways to Reach Us</p>
            <h2 className="headline-lg">Direct contacts.</h2>
          </FadeIn>
          <div className="grid-3">
            {[
              { title: 'General Enquiries', desc: 'For project enquiries, capability discussions, and general information.', link: `mailto:${SITE.email}`, linkLabel: SITE.email },
              { title: 'Supplier Portal',   desc: 'Vendor registration, prequalification documents, and RFQ responses.', link: SITE.supplierPortal, linkLabel: 'erp.egc-me.com', external: true },
              { title: 'Careers',           desc: 'Job applications and open CV submissions for future positions.', link: `/careers`, linkLabel: 'View open positions' },
            ].map((c, i) => (
              <FadeIn delay={i + 1} key={c.title}>
                <div className="card alt-card">
                  <h3 className="headline-sm" style={{ marginBottom: 8 }}>{c.title}</h3>
                  <p className="body-sm" style={{ marginBottom: 18 }}>{c.desc}</p>
                  {c.external ? (
                    <a href={c.link} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                      {c.linkLabel} <ArrowUpRight size={13} />
                    </a>
                  ) : c.link.startsWith('/') ? (
                    <Link to={c.link} className="btn btn-secondary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                      {c.linkLabel} <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <a href={c.link} className="btn btn-secondary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                      {c.linkLabel} <ArrowRight size={13} />
                    </a>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-layout { display: grid; grid-template-columns: 1.35fr 0.85fr; gap: 36px; align-items: start; }

        .contact-form-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 40px; }
        .form-title { font-family: var(--font-display); font-size: 1.3rem; font-weight: 700; color: var(--dark); margin: 0 0 28px; }
        .c-form { display: flex; flex-direction: column; gap: 18px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .f-label { display: flex; flex-direction: column; gap: 5px; }
        .f-label span { font-size: 0.82rem; font-weight: 600; color: var(--dark); }
        .f-label input, .f-label select, .f-label textarea {
          border: 1.5px solid var(--border); border-radius: 6px; padding: 10px 14px;
          font-size: 0.93rem; color: var(--dark); background: var(--gray-bg);
          transition: border-color var(--transition), background var(--transition);
          width: 100%;
        }
        .f-label input:focus, .f-label select:focus, .f-label textarea:focus { border-color: var(--blue); background: var(--white); outline: none; }
        .f-label textarea { resize: vertical; }

        .form-success { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 56px 24px; gap: 12px; }
        .success-icon { width: 68px; height: 68px; border-radius: 50%; background: var(--blue-light); display: flex; align-items: center; justify-content: center; color: var(--blue); }
        .form-success h3 { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--dark); margin: 0; }
        .form-success p { color: var(--muted); margin: 0; }

        .office-card { background: var(--gray-bg); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 32px 28px; display: flex; flex-direction: column; gap: 14px; }
        .office-card-title { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--dark); margin: 0 0 4px; }
        .office-row { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: var(--body); line-height: 1.5; }
        .office-row a { color: var(--blue); font-weight: 500; }
        .office-row a:hover { text-decoration: underline; }
        .office-icon { color: var(--blue); flex-shrink: 0; margin-top: 2px; }
        .office-hr { border: none; border-top: 1px solid var(--border); margin: 4px 0; }
        .office-sub-label { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 0; }
        .office-portal-link { display: flex; align-items: center; gap: 6px; font-size: 0.9rem; font-weight: 600; color: var(--blue); }
        .office-portal-link:hover { text-decoration: underline; }
        .office-li-link { display: flex; align-items: center; gap: 8px; font-size: 0.9rem; font-weight: 600; color: var(--blue); }
        .office-li-link:hover { text-decoration: underline; }

        .alt-card { display: flex; flex-direction: column; height: 100%; }

        @media (max-width: 860px) { .contact-layout { grid-template-columns: 1fr; } .form-row-2 { grid-template-columns: 1fr; } }
        @media (max-width: 500px) { .contact-form-card { padding: 28px 20px; } }
      `}</style>
    </>
  );
}
