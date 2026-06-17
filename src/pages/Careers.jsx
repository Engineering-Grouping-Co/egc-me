import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { CAREERS, SITE } from '../data';

const CULTURE = [
  { title: 'In-House Manufacturing', desc: 'Work alongside fabricators and installers in our own steel, timber, and lead sheet shops.' },
  { title: 'Site Exposure',          desc: 'Gain experience across multiple regions and project types throughout the Kingdom.' },
  { title: 'Career Growth',          desc: 'Structured paths within each division — from shop floor to senior site and management roles.' },
  { title: 'Diverse Teams',          desc: 'A multicultural workforce of engineers, craftspeople, and professionals across disciplines.' },
];

const DIV_FILTERS = ['All', 'Steel', 'Wood', 'Lead Sheet', 'Corporate'];

function matchesFilter(career, f) {
  if (f === 'All') return true;
  const dept = career.dept.toLowerCase();
  if (f === 'Steel')      return dept.includes('steel');
  if (f === 'Wood')       return dept.includes('wood');
  if (f === 'Lead Sheet') return dept.includes('lead');
  return !dept.includes('manufacturing');
}

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = CAREERS.filter(c => matchesFilter(c, activeFilter));

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>Careers</span></nav>
          <FadeIn>
            <p className="overline">Work With Us</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Build your career at EGC.</h1>
            <p className="section-sub">
              We're looking for skilled fabricators, site supervisors, engineers, and
              support professionals to join our growing team across all three divisions
              in Riyadh and on sites across the Kingdom.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CULTURE */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">Why EGC</p>
            <h2 className="headline-lg">Working here.</h2>
          </FadeIn>
          <div className="grid-4">
            {CULTURE.map((c, i) => (
              <FadeIn delay={i + 1} key={c.title}>
                <div className="card cult-card">
                  <div className="cult-num">0{i + 1}</div>
                  <h3 className="headline-sm" style={{ margin: '12px 0 8px' }}>{c.title}</h3>
                  <p className="body-sm">{c.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">Open Positions</p>
            <h2 className="headline-lg">Current openings.</h2>
            <p className="section-sub">
              All positions are based in Riyadh unless otherwise noted. Site roles require
              travel and may be located across multiple regions.
            </p>
          </FadeIn>

          <FadeIn className="chip-row" style={{ marginBottom: 28 }}>
            {DIV_FILTERS.map(f => (
              <button
                key={f}
                className={`chip${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >{f}</button>
            ))}
          </FadeIn>

          <FadeIn className="jobs-list">
            {filtered.map((c, i) => (
              <div className="job-row" key={i}>
                <div className="job-row-left">
                  <h3 className="job-title">{c.title}</h3>
                  <span className="job-dept">{c.dept}</span>
                </div>
                <div className="job-row-right">
                  <span className="job-loc"><MapPin size={12} /> {c.location}</span>
                  <span className="job-type">{c.type}</span>
                  <a href={`mailto:${SITE.email}?subject=Application — ${c.title}`} className="btn btn-primary btn-sm">
                    Apply <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <p style={{ color: 'var(--muted)', padding: '32px 0', textAlign: 'center' }}>
                No open positions in this category right now — check back soon.
              </p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* OPEN APPLICATION */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="open-app-banner">
            <div>
              <p className="overline">Open Applications</p>
              <h2 className="headline-md" style={{ marginBottom: 8 }}>
                Don't see the right role?
              </h2>
              <p className="body-md" style={{ color: 'var(--muted)', maxWidth: 520, marginBottom: 0 }}>
                We review open applications and keep strong CVs on file for future openings.
                Send your CV and a brief note about the role you're looking for.
              </p>
            </div>
            <div className="open-app-actions">
              <a href={`mailto:${SITE.email}?subject=Open Application — EGC`} className="btn btn-primary">
                Send open application <ArrowRight size={15} />
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-ghost-link">{SITE.email}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        .cult-card { padding: 28px 22px; }
        .cult-num { font-family: var(--font-display); font-size: 2rem; font-weight: 800; color: var(--blue-mid); line-height: 1; }

        .jobs-list { border: 1.5px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
        .job-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 18px 24px; gap: 24px; flex-wrap: wrap;
          border-bottom: 1px solid var(--border);
          transition: background var(--transition);
        }
        .job-row:last-child { border-bottom: none; }
        .job-row:hover { background: var(--blue-light); }
        .job-row-left { display: flex; flex-direction: column; gap: 4px; }
        .job-title { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); margin: 0; }
        .job-dept { font-size: 0.78rem; color: var(--muted); font-weight: 500; }
        .job-row-right { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; }
        .job-loc { display: flex; align-items: center; gap: 4px; font-size: 0.82rem; color: var(--muted); }
        .job-type { font-size: 0.72rem; font-weight: 700; background: var(--gray-bg); color: var(--muted); padding: 3px 10px; border-radius: 999px; border: 1px solid var(--border); white-space: nowrap; }

        .open-app-banner {
          background: var(--white); border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); padding: 40px 48px;
          display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap;
        }
        .open-app-actions { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; flex-shrink: 0; }
        .btn-ghost-link { font-size: 0.84rem; color: var(--blue); font-weight: 600; }
        .btn-ghost-link:hover { text-decoration: underline; }

        @media (max-width: 860px) { .open-app-banner { padding: 32px 28px; flex-direction: column; align-items: flex-start; } }
        @media (max-width: 600px) { .job-row { padding: 16px; } .job-row-right { gap: 10px; } }
      `}</style>
    </>
  );
}
