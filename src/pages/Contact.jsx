import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Send, ShieldCheck, ArrowUpRight, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';

export default function Contact() {
  const locale = useLocale();
  const { SITE, COPY } = useContent();
  const t = COPY.contact;
  const to = (segment) => `/${locale}/${segment}`;

  const emptyForm = { name: '', company: '', email: '', phone: '', sector: t.sectors[0], service: t.services[t.services.length - 1], message: '' };
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const set = (field) => (e) => setForm((v) => ({ ...v, [field]: e.target.value }));

  const altLinks = [
    { link: `mailto:${SITE.email}`, isExternal: false, isMail: true },
    { link: SITE.supplierPortal, isExternal: true },
    { link: to('careers'), isExternal: false },
  ];

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: t.pageTitle }]}
        overline={t.pageOverline}
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        decorNum="03"
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <FadeIn className="contact-form-card">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon"><ShieldCheck size={36} /></div>
                  <h3>{t.successTitle}</h3>
                  <p>{t.successBody}</p>
                  <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm(emptyForm); }}>
                    {t.successButton}
                  </button>
                </div>
              ) : (
                <form className="c-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} noValidate>
                  <h2 className="form-title">{t.formTitle}</h2>
                  <div className="form-row-2">
                    <label className="f-label">
                      <span>{t.labelName}</span>
                      <input required value={form.name} onChange={set('name')} type="text" placeholder={t.placeholderName} />
                    </label>
                    <label className="f-label">
                      <span>{t.labelCompany}</span>
                      <input value={form.company} onChange={set('company')} type="text" placeholder={t.placeholderCompany} />
                    </label>
                  </div>
                  <div className="form-row-2">
                    <label className="f-label">
                      <span>{t.labelEmail}</span>
                      <input required value={form.email} onChange={set('email')} type="email" placeholder={t.placeholderEmail} />
                    </label>
                    <label className="f-label">
                      <span>{t.labelPhone}</span>
                      <input value={form.phone} onChange={set('phone')} type="tel" placeholder={t.placeholderPhone} />
                    </label>
                  </div>
                  <div className="form-row-2">
                    <label className="f-label">
                      <span>{t.labelSector}</span>
                      <select value={form.sector} onChange={set('sector')}>
                        {t.sectors.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </label>
                    <label className="f-label">
                      <span>{t.labelService}</span>
                      <select value={form.service} onChange={set('service')}>
                        {t.services.map((d) => <option key={d}>{d}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className="f-label">
                    <span>{t.labelMessage}</span>
                    <textarea required value={form.message} onChange={set('message')} rows={5} placeholder={t.placeholderMessage} />
                  </label>
                  <button type="submit" className="btn btn-primary btn-block btn-lg" style={{ marginTop: 8 }}>
                    {t.submitLabel} <Send size={16} />
                  </button>
                </form>
              )}
            </FadeIn>

            <FadeIn delay={2} className="office-card">
              <h2 className="office-card-title">{t.officeTitle}</h2>
              <div className="office-row"><MapPin size={15} className="office-icon" /><span>{SITE.address}</span></div>
              <div className="office-row"><Phone size={15} className="office-icon" /><a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phone}</a></div>
              <div className="office-row"><Mail size={15} className="office-icon" /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
              <div className="office-row"><Globe size={15} className="office-icon" /><span>{SITE.hours}</span></div>

              <hr className="office-hr" />
              <p className="office-sub-label">{t.supplierLabel}</p>
              <a href={SITE.supplierPortal} target="_blank" rel="noreferrer" className="office-portal-link">
                {t.supplierLink} <ArrowUpRight size={14} />
              </a>

              <hr className="office-hr" />
              <p className="office-sub-label">{t.connectLabel}</p>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className="office-li-link">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>
                {t.linkedinLabel}
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">{t.altOverline}</p>
            <h2 className="headline-lg">{t.altHeadline}</h2>
          </FadeIn>
          <div className="grid-3">
            {t.altCards.map((c, i) => {
              const a = altLinks[i];
              return (
                <FadeIn delay={i + 1} key={c.title}>
                  <div className="card alt-card">
                    <h3 className="headline-sm" style={{ marginBottom: 8 }}>{c.title}</h3>
                    <p className="body-sm" style={{ marginBottom: 18 }}>{c.desc}</p>
                    {a.isExternal ? (
                      <a href={a.link} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                        {c.linkLabel} <ArrowUpRight size={13} />
                      </a>
                    ) : a.isMail ? (
                      <a href={a.link} className="btn btn-secondary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                        {SITE.email} <ArrowRight size={13} />
                      </a>
                    ) : (
                      <Link to={a.link} className="btn btn-secondary btn-sm" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                        {c.linkLabel} <ArrowRight size={13} />
                      </Link>
                    )}
                  </div>
                </FadeIn>
              );
            })}
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
