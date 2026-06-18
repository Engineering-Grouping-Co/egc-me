import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { DIVISIONS } from '../data';

export default function Divisions() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Divisions</span></nav>
          <FadeIn>
            <p className="overline">Our Expertise</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Our Three Divisions</h1>
            <p className="section-sub">
              EGC runs its own fabrication shops for steel, timber, and lead sheet.
              Every project moves from design to site under one roof, one schedule,
              and one quality standard.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* DIVISION SECTIONS */}
      {DIVISIONS.map((div, idx) => (
        <section
          key={div.id}
          id={div.id}
          className={`section${idx % 2 !== 0 ? ' section-gray' : ''}`}
        >
          <div className="container">
            <div className={`feature-grid${idx % 2 !== 0 ? ' div-reverse' : ''}`}>
              {/* TEXT SIDE */}
              <FadeIn>
                <div className="div-header">
                  <p className="overline" style={{ marginBottom: 0 }}>Division {div.num}</p>
                  {div.badge && <span className="div-new-badge">{div.badge}</span>}
                </div>
                <h2 className="headline-lg" style={{ margin: '6px 0 6px' }}>{div.label}</h2>
                <p className="tag-mono" style={{ color: 'var(--blue)', marginBottom: 0 }}>{div.tag}</p>
                <p className="body-lg" style={{ margin: '16px 0 12px' }}>{div.summary}</p>
                <p className="body-md" style={{ color: 'var(--muted)', marginBottom: 28 }}>{div.desc}</p>

                {/* Capabilities grid */}
                <h3 className="div-subhead">Capabilities</h3>
                <div className="cap-grid">
                  {div.capabilities.map((c) => (
                    <div className="card cap-item" key={c.title}>
                      <strong>{c.title}</strong>
                      <p>{c.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Specs table */}
                <h3 className="div-subhead" style={{ marginTop: 28 }}>Technical Specifications</h3>
                <div className="card" style={{ padding: '0 24px' }}>
                  <table className="spec-table">
                    <tbody>
                      {div.specs.map((s) => (
                        <tr key={s.k}>
                          <td className="spec-k">{s.k}</td>
                          <td className="spec-v">{s.v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Sectors */}
                <div className="sectors-row">
                  {div.sectors.map((s) => (
                    <span className="sector-tag" key={s}>{s}</span>
                  ))}
                </div>

                <Link to="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
                  Start a {div.label} project <ArrowRight size={15} />
                </Link>
              </FadeIn>

              {/* VISUAL SIDE */}
              <FadeIn delay={2}>
                <div className="photo-placeholder aspect-16-10" style={{ marginBottom: 16 }}>
                  {div.label} / fabrication photo
                </div>
                <div className="photo-placeholder aspect-4-3">
                  {div.label} / site installation photo
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

      {/* BOTTOM CTA */}
      <section className="section">
        <div className="container">
          <FadeIn className="cta-banner">
            <p className="overline">Get In Touch</p>
            <h2 className="headline-lg" style={{ marginBottom: 12 }}>Discuss your requirements.</h2>
            <p className="section-sub" style={{ margin: '0 auto 28px' }}>
              Our team is happy to discuss scope, programme, and budget — whether
              you have a full specification or just an idea.
            </p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
              <Link to="/projects" className="btn btn-secondary btn-lg">View Projects</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .div-reverse { direction: rtl; }
        .div-reverse > * { direction: ltr; }
        .div-header { display: flex; align-items: center; gap: 12px; margin-bottom: 6px; }
        .div-new-badge { font-size: 0.62rem; font-weight: 800; background: var(--blue); color: #fff; padding: 3px 9px; border-radius: 4px; letter-spacing: 0.06em; }
        .div-subhead { font-family: var(--font-display); font-size: 0.82rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); margin-bottom: 14px; }

        .cap-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
        .cap-item { padding: 16px; border-radius: 10px; }
        .cap-item strong { display: block; font-size: 0.9rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
        .cap-item p { font-size: 0.83rem; color: var(--muted); margin: 0; line-height: 1.5; }

        .spec-table { width: 100%; border-collapse: collapse; }
        .spec-table tr { border-bottom: 1px solid var(--border); }
        .spec-table tr:last-child { border-bottom: none; }
        .spec-k { font-size: 0.82rem; font-weight: 600; color: var(--dark); padding: 12px 0; width: 40%; vertical-align: top; }
        .spec-v { font-size: 0.82rem; color: var(--muted); padding: 12px 0 12px 16px; vertical-align: top; }

        .sectors-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
        .sector-tag { font-size: 0.75rem; font-weight: 600; background: var(--blue-light); color: var(--blue); border: 1px solid var(--blue-mid); padding: 4px 12px; border-radius: 999px; }

        @media (max-width: 860px) {
          .div-reverse { direction: ltr; }
          .cap-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) { .cap-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
