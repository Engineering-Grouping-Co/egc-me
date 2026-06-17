import React, { useState, useEffect, useRef } from "react";
import {
  Menu, X, ArrowRight, ArrowUpRight, ExternalLink, Phone, Mail, MapPin,
  Building2, Briefcase, Send, ChevronRight, ShieldCheck, Globe, ChevronDown,
  MapPinned, Users, Factory, HardHat, FileText, BriefcaseBusiness,
} from "lucide-react";

/* ============================================================================
   EGC — ENGINEERING GROUPING CO.
   Specialty contracting & manufacturing — Kingdom of Saudi Arabia
   Landing page · TICC-inspired clean design
   ============================================================================ */

const SUPPLIER_PORTAL_URL = "https://erp.egc-me.com";

const STATS = [
  { n: "150+", l: "Projects Delivered" },
  { n: "18", l: "Years of Operation" },
  { n: "9", l: "Regions Served" },
  { n: "3", l: "Active Divisions" },
];

const DIVISIONS = [
  {
    id: "steel",
    num: "Division 01",
    label: "Steel",
    tag: "GRADE A36–A572 · CNC CUT · SHOP WELDED",
    desc: "Structural steel, plate work, and architectural metalwork — designed, cut, welded, and erected by our own crews.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M6 6H34V14H22V26H34V34H6V26H18V14H6V6Z" stroke="#2563EB" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "wood",
    num: "Division 02",
    label: "Wood",
    tag: "JOINERY · MILLWORK · FIT-OUT",
    desc: "Architectural woodwork and joinery for interiors, hospitality fit-outs, and custom millwork, built to drawing in our timber shop.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="16" width="32" height="9" rx="1" stroke="#2563EB" strokeWidth="2" />
        <path d="M8 20c2-1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0 4-1 5 .5" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="4" y="27" width="32" height="9" rx="1" stroke="#2563EB" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "leadsheet",
    num: "Division 03",
    label: "Lead Sheet",
    badge: "NEW",
    tag: "ROOFING · FLASHING · WATERPROOFING",
    desc: "EGC is expanding into lead sheet works for roofing, flashing, and waterproofing — bringing the same in-house standard to a new material.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="24" width="32" height="5" rx="1" stroke="#2563EB" strokeWidth="2" />
        <rect x="4" y="17" width="32" height="5" rx="1" stroke="#2563EB" strokeWidth="2" />
        <rect x="4" y="10" width="32" height="5" rx="1" stroke="#2563EB" strokeWidth="2" />
      </svg>
    ),
  },
];

const TEAM = [
  { id: 1, name: "Name Surname", role: "Managing Director", badge: "EGC-0001", dept: "Leadership" },
  { id: 2, name: "Name Surname", role: "Operations Director", badge: "EGC-0002", dept: "Operations" },
  { id: 3, name: "Name Surname", role: "Head of Steel Fabrication", badge: "EGC-0003", dept: "Manufacturing" },
  { id: 4, name: "Name Surname", role: "Head of Timber & Joinery", badge: "EGC-0004", dept: "Manufacturing" },
  { id: 5, name: "Name Surname", role: "Lead Sheet Division Lead", badge: "EGC-0005", dept: "Manufacturing" },
  { id: 6, name: "Name Surname", role: "Business Development Manager", badge: "EGC-0006", dept: "Commercial" },
  { id: 7, name: "Name Surname", role: "HSE Manager", badge: "EGC-0007", dept: "Health & Safety" },
  { id: 8, name: "Name Surname", role: "Procurement Lead", badge: "EGC-0008", dept: "Procurement" },
];

const PROJECTS = [
  { id: 1, city: "Riyadh", code: "RUH", x: 380.6, y: 267.5, name: "Government Administrative Complex", sector: "Government", division: "steel", status: "Completed", year: "2023", blurb: "Structural steel package for a multi-building government administrative complex, including erection and finish coating." },
  { id: 2, city: "Jeddah", code: "JED", x: 181.4, y: 361.7, name: "Coastal Retail & Hospitality Fit-Out", sector: "Private", division: "wood", status: "Completed", year: "2022", blurb: "Architectural joinery and custom millwork for a retail and hospitality development on the Red Sea coast." },
  { id: 3, city: "Dammam", code: "DMM", x: 471.9, y: 217.6, name: "Industrial Storage Facility", sector: "Private", division: "steel", status: "Completed", year: "2024", blurb: "Design-assist structural steel fabrication and erection for a high-bay industrial storage facility." },
  { id: 4, city: "Jubail", code: "JUB", x: 459.1, y: 200.6, name: "Petrochemical Facility Expansion", sector: "Government", division: "steel", status: "Ongoing", year: "2025", blurb: "Structural and piping-support steelwork for a phased expansion at an industrial city facility." },
  { id: 5, city: "Madinah", code: "MED", x: 191.4, y: 273.0, name: "Hospitality Interior Fit-Out", sector: "Private", division: "wood", status: "Completed", year: "2023", blurb: "Custom joinery, panelling, and millwork for guest rooms and public areas of a hospitality project." },
  { id: 6, city: "NEOM", code: "NEOM", x: 74.2, y: 172.5, name: "Giga-Project Site Infrastructure", sector: "Government", division: "leadsheet", status: "Mobilizing", year: "2026", blurb: "Early-stage roofing, flashing, and waterproofing scope for site infrastructure — EGC's first lead sheet mobilization." },
  { id: 7, city: "Abha", code: "AHA", x: 269.6, y: 457.2, name: "Mountain Resort Development", sector: "Private", division: "wood", status: "Ongoing", year: "2025", blurb: "Timber structures and exterior woodwork for a resort development in the Aseer highlands." },
  { id: 8, city: "Hail", code: "HAS", x: 247.9, y: 185.8, name: "Agricultural Logistics Hub", sector: "Government", division: "steel", status: "Completed", year: "2022", blurb: "Pre-engineered and structural steel for a regional agricultural logistics and cold-storage hub." },
  { id: 9, city: "Yanbu", code: "YNB", x: 151.3, y: 285.7, name: "Industrial City Cladding Package", sector: "Private", division: "leadsheet", status: "Ongoing", year: "2026", blurb: "Lead sheet cladding and waterproofing package for a facility upgrade in the Yanbu Industrial City." },
];

