import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Wrench, Building2, TrendingUp, ShieldCheck, Briefcase, Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { CAREERS, SITE } from '../data';

/* ── Culture perks ── */
const CULTURE = [
  {
    title: 'In-House Shop Floor',
    desc: 'Work directly in our Jeddah workshops with master fabricators and carpenters using advanced CNC machinery.',
    icon: Wrench,
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    title: 'Giga-Project Scale',
    desc: "Contribute to Saudi Arabia's landmark Vision 2030 projects. EGC is on the ground fabricating structural frames and premium interiors.",
    icon: Building2,
    color: '#D97706',
    bg: '#FFFBEB',
  },
  {
    title: 'Career Advancement',
    desc: 'Clear training paths from apprentice to team leader, and project coordinators to division heads.',
    icon: TrendingUp,
    color: '#10B981',
    bg: '#ECFDF5',
  },
  {
    title: 'Safety First Culture',
    desc: 'Strict HSE standards across all sites and workshops through regular training, clean lines, and quality gear.',
    icon: ShieldCheck,
    color: '#475569',
    bg: '#F1F5F9',
  },
];

/* ── Division colour maps ── */
const DIV_ACCENT = {
  steel:     { border: '#2563EB', light: '#EFF6FF', text: '#1E40AF', badge: '#DBEAFE', label: 'Steel' },
  wood:      { border: '#D97706', light: '#FFFBEB', text: '#92400E', badge: '#FDE68A', label: 'Wood' },
  leadsheet: { border: '#475569', light: '#F1F5F9', text: '#1E293B', badge: '#CBD5E1', label: 'Lead Sheet' },
  corporate: { border: '#2563EB', light: '#EFF6FF', text: '#1D4ED8', badge: '#DBEAFE', label: 'Corporate' },
};

/* ── Per-role descriptions ── */
const JOB_DESCS = {
  'Senior Steel Fabricator':        'Read engineering drawings, supervise assembly, and perform heavy-duty fabrication and welding in our Jeddah workshop.',
  'Steel Erection Foreman':         'Lead on-site steel erection teams, enforce safety protocols, and coordinate crane operations and structural alignment.',
  'CNC Machine Operator':           'Operate and program CNC plasma cutters, hydraulic drills, and band saws for precise structural steel cutting.',
  'Site Supervisor — Joinery':      'Oversee installation of premium architectural joinery and casework on commercial and hospitality fit-out sites.',
  'Joinery Shop Manager':           'Direct operations at our wood workshop — allocate materials, schedule craftsmen, and maintain finishing quality.',
  'Lead Sheet Technician':          'Install code-compliant lead sheet roofing, step flashings, and architectural cladding for luxury and heritage builds.',
  'HSE Officer':                    'Monitor workshop and site compliance, run daily toolbox talks, audit equipment, and report incidents to management.',
  'Procurement Specialist':         'Liaise with approved suppliers, evaluate bids, negotiate terms, and secure delivery to our Jeddah facility.',
  'Business Development Executive': 'Identify bid opportunities, build Tier-1 contractor relationships, and coordinate pre-qualification submissions.',
  'Project Engineer':               'Manage structural or joinery engineering packages, coordinate shop drawings, and verify design calculations.',
  'QA/QC Inspector':                'Perform visual and NDT weld inspections, verify joinery tolerances, and document compliance for client handovers.',
  'Finance & Admin Officer':        'Handle commercial administration, invoicing, supplier records, and general payroll tasks from the Jeddah office.',
};

const FILTERS = ['All', 'Steel', 'Wood', 'Lead Sheet', 'Corporate & Support'];

function getDivKey(dept) {
  const d = dept.toLowerCase();
  if (d.includes('steel')) return 'steel';
  if (d.includes('wood'))  return 'wood';
  if (d.includes('lead'))  return 'leadsheet';
  return 'corporate';
}

