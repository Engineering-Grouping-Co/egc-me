import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import PartnerStrip from '../components/PartnerStrip';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';

const VALUE_ICONS = [
  <svg key="q" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 2l2.6 5.4 5.9.8-4.3 4.2 1 5.9L13 16.3l-5.3 2.7 1-5.9L4.5 8.3l5.9-.8L13 2z" stroke="#2563EB" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  <svg key="c" width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="9.5" stroke="#2563EB" strokeWidth="1.7"/><path d="M13 7.5v5.5l3.7 3.7" stroke="#2563EB" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  <svg key="p" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4.5 19c0-4.1 3.8-7.5 8.5-7.5s8.5 3.4 8.5 7.5" stroke="#2563EB" strokeWidth="1.7" strokeLinecap="round"/><circle cx="13" cy="8.5" r="3.7" stroke="#2563EB" strokeWidth="1.7"/></svg>,
  <svg key="g" width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="9.5" stroke="#2563EB" strokeWidth="1.7"/><path d="M3.5 13h19M13 3.5c-2.8 2.8-3.7 5.7-3.7 9.5s.9 6.7 3.7 9.5M13 3.5c2.8 2.8 3.7 5.7 3.7 9.5s-.9 6.7-3.7 9.5" stroke="#2563EB" strokeWidth="1.7" strokeLinecap="round"/></svg>,
];

