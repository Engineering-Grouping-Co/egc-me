import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Wrench, Building2, TrendingUp, ShieldCheck, Briefcase, Calendar, Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { CAREERS, SITE } from '../data';

const CULTURE = [
  { 
    title: 'In-House Shop Floor', 
    desc: 'Work directly in our Jeddah workshops. Learn and collaborate with master fabricators and carpenters using advanced CNC machinery.',
    icon: Wrench,
    color: '#2563EB',
    bg: '#EFF6FF'
  },
  { 
    title: 'Giga-Project Scale', 
    desc: 'Contribute to Saudi Arabia\'s landmark Vision 2030 projects. EGC is on the ground fabricating structural frames and premium interiors.',
    icon: Building2,
    color: '#D97706',
    bg: '#FFFBEB'
  },
  { 
    title: 'Career Advancement', 
    desc: 'We support internal growth. Clear training paths from apprentice to team leader, and project coordinators to division heads.',
    icon: TrendingUp,
    color: '#10B981',
    bg: '#ECFDF5'
  },
  { 
    title: 'Safety First Culture', 
    desc: 'Strict HSE standards across all sites and workshops. We prioritize safety through regular training, clean lines, and quality gear.',
    icon: ShieldCheck,
    color: '#475569',
    bg: '#F1F5F9'
  },
];

const DIV_ACCENTS = {
  steel:     { border: '#2563EB', light: '#EFF6FF', mid: '#BFDBFE', text: '#1E40AF', label: 'Steel' },
  wood:      { border: '#D97706', light: '#FFFBEB', mid: '#FDE68A', text: '#92400E', label: 'Wood' },
  leadsheet: { border: '#475569', light: '#F1F5F9', mid: '#CBD5E1', text: '#1E293B', label: 'Lead Sheet' },
  default:   { border: '#3B82F6', light: '#EFF6FF', mid: '#BFDBFE', text: '#1D4ED8', label: 'Corporate' }
};

const JOB_DESCS = {
  'Senior Steel Fabricator': 'Read engineering drawings, supervise assembly processes, and perform heavy-duty fabrication and welding in our Jeddah workshop.',
  'Steel Erection Foreman': 'Manage on-site steel erection teams, enforce safety protocols, and coordinate crane operations and structural alignment.',
  'CNC Machine Operator': 'Operate and program CNC plasma cutters, hydraulic drills, and band saws. Maintain precise tolerances for structural steel.',
  'Site Supervisor — Joinery': 'Oversee the installation of premium architectural joinery and casework on commercial and hospitality fit-out sites.',
  'Joinery Shop Manager': 'Direct operations at our wood workshop. Allocate materials, schedule craftsman labor, and maintain finishing quality.',
  'Lead Sheet Technician': 'Install code-compliant lead sheet roofing, step flashings, and architectural cladding for luxury residential and heritage builds.',
  'HSE Officer': 'Monitor workshop and site compliance, run daily toolbox talks, audit equipment safety, and report incidents to management.',
  'Procurement Specialist': 'Liaise with approved suppliers, evaluate material bids, negotiate terms, and secure logistical delivery to our Jeddah facility.',
  'Business Development Executive': 'Identify bid opportunities, establish relationships with Tier-1 main contractors, and coordinate pre-qualification files.',
  'Project Engineer': 'Manage structural or joinery engineering packages, coordinate shop drawings, and verify structural calculations.',
  'QA/QC Inspector': 'Perform visual and non-destructive welds testing, verify joinery tolerances, and document compliance for client handovers.',
  'Finance & Admin Officer': 'Handle local commercial administration, invoicing reconciliations, supplier records, and standard payroll tasks.'
};

const DIV_FILTERS = ['All', 'Steel', 'Wood', 'Lead Sheet', 'Corporate & Support'];

function getDivisionKey(dept) {
  const d = dept.toLowerCase();
  if (d.includes('steel')) return 'steel';
  if (d.includes('wood')) return 'wood';
  if (d.includes('lead')) return 'leadsheet';
  return 'default';
}

