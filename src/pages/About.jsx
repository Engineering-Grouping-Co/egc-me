import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { TEAM, VALUES, CERTIFICATIONS } from '../data';

const VALUE_ICONS = [
  <svg key="q" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L14 17.3l-5.6 2.9 1.1-6.2L5 9.6l6.2-.9L14 3z" stroke="#2563EB" strokeWidth="1.8" strokeLinejoin="round"/></svg>,
  <svg key="c" width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#2563EB" strokeWidth="1.8"/><path d="M14 8v6l4 4" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/></svg>,
  <svg key="p" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 20c0-4.4 4-8 9-8s9 3.6 9 8" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/><circle cx="14" cy="9" r="4" stroke="#2563EB" strokeWidth="1.8"/></svg>,
  <svg key="g" width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="#2563EB" strokeWidth="1.8"/><path d="M4 14h20M14 4c-3 3-4 6-4 10s1 7 4 10M14 4c3 3 4 6 4 10s-1 7-4 10" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round"/></svg>,
];

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>About</span>
          </nav>
          <FadeIn>
            <p className="overline">About EGC</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>About Engineering Grouping Co.</h1>
            <p className="section-sub">
              A Riyadh-based specialty contracting and manufacturing company — designing,
              fabricating, and installing structural steel, architectural joinery, and lead
              sheet works across the Kingdom of Saudi Arabia.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <FadeIn>
              <p className="overline">Our Story</p>
              <h2 className="headline-lg" style={{ marginBottom: 18 }}>Building the Kingdom, one material at a time.</h2>
              <p className="body-lg" style={{ marginBottom: 14 }}>
                Engineering Grouping Co. was founded in [YEAR] with a straightforward conviction:
                that the best way to deliver a fabrication project is to control it from first
                drawing to final handover. We started with structural steel and built our own
                shop rather than subcontracting — because control over quality and programme
                starts in the workshop, not on a specification sheet.
              </p>
              <p className="body-md" style={{ marginBottom: 14, color: 'var(--muted)' }}>
                Over the years we expanded into architectural woodwork and joinery, bringing
                the same principle — in-house fabrication, our own crews, single-point
                accountability — to a second discipline. Today our timber shop delivers custom
                millwork and fit-out packages to hospitality, commercial, and residential
                clients across the Kingdom.
              </p>
              <p className="body-md" style={{ color: 'var(--muted)' }}>
                In 2026 we are launching our third division, Lead Sheet Works, to serve the
                waterproofing and roofing requirements of giga-projects and premium
                developments. EGC now covers three materials, three disciplines, and one
                consistent standard of delivery.
              </p>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="photo-placeholder aspect-16-10" style={{ marginBottom: 16 }}>Company / site photo</div>
              <div className="about-quick-facts">
                <div className="qf-item"><span className="qf-num">[YEAR]</span><span className="qf-lbl">Founded</span></div>
                <div className="qf-item"><span className="qf-num">150+</span><span className="qf-lbl">Projects</span></div>
                <div className="qf-item"><span className="qf-num">3</span><span className="qf-lbl">Divisions</span></div>
                <div className="qf-item"><span className="qf-num">9</span><span className="qf-lbl">Regions</span></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">What We Stand For</p>
            <h2 className="headline-lg">Our values, in practice.</h2>
            <p className="section-sub">
              Four principles that shape every project we take on, from shop floor to site.
            </p>
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

      {/* SECTORS */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">Sectors We Serve</p>
            <h2 className="headline-lg">Government and private sector.</h2>
          </FadeIn>
          <div className="grid-2">
            <FadeIn delay={1}>
              <div className="card sector-card">
                <div className="sector-badge">01</div>
                <h3 className="headline-md" style={{ margin: '14px 0 10px' }}>Government &amp; Semi-Government</h3>
                <p className="body-md" style={{ marginBottom: 18 }}>
                  EGC has a long-standing record of delivery on public infrastructure, government
                  buildings, and semi-government facilities — where programme certainty and
                  compliance documentation matter most.
                </p>
                <ul className="sector-list">
                  <li>Government administrative and security facilities</li>
                  <li>Municipal and utility infrastructure</li>
                  <li>Defence-related facilities</li>
                  <li>Giga-project and Vision 2030 packages</li>
                  <li>Public-sector industrial city works</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="card sector-card">
                <div className="sector-badge">02</div>
                <h3 className="headline-md" style={{ margin: '14px 0 10px' }}>Private Sector &amp; Commercial</h3>
                <p className="body-md" style={{ marginBottom: 18 }}>
                  Developers, EPC contractors, and industrial operators choose EGC for our
                  in-house capacity, schedule reliability, and ability to manage complex
                  multi-discipline packages under a single contract.
                </p>
                <ul className="sector-list">
                  <li>Mixed-use and commercial developments</li>
                  <li>Hospitality, hotel, and resort fit-outs</li>
                  <li>Industrial warehouses and storage facilities</li>
                  <li>Retail and F&amp;B fit-out packages</li>
                  <li>EPC subcontract packages</li>
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
            <p className="overline">Accreditations</p>
            <h2 className="headline-lg">Quality. Safety. Environment.</h2>
            <p className="section-sub">
              EGC operates under internationally recognised management systems across
              all three divisions.
            </p>
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

      {/* TEAM */}
      <section className="section" id="team">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">The Team</p>
            <h2 className="headline-lg">The people behind the build.</h2>
            <p className="section-sub">
              Leadership and division heads driving EGC's projects from tender to handover.
            </p>
          </FadeIn>
          <div className="grid-4">
            {TEAM.map((m, i) => {
              const initials = m.name.split(' ').map(p => p[0]).join('').slice(0, 2);
              return (
                <FadeIn delay={(i % 4) + 1} key={m.id}>
                  <div className="card team-card">
                    <div className="team-card-top">
                      <span className="team-badge">{m.badge}</span>
                      <ShieldCheck size={13} className="team-verified" />
                    </div>
                    <div className="team-avatar">{initials}</div>
                    <h4 className="team-name">{m.name}</h4>
                    <p className="team-role">{m.role}</p>
                    <span className="team-dept">{m.dept}</span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .about-quick-facts {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          overflow: hidden; background: #fff;
        }
        .qf-item {
          display: flex; flex-direction: column; align-items: center;
          padding: 20px 12px; text-align: center;
          border-right: 1px solid var(--border);
        }
        .qf-item:last-child { border-right: none; }
        .qf-num { font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--blue); line-height: 1; margin-bottom: 4px; }
        .qf-lbl { font-size: 0.72rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; }

        .val-card { text-align: center; padding: 32px 24px; }
        .val-icon { width: 52px; height: 52px; margin: 0 auto; background: var(--blue-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; }

        .sector-card { padding: 36px 32px; }
        .sector-badge { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--blue-mid); line-height: 1; }
        .sector-list { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; }
        .sector-list li { font-size: 0.9rem; color: var(--body); padding-left: 16px; position: relative; }
        .sector-list li::before { content: '—'; position: absolute; left: 0; color: var(--blue); font-weight: 700; }

        .cert-card { text-align: center; padding: 36px 24px; }
        .cert-code { font-family: var(--font-display); font-size: 1.8rem; font-weight: 800; color: var(--blue); }

        .team-card { padding: 22px 18px; text-align: center; }
        .team-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
        .team-badge { font-size: 0.62rem; color: var(--muted); font-weight: 600; letter-spacing: 0.04em; }
        .team-verified { color: var(--blue); }
        .team-avatar { width: 60px; height: 60px; border-radius: 50%; background: var(--blue-light); border: 2px solid var(--blue-mid); color: var(--blue); display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; margin: 0 auto 14px; }
        .team-name { font-family: var(--font-display); font-size: 0.98rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
        .team-role { font-size: 0.82rem; color: var(--muted); margin-bottom: 12px; line-height: 1.4; }
        .team-dept { font-size: 0.68rem; font-weight: 600; background: var(--gray-bg); color: var(--blue); padding: 3px 10px; border-radius: 4px; border: 1px solid var(--border); }

        @media (max-width: 860px) { .about-quick-facts { grid-template-columns: repeat(2, 1fr); } .qf-item:nth-child(2) { border-right: none; } .qf-item:nth-child(1), .qf-item:nth-child(2) { border-bottom: 1px solid var(--border); } }
        @media (max-width: 600px) { .sector-card { padding: 28px 22px; } }
      `}</style>
    </>
  );
}