export default function About() {
  const locale = useLocale();
  const { CERTIFICATIONS, VALUES, COPY } = useContent();
  const t = COPY.about;
  const to = (segment) => `/${locale}/${segment}`;

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: t.pageTitle }]}
        overline={t.pageOverline}
        title={t.pageTitle}
        subtitle={t.pageSubtitle}
        decorNum="EGC"
      />

      {/* COMPANY STORY */}
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <FadeIn>
              <p className="overline">{t.storyOverline}</p>
              <h2 className="headline-medium" style={{ marginBottom: 20 }}>
                {t.storyHeadline1}<br />{t.storyHeadline2}
              </h2>
              <p className="body-text">{t.storyBody1}</p>
              <p className="body-text">{t.storyBody2}</p>
              <p className="body-text" style={{ color: 'var(--muted)' }}>{t.storyBody3}</p>
              <Link to={to('what-we-build')} className="btn btn-secondary">
                {t.storyCta} <ArrowRight size={14} />
              </Link>
            </FadeIn>
            <FadeIn delay={2}>
              <img src="/images/hero-bg.jpg" alt="EGC team installing MRI room shielding" className="ab-hero-img" />
              <div className="about-quick-facts">
                {t.quickFacts.map((f) => (
                  <div className="qf-item" key={f.label}>
                    <span className="qf-num">{f.num}</span>
                    <span className="qf-lbl">{f.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PartnerStrip />

      {/* VALUES */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">{t.valuesOverline}</p>
            <h2 className="headline-lg">{t.valuesHeadline}</h2>
            <p className="section-sub">{t.valuesSub}</p>
          </FadeIn>
          <div className="grid-4">
            {VALUES.map((v, i) => (
              <FadeIn delay={i + 1} key={v.title}>
                <div className="card val-card">
                  <div className="val-icon">{VALUE_ICONS[i]}</div>
                  <h3 className="headline-sm" style={{ margin: '14px 0 8px' }}>{v.title}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS WE SERVE */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">{t.sectorsOverline}</p>
            <h2 className="headline-lg">{t.sectorsHeadline}</h2>
          </FadeIn>
          <div className="grid-2">
            <FadeIn delay={1}>
              <div className="card sector-card">
                <div className="sector-badge">01</div>
                <h3 className="headline-md" style={{ margin: '14px 0 10px' }}>{t.sectorsCard1Title}</h3>
                <p className="body-md" style={{ marginBottom: 18 }}>{t.sectorsCard1Body}</p>
                <ul className="sector-list">
                  {t.sectorsCard1List.map((li) => <li key={li}>{li}</li>)}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="card sector-card">
                <div className="sector-badge">02</div>
                <h3 className="headline-md" style={{ margin: '14px 0 10px' }}>{t.sectorsCard2Title}</h3>
                <p className="body-md" style={{ marginBottom: 18 }}>{t.sectorsCard2Body}</p>
                <ul className="sector-list">
                  {t.sectorsCard2List.map((li) => <li key={li}>{li}</li>)}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">{t.certsOverline}</p>
            <h2 className="headline-lg">{t.certsHeadline}</h2>
            <p className="section-sub">{t.certsSub}</p>
          </FadeIn>
          <div className="grid-3">
            {CERTIFICATIONS.map((c, i) => (
              <FadeIn delay={i + 1} key={c.code}>
                <div className="card cert-card">
                  <div className="cert-code">{c.code}</div>
                  <h3 className="headline-sm" style={{ margin: '10px 0 8px' }}>{c.name}</h3>
                  <p className="body-sm" style={{ margin: 0 }}>{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM PLACEHOLDER */}
      <section className="section" id="team">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">{t.teamOverline}</p>
            <h2 className="headline-lg">{t.teamHeadline}</h2>
            <p className="section-sub">{t.teamSub}</p>
          </FadeIn>
          <div className="team-placeholder">
            <p className="body-md" style={{ color: 'var(--muted)', textAlign: 'center', padding: '48px 24px', margin: 0 }}>
              {t.teamPlaceholder}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">{t.ctaOverline}</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>{t.ctaHeadline}</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>{t.ctaSub}</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to={to('contact')} className="btn btn-primary btn-lg">{t.ctaPrimary}</Link>
              <Link to={to('what-we-build')} className="btn btn-secondary btn-lg">{t.ctaSecondary}</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .ab-hero-img { width: 100%; aspect-ratio: 16/10; object-fit: cover; border-radius: var(--radius-lg); margin-bottom: 16px; }
        .about-quick-facts { display: grid; grid-template-columns: repeat(4, 1fr); border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
        .qf-item { display: flex; flex-direction: column; align-items: center; padding: 18px 12px; text-align: center; border-right: 1px solid var(--border); }
        .qf-item:last-child { border-right: none; }
        [dir="rtl"] .qf-item { border-right: none; border-left: 1px solid var(--border); }
        [dir="rtl"] .qf-item:last-child { border-left: none; }
        .qf-num { font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--blue); line-height: 1; margin-bottom: 4px; }
        .qf-lbl { font-size: 0.68rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; }

        .val-card { text-align: center; padding: 32px 24px; }
        .val-icon { width: 50px; height: 50px; margin: 0 auto; background: var(--blue-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; }

        .sector-card { padding: 36px 32px; }
        .sector-badge { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--blue-mid); line-height: 1; }
        .sector-list { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; }
        .sector-list li { font-size: 0.9rem; color: var(--body); padding-inline-start: 16px; position: relative; }
        .sector-list li::before { content: '—'; position: absolute; inset-inline-start: 0; color: var(--blue); font-weight: 700; }

        .cert-card { text-align: center; padding: 36px 24px; }
        .cert-code { font-family: var(--font-display); font-size: 1.7rem; font-weight: 800; color: var(--blue); margin-bottom: 2px; }

        .team-placeholder { border: 1.5px solid var(--border); border-radius: var(--radius-lg); background: var(--gray-bg); }

        @media (max-width: 860px) {
          .about-quick-facts { grid-template-columns: repeat(2, 1fr); }
          .qf-item:nth-child(2) { border-right: none; }
          .qf-item:nth-child(1), .qf-item:nth-child(2) { border-bottom: 1px solid var(--border); }
        }
        @media (max-width: 600px) {
          .sector-card { padding: 28px 20px; }
        }
      `}</style>
    </>
  );
}
