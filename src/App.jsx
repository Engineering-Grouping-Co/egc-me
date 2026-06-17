import React, { useState } from "react";
import {
  Menu, X, ArrowRight, ArrowUpRight, ExternalLink, Phone, Mail, MapPin,
  Building2, Briefcase, Send, ChevronRight, ShieldCheck, Globe,
} from "lucide-react";

/* ============================================================================
   EGC — ENGINEERING GROUPING CO.
   Specialty contracting & manufacturing — Kingdom of Saudi Arabia
   Landing page · single-file React component
   ============================================================================ */

const SUPPLIER_PORTAL_URL = "https://erp.egc-me.com";

const STATS = [
  { n: "150+", l: "PROJECTS DELIVERED" },
  { n: "18", l: "YEARS OF OPERATION" },
  { n: "9", l: "REGIONS SERVED" },
  { n: "3", l: "ACTIVE DIVISIONS" },
];

const DIVISIONS = [
  {
    id: "steel",
    label: "Steel",
    tag: "GRADE A36–A572 · CNC CUT · SHOP WELDED",
    desc: "Structural steel, plate work, and architectural metalwork — designed, cut, welded, and erected by our own crews.",
  },
  {
    id: "wood",
    label: "Wood",
    tag: "JOINERY · MILLWORK · FIT-OUT",
    desc: "Architectural woodwork and joinery for interiors, hospitality fit-outs, and custom millwork, built to drawing in our timber shop.",
  },
  {
    id: "leadsheet",
    label: "Lead Sheet",
    badge: "NEW DIVISION",
    tag: "ROOFING · FLASHING · WATERPROOFING",
    desc: "EGC is expanding into lead sheet works for roofing, flashing, and waterproofing — bringing the same in-house standard to a new material.",
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

const FILTERS = [
  { id: "all", label: "All" },
  { id: "steel", label: "Steel" },
  { id: "wood", label: "Wood" },
  { id: "leadsheet", label: "Lead Sheet" },
];

const NAV_LINKS = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#team", label: "Team" },
  { href: "#suppliers", label: "Suppliers" },
  { href: "#contact", label: "Contact" },
];

function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span className="eyebrow-mark" aria-hidden="true" />
      {children}
    </div>
  );
}