const KSA_PATH = "M 276.9 511.8 L 273.4 499.3 L 265.4 490.5 L 263.4 478.8 L 249.6 468.4 L 235.4 443.9 L 227.9 420.1 L 209.5 400.0 L 197.6 395.2 L 180.0 367.4 L 176.9 347.1 L 178.0 329.8 L 162.8 297.4 L 150.3 286.0 L 135.9 280.0 L 127.2 263.2 L 128.6 256.6 L 121.2 241.5 L 113.4 235.0 L 103.0 213.3 L 86.8 189.7 L 73.3 169.7 L 60.0 169.8 L 64.1 153.8 L 65.3 143.5 L 68.6 131.9 L 98.2 136.5 L 109.8 127.5 L 116.1 117.0 L 136.4 113.0 L 140.8 103.2 L 149.6 98.3 L 123.1 69.1 L 176.4 54.4 L 181.5 50.0 L 213.6 57.9 L 253.2 78.4 L 328.3 137.1 L 377.8 139.4 L 401.5 142.2 L 408.1 156.1 L 427.0 155.4 L 437.4 180.6 L 450.5 187.2 L 455.0 197.5 L 473.2 209.8 L 474.8 221.8 L 472.2 231.5 L 475.5 241.4 L 483.2 249.5 L 486.7 259.1 L 490.7 266.3 L 498.8 272.1 L 506.1 270.0 L 511.2 281.1 L 512.2 287.9 L 522.4 317.5 L 602.4 332.2 L 607.8 326.0 L 620.0 346.7 L 602.3 405.1 L 522.4 434.3 L 445.6 445.5 L 420.8 458.6 L 401.7 489.3 L 389.3 494.2 L 382.6 484.4 L 372.4 485.9 L 346.7 483.0 L 341.8 480.1 L 311.1 480.7 L 303.8 483.4 L 292.9 475.8 L 285.9 490.1 L 288.6 502.4 L 276.9 511.8 Z";

const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "steel", label: "Steel" },
  { id: "wood", label: "Wood" },
  { id: "leadsheet", label: "Lead Sheet" },
];

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#divisions", label: "Divisions" },
  { href: "#projects", label: "Projects" },
  { href: "#careers", label: "Careers" },
  { href: "#suppliers", label: "Suppliers" },
  { href: "#contact", label: "Contact Us" },
];

const CAREERS = [
  { title: "Senior Steel Fabricator", dept: "Manufacturing — Steel", location: "Riyadh", type: "Full-time" },
  { title: "Site Supervisor — Joinery", dept: "Manufacturing — Wood", location: "Jeddah", type: "Full-time" },
  { title: "Lead Sheet Technician", dept: "Manufacturing — Lead Sheet", location: "NEOM", type: "Full-time" },
  { title: "HSE Officer", dept: "Health & Safety", location: "Riyadh", type: "Full-time" },
  { title: "Procurement Specialist", dept: "Procurement", location: "Riyadh", type: "Full-time" },
  { title: "Business Development Executive", dept: "Commercial", location: "Riyadh", type: "Full-time" },
];

const SUPPLIER_STEPS = [
  { n: "01", t: "Register", d: "Create a supplier account on the EGC ERP portal." },
  { n: "02", t: "Submit Documents", d: "Upload your CR, certifications, and product or service catalogue." },
  { n: "03", t: "Prequalification Review", d: "Our procurement team reviews and verifies your submission." },
  { n: "04", t: "Approved Vendor", d: "Get listed and start receiving RFQs from active projects." },
];

/* ---------------------------------------------------------------------------
   FADE-IN HOOK
--------------------------------------------------------------------------- */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "", tag: Tag = "div" }) {
  const ref = useFadeIn();
  return <Tag ref={ref} className={`fade-in ${className}`}>{children}</Tag>;
}

