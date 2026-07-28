import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import PageHeader from '../components/PageHeader';
import { CERTIFICATIONS, VALUES } from '../data';

const VALUE_ICONS = [
  <svg key="q" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M13 2l2.6 5.4 5.9.8-4.3 4.2 1 5.9L13 16.3l-5.3 2.7 1-5.9L4.5 8.3l5.9-.8L13 2z" stroke="#2563EB" strokeWidth="1.7" strokeLinejoin="round"/></svg>,
  <svg key="c" width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="9.5" stroke="#2563EB" strokeWidth="1.7"/><path d="M13 7.5v5.5l3.7 3.7" stroke="#2563EB" strokeWidth="1.7" strokeLinecap="round"/></svg>,
  <svg key="p" width="26" height="26" viewBox="0 0 26 26" fill="none"><path d="M4.5 19c0-4.1 3.8-7.5 8.5-7.5s8.5 3.4 8.5 7.5" stroke="#2563EB" strokeWidth="1.7" strokeLinecap="round"/><circle cx="13" cy="8.5" r="3.7" stroke="#2563EB" strokeWidth="1.7"/></svg>,
  <svg key="g" width="26" height="26" viewBox="0 0 26 26" fill="none"><circle cx="13" cy="13" r="9.5" stroke="#2563EB" strokeWidth="1.7"/><path d="M3.5 13h19M13 3.5c-2.8 2.8-3.7 5.7-3.7 9.5s.9 6.7 3.7 9.5M13 3.5c2.8 2.8 3.7 5.7 3.7 9.5s-.9 6.7-3.7 9.5" stroke="#2563EB" strokeWidth="1.7" strokeLinecap="round"/></svg>,
];

