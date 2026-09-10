import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PartnerStrip from '../components/PartnerStrip';
import { useLocale } from '../i18n/LocaleContext';
import { useContent } from '../content';

function ScrollIndicator() {
  return (
    <div className="h-scroll-ind" aria-hidden="true">
      <div className="h-scroll-line" />
      <ArrowDown size={14} />
    </div>
  );
}

function ServicePill({ svc, index, to }) {
  return (
    <FadeIn delay={index + 1}>
      <Link to={to} className="h-svc-pill">
        <span className="h-svc-pill-num">{svc.num}</span>
        <span className="h-svc-pill-label">{svc.shortLabel}</span>
        <ChevronRight size={13} className="h-svc-pill-arrow" />
      </Link>
    </FadeIn>
  );
}

export default function Home() {
  const locale = useLocale();
  const { SITE, SERVICES, STATS, UI, COPY } = useContent();
  const t = COPY.home;
  const to = (segment) => `/${locale}/${segment}`;

  return (
    <>
      {/* HERO */}
      <section className="h-hero">
        <div className="h-hero-bg" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }} />
        <div className="h-hero-overlay" />
        <div className="container h-hero-content">
          <FadeIn className="h-hero-inner">
            <p className="h-hero-label">
              <span className="h-hero-dot" />
              {t.heroLabel}
            </p>
            <h1 className="h-hero-headline">
              {t.heroHeadline1}
              <br />
              <span className="h-hero-headline-accent">{t.heroHeadlineAccent}</span>
            </h1>
            <p className="h-hero-sub">{t.heroSub}</p>
            <div className="h-hero-btns">
              <Link to={to('what-we-build')} className="btn btn-white btn-lg">
                {t.heroCtaPrimary} <ArrowRight size={16} />
              </Link>
              <Link to={to('contact')} className="btn btn-outline-white btn-lg">
                {t.heroCtaSecondary}
              </Link>
            </div>
            <div className="h-hero-trust">
              {t.heroTrust.map((txt) => (
                <span key={txt} className="h-hero-trust-item">
                  <CheckCircle2 size={13} /> {txt}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
        <ScrollIndicator />
      </section>

      {/* SERVICES STRIP */}
      <div className="h-svc-strip">
        <div className="container">
          <div className="h-svc-strip-inner">
            <span className="h-svc-strip-label">{t.svcStripLabel}</span>
            <div className="h-svc-pills">
              {SERVICES.map((svc, i) => (
                <ServicePill key={svc.id} svc={svc} index={i} to={to('what-we-build')} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <PartnerStrip />

      {/* HEALTHCARE SPOTLIGHT */}
      <section className="section">
        <div className="container">
          <div className="h-spotlight-grid">
            <FadeIn className="h-spotlight-left">
              <p className="overline">{t.spotlightOverline}</p>
              <h2 className="headline-medium" style={{ marginBottom: 18 }}>
                {t.spotlightHeadline1}
                <br />
                {t.spotlightHeadline2}
              </h2>
              <p className="body-text">{t.spotlightBody1}</p>
              <p className="body-text" style={{ color: 'var(--muted)' }}>{t.spotlightBody2}</p>
              <div className="h-spotlight-checklist">
                {t.spotlightChecklist.map((c) => (
                  <div key={c} className="h-spotlight-check">
                    <CheckCircle2 size={15} />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
              <Link to={to('what-we-build')} className="btn btn-primary" style={{ marginTop: 28 }}>
                {t.spotlightCta} <ArrowRight size={14} />
              </Link>
            </FadeIn>
            <FadeIn delay={2} className="h-spotlight-right">
              <div className="h-spotlight-img-wrap">
                <img
                  src="/images/healthcare-xray.jpg"
                  alt="Completed x-ray room with radiation shielding and specialist door"
                  className="h-spotlight-img"
                />
                <div className="h-spotlight-img-badge">
                  <span className="h-badge-num">01</span>
                  <span className="h-badge-lbl">{t.spotlightBadgeLabel}</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4 SERVICE PILLARS */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="h-section-head">
            <p className="label">{t.servicesLabel}</p>
            <h2 className="headline-medium">{t.servicesHeadline}</h2>
            <p className="section-sub">{t.servicesSub}</p>
          </FadeIn>

          <div className="h-services-grid">
            {SERVICES.map((svc, i) => (
              <FadeIn delay={(i % 4) + 1} key={svc.id}>
                <div className="h-svc-card">
                  <div className="h-svc-card-num">{svc.num}</div>
                  {svc.thumb ? (
                    <div className="h-svc-card-img-wrap">
                      <img src={svc.thumb} alt={svc.label} className="h-svc-card-img" />
                    </div>
                  ) : (
                    <div className="h-svc-card-img-placeholder" />
                  )}
                  <div className="h-svc-card-body">
                    <h3 className="h-svc-card-title">{svc.label}</h3>
                    <p className="h-svc-card-tag">{svc.tag}</p>
                    <p className="h-svc-card-desc">{svc.summary}</p>
                  </div>
                  <Link to={to('what-we-build')} className="h-svc-card-link">
                    {UI.learnMore} <ChevronRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND HEALTHCARE CONSTRUCTION — Manufacturing + Software */}
      <section className="section">
        <div className="container">
          <div className="h-sectors-grid">
            <FadeIn className="h-sector-card h-sector-manufacturing">
              <p className="label">{t.manufacturingLabel}</p>
              <h3 className="headline-md" style={{ marginBottom: 12 }}>{t.manufacturingHeadline}</h3>
              <p className="body-sm" style={{ marginBottom: 20 }}>{t.manufacturingBody}</p>
              <Link to={to('manufacturing')} className="btn btn-secondary btn-sm">
                {t.manufacturingCta} <ArrowRight size={13} />
              </Link>
            </FadeIn>
            <FadeIn delay={2} className="h-sector-card h-sector-software">
              <p className="label" style={{ color: 'var(--accent-software)' }}>{t.softwareLabel}</p>
              <h3 className="headline-md" style={{ marginBottom: 12 }}>{t.softwareHeadline}</h3>
              <p className="body-sm" style={{ marginBottom: 20 }}>{t.softwareBody}</p>
              <Link to={to('software-engineering')} className="btn btn-secondary btn-sm">
                {t.softwareCta} <ArrowRight size={13} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WORK GALLERY TEASER */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="h-row-head">
            <div>
              <p className="label">{t.galleryLabel}</p>
              <h2 className="headline-medium" style={{ marginBottom: 0 }}>{t.galleryHeadline}</h2>
            </div>
            <Link to={to('projects')} className="btn btn-secondary btn-sm">
              {t.galleryCtaLabel} <ArrowRight size={13} />
            </Link>
          </FadeIn>

          <div className="h-gallery-grid">
            <div className="h-gallery-main">
              <img src="/images/hero-bg.jpg" alt={t.galleryMainCaption} className="h-gallery-img" />
              <div className="h-gallery-caption">
                <span className="h-gallery-service">{t.galleryMainService}</span>
                <span>{t.galleryMainCaption}</span>
              </div>
            </div>
            <div className="h-gallery-side">
              <div className="h-gallery-item">
                <img src="/images/joinery-doors.jpg" alt={t.galleryItem1Caption} className="h-gallery-img" />
                <div className="h-gallery-caption">
                  <span className="h-gallery-service">{t.galleryItem1Service}</span>
                  <span>{t.galleryItem1Caption}</span>
                </div>
              </div>
              <div className="h-gallery-item">
                <img src="/images/corian-surfaces.jpg" alt={t.galleryItem2Caption} className="h-gallery-img" />
                <div className="h-gallery-caption">
                  <span className="h-gallery-service">{t.galleryItem2Service}</span>
                  <span>{t.galleryItem2Caption}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="h-stats-bar">
        <div className="container">
          <div className="h-stats-grid">
            {STATS.map((s, i) => (
              <div key={s.l} className="h-stat" style={{ '--delay': `${i * 0.08}s` }}>
                <div className="h-stat-num">{s.n}</div>
                <div className="h-stat-lbl">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT SNIPPET */}
      <section className="section section-gray">
        <div className="container">
          <div className="h-about-grid">
            <FadeIn>
              <p className="label">{t.aboutLabel}</p>
              <h2 className="headline-medium">{t.aboutHeadline}</h2>
              <p className="body-text">{t.aboutBody1}</p>
              <p className="body-text" style={{ color: 'var(--muted)' }}>{t.aboutBody2}</p>
              <Link to={to('about')} className="btn btn-secondary">
                {t.aboutCta} <ArrowRight size={14} />
              </Link>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="h-about-features">
                {t.aboutFeatures.map((f) => (
                  <div key={f.title} className="h-about-feat">
                    <span className="h-about-feat-icon">{f.icon}</span>
                    <div>
                      <div className="h-about-feat-title">{f.title}</div>
                      <div className="h-about-feat-desc">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <FadeIn className="h-cta-banner">
            <p className="label">{t.ctaLabel}</p>
            <h2 className="headline-medium" style={{ marginBottom: 10 }}>{t.ctaHeadline}</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px', textAlign: 'center' }}>{t.ctaSub}</p>
            <div className="h-cta-btns">
              <Link to={to('contact')} className="btn btn-primary btn-lg">{t.ctaPrimary}</Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn btn-secondary btn-lg">{SITE.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .h-hero {
          position: relative; height: 100vh; min-height: 620px;
          display: flex; align-items: center;
          overflow: hidden;
        }
        .h-hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center 30%;
          background-repeat: no-repeat;
          transform: scale(1.04);
          transition: transform 12s ease;
        }
        .h-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(10,14,20,0.78) 0%, rgba(10,14,20,0.55) 60%, rgba(10,14,20,0.45) 100%);
        }
        .h-hero-content { position: relative; z-index: 2; padding-top: 80px; }
        .h-hero-inner { max-width: 760px; }
        .h-hero-label {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.6);
          margin-bottom: 24px;
        }
        .h-hero-dot { width: 6px; height: 6px; border-radius: 50%; background: #10B981; flex-shrink: 0; box-shadow: 0 0 0 3px rgba(16,185,129,0.25); }
        .h-hero-headline {
          font-family: var(--font-display);
          font-size: clamp(2.6rem, 6vw, 4.8rem);
          font-weight: 900; line-height: 1.03;
          color: #fff; letter-spacing: -0.03em;
          margin: 0 0 22px;
        }
        .h-hero-headline-accent { color: #93C5FD; }
        .h-hero-sub { font-size: clamp(1rem, 1.8vw, 1.15rem); color: rgba(255,255,255,0.72); line-height: 1.72; max-width: 600px; margin-bottom: 32px; }
        .h-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .h-hero-trust { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 28px; }
        .h-hero-trust-item { display: flex; align-items: center; gap: 6px; font-size: 0.8rem; color: rgba(255,255,255,0.55); font-weight: 500; }
        .h-hero-trust-item svg { color: #10B981; }

        .h-scroll-ind { position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 6px; color: rgba(255,255,255,0.35); z-index: 2; animation: scrollBob 2s ease-in-out infinite; }
        .h-scroll-line { width: 1px; height: 40px; background: rgba(255,255,255,0.25); }
        @keyframes scrollBob { 0%, 100% { transform: translateX(-50%) translateY(0); } 50% { transform: translateX(-50%) translateY(6px); } }

        .h-svc-strip { background: var(--dark); border-bottom: 1px solid rgba(255,255,255,0.08); }
        .h-svc-strip-inner { display: flex; align-items: center; gap: 20px; padding: 16px 0; flex-wrap: wrap; }
        .h-svc-strip-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.35); white-space: nowrap; flex-shrink: 0; }
        .h-svc-pills { display: flex; gap: 8px; flex-wrap: wrap; }
        .h-svc-pill { display: flex; align-items: center; gap: 7px; padding: 7px 14px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.04); font-size: 0.8rem; font-weight: 500; color: rgba(255,255,255,0.7); text-decoration: none; transition: all 0.18s ease; cursor: pointer; }
        .h-svc-pill:hover { border-color: rgba(147,197,253,0.5); color: #93C5FD; background: rgba(147,197,253,0.06); }
        .h-svc-pill-num { font-family: 'Courier New', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.3); }
        .h-svc-pill-arrow { opacity: 0; transform: translateX(-4px); transition: all 0.18s ease; }
        .h-svc-pill:hover .h-svc-pill-arrow { opacity: 1; transform: translateX(0); }
        [dir="rtl"] .h-svc-pill-arrow { transform: scaleX(-1) translateX(-4px); }
        [dir="rtl"] .h-svc-pill:hover .h-svc-pill-arrow { transform: scaleX(-1) translateX(0); }

        .h-spotlight-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .h-spotlight-checklist { display: flex; flex-direction: column; gap: 10px; margin-top: 22px; }
        .h-spotlight-check { display: flex; align-items: center; gap: 10px; font-size: 0.9rem; color: var(--body); font-weight: 500; }
        .h-spotlight-check svg { color: var(--blue); flex-shrink: 0; }
        .h-spotlight-img-wrap { position: relative; }
        .h-spotlight-img { width: 100%; border-radius: var(--radius-lg); aspect-ratio: 4/3; object-fit: cover; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .h-spotlight-img-badge { position: absolute; bottom: -18px; left: 20px; background: var(--dark); border-radius: var(--radius-lg); padding: 14px 18px; display: flex; align-items: center; gap: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.2); }
        [dir="rtl"] .h-spotlight-img-badge { left: auto; right: 20px; }
        .h-badge-num { font-family: 'Courier New', monospace; font-size: 1.1rem; font-weight: 800; color: #93C5FD; }
        .h-badge-lbl { font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.7); max-width: 180px; line-height: 1.35; }

        .h-section-head { margin-bottom: 48px; }
        .h-section-head .section-sub { max-width: 580px; }
        .h-services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .h-svc-card { background: #fff; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column; transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease; }
        .h-svc-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.08); border-color: var(--blue-mid); }
        .h-svc-card-num { font-family: 'Courier New', monospace; font-size: 0.65rem; font-weight: 800; color: var(--muted); padding: 14px 16px 0; letter-spacing: 0.08em; }
        .h-svc-card-img-wrap { height: 140px; overflow: hidden; }
        .h-svc-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
        .h-svc-card:hover .h-svc-card-img { transform: scale(1.04); }
        .h-svc-card-img-placeholder { height: 140px; background: var(--gray-bg); }
        .h-svc-card-body { padding: 16px; flex: 1; }
        .h-svc-card-title { font-family: var(--font-display); font-size: 0.92rem; font-weight: 700; color: var(--dark); margin-bottom: 6px; line-height: 1.3; }
        .h-svc-card-tag { font-size: 0.65rem; font-weight: 600; color: var(--blue); letter-spacing: 0.04em; margin-bottom: 8px; }
        .h-svc-card-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.6; margin: 0; }
        .h-svc-card-link { display: flex; align-items: center; justify-content: center; gap: 4px; padding: 12px 16px; font-size: 0.82rem; font-weight: 600; color: var(--blue); text-decoration: none; border-top: 1px solid var(--border); transition: background 0.15s ease; }
        .h-svc-card-link:hover { background: var(--blue-light); }

        .h-sectors-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .h-sector-card { border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 32px; background: #fff; }
        .h-sector-manufacturing { border-top: 3px solid var(--accent-manufacturing); }
        .h-sector-software { border-top: 3px solid var(--accent-software); }
        .h-sector-manufacturing .label { color: var(--accent-manufacturing); }

        .h-row-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 20px; flex-wrap: wrap; margin-bottom: 28px; }
        .h-gallery-grid { display: grid; grid-template-columns: 3fr 2fr; gap: 12px; }
        .h-gallery-main, .h-gallery-side { display: flex; flex-direction: column; gap: 12px; }
        .h-gallery-item { flex: 1; position: relative; overflow: hidden; border-radius: var(--radius-lg); }
        .h-gallery-main { position: relative; overflow: hidden; border-radius: var(--radius-lg); }
        .h-gallery-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.4s ease; aspect-ratio: auto; min-height: 220px; }
        .h-gallery-main .h-gallery-img { aspect-ratio: 16/10; min-height: unset; }
        .h-gallery-item .h-gallery-img { aspect-ratio: 4/3; min-height: unset; }
        .h-gallery-main:hover .h-gallery-img, .h-gallery-item:hover .h-gallery-img { transform: scale(1.03); }
        .h-gallery-caption { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%); padding: 20px 14px 12px; display: flex; flex-direction: column; gap: 2px; }
        .h-gallery-service { font-size: 0.6rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: #93C5FD; }
        .h-gallery-caption > span:last-child { font-size: 0.78rem; color: rgba(255,255,255,0.85); font-weight: 500; }

        .h-stats-bar { background: var(--blue); }
        .h-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .h-stat { padding: 40px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.15); }
        .h-stat:last-child { border-right: none; }
        [dir="rtl"] .h-stat { border-right: none; border-left: 1px solid rgba(255,255,255,0.15); }
        [dir="rtl"] .h-stat:last-child { border-left: none; }
        .h-stat-num { font-family: var(--font-display); font-size: 2.8rem; font-weight: 800; color: #fff; line-height: 1; margin-bottom: 6px; }
        .h-stat-lbl { font-size: 0.78rem; font-weight: 500; color: rgba(255,255,255,0.68); letter-spacing: 0.04em; }

        .h-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .h-about-features { display: flex; flex-direction: column; gap: 0; border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; margin-top: 8px; }
        .h-about-feat { display: flex; align-items: flex-start; gap: 14px; padding: 20px 22px; border-bottom: 1px solid var(--border); transition: background 0.18s ease; }
        .h-about-feat:last-child { border-bottom: none; }
        .h-about-feat:hover { background: var(--gray-bg); }
        .h-about-feat-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 2px; }
        .h-about-feat-title { font-family: var(--font-display); font-size: 0.95rem; font-weight: 700; color: var(--dark); margin-bottom: 3px; }
        .h-about-feat-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }

        .h-cta-banner { background: var(--gray-bg); border: 1.5px solid var(--border); border-radius: var(--radius-lg); padding: 60px 48px; text-align: center; }
        .h-cta-btns { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }

        @media (max-width: 1100px) { .h-services-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 900px) {
          .h-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .h-stat { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
          .h-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
          .h-stat:nth-last-child(-n+2) { border-bottom: none; }
          .h-gallery-grid { grid-template-columns: 1fr; }
          .h-gallery-side { flex-direction: row; }
          .h-sectors-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 800px) {
          .h-spotlight-grid { grid-template-columns: 1fr; gap: 40px; }
          .h-spotlight-img-badge { bottom: -14px; }
          .h-about-grid { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 768px) {
          .h-hero { min-height: 100svh; }
          .h-hero-headline { font-size: clamp(2rem, 8vw, 3.5rem); }
          .h-hero-trust { gap: 14px; }
          .h-cta-banner { padding: 40px 24px; }
        }
        @media (max-width: 640px) {
          .h-services-grid { grid-template-columns: 1fr; }
          .h-gallery-side { flex-direction: column; }
          .h-hero-btns { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