function matchesFilter(career, filter) {
  if (filter === 'All') return true;
  const dept = career.dept.toLowerCase();
  if (filter === 'Steel') return dept.includes('steel');
  if (filter === 'Wood') return dept.includes('wood');
  if (filter === 'Lead Sheet') return dept.includes('lead');
  if (filter === 'Corporate & Support') {
    return !dept.includes('manufacturing') && !dept.includes('steel') && !dept.includes('wood') && !dept.includes('lead');
  }
  return false;
}

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = CAREERS.filter(c => matchesFilter(c, activeFilter));

  const handleScrollToJobs = (e) => {
    e.preventDefault();
    const el = document.getElementById('openings');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <div style={{ background: 'var(--blue-light)', paddingTop: 20 }}>
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link><span>/</span><span>Careers</span>
          </nav>
        </div>
      </div>

      {/* ── STUNNING HERO SECTION ── */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-grid">
            <FadeIn className="careers-hero-content">
              <p className="overline">Work with EGC</p>
              <h1 className="headline-large" style={{ marginBottom: 16 }}>
                Build your future with the craftsmanship leader.
              </h1>
              <p className="body-lg text-muted" style={{ marginBottom: 28 }}>
                Join an elite engineering and specialty contracting team. EGC offers fully in-house 
                fabrication and field operations across structural steel, custom joinery, and lead sheet works. 
                Shape your career on the Kingdom's most ambitious Vision 2030 projects.
              </p>
              <div className="btn-group" style={{ marginTop: 0 }}>
                <a href="#openings" onClick={handleScrollToJobs} className="btn btn-primary btn-lg">
                  Explore Openings <ArrowRight size={16} />
                </a>
                <Link to="/about" className="btn btn-secondary btn-lg">
                  Our Values
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={2} className="careers-hero-img-col">
              <div className="careers-hero-image-wrap">
                <img 
                  src="/careers_hero.png" 
                  alt="EGC Specialty Contracting Divisions: Steel Fabrication, Wood Joinery, Lead Sheet Roofing" 
                  className="careers-hero-image"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CULTURE / BENEFITS ── */}
      <section className="section section-gray">
        <div className="container">
          <FadeIn className="section-header center">
            <p className="overline">Why EGC</p>
            <h2 className="headline-medium">The EGC workplace experience.</h2>
            <p className="section-sub">
              We invest in our people, maintain advanced in-house facilities, and provide a direct path 
              to mastering specialized industrial trades.
            </p>
          </FadeIn>
          <div className="grid-4">
            {CULTURE.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn delay={i + 1} key={c.title}>
                  <div className="card perk-card">
                    <div className="perk-icon-wrap" style={{ background: c.bg, color: c.color }}>
                      <Icon size={22} />
                    </div>
                    <h3 className="headline-sm" style={{ marginBottom: 8 }}>{c.title}</h3>
                    <p className="body-sm" style={{ margin: 0, lineHeight: 1.6 }}>{c.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="section" style={{ paddingBottom: 80 }}>
        <div className="container">
          <FadeIn className="section-header">
            <p className="overline">Open Positions</p>
            <h2 className="headline-medium">Find your next role.</h2>
            <p className="section-sub">
              All roles are based in Jeddah or on-site unless specified. Site positions support active 
              contracts across multiple regions including Riyadh, NEOM, and Western Province.
            </p>
          </FadeIn>

          <FadeIn className="chip-row" style={{ marginBottom: 36 }}>
            {DIV_FILTERS.map(f => (
              <button
                key={f}
                className={`chip${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </FadeIn>

          <div className="jobs-cards-grid">
            {filtered.map((c, i) => {
              const divKey = getDivisionKey(c.dept);
              const accent = DIV_ACCENTS[divKey];
              const desc = JOB_DESCS[c.title] || 'Join EGC and work on custom contracting packages. Assist with drawings, material handling, or site coordinates depending on expertise.';
              
              return (
                <FadeIn delay={(i % 3) + 1} key={c.title}>
                  <div className="job-card" style={{ '--jc-accent': accent.border, '--jc-light': accent.light, '--jc-text': accent.text }}>
                    <div className="job-card-bar" />
                    <div className="job-card-body">
                      <span className="job-card-dept">{accent.label}</span>
                      <h3 className="job-card-title">{c.title}</h3>
                      <p className="job-card-desc">{desc}</p>
                      
                      <div className="job-card-meta">
                        <div className="job-card-meta-item">
                          <MapPin size={13} style={{ color: 'var(--muted)' }} />
                          <span>{c.location}</span>
                        </div>
                        <div className="job-card-meta-item">
                          <Briefcase size={13} style={{ color: 'var(--muted)' }} />
                          <span>{c.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="job-card-footer">
                      <a 
                        href={`mailto:${SITE.email}?subject=Application for ${c.title} — EGC Careers&body=Dear EGC Recruitment Team,%0D%0A%0D%0AI am writing to express my interest in the ${c.title} position at Engineering Grouping Co.%0D%0A%0D%0APlease find attached my CV for your review.%0D%0A%0D%0AThank you.`} 
                        className="btn btn-primary btn-block btn-sm"
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
            <FadeIn className="jobs-empty-state">
              <p>No active openings in this department at the moment. You can submit an open application below.</p>
            </FadeIn>
          )}
        </div>
      </section>

      {/* ── OPEN APPLICATION BANNER ── */}
      <section className="section section-gray" style={{ borderBottom: 'none' }}>
        <div className="container">
          <FadeIn className="open-app-banner">
            <div className="open-app-left">
              <div className="open-app-badge">
                <Mail size={16} />
                <span>General Submissions</span>
              </div>
              <h2 className="headline-medium" style={{ margin: '12px 0' }}>
                Don't see a matching position?
              </h2>
              <p className="body-md text-muted" style={{ maxWidth: 580 }}>
                We are always seeking exceptional welders, joiners, draftsmen, estimators, and project managers. 
                Submit an open application, and we will contact you as soon as a suitable opening emerges.
              </p>
            </div>
            <div className="open-app-right">
              <a 
                href={`mailto:${SITE.email}?subject=Open Application — General Candidate Submission&body=Dear EGC Recruitment Team,%0D%0A%0D%0AI would like to submit an open application for future opportunities at Engineering Grouping Co.%0D%0A%0D%0AMy field of expertise is:%0D%0APreferred Location (Jeddah / NEOM / Site):%0D%0A%0D%0APlease find my CV attached.%0D%0A%0D%0AThank you.`} 
                className="btn btn-primary btn-lg btn-block"
                style={{ justifyContent: 'center' }}
              >
                Send Open Application <Mail size={15} style={{ marginLeft: 6 }} />
              </a>
              <span className="open-app-email-label">
                Or email directly: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <style>{`
        /* Hero Styles */
        .careers-hero {
          padding: 60px 0 80px;
          background: linear-gradient(180deg, var(--blue-light) 0%, #ffffff 100%);
          overflow: hidden;
        }
        .careers-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 56px;
          align-items: center;
        }
        .careers-hero-content {
          max-width: 580px;
        }
        .careers-hero-image-wrap {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 20px 48px rgba(37, 99, 235, 0.12);
          border: 1.5px solid var(--blue-mid);
          background: #fff;
          padding: 10px;
        }
        .careers-hero-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 8px;
          transition: transform 0.4s ease;
        }
        .careers-hero-image-wrap:hover .careers-hero-image {
          transform: scale(1.015);
        }

        /* Perks / Culture Section */
        .perk-card {
          height: 100%;
          padding: 24px;
          background: #fff;
        }
        .perk-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        /* Jobs Grid & Cards */
        .jobs-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .job-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          height: 100%;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .job-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.06);
          border-color: var(--jc-accent);
        }
        .job-card-bar {
          height: 4px;
          background: var(--jc-accent);
          width: 100%;
        }
        .job-card-body {
          padding: 24px 24px 16px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .job-card-dept {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--jc-text);
          background: var(--jc-light);
          padding: 3px 8px;
          border-radius: 4px;
          margin-bottom: 12px;
          width: fit-content;
        }
        .job-card-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 10px;
          line-height: 1.35;
        }
        .job-card-desc {
          font-size: 0.84rem;
          color: var(--muted);
          line-height: 1.6;
          margin: 0 0 18px;
          flex-grow: 1;
        }
        .job-card-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          border-top: 1px solid var(--border);
          padding-top: 14px;
          margin-top: auto;
        }
        .job-card-meta-item {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.76rem;
          color: var(--muted);
          font-weight: 500;
        }
        .job-card-footer {
          padding: 0 24px 24px;
        }

        .jobs-empty-state {
          text-align: center;
          padding: 48px 20px;
          border: 1.5px dashed var(--border);
          border-radius: var(--radius-lg);
          color: var(--muted);
          font-size: 0.95rem;
        }

        /* Open Application Banner */
        .open-app-banner {
          background: #fff;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          padding: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }
        .open-app-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--blue-light);
          color: var(--blue);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .open-app-right {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: center;
          max-width: 320px;
          width: 100%;
        }
        .open-app-email-label {
          font-size: 0.78rem;
          color: var(--muted);
        }
        .open-app-email-label a {
          color: var(--blue);
          font-weight: 600;
        }
        .open-app-email-label a:hover {
          text-decoration: underline;
        }

        /* Responsive Layouts */
        @media (max-width: 1024px) {
          .jobs-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .careers-hero-grid {
            gap: 36px;
          }
        }

        @media (max-width: 860px) {
          .careers-hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 44px;
          }
          .careers-hero-content {
            max-width: 100%;
          }
          .careers-hero-img-col {
            max-width: 500px;
            margin: 0 auto;
          }
          .btn-group {
            justify-content: center;
          }
          .open-app-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 32px;
            gap: 28px;
          }
          .open-app-right {
            max-width: 100%;
            align-items: flex-start;
          }
        }

        @media (max-width: 600px) {
          .jobs-cards-grid {
            grid-template-columns: 1fr;
          }
          .open-app-banner {
            padding: 24px;
          }
          .careers-hero {
            padding: 40px 0 60px;
          }
        }
      `}</style>
    </>
  );
}
