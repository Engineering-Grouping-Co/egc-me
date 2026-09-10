import { useState } from 'react';
import { CheckCircle2, ExternalLink, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { useContent } from '../content';

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && <div className="faq-a"><p>{a}</p></div>}
    </div>
  );
}

export default function Suppliers() {
  const { SITE, SUPPLIER_STEPS, WHAT_WE_SOURCE, REQUIREMENTS, FAQS, COPY } = useContent();
  const t = COPY.suppliers;

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: t.pageTitle }]}
        overline={t.pageOverline}
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        decorNum="04"
      />

      {/* WHAT WE SOURCE */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">{t.sourceOverline}</p>
            <h2 className="headline-lg">{t.sourceHeadline}</h2>
            <p className="section-sub">{t.sourceSub}</p>
          </FadeIn>
          <div className="grid-3">
            {WHAT_WE_SOURCE.map((cat, i) => (
              <FadeIn delay={i + 1} key={cat.title}>
                <div className="card src-card">
                  <div className="src-num">0{i + 1}</div>
                  <h3 className="headline-sm" style={{ margin: '12px 0 14px' }}>{cat.title}</h3>
                  <ul className="src-list">
                    {cat.items.map((item) => (
                      <li key={item}><CheckCircle2 size={13} className="src-icon" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION */}
      <section className="section section-gray">
        <div className="container">
          <div className="sup-reg-grid">
            <div>
              <FadeIn>
                <p className="overline">{t.regOverline}</p>
                <h2 className="headline-lg" style={{ marginBottom: 12 }}>{t.regHeadline}</h2>
                <p className="body-md" style={{ color: 'var(--muted)', marginBottom: 36 }}>{t.regBody}</p>
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
                <p className="overline" style={{ color: '#93C5FD' }}>{t.portalLabel}</p>
                <h3 className="portal-card-h">{t.portalHeadline}</h3>
                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.92rem', lineHeight: 1.6 }}>{t.portalBody}</p>
                <a href={SITE.supplierPortal} target="_blank" rel="noreferrer" className="btn btn-white btn-block" style={{ marginTop: 8 }}>
                  {t.portalRegister} <ExternalLink size={14} />
                </a>
                <a href={SITE.supplierPortal} target="_blank" rel="noreferrer" className="portal-signin">
                  {t.portalSignin} <ArrowRight size={13} />
                </a>
                <div className="portal-divider" />
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                  {t.portalHelp}{' '}
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
              <p className="overline">{t.reqOverline}</p>
              <h2 className="headline-lg" style={{ marginBottom: 12 }}>{t.reqHeadline}</h2>
              <p className="body-md" style={{ color: 'var(--muted)' }}>{t.reqBody}</p>
            </div>
            <ul className="req-list">
              {REQUIREMENTS.map((r) => (
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
            <p className="overline">{t.faqOverline}</p>
            <h2 className="headline-lg">{t.faqHeadline}</h2>
          </FadeIn>
          <FadeIn className="faq-list">
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </FadeIn>
        </div>
      </section>

      <style>{`
        .src-card { padding: 28px 24px; }
        .src-num { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--blue-mid); line-height: 1; }
        .src-list { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; }
        .src-list li { display: flex; align-items: flex-start; gap: 8px; font-size: 0.86rem; color: var(--body); line-height: 1.5; }
        .src-icon { color: var(--blue); flex-shrink: 0; margin-top: 2px; }

        .sup-reg-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 64px; align-items: start; }

        .steps-ol { display: flex; flex-direction: column; gap: 0; position: relative; padding: 0; margin: 0; }
        .step-li { display: flex; gap: 18px; position: relative; padding-bottom: 28px; }
        .step-li:last-child { padding-bottom: 0; }
        .step-circle { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--border); background: var(--white); color: var(--blue); font-size: 0.8rem; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: var(--font-body); z-index: 2; }
        .step-circle-accent { background: var(--blue); color: var(--white); border-color: var(--blue); }
        .step-body { padding-top: 8px; flex: 1; }
        .step-body strong { display: block; font-weight: 700; color: var(--dark); margin-bottom: 4px; font-size: 0.97rem; }
        .step-body p { font-size: 0.88rem; color: var(--muted); margin: 0; line-height: 1.6; }
        .step-connector { position: absolute; inset-inline-start: 21px; top: 44px; width: 2px; bottom: 0; background: var(--border); z-index: 1; }

        .portal-card { background: #1E3A8A; border-radius: var(--radius-lg); padding: 36px 30px; display: flex; flex-direction: column; gap: 16px; border-bottom: 4px solid var(--blue); box-shadow: 0 20px 48px rgba(30,58,138,0.2); }
        .portal-card-h { font-family: var(--font-display); font-size: 1.4rem; font-weight: 700; color: var(--white); line-height: 1.2; margin: 0; }
        .portal-signin { display: flex; align-items: center; gap: 5px; font-size: 0.84rem; color: #93C5FD; font-weight: 600; }
        .portal-signin:hover { text-decoration: underline; }
        .portal-divider { border: none; border-top: 1px solid rgba(255,255,255,0.1); }

        .req-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 48px; }
        .req-list { display: flex; flex-direction: column; gap: 14px; margin: 0; padding: 0; }
        .req-item { display: flex; align-items: flex-start; gap: 12px; font-size: 0.92rem; color: var(--body); line-height: 1.5; }
        .req-icon { color: var(--blue); flex-shrink: 0; margin-top: 2px; }

        .faq-list { display: flex; flex-direction: column; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-item:last-child { border-bottom: none; }
        .faq-item.open { background: var(--blue-light); }
        .faq-q { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 20px 24px; font-size: 0.97rem; font-weight: 600; color: var(--dark); text-align: start; transition: background var(--transition); }
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
