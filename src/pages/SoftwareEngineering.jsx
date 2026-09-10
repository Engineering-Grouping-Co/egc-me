import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';

export default function SoftwareEngineering() {
  const locale = useLocale();
  const { SITE, UI, SOFTWARE } = useContent();
  const s = SOFTWARE;
  const to = (segment) => `/${locale}/${segment}`;

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: s.heroOverline }]}
        overline={s.heroOverline}
        title={s.heroTitle}
        subtitle={s.heroSubtitle}
        accentColor="var(--accent-software)"
        decorNum="03"
      />

      {/* PILLARS */}
      <section className="section">
        <div className="container">
          <div className="sw-pillars-grid">
            {s.pillars.map((p, i) => (
              <FadeIn delay={(i % 3) + 1} key={p.id}>
                <div className="card sw-pillar-card">
                  <div className="sw-pillar-num">{p.num}</div>
                  <h3 className="headline-sm" style={{ margin: '10px 0 4px' }}>{p.label}</h3>
                  <p className="sw-pillar-tag">{p.tag}</p>
                  <p className="body-sm" style={{ marginBottom: 14 }}>{p.desc}</p>
                  <ul className="sw-point-list">
                    {p.points.map((pt) => (
                      <li key={pt} className="sw-point-item">
                        <CheckCircle2 size={13} />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <h2 className="headline-lg">{s.complianceTitle}</h2>
            <p className="section-sub">{s.complianceSubtitle}</p>
          </FadeIn>
          <div className="grid-3">
            {s.complianceItems.map((c, i) => (
              <FadeIn delay={i + 1} key={c.code}>
                <div className="card sw-compliance-card">
                  <div className="sw-compliance-code">{c.code}</div>
                  <h3 className="headline-sm" style={{ margin: '10px 0 8px' }}>{c.name}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <FadeIn className="cta-banner">
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>{s.ctaTitle}</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>{s.ctaSubtitle}</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to={to('contact')} className="btn btn-primary btn-lg">{UI.contactUs} <ArrowRight size={14} /></Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn btn-secondary btn-lg">{SITE.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .sw-pillars-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .sw-pillar-card { padding: 28px 24px; }
        .sw-pillar-num { font-family: 'Courier New', monospace; font-size: 0.65rem; font-weight: 800; color: var(--muted); letter-spacing: 0.08em; }
        .sw-pillar-tag { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; color: var(--accent-software); margin-bottom: 10px; }
        .sw-point-list { display: flex; flex-direction: column; gap: 7px; margin: 0; padding: 0; }
        .sw-point-item { display: flex; align-items: flex-start; gap: 8px; font-size: 0.82rem; color: var(--body); line-height: 1.5; }
        .sw-point-item svg { color: var(--accent-software); flex-shrink: 0; margin-top: 2px; }

        .sw-compliance-card { text-align: center; padding: 32px 24px; }
        .sw-compliance-code { display: inline-block; font-family: var(--font-display); font-size: 1rem; font-weight: 800; color: var(--accent-software); background: var(--gray-bg); border-radius: 6px; padding: 4px 12px; }

        @media (max-width: 1024px) { .sw-pillars-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 640px) { .sw-pillars-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
