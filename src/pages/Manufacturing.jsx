import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';

export default function Manufacturing() {
  const locale = useLocale();
  const { SITE, UI, MANUFACTURING } = useContent();
  const m = MANUFACTURING;
  const to = (segment) => `/${locale}/${segment}`;

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: m.heroOverline }]}
        overline={m.heroOverline}
        title={m.heroTitle}
        subtitle={m.heroSubtitle}
        accentColor="var(--accent-manufacturing)"
        decorNum="02"
      />

      {/* WOOD & CORIAN FACTORY */}
      <section className="section">
        <div className="container">
          <div className="mf-grid">
            <FadeIn className="mf-text">
              <span className="mf-badge mf-badge-active">{m.wood.badge}</span>
              <h2 className="headline-medium" style={{ margin: '14px 0 18px' }}>{m.wood.title}</h2>
              <p className="body-text">{m.wood.desc}</p>
              <ul className="mf-cap-list">
                {m.wood.capabilities.map((c) => (
                  <li key={c} className="mf-cap-item">
                    <CheckCircle2 size={14} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={2} className="mf-media">
              <div className="mf-img-wrap">
                <img src="/images/corian-surfaces.jpg" alt={m.wood.title} className="mf-img" />
              </div>
              <div className="mf-thumb-row">
                <img src="/images/joinery-doors.jpg" alt={m.wood.title} className="mf-thumb" />
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mf-flagship">
            <p className="overline">{m.wood.flagshipTitle}</p>
            <p className="body-md" style={{ marginBottom: 6 }}>{m.wood.flagshipNote}</p>
            <p className="body-sm" style={{ color: 'var(--muted)', margin: 0 }}>{m.wood.flagshipDisclaimer}</p>
          </FadeIn>
        </div>
      </section>

      {/* STEEL FACTORY */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="mf-steel-card">
            <span className="mf-badge mf-badge-paused">{m.steel.badge}</span>
            <h2 className="headline-lg" style={{ margin: '14px 0 14px' }}>{m.steel.title}</h2>
            <p className="body-md" style={{ margin: 0, maxWidth: 640 }}>{m.steel.desc}</p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <FadeIn className="cta-banner">
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>{m.ctaTitle}</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>{m.ctaSubtitle}</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to={to('contact')} className="btn btn-primary btn-lg">{UI.contactUs}</Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn btn-secondary btn-lg">{SITE.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .mf-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; margin-bottom: 48px; }
        .mf-badge { display: inline-block; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 5px 12px; border-radius: 999px; }
        .mf-badge-active { background: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; }
        .mf-badge-paused { background: var(--gray-bg); color: var(--muted); border: 1px solid var(--border); }
        .mf-cap-list { display: flex; flex-direction: column; gap: 10px; margin-top: 22px; }
        .mf-cap-item { display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: var(--body); }
        .mf-cap-item svg { color: var(--accent-manufacturing); flex-shrink: 0; margin-top: 2px; }
        .mf-media { display: flex; flex-direction: column; gap: 10px; }
        .mf-img-wrap { border-radius: var(--radius-lg); overflow: hidden; }
        .mf-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
        .mf-thumb-row { display: grid; grid-template-columns: 1fr; }
        .mf-thumb { width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: var(--radius-lg); }
        .mf-flagship { background: var(--gray-bg); border: 1.5px solid var(--border); border-inline-start: 3px solid var(--accent-manufacturing); border-radius: var(--radius-lg); padding: 28px 32px; }
        .mf-steel-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 40px; }

        @media (max-width: 860px) {
          .mf-grid { grid-template-columns: 1fr; gap: 32px; }
        }
      `}</style>
    </>
  );
}