export default function About() {
  return (
    <>
      <PageHeader
        breadcrumb={[{ label: 'About' }]}
        overline="Company Profile"
        title="About Engineering Grouping Co."
        subtitle="A Jeddah-based specialist interior contractor — building precision environments for hospitals, clinics, commercial buildings, and institutional projects across Saudi Arabia."
        decorNum="EGC"
      />

      {/* COMPANY STORY */}
      <section className="section">
        <div className="container">
          <div className="feature-grid">
            <FadeIn>
              <p className="overline">Our Story</p>
              <h2 className="headline-medium" style={{ marginBottom: 20 }}>
                Precision environments.<br />Built by our hands.
              </h2>
              <p className="body-text">
                Engineering Grouping Co. (EGC) was founded in Jeddah on a straightforward conviction:
                the best way to deliver a specialist interior project is to control it entirely in-house.
                From the first shop drawing to the final surface polish, our people do the work.
              </p>
              <p className="body-text">
                Over time, the healthcare sector became our core. Hospitals, diagnostic centres, and
                clinics require interiors that a general contractor cannot deliver — radiation-controlled
                rooms where shielding is measured in millimetres, doors that seal against RF leakage,
                surfaces that meet clinical hygiene standards. EGC built the expertise, the tools,
                and the processes to deliver that work reliably.
              </p>
              <p className="body-text" style={{ color: 'var(--muted)' }}>
                Alongside healthcare, our joinery workshop produces architectural woodwork for
                commercial, hospitality, and institutional projects. Our Corian fabrication team
                supplies clinical and commercial surfaces. Our steel shop handles the metalwork
                that supports it all. One company, four disciplines, one quality standard.
              </p>
              <Link to="/what-we-build" className="btn btn-secondary">
                What we build <ArrowRight size={14} />
              </Link>
            </FadeIn>
            <FadeIn delay={2}>
              <img
                src="/images/hero-bg.jpg"
                alt="EGC team installing MRI room shielding"
                className="ab-hero-img"
              />
              <div className="about-quick-facts">
                <div className="qf-item">
                  <span className="qf-num">2006</span>
                  <span className="qf-lbl">Founded</span>
                </div>
                <div className="qf-item">
                  <span className="qf-num">150+</span>
                  <span className="qf-lbl">Projects</span>
                </div>
                <div className="qf-item">
                  <span className="qf-num">4</span>
                  <span className="qf-lbl">Services</span>
                </div>
                <div className="qf-item">
                  <span className="qf-num">9</span>
                  <span className="qf-lbl">Regions</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">How we work</p>
            <h2 className="headline-lg">Four principles. Every project.</h2>
            <p className="section-sub">
              The same standards that apply to a radiation-shielded MRI room apply to
              a bespoke reception counter. Our principles don't flex by project type.
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
            <p className="overline">Who We Work With</p>
            <h2 className="headline-lg">Healthcare and commercial clients.</h2>
          </FadeIn>
          <div className="grid-2">
            <FadeIn delay={1}>
              <div className="card sector-card">
                <div className="sector-badge">01</div>
                <h3 className="headline-md" style={{ margin: '14px 0 10px' }}>Healthcare & Government</h3>
                <p className="body-md" style={{ marginBottom: 18 }}>
                  EGC's primary clients are hospitals, medical cities, diagnostic centres, and the
                  government health authorities that commission them. We understand the programme
                  criticality, the compliance requirements, and the documentation standards that
                  public health infrastructure demands.
                </p>
                <ul className="sector-list">
                  <li>Government hospitals and medical cities</li>
                  <li>Private hospital groups and diagnostic networks</li>
                  <li>Oncology, radiology, and imaging departments</li>
                  <li>Nuclear medicine and radiation therapy facilities</li>
                  <li>Government administrative and institutional buildings</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={2}>
              <div className="card sector-card">
                <div className="sector-badge">02</div>
                <h3 className="headline-md" style={{ margin: '14px 0 10px' }}>Commercial & Hospitality</h3>
                <p className="body-md" style={{ marginBottom: 18 }}>
                  Beyond healthcare, EGC delivers interior joinery and surface works for developers,
                  EPC contractors, hospitality operators, and commercial tenants who need a specialist
                  fabricator with in-house capacity and schedule accountability.
                </p>
                <ul className="sector-list">
                  <li>Commercial office buildings and towers</li>
                  <li>Hotels, resorts, and hospitality fit-outs</li>
                  <li>Café and F&B interior packages</li>
                  <li>Retail and mixed-use development fit-outs</li>
                  <li>Industrial facilities and manufacturing plants</li>
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
              EGC operates under internationally recognised management systems across all service lines.
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

      {/* TEAM PLACEHOLDER */}
      <section className="section" id="team">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">The Team</p>
            <h2 className="headline-lg">The people behind the build.</h2>
            <p className="section-sub">
              Leadership and project heads driving EGC's work from tender to handover.
            </p>
          </FadeIn>
          <div className="team-placeholder">
            <p className="body-md" style={{ color: 'var(--muted)', textAlign: 'center', padding: '48px 24px', margin: 0 }}>
              Leadership team profiles coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">Work With EGC</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Ready to start your project?</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Get in touch to discuss your scope, timeline, and requirements.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <Link to="/what-we-build" className="btn btn-secondary btn-lg">What We Build</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .ab-hero-img {
          width: 100%; aspect-ratio: 16/10; object-fit: cover;
          border-radius: var(--radius-lg); margin-bottom: 16px;
        }
        .about-quick-facts {
          display: grid; grid-template-columns: repeat(4, 1fr);
          border: 1.5px solid var(--border); border-radius: var(--radius-lg);
          overflow: hidden; background: #fff;
        }
        .qf-item {
          display: flex; flex-direction: column; align-items: center;
          padding: 18px 12px; text-align: center;
          border-right: 1px solid var(--border);
        }
        .qf-item:last-child { border-right: none; }
        .qf-num { font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--blue); line-height: 1; margin-bottom: 4px; }
        .qf-lbl { font-size: 0.68rem; font-weight: 600; color: var(--muted); text-transform: uppercase; letter-spacing: 0.06em; }

        .val-card { text-align: center; padding: 32px 24px; }
        .val-icon { width: 50px; height: 50px; margin: 0 auto; background: var(--blue-light); border-radius: 12px; display: flex; align-items: center; justify-content: center; }

        .sector-card { padding: 36px 32px; }
        .sector-badge { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--blue-mid); line-height: 1; }
        .sector-list { display: flex; flex-direction: column; gap: 8px; margin: 0; padding: 0; }
        .sector-list li { font-size: 0.9rem; color: var(--body); padding-left: 16px; position: relative; }
        .sector-list li::before { content: '—'; position: absolute; left: 0; color: var(--blue); font-weight: 700; }

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