function DivisionIcon({ id }) {
  if (id === "steel") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="div-icon" aria-hidden="true">
        <path d="M4 4.5H20V8.5H14V15.5H20V19.5H4V15.5H10V8.5H4V4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }
  if (id === "wood") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="div-icon" aria-hidden="true">
        <rect x="3" y="9.5" width="18" height="5" rx="0.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6 11.3C7 10.6 8.5 12.2 9.5 11.5C10.5 10.8 12 12.4 13 11.7C14 11 15.5 12.6 16.5 11.9C17.2 11.4 17.7 11.8 18 12.1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" className="div-icon" aria-hidden="true">
      <rect x="4.5" y="14.5" width="15" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4.5" y="10.5" width="15" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="4.5" y="6.5" width="15" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Header({ navOpen, setNavOpen }) {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="utility-inner">
          <div className="utility-left">
            <a href="tel:+966110000000" className="utility-link"><Phone size={12} strokeWidth={2} /> +966 11 000 0000</a>
            <a href="mailto:info@egc-me.com" className="utility-link"><Mail size={12} strokeWidth={2} /> info@egc-me.com</a>
          </div>
          <div className="utility-right">
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="utility-link utility-portal">
              Supplier Portal Login <ArrowUpRight size={12} strokeWidth={2.2} />
            </a>
            <span className="utility-lang" aria-hidden="true">EN <span className="utility-divider">/</span> عربي</span>
          </div>
        </div>
      </div>

      <div className="nav-bar">
        <div className="nav-inner">
          <a href="#top" className="brand">
            <span className="brand-mark">EGC</span>
            <span className="brand-sub">ENGINEERING GROUPING CO.</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary btn-sm">Start a Project</a>
            <button
              className="nav-toggle"
              aria-label={navOpen ? "Close menu" : "Open menu"}
              aria-expanded={navOpen}
              onClick={() => setNavOpen((v) => !v)}
            >
              {navOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="nav-mobile">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setNavOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-primary" onClick={() => setNavOpen(false)}>Start a Project</a>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="nav-mobile-link nav-mobile-portal">
              Supplier Portal Login <ArrowUpRight size={13} />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroDrawing() {
  return (
    <svg viewBox="0 0 480 520" className="hero-drawing" aria-hidden="true">
      <defs>
        <pattern id="heroGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 0H40V40" fill="none" stroke="var(--line)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect x="20" y="20" width="440" height="480" fill="url(#heroGrid)" opacity="0.5" />

      {/* viewport corner brackets */}
      <g className="reveal" style={{ animationDelay: "0s" }} stroke="var(--navy)" strokeWidth="2" fill="none">
        <path d="M20 50V20H50" />
        <path d="M430 20H460V50" />
        <path d="M460 470V500H430" />
        <path d="M50 500H20V470" />
      </g>

      {/* column */}
      <g className="reveal" style={{ animationDelay: "0.25s" }} stroke="var(--navy)" strokeWidth="2.5" fill="none" strokeLinejoin="round">
        <rect x="120" y="80" width="40" height="360" />
        <path d="M126 92L154 116M126 128L154 152M126 164L154 188M126 200L154 224M126 236L154 260M126 272L154 296M126 308L154 332M126 344L154 368M126 380L154 404" strokeWidth="1" opacity="0.45" />
      </g>

      {/* beam */}
      <g className="reveal" style={{ animationDelay: "0.4s" }} stroke="var(--navy)" strokeWidth="2.5" fill="none" strokeLinejoin="round">
        <rect x="160" y="202" width="220" height="36" />
        <path d="M172 208L196 232M208 208L232 232M244 208L268 232M280 208L304 232M316 208L340 232M352 208L376 232" strokeWidth="1" opacity="0.45" />
      </g>

      {/* connection plate + bolts */}
      <g className="reveal" style={{ animationDelay: "0.6s" }}>
        <rect x="148" y="192" width="38" height="56" fill="none" stroke="var(--signal)" strokeWidth="2.2" />
        <circle cx="160" cy="204" r="3.4" fill="var(--navy)" />
        <circle cx="174" cy="204" r="3.4" fill="var(--navy)" />
        <circle cx="160" cy="236" r="3.4" fill="var(--navy)" />
        <circle cx="174" cy="236" r="3.4" fill="var(--navy)" />
      </g>

      {/* dimension lines + labels */}
      <g className="reveal" style={{ animationDelay: "0.8s" }}>
        <g stroke="var(--slate)" strokeWidth="1" fill="none">
          <path d="M160 184H380" />
          <path d="M160 178V190M380 178V190" />
          <path d="M404 80V440" />
          <path d="M398 80H410M398 440H410" />
        </g>
        <text x="270" y="174" textAnchor="middle" className="dim-label">2400</text>
        <text x="404" y="264" textAnchor="middle" className="dim-label" transform="rotate(-90 404 264)">3600</text>
      </g>

      {/* leader + callout */}
      <g className="reveal" style={{ animationDelay: "1s" }}>
        <path d="M186 196L300 120" stroke="var(--signal)" strokeWidth="1.4" fill="none" strokeDasharray="3 3" />
        <circle cx="312" cy="112" r="14" fill="var(--white)" stroke="var(--signal)" strokeWidth="1.6" />
        <text x="312" y="117" textAnchor="middle" className="callout-letter">A</text>
        <text x="332" y="108" className="callout-label">DETAIL A</text>
        <text x="332" y="122" className="callout-label callout-label-sub">TYP. MOMENT CONNECTION</text>
      </g>

      {/* compass mark */}
      <g className="reveal" style={{ animationDelay: "1.15s" }} transform="translate(56,452)">
        <circle r="18" fill="none" stroke="var(--navy)" strokeWidth="1.4" />
        <path d="M0 -14V14M-14 0H14" stroke="var(--navy)" strokeWidth="1" opacity="0.5" />
        <path d="M0 -14L4 -4H-4Z" fill="var(--navy)" />
        <text y="30" textAnchor="middle" className="dim-label">N</text>
      </g>

      {/* title block */}
      <g className="reveal" style={{ animationDelay: "1.15s" }} transform="translate(260,452)">
        <rect width="180" height="44" fill="none" stroke="var(--navy)" strokeWidth="1.2" />
        <path d="M0 14H180M60 14V44M120 14V44" stroke="var(--navy)" strokeWidth="1" opacity="0.5" />
        <text x="8" y="10" className="title-block-label">DWG NO. EGC-STR-001</text>
        <text x="8" y="32" className="title-block-label">SCALE NTS</text>
        <text x="68" y="32" className="title-block-label">REV A</text>
        <text x="128" y="32" className="title-block-label">EGC</text>
      </g>
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <Eyebrow>Engineering Grouping Co. — Specialty Contracting &amp; Manufacturing — Kingdom of Saudi Arabia</Eyebrow>
          <h1 className="hero-title">Fabricated in-house.<br />Delivered across the Kingdom.</h1>
          <p className="hero-sub">
            EGC designs, fabricates, and installs steel, timber, and lead sheet works for government
            and private sector projects nationwide — from first drawing to final handover.
          </p>
          <div className="hero-actions">
            <a href="#capabilities" className="btn btn-primary">View Our Capabilities <ArrowRight size={16} /></a>
            <a href="#contact" className="btn btn-outline">Start a Project</a>
          </div>
          <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="hero-portal-link">
            Registered supplier? Sign in to the portal <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="hero-art">
          <HeroDrawing />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <div className="stat" key={s.l}>
            <span className="stat-rivet" aria-hidden="true" />
            <span className="stat-number">{s.n}</span>
            <span className="stat-label">{s.l}</span>
            {i < STATS.length - 1 && <span className="stat-rule" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="section" id="capabilities">
      <div className="section-inner">
        <div className="section-head">
          <Eyebrow>What We Fabricate</Eyebrow>
          <h2 className="section-title">Three materials. One standard.</h2>
          <p className="section-sub">
            EGC runs its own fabrication shops — every project moves from design to site under one roof,
            one schedule, and one quality standard.
          </p>
        </div>

        <div className="division-grid">
          {DIVISIONS.map((d) => (
            <div className={`division-card division-${d.id}`} key={d.id}>
              {d.badge && <span className="division-badge">{d.badge}</span>}
              <DivisionIcon id={d.id} />
              <h3 className="division-title">{d.label}</h3>
              <span className="division-tag">{d.tag}</span>
              <p className="division-desc">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="sector-row">
          <div className="sector-item">
            <Building2 size={20} strokeWidth={1.8} />
            <div>
              <h4>Government &amp; Semi-Government</h4>
              <p>Long-standing contractor of record on public infrastructure and facilities projects.</p>
            </div>
          </div>
          <div className="sector-item">
            <Briefcase size={20} strokeWidth={1.8} />
            <div>
              <h4>Private Sector &amp; Industrial</h4>
              <p>Trusted by developers, industrial operators, and EPC contractors across the Kingdom.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsMap() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(PROJECTS[0].id);

  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.division === filter);
  const active = PROJECTS.find((p) => p.id === activeId) || visible[0];

  function selectProject(p) {
    setActiveId(p.id);
  }

  return (
    <section className="section section-tinted" id="projects">
      <div className="section-inner">
        <div className="section-head">
          <Eyebrow>Where We Build</Eyebrow>
          <h2 className="section-title">Projects across the Kingdom</h2>
          <p className="section-sub">A schematic view of where EGC is on the ground today. Select a marker for project details.</p>
        </div>

        <div className="map-filters" role="group" aria-label="Filter projects by division">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`chip ${filter === f.id ? "chip-active" : ""}`}
              onClick={() => {
                setFilter(f.id);
                const stillVisible = (f.id === "all" ? PROJECTS : PROJECTS.filter((p) => p.division === f.id));
                if (!stillVisible.find((p) => p.id === activeId) && stillVisible.length) {
                  setActiveId(stillVisible[0].id);
                }
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="map-layout">
          <div className="map-frame">
            <svg viewBox="0 0 680 562" className="ksa-map" role="img" aria-label="Map of project locations across Saudi Arabia">
              <defs>
                <pattern id="mapGrid" width="34" height="34" patternUnits="userSpaceOnUse">
                  <path d="M0 0H34V34" fill="none" stroke="var(--line)" strokeWidth="1" />
                </pattern>
              </defs>
              <path d={KSA_PATH} fill="url(#mapGrid)" stroke="var(--navy)" strokeWidth="2" strokeLinejoin="round" opacity="0.95" />
              <path d={KSA_PATH} fill="none" stroke="var(--blue)" strokeWidth="0.6" opacity="0.4" />

              {visible.map((p) => {
                const isActive = p.id === active?.id;
                return (
                  <g
                    key={p.id}
                    transform={`translate(${p.x} ${p.y})`}
                    className={`map-pin ${isActive ? "map-pin-active" : ""}`}
                    onClick={() => selectProject(p)}
                    role="button"
                    tabIndex={0}
                    aria-label={`${p.city} — ${p.name}`}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") selectProject(p); }}
                  >
                    {isActive && <circle r="14" className="pin-pulse" />}
                    <circle r="5.5" className="pin-dot" />
                    <path d="M0 -9V-13M0 9V13M-9 0H-13M9 0H13" className="pin-cross" />
                    <text x="11" y="-9" className="pin-label">{p.code}</text>
                  </g>
                );
              })}
            </svg>
            <span className="map-caption">KINGDOM OF SAUDI ARABIA — PROJECT LOCATIONS (SCHEMATIC, NOT TO SCALE)</span>
          </div>

          {active && (
            <div className="project-panel">
              <div className="project-panel-head">
                <span className="project-city">{active.city}</span>
                <span className={`status-tag status-${active.status.toLowerCase()}`}>{active.status}</span>
              </div>
              <h3 className="project-name">{active.name}</h3>
              <div className="project-meta">
                <span><Building2 size={13} /> {active.sector}</span>
                <span><DivisionIcon id={active.division} /> {DIVISIONS.find((d) => d.id === active.division)?.label}</span>
                <span className="project-year">{active.year}</span>
              </div>
              <p className="project-blurb">{active.blurb}</p>
              <div className="project-list-mini">
                {visible.map((p) => (
                  <button
                    key={p.id}
                    className={`project-mini-row ${p.id === active.id ? "project-mini-active" : ""}`}
                    onClick={() => selectProject(p)}
                  >
                    <span>{p.city}</span>
                    <ChevronRight size={14} />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }) {
  const initials = member.name.split(" ").map((p) => p[0]).join("").slice(0, 2);
  return (
    <div className="team-card">
      <div className="team-card-top">
        <span className="team-badge">{member.badge}</span>
        <ShieldCheck size={14} className="team-verified" />
      </div>
      <div className="team-avatar">{initials}</div>
      <h4 className="team-name">{member.name}</h4>
      <p className="team-role">{member.role}</p>
      <span className="team-dept">{member.dept}</span>
    </div>
  );
}

function Team() {
  return (
    <section className="section" id="team">
      <div className="section-inner">
        <div className="section-head">
          <Eyebrow>The Team</Eyebrow>
          <h2 className="section-title">The people behind the build</h2>
          <p className="section-sub">
            Leadership and division heads driving EGC's projects from tender to handover.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((m) => <TeamCard member={m} key={m.id} />)}
        </div>
      </div>
    </section>
  );
}

const SUPPLIER_STEPS = [
  { n: "01", t: "Register", d: "Create a supplier account on the EGC ERP portal." },
  { n: "02", t: "Submit documents", d: "Upload your CR, certifications, and product or service catalogue." },
  { n: "03", t: "Prequalification review", d: "Our procurement team reviews and verifies your submission." },
  { n: "04", t: "Approved vendor", d: "Get listed and start receiving RFQs from active projects." },
];

function Suppliers() {
  return (
    <section className="section section-tinted" id="suppliers">
      <div className="section-inner">
        <div className="suppliers-grid">
          <div>
            <Eyebrow>Supplier Network</Eyebrow>
            <h2 className="section-title">Become a registered EGC supplier</h2>
            <p className="section-sub">
              EGC sources steel, timber, lead sheet, and site materials through a single vendor network
              managed on our ERP platform. Register once, and you're visible to every division procuring
              for active projects.
            </p>
            <ol className="steps">
              {SUPPLIER_STEPS.map((s) => (
                <li className="step" key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <div>
                    <h4>{s.t}</h4>
                    <p>{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="supplier-card">
            <span className="supplier-card-label">EGC ERP — SUPPLIER PORTAL</span>
            <h3>Register or sign in</h3>
            <p>Manage your vendor profile, submit documents, and respond to RFQs directly on the EGC ERP system.</p>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">
              Register on the Supplier Portal <ExternalLink size={16} />
            </a>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="supplier-signin">
              Already registered? Sign in here <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", sector: "Government", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="section-head">
          <Eyebrow>Get In Touch</Eyebrow>
          <h2 className="section-title">Tell us about your project</h2>
          <p className="section-sub">Share a few details and our business development team will follow up.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <ShieldCheck size={28} />
                <h3>Message received</h3>
                <p>Our team will be in touch within 1–2 business days.</p>
                <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", sector: "Government", message: "" }); }}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    <span>Full name*</span>
                    <input required value={form.name} onChange={update("name")} type="text" placeholder="Your name" />
                  </label>
                  <label>
                    <span>Company</span>
                    <input value={form.company} onChange={update("company")} type="text" placeholder="Company name" />
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    <span>Email*</span>
                    <input required value={form.email} onChange={update("email")} type="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    <span>Phone</span>
                    <input value={form.phone} onChange={update("phone")} type="tel" placeholder="+966 5x xxx xxxx" />
                  </label>
                </div>
                <label>
                  <span>Sector</span>
                  <select value={form.sector} onChange={update("sector")}>
                    <option>Government</option>
                    <option>Private</option>
                    <option>Other</option>
                  </select>
                </label>
                <label>
                  <span>Message*</span>
                  <textarea required value={form.message} onChange={update("message")} rows={5} placeholder="Tell us about your project — scope, location, and timeline." />
                </label>
                <button type="submit" className="btn btn-primary btn-block">Send message <Send size={15} /></button>
              </form>
            )}
          </div>

          <div className="office-card">
            <span className="office-label">HEAD OFFICE</span>
            <div className="office-row"><MapPin size={16} /><span>[Street], [District], Riyadh, Kingdom of Saudi Arabia</span></div>
            <div className="office-row"><Phone size={16} /><span>+966 11 000 0000</span></div>
            <div className="office-row"><Mail size={16} /><span>info@egc-me.com</span></div>
            <div className="office-row"><Globe size={16} /><span>Sun – Thu, 8:00 AM – 5:00 PM</span></div>
            <div className="office-divider" />
            <span className="office-label">REGISTERED SUPPLIER?</span>
            <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer" className="office-portal-link">
              Open the supplier portal <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <span className="brand-mark brand-mark-light">EGC</span>
          <p>Specialty contracting &amp; manufacturing across the Kingdom of Saudi Arabia.</p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" aria-label="Website"><Globe size={16} /></a>
          </div>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          {NAV_LINKS.map((l) => <a key={l.href} href={l.href} key={l.href}>{l.label}</a>)}
        </div>
        <div className="footer-col">
          <h5>Divisions</h5>
          <span>Steel</span>
          <span>Wood</span>
          <span>Lead Sheet <em>— new</em></span>
        </div>
        <div className="footer-col">
          <h5>Contact</h5>
          <span>[Street], [District], Riyadh, KSA</span>
          <span>+966 11 000 0000</span>
          <span>info@egc-me.com</span>
          <a href={SUPPLIER_PORTAL_URL} target="_blank" rel="noreferrer">Supplier Portal Login</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Engineering Grouping Co. (EGC). All rights reserved.</span>
        <span>CR No. [XXXXXXXXXX]</span>
        <span>Powered by EGC ERP</span>
      </div>
    </footer>
  );
}

export default function EGCWebsite() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="egc-root">
      <Header navOpen={navOpen} setNavOpen={setNavOpen} />
      <main>
        <Hero />
        <Stats />
        <Capabilities />
        <ProjectsMap />
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
   STYLES (Tailored Palette, Premium Aesthetics)
--------------------------------------------------------------------------- */

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@500;600;700;800;900&family=Public+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap');

.egc-root {
  --paper: #F5F7FA;
  --white: #FFFFFF;
  --navy: #0B2A4A;
  --navy-soft: #14385E;
  --blue: #1B5A8C;
  --signal: #2E9BD6;
  --ink: #16202B;
  --slate: #5C6B7A;
  --line: #D7E2EA;
  --line-soft: #E8EEF3;

  --font-display: 'Big Shoulders Display', sans-serif;
  --font-body: 'Public Sans', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  background: var(--paper);
  color: var(--ink);
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  scroll-behavior: smooth;
}

.egc-root * { box-sizing: border-box; }
.egc-root a { color: inherit; text-decoration: none; }
.egc-root button { font-family: inherit; cursor: pointer; }
.egc-root section[id] { scroll-margin-top: 110px; }
.egc-root input, .egc-root select, .egc-root textarea { font-family: inherit; }

.egc-root :focus-visible {
  outline: 2.5px solid var(--signal);
  outline-offset: 2px;
  border-radius: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .egc-root *, .egc-root *::before, .egc-root *::after {
    animation: none !important;
    transition: none !important;
  }
}

/* ---------- shared ---------- */

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--blue);
  margin-bottom: 14px;
}
.eyebrow-mark { width: 14px; height: 2px; background: var(--signal); display: inline-block; }

.section { padding: 88px 24px; }
.section-tinted { background: var(--white); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.section-inner { max-width: 1180px; margin: 0 auto; }
.section-head { max-width: 640px; margin-bottom: 48px; }
.section-title {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(1.9rem, 3.4vw, 2.7rem);
  line-height: 1.05;
  margin: 0 0 14px;
  color: var(--navy);
  text-transform: uppercase;
  letter-spacing: 0.01em;
}
.section-sub { color: var(--slate); font-size: 1.02rem; margin: 0; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 22px;
  font-weight: 600;
  font-size: 0.92rem;
  border-radius: 3px;
  border: 1.5px solid transparent;
  transition: transform 0.15s ease, background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  white-space: nowrap;
}
.btn-primary { background: var(--navy); color: var(--white); }
.btn-primary:hover { background: var(--blue); transform: translateY(-1px); }
.btn-outline { background: transparent; color: var(--navy); border-color: var(--navy); }
.btn-outline:hover { background: var(--navy); color: var(--white); }
.btn-sm { padding: 9px 16px; font-size: 0.84rem; }
.btn-block { width: 100%; }

.chip {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.04em;
  padding: 9px 18px;
  border-radius: 999px;
  border: 1.4px solid var(--line);
  background: var(--white);
  color: var(--slate);
  transition: all 0.15s ease;
}
.chip:hover { border-color: var(--blue); color: var(--blue); }
.chip-active { background: var(--navy); color: var(--white); border-color: var(--navy); }

/* ---------- header ---------- */

.site-header { position: sticky; top: 0; z-index: 50; }

.utility-bar { background: var(--navy); color: rgba(255,255,255,0.85); font-family: var(--font-mono); font-size: 0.72rem; }
.utility-inner { max-width: 1180px; margin: 0 auto; padding: 7px 24px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
.utility-left, .utility-right { display: flex; align-items: center; gap: 18px; }
.utility-link { display: inline-flex; align-items: center; gap: 6px; opacity: 0.9; transition: opacity 0.15s; }
.utility-link:hover { opacity: 1; color: var(--signal); }
.utility-portal { color: #8FD2F4; font-weight: 600; }
.utility-lang { opacity: 0.7; }
.utility-divider { opacity: 0.5; margin: 0 2px; }

.nav-bar { background: var(--white); border-bottom: 1px solid var(--line); }
.nav-inner { max-width: 1180px; margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 24px; }

.brand { display: flex; flex-direction: column; line-height: 1; gap: 2px; }
.brand-mark { font-family: var(--font-display); font-weight: 800; font-size: 1.7rem; color: var(--navy); letter-spacing: 0.02em; }
.brand-mark-light { color: var(--white); }
.brand-sub { font-family: var(--font-mono); font-size: 0.56rem; letter-spacing: 0.1em; color: var(--slate); }

.nav-links { display: flex; align-items: center; gap: 30px; }
.nav-link { font-weight: 600; font-size: 0.92rem; color: var(--ink); position: relative; padding: 4px 0; }
.nav-link:hover { color: var(--blue); }

.nav-actions { display: flex; align-items: center; gap: 14px; }
.nav-toggle { display: none; background: none; border: none; color: var(--navy); padding: 4px; }

.nav-mobile { display: none; }

@media (max-width: 920px) {
  .nav-links { display: none; }
  .nav-actions .btn { display: none; }
  .nav-toggle { display: flex; }
  .nav-mobile { display: flex; flex-direction: column; gap: 4px; padding: 14px 24px 22px; border-top: 1px solid var(--line); }
  .nav-mobile-link { padding: 12px 0; font-weight: 600; border-bottom: 1px solid var(--line-soft); }
  .nav-mobile .btn { margin-top: 12px; }
  .nav-mobile-portal { color: var(--blue); display: flex; align-items: center; gap: 6px; border-bottom: none; }
  .utility-left { display: none; }
}

/* ---------- hero ---------- */

.hero { padding: 64px 24px 40px; overflow: hidden; }
.hero-inner { max-width: 1180px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }

.hero-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(2.6rem, 5.6vw, 4.6rem);
  line-height: 0.98;
  letter-spacing: -0.005em;
  text-transform: uppercase;
  color: var(--navy);
  margin: 0 0 22px;
}
.hero-sub { font-size: 1.08rem; color: var(--slate); max-width: 520px; margin: 0 0 30px; }
.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 20px; }
.hero-portal-link { display: inline-flex; align-items: center; gap: 6px; font-size: 0.88rem; font-weight: 600; color: var(--blue); }
.hero-portal-link:hover { color: var(--signal); }

.hero-art { display: flex; justify-content: center; }
.hero-drawing { width: 100%; max-width: 440px; height: auto; }

.dim-label, .callout-letter, .callout-label, .title-block-label { font-family: var(--font-mono); fill: var(--slate); font-size: 11px; }
.callout-letter { fill: var(--navy); font-weight: 600; font-size: 12px; }
.callout-label { fill: var(--navy); font-weight: 600; font-size: 10.5px; letter-spacing: 0.04em; }
.callout-label-sub { fill: var(--slate); font-weight: 400; font-size: 8.5px; }
.title-block-label { font-size: 8px; letter-spacing: 0.03em; }

.reveal { opacity: 0; animation: revealIn 0.65s ease forwards; transform-box: fill-box; }
@keyframes revealIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }

@media (max-width: 920px) {
  .hero-inner { grid-template-columns: 1fr; gap: 36px; }
  .hero-art { order: -1; max-width: 320px; margin: 0 auto; }
}

/* ---------- stats ---------- */

.stats { background: var(--navy); padding: 0 24px; }
.stats-inner { max-width: 1180px; margin: 0 auto; display: flex; flex-wrap: wrap; }
.stat { flex: 1; min-width: 150px; padding: 28px 28px; position: relative; }
.stat-rivet { position: absolute; top: 14px; left: 14px; width: 6px; height: 6px; border-radius: 50%; background: rgba(255,255,255,0.25); }
.stat-number { display: block; font-family: var(--font-display); font-weight: 800; font-size: 2.4rem; color: var(--white); line-height: 1; }
.stat-label { display: block; font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.1em; color: #9FB8CC; margin-top: 6px; }
.stat-rule { position: absolute; right: 0; top: 20%; bottom: 20%; width: 1px; background: rgba(255,255,255,0.15); }

@media (max-width: 700px) {
  .stat-rule { display: none; }
  .stat { min-width: 44%; border-bottom: 1px solid rgba(255,255,255,0.1); }
}

/* ---------- capabilities ---------- */

.division-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; margin-bottom: 56px; }
.division-card {
  background: var(--white);
  border: 1.4px solid var(--line);
  border-radius: 4px;
  padding: 30px 26px;
  position: relative;
  border-top: 4px solid var(--blue);
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.division-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -18px rgba(11,42,74,0.35); }
.division-leadsheet { border-top-color: var(--signal); }
.division-badge {
  position: absolute; top: 16px; right: 16px;
  font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.06em;
  background: var(--signal); color: var(--white); padding: 4px 9px; border-radius: 999px;
}
.div-icon { width: 30px; height: 30px; color: var(--navy); margin-bottom: 16px; }
.division-title { font-family: var(--font-display); font-weight: 700; font-size: 1.5rem; text-transform: uppercase; color: var(--navy); margin: 0 0 8px; }
.division-tag { display: block; font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.05em; color: var(--blue); margin-bottom: 14px; }
.division-desc { color: var(--slate); font-size: 0.94rem; margin: 0; }

.sector-row { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; border-top: 1px solid var(--line); padding-top: 36px; }
.sector-item { display: flex; gap: 16px; align-items: flex-start; }
.sector-item svg { color: var(--blue); flex-shrink: 0; margin-top: 2px; }
.sector-item h4 { font-size: 1rem; margin: 0 0 4px; color: var(--navy); }
.sector-item p { font-size: 0.9rem; color: var(--slate); margin: 0; }

@media (max-width: 920px) {
  .division-grid { grid-template-columns: 1fr; }
  .sector-row { grid-template-columns: 1fr; gap: 24px; }
}

/* ---------- map ---------- */

.map-filters { display: flex; gap: 10px; margin-bottom: 30px; flex-wrap: wrap; }

.map-layout { display: grid; grid-template-columns: 1.5fr 1fr; gap: 28px; align-items: start; }
.map-frame { background: var(--white); border: 1.4px solid var(--line); border-radius: 4px; padding: 18px; }
.ksa-map { width: 100%; height: auto; display: block; }
.map-caption { display: block; text-align: center; font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.08em; color: var(--slate); margin-top: 10px; }

.map-pin { cursor: pointer; }
.pin-dot { fill: var(--blue); stroke: var(--white); stroke-width: 1.5; transition: fill 0.15s; }
.pin-cross { stroke: var(--navy); stroke-width: 1; opacity: 0.6; }
.pin-label { font-family: var(--font-mono); font-size: 11px; fill: var(--navy); font-weight: 600; }
.map-pin-active .pin-dot { fill: var(--signal); }
.pin-pulse { fill: none; stroke: var(--signal); stroke-width: 1.5; opacity: 0.7; animation: pulse 1.8s ease-out infinite; }
@keyframes pulse { 0% { r: 6; opacity: 0.8; } 100% { r: 20; opacity: 0; } }

.project-panel { background: var(--white); border: 1.4px solid var(--line); border-radius: 4px; padding: 26px; position: sticky; top: 120px; }
.project-panel-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.project-city { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; color: var(--blue); text-transform: uppercase; }
.status-tag { font-family: var(--font-mono); font-size: 0.6rem; padding: 3px 9px; border-radius: 999px; letter-spacing: 0.05em; }
.status-completed { background: #E3EFE6; color: #2E7D4F; }
.status-ongoing { background: #E6EEF7; color: var(--blue); }
.status-mobilizing { background: #FBEFE0; color: #B5762A; }
.project-name { font-family: var(--font-display); font-weight: 700; font-size: 1.5rem; color: var(--navy); margin: 0 0 14px; text-transform: uppercase; line-height: 1.1; }
.project-meta { display: flex; flex-wrap: wrap; gap: 14px; font-size: 0.78rem; color: var(--slate); margin-bottom: 14px; }
.project-meta span { display: inline-flex; align-items: center; gap: 5px; }
.project-meta .div-icon { width: 14px; height: 14px; margin: 0; color: var(--slate); }
.project-blurb { font-size: 0.92rem; color: var(--ink); margin: 0 0 20px; }
.project-list-mini { border-top: 1px solid var(--line-soft); padding-top: 14px; display: flex; flex-direction: column; gap: 2px; max-height: 200px; overflow-y: auto; }
.project-mini-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 6px; border-radius: 3px; font-size: 0.86rem; color: var(--slate); background: none; border: none; text-align: left; }
.project-mini-row:hover { background: var(--paper); color: var(--navy); }
.project-mini-active { color: var(--navy); font-weight: 600; background: var(--paper); }

@media (max-width: 920px) {
  .map-layout { grid-template-columns: 1fr; }
  .project-panel { position: static; }
}

/* ---------- team ---------- */

.team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.team-card {
  background: var(--white);
  border: 1.4px solid var(--line);
  border-radius: 4px;
  padding: 22px 18px;
  text-align: center;
  position: relative;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.team-card:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -18px rgba(11,42,74,0.3); }
.team-card-top { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
.team-badge { font-family: var(--font-mono); font-size: 0.6rem; color: var(--slate); letter-spacing: 0.04em; }
.team-verified { color: var(--signal); }
.team-avatar {
  width: 64px; height: 64px; margin: 0 auto 14px;
  border-radius: 50%; background: var(--navy); color: var(--white);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: 700; font-size: 1.3rem;
  border: 3px solid var(--line-soft);
}
.team-name { font-size: 0.98rem; font-weight: 700; color: var(--navy); margin: 0 0 4px; }
.team-role { font-size: 0.82rem; color: var(--slate); margin: 0 0 12px; }
.team-dept {
  font-family: var(--font-mono); font-size: 0.64rem; letter-spacing: 0.04em;
  background: var(--line-soft); color: var(--blue); padding: 4px 10px; border-radius: 2px;
}

@media (max-width: 920px) {
  .team-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 500px) {
  .team-grid { grid-template-columns: 1fr; }
}

/* ---------- suppliers ---------- */

.suppliers-grid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 56px; align-items: center; }

.steps { list-style: none; padding: 0; margin: 36px 0 0; display: flex; flex-direction: column; gap: 24px; }
.step { display: flex; gap: 20px; align-items: flex-start; }
.step-n {
  font-family: var(--font-mono); font-size: 0.98rem; font-weight: 600; color: var(--signal);
  background: var(--white); border: 1.5px solid var(--line);
  width: 38px; height: 38px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.step h4 { font-size: 1.04rem; margin: 0 0 4px; color: var(--navy); }
.step p { font-size: 0.92rem; color: var(--slate); margin: 0; }

.supplier-card {
  background: var(--navy); color: var(--white); border-radius: 4px; padding: 40px 32px;
  border-bottom: 5px solid var(--signal);
  box-shadow: 0 20px 40px -20px rgba(11,42,74,0.6);
}
.supplier-card-label { display: block; font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.1em; color: #8FD2F4; margin-bottom: 16px; }
.supplier-card h3 { font-family: var(--font-display); font-size: 1.8rem; margin: 0 0 12px; text-transform: uppercase; }
.supplier-card p { font-size: 0.94rem; color: rgba(255,255,255,0.75); margin: 0 0 28px; }
.supplier-card .btn { margin-bottom: 16px; }
.supplier-signin { display: flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.82rem; font-family: var(--font-mono); color: #8FD2F4; }
.supplier-signin:hover { text-decoration: underline; }

@media (max-width: 920px) {
  .suppliers-grid { grid-template-columns: 1fr; gap: 40px; }
  .supplier-card { max-width: 480px; margin: 0 auto; }
}

/* ---------- contact ---------- */

.contact-grid { display: grid; grid-template-columns: 1.25fr 0.75fr; gap: 40px; }

.contact-form-wrap { background: var(--white); border: 1.4px solid var(--line); border-radius: 4px; padding: 40px; }
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.contact-form label { display: flex; flex-direction: column; gap: 6px; }
.contact-form label span { font-size: 0.84rem; font-weight: 600; color: var(--navy); }
.contact-form input, .contact-form select, .contact-form textarea {
  border: 1.4px solid var(--line); background: var(--paper); border-radius: 3px; padding: 12px 16px; font-size: 0.94rem; color: var(--ink);
  transition: border-color 0.15s, background 0.15s;
}
.contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus {
  border-color: var(--blue); background: var(--white); outline: none;
}
.contact-form textarea { resize: vertical; }

.form-success { text-align: center; padding: 40px 0; }
.form-success svg { color: var(--signal); margin-bottom: 16px; }
.form-success h3 { font-family: var(--font-display); font-size: 1.8rem; color: var(--navy); margin: 0 0 8px; text-transform: uppercase; }
.form-success p { color: var(--slate); margin-bottom: 24px; }

.office-card { background: var(--white); border: 1.4px solid var(--line); border-radius: 4px; padding: 36px 30px; }
.office-label { display: block; font-family: var(--font-mono); font-size: 0.66rem; letter-spacing: 0.1em; color: var(--blue); margin-bottom: 18px; }
.office-row { display: flex; gap: 14px; font-size: 0.92rem; color: var(--ink); margin-bottom: 16px; align-items: flex-start; }
.office-row svg { color: var(--blue); flex-shrink: 0; margin-top: 3px; }
.office-divider { height: 1px; background: var(--line); margin: 24px 0; }
.office-portal-link { display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: 0.9rem; color: var(--blue); }
.office-portal-link:hover { color: var(--signal); }

@media (max-width: 920px) {
  .contact-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; gap: 20px; }
}

/* ---------- footer ---------- */

.site-footer { background: var(--navy); color: rgba(255,255,255,0.7); font-size: 0.86rem; border-top: 4px solid var(--blue); }
.footer-inner { max-width: 1180px; margin: 0 auto; padding: 80px 24px 60px; display: grid; grid-template-columns: 1.2fr repeat(3, 0.8fr); gap: 48px; }
.footer-col { display: flex; flex-direction: column; gap: 12px; }
.footer-col h5 { font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--white); margin: 0 0 8px; }
.footer-col a:hover { color: var(--white); }
.footer-brand p { font-size: 0.9rem; margin: 12px 0 16px; }
.footer-social { display: flex; gap: 14px; }
.footer-social a {
  width: 32px; height: 32px; border-radius: 50%; background: rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center; color: var(--white); transition: background 0.15s;
}
.footer-social a:hover { background: var(--signal); }
.footer-col em { font-style: normal; color: var(--signal); font-family: var(--font-mono); font-size: 0.74rem; margin-left: 4px; }

.footer-bottom {
  max-width: 1180px; margin: 0 auto; padding: 24px 24px 40px; border-top: 1px solid rgba(255,255,255,0.1);
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 16px; font-family: var(--font-mono); font-size: 0.68rem;
}

@media (max-width: 800px) {
  .footer-inner { grid-template-columns: 1fr 1fr; gap: 36px; }
  .footer-brand { grid-column: span 2; }
}
@media (max-width: 500px) {
  .footer-inner { grid-template-columns: 1fr; }
  .footer-brand { grid-column: span 1; }
  .footer-bottom { flex-direction: column; }
}
`;