/* ---------------------------------------------------------------------------
   HEADER
--------------------------------------------------------------------------- */
function Header({ navOpen, setNavOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <div className="top-bar">
        <div className="top-bar-inner">
          <div className="top-bar-left">
            <a href="tel:+966110000000" className="top-bar-link">
              <Phone size={13} strokeWidth={2} /> +966 11 000 0000
            </a>
            <a href="mailto:info@egc-me.com" className="top-bar-link">
              <Mail size={13} strokeWidth={2} /> info@egc-me.com
            </a>
          </div>
          <div className="top-bar-right">
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="top-bar-link top-bar-portal">
              Supplier Portal <ArrowUpRight size={12} />
            </a>
            <span className="top-bar-lang">EN / عربي</span>
          </div>
        </div>
      </div>

      <nav className="nav">
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            <span className="logo-egc">EGC</span>
            <span className="logo-sub">ENGINEERING GROUPING CO.</span>
          </a>

          <ul className="nav-links">
            {NAV_LINKS.map((l) => (
              <li key={l.href}><a href={l.href} className={l.label === "Contact Us" ? "nav-contact" : ""}>{l.label}</a></li>
            ))}
          </ul>

          <button
            className="nav-toggle"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {navOpen && (
        <div className="nav-mobile-panel">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setNavOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="nav-mobile-link nav-mobile-portal" onClick={() => setNavOpen(false)}>
            Supplier Portal <ArrowUpRight size={13} />
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------------------------------------------------------------------------
   HERO
--------------------------------------------------------------------------- */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <FadeIn className="hero-label-wrap">
          <p className="label">Since [YEAR] in Riyadh, Kingdom of Saudi Arabia</p>
        </FadeIn>
        <FadeIn>
          <h1 className="hero-headline">Steel, Wood &amp; Lead Sheet —<br />Designed, Fabricated, Delivered.</h1>
        </FadeIn>
        <FadeIn>
          <p className="hero-sub">
            EGC designs, fabricates, and installs structural steel, timber joinery, and lead sheet works
            for government and private sector projects across the Kingdom — from first drawing to final handover.
          </p>
        </FadeIn>
        <FadeIn>
          <div className="btn-group">
            <a href="#divisions" className="btn btn-primary">Explore Divisions</a>
            <a href="#about" className="btn btn-secondary">About EGC</a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   STATS
--------------------------------------------------------------------------- */
function Stats() {
  return (
    <section className="stats-section">
      <div className="container">
        <FadeIn className="stats-grid">
          {STATS.map((s) => (
            <div className="stat-item" key={s.l}>
              <div className="stat-num">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   ABOUT
--------------------------------------------------------------------------- */
function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="feature-grid">
          <FadeIn className="feature-text">
            <p className="label">About EGC</p>
            <h2 className="headline-medium">Built for the Kingdom's most demanding projects.</h2>
            <p className="body-text">
              Engineering Grouping Co. (EGC) is a Riyadh-based specialty contracting and manufacturing company.
              We run our own fabrication shops for steel, timber, and lead sheet — every project moves from design
              to site under one roof, one schedule, and one quality standard.
            </p>
            <p className="body-text">
              From government infrastructure and industrial facilities to hospitality fit-outs and giga-project
              packages, EGC is the contractor that builds what others only draw.
            </p>
            <a href="#contact" className="btn btn-secondary">Start a conversation</a>
          </FadeIn>
          <FadeIn className="feature-visual">
            <div className="feature-photo-placeholder">
              <span>Company photo / site image</span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   DIVISIONS
--------------------------------------------------------------------------- */
function Divisions() {
  return (
    <section className="section section-gray" id="divisions">
      <div className="container">
        <FadeIn className="section-header">
          <p className="label">Our Expertise</p>
          <h2 className="headline-medium">Three materials.<br />One standard.</h2>
          <p className="section-sub">
            EGC runs its own fabrication shops — every project moves from design to site under
            one roof, one schedule, and one quality standard.
          </p>
        </FadeIn>

        <FadeIn className="divisions-grid">
          {DIVISIONS.map((d) => (
            <div className={`division-card${d.id === "leadsheet" ? " division-card-accent" : ""}`} key={d.id}>
              <div className="division-card-top">
                <div className="division-icon">{d.icon}</div>
                {d.badge && <span className="division-badge">{d.badge}</span>}
              </div>
              <p className="label">{d.num}</p>
              <h3 className="headline-small">{d.label}</h3>
              <p className="tag-mono">{d.tag}</p>
              <p className="body-text">{d.desc}</p>
            </div>
          ))}
        </FadeIn>

        <FadeIn className="sector-strip">
          <div className="sector-item">
            <div className="sector-icon"><Building2 size={22} strokeWidth={1.8} /></div>
            <div>
              <h4>Government &amp; Semi-Government</h4>
              <p>Long-standing contractor of record on public infrastructure and facilities projects.</p>
            </div>
          </div>
          <div className="sector-divider" />
          <div className="sector-item">
            <div className="sector-icon"><Briefcase size={22} strokeWidth={1.8} /></div>
            <div>
              <h4>Private Sector &amp; Industrial</h4>
              <p>Trusted by developers, industrial operators, and EPC contractors across the Kingdom.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   PROJECTS
--------------------------------------------------------------------------- */
function Projects() {
  const [filter, setFilter] = useState("all");
  const [activePin, setActivePin] = useState(null);

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.division === filter);

  return (
    <section className="section" id="projects">
      <div className="container">
        <FadeIn className="section-header">
          <p className="label">Where We Build</p>
          <h2 className="headline-medium">Projects across the Kingdom</h2>
          <p className="section-sub">
            A schematic view of where EGC is on the ground today. Select a marker for project details,
            or browse the project cards below.
          </p>
        </FadeIn>

        <FadeIn className="filter-row" role="group" aria-label="Filter by division">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f.id}
              className={`chip${filter === f.id ? " chip-active" : ""}`}
              onClick={() => { setFilter(f.id); setActivePin(null); }}
            >
              {f.label}
            </button>
          ))}
        </FadeIn>

        {/* KSA Map */}
        <FadeIn className="map-frame">
          <svg
            viewBox="0 0 680 562"
            className="ksa-map"
            role="img"
            aria-label="Map of project locations across Saudi Arabia"
          >
            <defs>
              <pattern id="mapDots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="#BFDBFE" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="680" height="562" fill="url(#mapDots)" />
            <path d={KSA_PATH} fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />

            {visible.map((p) => {
              const isActive = activePin === p.id;
              return (
                <g
                  key={p.id}
                  transform={`translate(${p.x} ${p.y})`}
                  className={`map-pin${isActive ? " map-pin-active" : ""}`}
                  onClick={() => setActivePin(isActive ? null : p.id)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${p.city} — ${p.name}`}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActivePin(isActive ? null : p.id); }}
                >
                  {isActive && <circle r="16" className="pin-ring" />}
                  <circle r="6" className="pin-dot" />
                  <text x="10" y="-8" className="pin-label">{p.code}</text>
                </g>
              );
            })}
          </svg>
          <p className="map-caption">KINGDOM OF SAUDI ARABIA — PROJECT LOCATIONS (SCHEMATIC, NOT TO SCALE)</p>
        </FadeIn>

        {/* Project Cards Grid */}
        <FadeIn className="projects-grid">
          {visible.map((p) => (
            <div
              key={p.id}
              className={`project-card${activePin === p.id ? " project-card-active" : ""}`}
              onClick={() => setActivePin(activePin === p.id ? null : p.id)}
            >
              <div className="project-card-head">
                <span className="project-city">{p.city}</span>
                <span className={`status-pill status-${p.status.toLowerCase()}`}>{p.status}</span>
              </div>
              <h3 className="project-name">{p.name}</h3>
              <div className="project-meta-row">
                <span>{p.sector}</span>
                <span className="meta-dot">·</span>
                <span>{DIVISIONS.find((d) => d.id === p.division)?.label}</span>
                <span className="meta-dot">·</span>
                <span>{p.year}</span>
              </div>
              <p className="project-blurb">{p.blurb}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   CAREERS
--------------------------------------------------------------------------- */
function Careers() {
  return (
    <section className="section section-gray" id="careers">
      <div className="container">
        <FadeIn className="section-header">
          <p className="label">Work With Us</p>
          <h2 className="headline-medium">Build your career at EGC.</h2>
          <p className="section-sub">
            We are always looking for skilled fabricators, site supervisors, engineers, and support
            professionals to join our growing team across all three divisions.
          </p>
        </FadeIn>

        <FadeIn className="careers-grid">
          {CAREERS.map((c, i) => (
            <div className="career-card" key={i}>
              <div className="career-card-top">
                <span className="career-dept">{c.dept}</span>
                <span className="career-type">{c.type}</span>
              </div>
              <h3 className="career-title">{c.title}</h3>
              <div className="career-meta">
                <MapPin size={13} /> {c.location}
              </div>
              <a href="#contact" className="career-link">
                Apply now <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </FadeIn>

        <FadeIn className="careers-cta">
          <p>Don't see a suitable role? Send us an open application.</p>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   TEAM
--------------------------------------------------------------------------- */
function Team() {
  return (
    <section className="section" id="team">
      <div className="container">
        <FadeIn className="section-header">
          <p className="label">The Team</p>
          <h2 className="headline-medium">The people behind the build.</h2>
          <p className="section-sub">
            Leadership and division heads driving EGC's projects from tender to handover.
          </p>
        </FadeIn>

        <FadeIn className="team-grid">
          {TEAM.map((m) => {
            const initials = m.name.split(" ").map((p) => p[0]).join("").slice(0, 2);
            return (
              <div className="team-card" key={m.id}>
                <div className="team-card-top">
                  <span className="team-badge-id">{m.badge}</span>
                  <ShieldCheck size={14} className="team-verified" />
                </div>
                <div className="team-avatar">{initials}</div>
                <h4 className="team-name">{m.name}</h4>
                <p className="team-role">{m.role}</p>
                <span className="team-dept-pill">{m.dept}</span>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   SUPPLIERS
--------------------------------------------------------------------------- */
function Suppliers() {
  return (
    <section className="section section-gray" id="suppliers">
      <div className="container">
        <div className="suppliers-layout">
          <div className="suppliers-left">
            <FadeIn>
              <p className="label">Supplier Network</p>
              <h2 className="headline-medium">Become a Registered EGC Supplier.</h2>
              <p className="body-text">
                EGC sources steel, timber, lead sheet, and site materials through a single vendor network
                managed on our ERP platform. Register once, and you're visible to every division
                procuring for active projects.
              </p>
            </FadeIn>
            <FadeIn tag="ol" className="steps-list">
              {SUPPLIER_STEPS.map((s) => (
                <li className="step-item" key={s.n}>
                  <span className="step-num">{s.n}</span>
                  <div className="step-body">
                    <strong>{s.t}</strong>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </FadeIn>
          </div>

          <FadeIn className="suppliers-right">
            <div className="supplier-portal-card">
              <p className="label" style={{ color: "#93C5FD" }}>EGC ERP — SUPPLIER PORTAL</p>
              <h3>Register or sign in</h3>
              <p>Manage your vendor profile, submit documents, and respond to RFQs directly on the EGC ERP system.</p>
              <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="btn btn-white btn-block">
                Register on the Supplier Portal <ExternalLink size={15} />
              </a>
              <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="supplier-signin-link">
                Already registered? Sign in here <ArrowRight size={13} />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   CONTACT
--------------------------------------------------------------------------- */
function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", sector: "Government", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (f) => (e) => setForm((v) => ({ ...v, [f]: e.target.value }));

  return (
    <section className="section" id="contact">
      <div className="container">
        <FadeIn className="section-header">
          <p className="label">Get In Touch</p>
          <h2 className="headline-medium">Tell us about your project.</h2>
          <p className="section-sub">Share a few details and our business development team will follow up within 1–2 business days.</p>
        </FadeIn>

        <FadeIn className="contact-layout">
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <ShieldCheck size={32} className="form-success-icon" />
                <h3>Message received.</h3>
                <p>Our team will be in touch within 1–2 business days.</p>
                <button className="btn btn-secondary" onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", sector: "Government", message: "" }); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="form-row">
                  <label><span>Full name *</span><input required value={form.name} onChange={update("name")} type="text" placeholder="Your name" /></label>
                  <label><span>Company</span><input value={form.company} onChange={update("company")} type="text" placeholder="Company name" /></label>
                </div>
                <div className="form-row">
                  <label><span>Email *</span><input required value={form.email} onChange={update("email")} type="email" placeholder="you@company.com" /></label>
                  <label><span>Phone</span><input value={form.phone} onChange={update("phone")} type="tel" placeholder="+966 5x xxx xxxx" /></label>
                </div>
                <label><span>Sector</span>
                  <select value={form.sector} onChange={update("sector")}>
                    <option>Government</option><option>Private</option><option>Other</option>
                  </select>
                </label>
                <label><span>Message *</span>
                  <textarea required value={form.message} onChange={update("message")} rows={5} placeholder="Tell us about your project — scope, location, and timeline." />
                </label>
                <button type="submit" className="btn btn-primary btn-block">Send message <Send size={15} /></button>
              </form>
            )}
          </div>

          <div className="office-info-card">
            <p className="label">HEAD OFFICE</p>
            <div className="office-row"><MapPin size={15} /><span>[Street], [District], Riyadh, Kingdom of Saudi Arabia</span></div>
            <div className="office-row"><Phone size={15} /><span>+966 11 000 0000</span></div>
            <div className="office-row"><Mail size={15} /><span>info@egc-me.com</span></div>
            <div className="office-row"><Globe size={15} /><span>Sun – Thu, 8:00 AM – 5:00 PM</span></div>
            <hr className="office-divider" />
            <p className="label">REGISTERED SUPPLIER?</p>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="office-portal-link">
              Open the Supplier Portal <ArrowUpRight size={14} />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------------------
   FOOTER
--------------------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="footer-logo">
              <span className="logo-egc">EGC</span>
              <span className="logo-sub logo-sub-light">ENGINEERING GROUPING CO.</span>
            </a>
            <p className="footer-tagline">[Street], [District]<br />Riyadh, Kingdom of Saudi Arabia</p>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#about">About Us</a>
            <a href="#divisions">Divisions</a>
            <a href="#projects">Projects</a>
            <a href="#team">Team</a>
          </div>
          <div className="footer-col">
            <h5>Work With Us</h5>
            <a href="#careers">Careers</a>
            <a href="#suppliers">Suppliers</a>
            <a href="#contact">Contact Us</a>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <a href="tel:+966110000000">+966 11 000 0000</a>
            <a href="mailto:info@egc-me.com">info@egc-me.com</a>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="footer-linkedin-link">
              Supplier Portal Login
            </a>
            <a
              href="https://www.linkedin.com/company/egc-me/"
              target="_blank"
              rel="noreferrer"
              className="footer-linkedin"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.91 1.64-1.86 3.37-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V9H7.1v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © 2026 Engineering Grouping Co. (EGC). All rights reserved.
            &nbsp;|&nbsp;
            <a href="#privacy-policy">Privacy Policy</a>
            &nbsp;|&nbsp;
            <a href="#terms">Terms &amp; Conditions</a>
          </p>
          <p>CR No. [XXXXXXXXXX]</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------------------------------------------------------------
   APP
--------------------------------------------------------------------------- */
export default function EGCWebsite() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="egc-root">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Divisions />
        <Projects />
        <Careers />
        <Team />
        <Suppliers />
        <Contact />
      </main>
      <Footer />
      <style>{CSS}</style>
    </div>
  );
}

/* ---------------------------------------------------------------------------
   CSS — TICC-Inspired Design System
--------------------------------------------------------------------------- */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,400&family=Inter:wght@300;400;500;600;700&display=swap');

/* ── TOKENS ── */
.egc-root {
  --blue:       #2563EB;
  --blue-light: #EFF6FF;
  --blue-mid:   #BFDBFE;
  --dark:       #111111;
  --body:       #374151;
  --muted:      #6B7280;
  --border:     #E5E7EB;
  --gray-bg:    #F9FAFB;
  --white:      #FFFFFF;

  --font-display: 'DM Sans', sans-serif;
  --font-body:    'Inter', sans-serif;

  background: var(--white);
  color: var(--body);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}
.egc-root * { box-sizing: border-box; margin: 0; padding: 0; }
.egc-root a { color: inherit; text-decoration: none; }
.egc-root button { font-family: inherit; cursor: pointer; border: none; background: none; }
.egc-root input, .egc-root select, .egc-root textarea { font-family: inherit; }
.egc-root section[id] { scroll-margin-top: 90px; }
.egc-root ul { list-style: none; }
.egc-root ol { list-style: none; }
.egc-root :focus-visible { outline: 2px solid var(--blue); outline-offset: 3px; border-radius: 3px; }

/* ── FADE-IN ── */
.fade-in { opacity: 0; transform: translateY(22px); transition: opacity 0.65s ease, transform 0.65s ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }

/* ── LAYOUT ── */
.container { max-width: 1160px; margin: 0 auto; padding: 0 24px; }
.section { padding: 88px 0; }
.section-gray { background: var(--gray-bg); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

/* ── TYPOGRAPHY ── */
.headline-large {
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--dark);
  letter-spacing: -0.02em;
}
.headline-medium {
  font-family: var(--font-display);
  font-size: clamp(1.7rem, 3vw, 2.4rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--dark);
  letter-spacing: -0.01em;
}
.headline-small {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--dark);
}
.label {
  display: inline-block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 12px;
}
.body-text { color: var(--body); font-size: 1rem; line-height: 1.7; margin-bottom: 18px; }
.tag-mono { font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.08em; color: var(--blue); text-transform: uppercase; margin: 6px 0 12px; font-weight: 600; }
.section-sub { color: var(--muted); font-size: 1.05rem; margin-top: 10px; max-width: 580px; }

/* ── SECTION HEADER ── */
.section-header { margin-bottom: 52px; }

/* ── BUTTONS ── */
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 22px; border-radius: 6px; font-weight: 600; font-size: 0.92rem;
  border: 1.5px solid transparent;
  transition: background 0.2s, color 0.2s, border-color 0.2s, transform 0.15s;
  white-space: nowrap; cursor: pointer;
}
.btn-primary { background: var(--blue); color: var(--white); }
.btn-primary:hover { background: #1D4ED8; transform: translateY(-1px); }
.btn-secondary { background: transparent; color: var(--dark); border-color: var(--border); }
.btn-secondary:hover { border-color: var(--blue); color: var(--blue); }
.btn-white { background: var(--white); color: var(--blue); }
.btn-white:hover { background: #F0F9FF; }
.btn-block { width: 100%; justify-content: center; }
.btn-group { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 28px; }

/* ── CHIP FILTERS ── */
.chip {
  padding: 8px 18px; border-radius: 999px; border: 1.5px solid var(--border);
  background: var(--white); color: var(--muted); font-size: 0.84rem; font-weight: 500;
  transition: all 0.18s;
}
.chip:hover { border-color: var(--blue); color: var(--blue); }
.chip-active { background: var(--blue); color: var(--white); border-color: var(--blue); }

/* ── TOP BAR ── */
.top-bar { background: var(--blue-light); border-bottom: 1px solid var(--blue-mid); padding: 7px 0; font-size: 0.78rem; }
.top-bar-inner { max-width: 1160px; margin: 0 auto; padding: 0 24px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.top-bar-left, .top-bar-right { display: flex; align-items: center; gap: 20px; }
.top-bar-link { display: inline-flex; align-items: center; gap: 5px; color: #1E3A8A; font-weight: 500; transition: color 0.15s; }
.top-bar-link:hover { color: var(--blue); }
.top-bar-portal { font-weight: 700; }
.top-bar-lang { color: #1E3A8A; font-weight: 500; opacity: 0.7; }

/* ── NAV ── */
.site-header { position: sticky; top: 0; z-index: 100; background: var(--white); transition: box-shadow 0.25s; }
.site-header.scrolled { box-shadow: 0 2px 16px rgba(0,0,0,0.08); }
.nav { border-bottom: 1px solid var(--border); background: var(--white); }
.nav-inner { max-width: 1160px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.nav-logo { display: flex; align-items: center; gap: 10px; }
.logo-egc { font-family: var(--font-display); font-size: 1.6rem; font-weight: 800; color: var(--blue); letter-spacing: 0.04em; line-height: 1; }
.logo-sub { font-family: var(--font-body); font-size: 0.52rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); text-transform: uppercase; line-height: 1; }
.logo-sub-light { color: rgba(255,255,255,0.6); }

.nav-links { display: flex; align-items: center; gap: 28px; }
.nav-links a { font-size: 0.9rem; font-weight: 500; color: var(--body); transition: color 0.15s; }
.nav-links a:hover { color: var(--blue); }
.nav-links a.nav-contact {
  background: var(--blue); color: var(--white);
  padding: 8px 16px; border-radius: 6px; font-weight: 600;
  transition: background 0.2s;
}
.nav-links a.nav-contact:hover { background: #1D4ED8; }
.nav-toggle { display: none; color: var(--dark); padding: 4px; }

.nav-mobile-panel {
  display: flex; flex-direction: column; padding: 12px 24px 24px;
  border-bottom: 1px solid var(--border); gap: 2px; background: var(--white);
}
.nav-mobile-link { padding: 12px 0; font-weight: 500; border-bottom: 1px solid var(--border); color: var(--dark); font-size: 0.95rem; }
.nav-mobile-link:last-child { border-bottom: none; }
.nav-mobile-portal { color: var(--blue); display: flex; align-items: center; gap: 6px; }

@media (max-width: 900px) {
  .nav-links { display: none; }
  .nav-toggle { display: flex; }
}
@media (max-width: 600px) {
  .top-bar-left { display: none; }
}

/* ── HERO ── */
.hero {
  padding: 100px 0 72px;
  background: linear-gradient(180deg, var(--blue-light) 0%, var(--white) 100%);
  border-bottom: 1px solid var(--blue-mid);
  text-align: center;
}
.hero-label-wrap { margin-bottom: 16px; }
.hero-headline {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.07;
  color: var(--dark);
  letter-spacing: -0.02em;
  margin-bottom: 20px;
}
.hero-sub { font-size: 1.1rem; color: var(--muted); max-width: 600px; margin: 0 auto 28px; line-height: 1.7; }

/* ── STATS ── */
.stats-section { background: var(--blue); padding: 56px 0; }
.stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
.stat-item { text-align: center; padding: 24px; border-right: 1px solid rgba(255,255,255,0.15); }
.stat-item:last-child { border-right: none; }
.stat-num { font-family: var(--font-display); font-size: 2.8rem; font-weight: 800; color: var(--white); line-height: 1; margin-bottom: 6px; }
.stat-label { font-size: 0.82rem; font-weight: 500; color: rgba(255,255,255,0.7); letter-spacing: 0.04em; }
@media (max-width: 700px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.15); }
  .stat-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.15); }
  .stat-item:nth-last-child(-n+2) { border-bottom: none; }
}

/* ── ABOUT FEATURE ── */
.feature-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.feature-text { display: flex; flex-direction: column; align-items: flex-start; gap: 4px; }
.feature-text .body-text:last-of-type { margin-bottom: 24px; }
.feature-visual { }
.feature-photo-placeholder {
  width: 100%; aspect-ratio: 16/10;
  background: var(--gray-bg); border: 1px solid var(--border); border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--muted); font-size: 0.85rem; font-weight: 500;
}
@media (max-width: 860px) {
  .feature-grid { grid-template-columns: 1fr; gap: 36px; }
}

/* ── DIVISIONS ── */
.divisions-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 48px; }
.division-card {
  background: var(--white); border: 1.5px solid var(--border); border-radius: 10px;
  padding: 30px 26px;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
}
.division-card:hover { transform: translateY(-3px); box-shadow: 0 8px 32px rgba(37,99,235,0.1); border-color: var(--blue-mid); }
.division-card-accent { border-top: 3px solid var(--blue); }
.division-card-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
.division-icon { }
.division-badge {
  font-size: 0.64rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
  background: var(--blue); color: var(--white); padding: 3px 8px; border-radius: 4px;
}
.division-card .headline-small { margin: 4px 0 8px; }
.division-card .body-text { margin: 0; color: var(--muted); font-size: 0.93rem; }

.sector-strip { display: flex; gap: 40px; padding: 32px 36px; background: var(--gray-bg); border: 1px solid var(--border); border-radius: 10px; align-items: center; }
.sector-item { display: flex; gap: 18px; align-items: flex-start; flex: 1; }
.sector-icon { width: 44px; height: 44px; border-radius: 8px; background: var(--blue-light); border: 1px solid var(--blue-mid); display: flex; align-items: center; justify-content: center; color: var(--blue); flex-shrink: 0; }
.sector-item h4 { font-family: var(--font-display); font-size: 1rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
.sector-item p { font-size: 0.9rem; color: var(--muted); margin: 0; }
.sector-divider { width: 1px; background: var(--border); align-self: stretch; flex-shrink: 0; }

@media (max-width: 860px) {
  .divisions-grid { grid-template-columns: 1fr; }
  .sector-strip { flex-direction: column; gap: 24px; }
  .sector-divider { display: none; }
}

/* ── PROJECTS ── */
.filter-row { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 28px; }

.map-frame { background: var(--white); border: 1.5px solid var(--border); border-radius: 10px; padding: 20px; margin-bottom: 36px; }
.ksa-map { width: 100%; height: auto; display: block; max-height: 440px; }
.map-caption { text-align: center; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.1em; color: var(--muted); margin-top: 12px; text-transform: uppercase; }

.map-pin { cursor: pointer; outline: none; }
.pin-dot { fill: var(--blue); stroke: var(--white); stroke-width: 2; transition: fill 0.15s, r 0.15s; }
.pin-label { font-family: var(--font-body); font-size: 10px; fill: var(--dark); font-weight: 700; }
.pin-ring { fill: none; stroke: var(--blue); stroke-width: 1.5; opacity: 0.4; animation: ping 1.6s ease-out infinite; }
.map-pin-active .pin-dot { fill: #1D4ED8; }
@keyframes ping { 0% { r: 8; opacity: 0.7; } 100% { r: 22; opacity: 0; } }

.projects-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
.project-card {
  background: var(--white); border: 1.5px solid var(--border); border-radius: 10px; padding: 22px;
  cursor: pointer; transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}
.project-card:hover { border-color: var(--blue-mid); transform: translateY(-2px); box-shadow: 0 6px 24px rgba(37,99,235,0.08); }
.project-card-active { border-color: var(--blue) !important; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }

.project-card-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.project-city { font-family: var(--font-body); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--blue); }
.status-pill { font-size: 0.65rem; font-weight: 600; padding: 3px 9px; border-radius: 999px; letter-spacing: 0.04em; }
.status-completed { background: #D1FAE5; color: #065F46; }
.status-ongoing { background: #DBEAFE; color: #1D4ED8; }
.status-mobilizing { background: #FEF3C7; color: #92400E; }
.project-name { font-family: var(--font-display); font-size: 1.02rem; font-weight: 700; color: var(--dark); margin-bottom: 8px; line-height: 1.3; }
.project-meta-row { display: flex; align-items: center; gap: 6px; font-size: 0.76rem; color: var(--muted); margin-bottom: 10px; }
.meta-dot { opacity: 0.4; }
.project-blurb { font-size: 0.875rem; color: var(--muted); line-height: 1.6; }

@media (max-width: 860px) {
  .projects-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 580px) {
  .projects-grid { grid-template-columns: 1fr; }
}

/* ── CAREERS ── */
.careers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 40px; }
.career-card {
  background: var(--white); border: 1.5px solid var(--border); border-radius: 10px; padding: 24px;
  display: flex; flex-direction: column; gap: 10px;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.career-card:hover { border-color: var(--blue-mid); box-shadow: 0 4px 20px rgba(37,99,235,0.07); }
.career-card-top { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; }
.career-dept { font-size: 0.72rem; font-weight: 600; color: var(--muted); letter-spacing: 0.04em; }
.career-type { font-size: 0.68rem; font-weight: 700; background: var(--blue-light); color: var(--blue); padding: 3px 8px; border-radius: 4px; }
.career-title { font-family: var(--font-display); font-size: 1.08rem; font-weight: 700; color: var(--dark); }
.career-meta { display: flex; align-items: center; gap: 5px; font-size: 0.82rem; color: var(--muted); }
.career-link { display: inline-flex; align-items: center; gap: 5px; font-size: 0.84rem; font-weight: 600; color: var(--blue); margin-top: auto; }
.career-link:hover { text-decoration: underline; }

.careers-cta { border-top: 1px solid var(--border); padding-top: 36px; display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.careers-cta p { font-size: 1rem; color: var(--muted); }

@media (max-width: 860px) {
  .careers-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 580px) {
  .careers-grid { grid-template-columns: 1fr; }
  .careers-cta { flex-direction: column; text-align: center; }
}

/* ── TEAM ── */
.team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
.team-card {
  background: var(--white); border: 1.5px solid var(--border); border-radius: 10px; padding: 22px 18px;
  text-align: center; transition: transform 0.2s, box-shadow 0.2s;
}
.team-card:hover { transform: translateY(-3px); box-shadow: 0 8px 28px rgba(0,0,0,0.07); }
.team-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
.team-badge-id { font-size: 0.62rem; color: var(--muted); font-weight: 600; letter-spacing: 0.04em; }
.team-verified { color: var(--blue); }
.team-avatar {
  width: 60px; height: 60px; border-radius: 50%;
  background: var(--blue-light); border: 2px solid var(--blue-mid);
  color: var(--blue); display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 800; font-size: 1.2rem;
  margin: 0 auto 14px;
}
.team-name { font-family: var(--font-display); font-size: 0.98rem; font-weight: 700; color: var(--dark); margin-bottom: 4px; }
.team-role { font-size: 0.82rem; color: var(--muted); margin-bottom: 12px; line-height: 1.4; }
.team-dept-pill { font-size: 0.68rem; font-weight: 600; background: var(--gray-bg); color: var(--blue); padding: 3px 10px; border-radius: 4px; border: 1px solid var(--border); }

@media (max-width: 860px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 500px) { .team-grid { grid-template-columns: 1fr; } }

/* ── SUPPLIERS ── */
.suppliers-layout { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 64px; align-items: start; }
.suppliers-left { display: flex; flex-direction: column; gap: 4px; }
.suppliers-left .body-text { margin-top: 12px; margin-bottom: 0; }
.steps-list { display: flex; flex-direction: column; gap: 22px; margin-top: 36px; padding: 0; }
.step-item { display: flex; gap: 18px; align-items: flex-start; }
.step-num {
  width: 40px; height: 40px; border-radius: 50%; border: 1.5px solid var(--border);
  background: var(--white); color: var(--blue); font-size: 0.82rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.step-body strong { display: block; font-weight: 700; color: var(--dark); margin-bottom: 3px; font-size: 0.95rem; }
.step-body p { font-size: 0.88rem; color: var(--muted); }

.supplier-portal-card {
  background: #1E3A8A; color: var(--white); border-radius: 12px; padding: 36px 30px;
  border-bottom: 4px solid var(--blue);
  box-shadow: 0 16px 48px rgba(30,58,138,0.25);
  display: flex; flex-direction: column; gap: 14px;
}
.supplier-portal-card h3 { font-family: var(--font-display); font-size: 1.6rem; font-weight: 700; }
.supplier-portal-card p { font-size: 0.92rem; color: rgba(255,255,255,0.72); }
.supplier-signin-link { display: flex; align-items: center; gap: 5px; font-size: 0.82rem; color: #93C5FD; font-weight: 600; }
.supplier-signin-link:hover { text-decoration: underline; }

@media (max-width: 860px) {
  .suppliers-layout { grid-template-columns: 1fr; gap: 48px; }
  .supplier-portal-card { max-width: 480px; }
}

/* ── CONTACT ── */
.contact-layout { display: grid; grid-template-columns: 1.4fr 0.8fr; gap: 40px; align-items: start; }
.contact-form-wrap { background: var(--white); border: 1.5px solid var(--border); border-radius: 10px; padding: 36px; }
.contact-form { display: flex; flex-direction: column; gap: 18px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.contact-form label { display: flex; flex-direction: column; gap: 5px; }
.contact-form label span { font-size: 0.82rem; font-weight: 600; color: var(--dark); }
.contact-form input, .contact-form select, .contact-form textarea {
  border: 1.5px solid var(--border); background: var(--gray-bg); border-radius: 6px;
  padding: 10px 14px; font-size: 0.94rem; color: var(--dark);
  transition: border-color 0.15s, background 0.15s;
}
.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
  border-color: var(--blue); background: var(--white); outline: none;
}
.contact-form textarea { resize: vertical; }

.form-success { text-align: center; padding: 48px 24px; display: flex; flex-direction: column; align-items: center; gap: 12px; }
.form-success-icon { color: var(--blue); margin-bottom: 4px; }
.form-success h3 { font-family: var(--font-display); font-size: 1.6rem; color: var(--dark); }
.form-success p { color: var(--muted); margin-bottom: 8px; }

.office-info-card { background: var(--gray-bg); border: 1.5px solid var(--border); border-radius: 10px; padding: 30px 26px; }
.office-row { display: flex; align-items: flex-start; gap: 12px; font-size: 0.9rem; color: var(--body); margin-bottom: 14px; }
.office-row svg { color: var(--blue); flex-shrink: 0; margin-top: 2px; }
.office-divider { border: none; border-top: 1px solid var(--border); margin: 20px 0; }
.office-portal-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.9rem; font-weight: 600; color: var(--blue); margin-top: 8px; }
.office-portal-link:hover { text-decoration: underline; }

@media (max-width: 860px) {
  .contact-layout { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
}

/* ── FOOTER ── */
.footer { background: var(--dark); color: rgba(255,255,255,0.65); padding-top: 72px; }
.footer-grid { display: grid; grid-template-columns: 1.4fr repeat(3, 0.8fr); gap: 48px; padding-bottom: 56px; }
.footer-brand { display: flex; flex-direction: column; gap: 12px; }
.footer-logo { display: flex; align-items: center; gap: 10px; }
.footer-logo .logo-egc { color: var(--white); }
.footer-tagline { font-size: 0.84rem; color: rgba(255,255,255,0.45); line-height: 1.6; }
.footer-col { display: flex; flex-direction: column; gap: 10px; }
.footer-col h5 { font-family: var(--font-display); font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--white); margin-bottom: 6px; }
.footer-col a { font-size: 0.88rem; transition: color 0.15s; }
.footer-col a:hover { color: var(--white); }
.footer-linkedin {
  display: inline-flex; width: 36px; height: 36px; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px;
  color: rgba(255,255,255,0.65); transition: background 0.2s, color 0.2s;
  margin-top: 4px;
}
.footer-linkedin svg { width: 16px; height: 16px; }
.footer-linkedin:hover { background: var(--blue); color: var(--white); border-color: var(--blue); }
.footer-linkedin-link { font-size: 0.88rem; }

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 22px 0 32px;
  display: flex; justify-content: space-between; align-items: center; gap: 16px;
  flex-wrap: wrap; font-size: 0.78rem; color: rgba(255,255,255,0.38);
}
.footer-bottom a { color: rgba(255,255,255,0.5); text-decoration: underline; transition: color 0.15s; }
.footer-bottom a:hover { color: var(--white); }

@media (max-width: 860px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
  .footer-brand { grid-column: span 2; }
}
@media (max-width: 500px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-brand { grid-column: span 1; }
  .footer-bottom { flex-direction: column; text-align: center; }
}

/* ── PRINT / REDUCED MOTION ── */
@media (prefers-reduced-motion: reduce) {
  .fade-in { opacity: 1; transform: none; transition: none; }
  .pin-ring { animation: none; }
  .btn { transition: none; }
}
`;