function matchFilter(career, filter) {
  if (filter === 'All') return true;
  const d = career.dept.toLowerCase();
  if (filter === 'Steel')              return d.includes('steel');
  if (filter === 'Wood')               return d.includes('wood');
  if (filter === 'Lead Sheet')         return d.includes('lead');
  if (filter === 'Corporate & Support')
    return !d.includes('manufacturing') && !d.includes('steel') && !d.includes('wood') && !d.includes('lead');
  return false;
}

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = CAREERS.filter(c => matchFilter(c, activeFilter));

  return (
    <>
      {/* ── PAGE HERO ── matches all other pages exactly ── */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Careers</span>
          </nav>
          <FadeIn>
            <p className="overline">Work With Us</p>
            <h1 className="headline-lg" style={{ marginBottom: 14 }}>Build your career at EGC.</h1>
            <p className="section-sub">
              We're looking for skilled fabricators, site supervisors, engineers, and support professionals
              to join our team in Jeddah and across the Kingdom.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CULTURE / WHY EGC ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">Why EGC</p>
            <h2 className="headline-lg">Working here.</h2>
          </FadeIn>
          <div className="grid-4">
            {CULTURE.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn delay={i + 1} key={c.title}>
                  <div className="card cr-perk-card">
                    <div className="cr-perk-icon" style={{ background: c.bg, color: c.color }}>
                      <Icon size={20} />
                    </div>
                    <h3 className="headline-sm" style={{ margin: '14px 0 8px' }}>{c.title}</h3>
                    <p className="body-sm" style={{ margin: 0 }}>{c.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="section">
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">Open Positions</p>
            <h2 className="headline-lg">Current openings.</h2>
            <p className="section-sub">
              Roles are based in Jeddah or on-site unless noted. Site positions may require travel across
              multiple regions including Riyadh, NEOM, and Western Province.
            </p>
          </FadeIn>

          <FadeIn className="chip-row" style={{ marginBottom: 32 }}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`chip${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </FadeIn>

          <div className="cr-jobs-grid">
            {filtered.map((c, i) => {
              const key  = getDivKey(c.dept);
              const acc  = DIV_ACCENT[key];
              const desc = JOB_DESCS[c.title] ?? 'Join EGC and contribute to world-class specialty contracting packages across the Kingdom.';
              return (
                <FadeIn delay={(i % 3) + 1} key={c.title}>
                  <div className="cr-job-card" style={{ '--jc-accent': acc.border, '--jc-light': acc.light, '--jc-text': acc.text }}>
                    <div className="cr-job-bar" />
                    <div className="cr-job-body">
                      <span className="cr-job-division" style={{ background: acc.badge, color: acc.text }}>{acc.label}</span>
                      <h3 className="cr-job-title">{c.title}</h3>
                      <p className="cr-job-desc">{desc}</p>
                      <div className="cr-job-meta">
                        <span className="cr-job-meta-item">
                          <MapPin size={12} />
                          {c.location}
                        </span>
                        <span className="cr-job-meta-item">
                          <Briefcase size={12} />
                          {c.type}
                        </span>
                      </div>
                    </div>
                    <div className="cr-job-footer">
                      <a
                        href={`mailto:${SITE.email}?subject=Application — ${c.title}&body=Dear EGC Recruitment Team,%0D%0A%0D%0AI am writing to apply for the ${c.title} position.%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0AThank you.`}
                        className="btn btn-primary btn-sm btn-block"
                      >
                        Apply Now <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', padding: '48px 0', color: 'var(--muted)' }}>
              No open positions in this category right now — check back soon.
            </p>
          )}
        </div>
      </section>

      {/* ── OPEN APPLICATION ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="cr-open-banner">
            <div>
              <p className="overline">Open Applications</p>
              <h2 className="headline-md" style={{ marginBottom: 8 }}>Don't see the right role?</h2>
              <p className="body-md" style={{ color: 'var(--muted)', maxWidth: 520, margin: 0 }}>
                We review open applications and keep strong CVs on file for future openings. Send your CV
                and a brief note about the kind of role you're looking for.
              </p>
            </div>
            <div className="cr-open-actions">
              <a
                href={`mailto:${SITE.email}?subject=Open Application — EGC&body=Dear EGC Recruitment Team,%0D%0A%0D%0AI would like to submit an open application.%0D%0A%0D%0AMy area of expertise:%0D%0APreferred location (Jeddah / Site / NEOM):%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0AThank you.`}
                className="btn btn-primary"
              >
                <Mail size={15} /> Send open application
              </a>
              <a href={`mailto:${SITE.email}`} className="cr-email-link">{SITE.email}</a>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* ── Perk cards ── */
        .cr-perk-card { padding: 24px 22px; }
        .cr-perk-icon {
          width: 46px; height: 46px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 0;
        }

        /* ── Job card grid ── */
        .cr-jobs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .cr-job-card {
          display: flex; flex-direction: column;
          background: #fff; border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); overflow: hidden;
          height: 100%;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .cr-job-card:hover { transform: translateY(-4px); box-shadow: 0 10px 32px rgba(0,0,0,0.07); border-color: var(--jc-accent); }
        .cr-job-bar { height: 4px; background: var(--jc-accent); flex-shrink: 0; }
        .cr-job-body { padding: 22px 22px 14px; display: flex; flex-direction: column; flex: 1; }
        .cr-job-division {
          display: inline-block; width: fit-content;
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 4px; margin-bottom: 12px;
        }
        .cr-job-title { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: var(--dark); margin: 0 0 10px; line-height: 1.3; }
        .cr-job-desc { font-size: 0.84rem; color: var(--muted); line-height: 1.65; margin: 0 0 18px; flex: 1; }
        .cr-job-meta {
          display: flex; gap: 16px; flex-wrap: wrap;
          border-top: 1px solid var(--border); padding-top: 14px; margin-top: auto;
        }
        .cr-job-meta-item {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.75rem; color: var(--muted); font-weight: 500;
        }
        .cr-job-footer { padding: 0 22px 22px; }

        /* ── Open application banner ── */
        .cr-open-banner {
          background: #fff; border: 1.5px solid var(--border);
          border-radius: var(--radius-lg); padding: 40px 48px;
          display: flex; justify-content: space-between; align-items: center;
          gap: 32px; flex-wrap: wrap;
        }
        .cr-open-actions { display: flex; flex-direction: column; gap: 12px; align-items: flex-start; flex-shrink: 0; }
        .cr-email-link { font-size: 0.84rem; color: var(--blue); font-weight: 600; }
        .cr-email-link:hover { text-decoration: underline; }

        /* ── Responsive ── */
        @media (max-width: 1024px) { .cr-jobs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 860px) {
          .cr-open-banner { padding: 32px 28px; flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 600px) {
          .cr-jobs-grid { grid-template-columns: 1fr; }
          .cr-open-banner { padding: 24px; }
        }
      `}</style>
    </>
  );
}
