import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { SERVICES, SITE } from '../data';

/* ── Each full service section ── */
function ServiceSection({ svc, index }) {
  const isEven = index % 2 === 0;
  return (
    <div className={`wb-service-block${isEven ? '' : ' wb-reverse'}`} id={svc.id}>
      <div className="container">
        <div className="wb-service-grid">
          {/* Text column */}
          <FadeIn className="wb-service-text">
            <div className="wb-service-num">{svc.num}</div>
            <p className="overline" style={{ color: 'var(--blue)' }}>{svc.tag}</p>
            <h2 className="headline-medium wb-service-title">{svc.label}</h2>
            <p className="body-text">{svc.desc}</p>

            <div className="wb-capabilities">
              <h4 className="wb-cap-heading">What we deliver</h4>
              <ul className="wb-cap-list">
                {svc.capabilities.map(c => (
                  <li key={c} className="wb-cap-item">
                    <CheckCircle2 size={14} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
              Discuss a project <ArrowRight size={14} />
            </Link>
          </FadeIn>

          {/* Image column */}
          <FadeIn delay={2} className="wb-service-media">
            {svc.image ? (
              <div className="wb-service-img-wrap">
                <img
                  src={svc.image}
                  alt={svc.label}
                  className="wb-service-img"
                />
                <div className="wb-img-badge">
                  <span className="wb-img-badge-num">{svc.num}</span>
                  <span className="wb-img-badge-lbl">{svc.shortLabel}</span>
                </div>
              </div>
            ) : (
              <div className="wb-service-placeholder">
                <span className="wb-placeholder-num">{svc.num}</span>
                <span className="wb-placeholder-lbl">Photos coming soon</span>
              </div>
            )}

            {/* Additional image thumbnails */}
            {svc.thumb && svc.image !== svc.thumb && (
              <div className="wb-thumb-row">
                <div className="wb-thumb-wrap">
                  <img src={svc.thumb} alt={`${svc.label} detail`} className="wb-thumb-img" />
                </div>
                <div className="wb-thumb-placeholder" />
                <div className="wb-thumb-placeholder" />
              </div>
            )}
            {svc.image && svc.image === svc.thumb && (
              <div className="wb-thumb-row">
                <div className="wb-thumb-placeholder" />
                <div className="wb-thumb-placeholder" />
                <div className="wb-thumb-placeholder" />
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeBuild() {
  const [activeService, setActiveService] = useState(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveService(id);
  };

  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'What We Build' }]}
        overline="Capabilities & Work"
        title="What We Build"
        subtitle="EGC specialises in the precision interior fit-out of buildings — with a particular expertise in healthcare environments and the specialist disciplines that come with them."
        decorNum="EGC"
      />

      {/* ── SERVICE NAV ── */}
      <div className="wb-service-nav">
        <div className="container">
          <div className="wb-nav-inner">
            {SERVICES.map(svc => (
              <button
                key={svc.id}
                className={`wb-nav-item${activeService === svc.id ? ' active' : ''}`}
                onClick={() => scrollTo(svc.id)}
              >
                <span className="wb-nav-num">{svc.num}</span>
                <span className="wb-nav-label">{svc.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="section">
        <div className="container">
          <FadeIn className="wb-intro">
            <div className="wb-intro-text">
              <h2 className="headline-medium">
                Specialist fit-out, from hospital imaging suites to commercial interiors.
              </h2>
              <p className="body-lg" style={{ marginTop: 16 }}>
                Our work is spread across healthcare facilities, commercial buildings, hospitality
                venues, and institutional projects throughout Saudi Arabia. The common thread is
                precision — whether we're installing lead shielding in an MRI room or fitting a
                bespoke Corian reception counter, the standard doesn't change.
              </p>
            </div>
            <div className="wb-intro-stats">
              {[
                { n: '150+', l: 'Projects Completed' },
                { n: '18+',  l: 'Years Operating' },
                { n: '4',    l: 'Specialist Services' },
              ].map(s => (
                <div key={s.l} className="wb-intro-stat">
                  <span className="wb-stat-n">{s.n}</span>
                  <span className="wb-stat-l">{s.l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {SERVICES.map((svc, i) => (
        <ServiceSection key={svc.id} svc={svc} index={i} />
      ))}

      {/* ── PROJECTS TEASER ── */}
      <section className="section">
        <div className="container">
          <FadeIn className="wb-projects-teaser">
            <div className="wb-projects-left">
              <p className="overline">Project Track Record</p>
              <h2 className="headline-medium" style={{ marginBottom: 14 }}>
                Our work spans the Kingdom.
              </h2>
              <p className="section-sub" style={{ marginTop: 0 }}>
                From Jeddah and Riyadh to Dammam and the Aseer region — EGC has delivered
                healthcare environments, joinery packages, and surface works across Saudi Arabia.
                View our project map for details.
              </p>
              <Link to="/projects" className="btn btn-primary" style={{ marginTop: 24 }}>
                View Project Map <ArrowRight size={14} />
              </Link>
            </div>
            <div className="wb-projects-right">
              {[
                { city: 'Jeddah', desc: 'Radiology department fit-out', service: 'Healthcare' },
                { city: 'Riyadh', desc: 'Hospital imaging department', service: 'Healthcare' },
                { city: 'Dammam', desc: 'Oncology wing construction', service: 'Healthcare' },
                { city: 'Jeddah', desc: 'Multi-site café fit-out', service: 'Joinery' },
              ].map((p, i) => (
                <div key={i} className="wb-proj-row">
                  <div className="wb-proj-city">{p.city}</div>
                  <div className="wb-proj-desc">{p.desc}</div>
                  <div className="wb-proj-service">{p.service}</div>
                </div>
              ))}
              <Link to="/projects" className="wb-proj-all">
                See all projects <ChevronRight size={13} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">Start a conversation</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Discuss your project scope.</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Whether you need a full radiology department, a reception counter package, or a
              multi-site joinery specification — our team will respond quickly.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="btn btn-secondary btn-lg">{SITE.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* ── Service nav ── */
        .wb-service-nav {
          background: var(--dark); border-bottom: 1px solid rgba(255,255,255,0.08);
          position: sticky; top: 60px; z-index: 100;
        }
        .wb-nav-inner { display: flex; gap: 0; overflow-x: auto; scrollbar-width: none; }
        .wb-nav-inner::-webkit-scrollbar { display: none; }
        .wb-nav-item {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 22px;
          font-size: 0.82rem; font-weight: 600;
          color: rgba(255,255,255,0.45); cursor: pointer;
          border: none; background: none;
          border-bottom: 2px solid transparent;
          transition: all 0.18s ease; white-space: nowrap;
          flex-shrink: 0;
        }
        .wb-nav-item:hover { color: rgba(255,255,255,0.8); }
        .wb-nav-item.active { color: #93C5FD; border-bottom-color: #93C5FD; }
        .wb-nav-num { font-family: 'Courier New', monospace; font-size: 0.65rem; color: rgba(255,255,255,0.2); }
        .wb-nav-item.active .wb-nav-num { color: rgba(147,197,253,0.5); }

        /* ── Intro ── */
        .wb-intro { display: grid; grid-template-columns: 1fr 300px; gap: 48px; align-items: start; }
        .wb-intro-text { flex: 1; }
        .wb-intro-stats {
          display: flex; flex-direction: column; gap: 0;
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          overflow: hidden; flex-shrink: 0;
        }
        .wb-intro-stat {
          display: flex; flex-direction: column; padding: 20px 24px;
          border-bottom: 1px solid var(--border);
        }
        .wb-intro-stat:last-child { border-bottom: none; }
        .wb-stat-n { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--blue); line-height: 1; }
        .wb-stat-l { font-size: 0.72rem; color: var(--muted); font-weight: 500; margin-top: 4px; text-transform: uppercase; letter-spacing: 0.06em; }

        /* ── Service blocks ── */
        .wb-service-block {
          padding: var(--section-pad) 0;
          background: #fff;
          border-top: 1px solid var(--border);
        }
        .wb-service-block:nth-child(even) { background: var(--gray-bg); }
        .wb-service-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
        }
        .wb-reverse .wb-service-grid { direction: rtl; }
        .wb-reverse .wb-service-grid > * { direction: ltr; }

        .wb-service-num {
          font-family: 'Courier New', monospace; font-size: 0.7rem; font-weight: 800;
          color: var(--muted); letter-spacing: 0.12em;
          margin-bottom: 12px;
        }
        .wb-service-title { margin: 10px 0 18px; }

        .wb-capabilities { margin-top: 24px; }
        .wb-cap-heading {
          font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.1em; color: var(--muted); margin: 0 0 14px;
        }
        .wb-cap-list { display: flex; flex-direction: column; gap: 9px; }
        .wb-cap-item {
          display: flex; align-items: flex-start; gap: 10px;
          font-size: 0.9rem; color: var(--body);
        }
        .wb-cap-item svg { color: var(--blue); flex-shrink: 0; margin-top: 2px; }

        /* Images */
        .wb-service-media { display: flex; flex-direction: column; gap: 10px; }
        .wb-service-img-wrap { position: relative; border-radius: var(--radius-lg); overflow: hidden; }
        .wb-service-img {
          width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .wb-service-img-wrap:hover .wb-service-img { transform: scale(1.03); }
        .wb-img-badge {
          position: absolute; top: 14px; left: 14px;
          background: rgba(0,0,0,0.7); backdrop-filter: blur(6px);
          border-radius: 8px; padding: 8px 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .wb-img-badge-num { font-family: 'Courier New', monospace; font-size: 1rem; font-weight: 800; color: #93C5FD; }
        .wb-img-badge-lbl { font-size: 0.72rem; font-weight: 600; color: rgba(255,255,255,0.8); }
        .wb-thumb-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .wb-thumb-wrap { border-radius: 8px; overflow: hidden; }
        .wb-thumb-img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
        .wb-thumb-placeholder { aspect-ratio: 4/3; background: var(--border); border-radius: 8px; }
        .wb-service-placeholder {
          width: 100%; aspect-ratio: 4/3;
          background: var(--gray-bg); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 8px;
        }
        .wb-placeholder-num { font-family: var(--font-display); font-size: 4rem; font-weight: 900; color: var(--border); letter-spacing: -0.05em; }
        .wb-placeholder-lbl { font-size: 0.78rem; color: var(--muted); font-weight: 500; }

        /* ── Projects teaser ── */
        .wb-projects-teaser {
          display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start;
        }
        .wb-proj-row {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 0; border-bottom: 1px solid var(--border);
          flex-wrap: wrap;
        }
        .wb-proj-city { font-family: var(--font-display); font-size: 0.9rem; font-weight: 700; color: var(--dark); min-width: 70px; }
        .wb-proj-desc { flex: 1; font-size: 0.85rem; color: var(--body); }
        .wb-proj-service { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; background: var(--blue-light); color: var(--blue); padding: 3px 8px; border-radius: 4px; flex-shrink: 0; }
        .wb-proj-all {
          display: flex; align-items: center; gap: 4px;
          font-size: 0.85rem; font-weight: 600; color: var(--blue);
          text-decoration: none; margin-top: 14px;
          transition: gap 0.15s;
        }
        .wb-proj-all:hover { gap: 8px; }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .wb-intro { grid-template-columns: 1fr; }
          .wb-intro-stats { flex-direction: row; }
          .wb-intro-stat { flex: 1; border-bottom: none; border-right: 1px solid var(--border); }
          .wb-intro-stat:last-child { border-right: none; }
          .wb-service-grid { grid-template-columns: 1fr; gap: 36px; }
          .wb-reverse .wb-service-grid { direction: ltr; }
          .wb-projects-teaser { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 580px) {
          .wb-intro-stats { flex-direction: column; }
          .wb-intro-stat { border-right: none; border-bottom: 1px solid var(--border); }
          .wb-thumb-row { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </>
  );
}
