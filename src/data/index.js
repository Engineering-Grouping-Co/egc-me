export const SITE = {
  name: 'Engineering Grouping Co.',
  shortName: 'EGC',
  phone: '+966 50 434 1861',
  email: 'info@egc-me.com',
  address: 'JDJA8188, Almanar District, Jeddah, Kingdom of Saudi Arabia',
  cr: '7040750007',
  vat: '314367391500003',
  founded: '2006',
  supplierPortal: 'https://erp.egc-me.com',
  linkedin: 'https://www.linkedin.com/company/egc-me/',
};

export const NAV_LINKS = [
  { href: '/',              label: 'Home' },
  { href: '/about',         label: 'About' },
  { href: '/what-we-build', label: 'What We Build' },
  { href: '/projects',      label: 'Projects' },
  { href: '/careers',       label: 'Careers' },
  { href: '/suppliers',     label: 'Suppliers' },
  { href: '/contact',       label: 'Contact Us', cta: true },
];

export const STATS = [
  { n: '150+', l: 'Projects Delivered' },
  { n: '18+',  l: 'Years in Saudi Arabia' },
  { n: '9',    l: 'Regions Served' },
  { n: '4',    l: 'Service Lines' },
];

/* ── SERVICE TAXONOMY (replaces DIVISIONS) ── */
export const SERVICES = [
  {
    id: 'healthcare',
    num: '01',
    label: 'Healthcare & Medical Environments',
    shortLabel: 'Healthcare',
    tag: 'MRI Suites · X-Ray Rooms · Radiation Shielding · Medical Joinery',
    summary: 'Complete fit-out of radiation-controlled environments for hospitals, clinics, and diagnostic centres — from structural shielding through final finish.',
    desc: 'EGC\'s most specialist discipline: we engineer and construct the environments inside hospitals where tolerances are exacting and compliance is non-negotiable. MRI and CT suites, x-ray departments, nuclear medicine rooms, and radiation therapy facilities are built by our crews from the structural shielding layer through to the final joinery and surface finish. We work alongside radiation physicists and the hospital\'s project team to deliver rooms that pass attenuation testing first time.',
    capabilities: [
      'MRI & CT suite construction (all field strengths)',
      'X-ray and nuclear medicine room shielding',
      'Lead-lined and radiation-shielded door fabrication',
      'RF shielded room construction',
      'Medical-grade reception and nursing counter joinery',
      'Radiation physicist coordination and attenuation compliance',
    ],
    image: '/images/hero-bg.jpg',
    thumb: '/images/healthcare-xray.jpg',
  },
  {
    id: 'joinery',
    num: '02',
    label: 'Interior Joinery & Millwork',
    shortLabel: 'Joinery',
    tag: 'Reception Counters · Architectural Doors · Panelling · Fit-Out',
    summary: 'Architectural woodwork, custom millwork, and interior fit-out packages for commercial, hospitality, and institutional buildings.',
    desc: 'EGC\'s in-house joinery workshop produces high-quality architectural woodwork for a wide range of building types. Our craftsmen work from precise shop drawings to deliver reception and front-desk counters, door sets and frames, wall panelling, café and dining fit-outs, built-in furniture, and decorative millwork. Every piece is fabricated and installed by our own people under a single quality programme.',
    capabilities: [
      'Reception and front-desk counters',
      'Architectural timber door sets and frames',
      'Interior wall panelling and cladding',
      'Café, dining, and hospitality interior fit-out',
      'Built-in furniture and joinery casework',
      'Custom millwork and decorative elements',
    ],
    image: '/images/joinery-doors.jpg',
    thumb: '/images/joinery-doors.jpg',
  },
  {
    id: 'corian',
    num: '03',
    label: 'Corian & Surface Works',
    shortLabel: 'Surfaces',
    tag: 'Solid Surface · Corian · Clinical Countertops · Vanities',
    summary: 'Precision solid surface fabrication — Corian countertops, seamless vanity units, clinical nurse stations, and bespoke surface elements.',
    desc: 'EGC fabricates and installs solid surface elements (Corian and equivalent brands) for medical, commercial, and hospitality projects. Solid surface\'s seamless, non-porous properties make it the standard choice for clinical settings. We handle everything from templating and workshop fabrication to on-site installation and polishing.',
    capabilities: [
      'Clinical and medical-grade countertops',
      'Corian vanity units with integrated sinks',
      'Nurse station and reception surfaces',
      'Laboratory bench and workstation tops',
      'Hospitality and F&B counter surfaces',
      'Custom profiles, shapes, and edge details',
    ],
    image: '/images/corian-surfaces.jpg',
    thumb: '/images/corian-surfaces.jpg',
  },
  {
    id: 'steel',
    num: '04',
    label: 'Steel & Metal Fabrication',
    shortLabel: 'Steel',
    tag: 'Electrical Enclosures · Panel Fabrication · Structural Steel',
    summary: 'Custom steel and metalwork fabrication for electrical panel housings, mechanical supports, and structural components.',
    desc: 'EGC\'s steel fabrication workshop produces precision metalwork for electrical, mechanical, and architectural applications. We fabricate electrical panel and switchgear enclosures, structural supports for MEP systems, and architectural metalwork — all from engineering drawings, surface-treated and delivered to site ready for installation.',
    capabilities: [
      'Electrical distribution panel enclosures',
      'Control cabinet and switchgear housings',
      'Structural steel supports and platforms',
      'Mechanical system housings and supports',
      'Architectural metalwork and features',
      'Surface treatment, primer, and coating',
    ],
    image: null,
    thumb: null,
  },
];

/* Keep DIVISIONS exported as alias for any pages that still reference it */
export const DIVISIONS = SERVICES;

export const PROJECTS = [
  { id: 1, city: 'Jeddah',  code: 'JED', x: 181.4, y: 361.7, name: 'King Faisal Specialist Hospital — Radiology Fit-Out', client: 'Government Health Authority', sector: 'Healthcare', service: 'healthcare', status: 'Completed', year: '2023', blurb: 'Complete fit-out of the radiology department including six x-ray rooms, two MRI suites with full RF and radiation shielding, and all associated medical joinery.' },
  { id: 2, city: 'Jeddah',  code: 'JED', x: 181.4, y: 361.7, name: 'Private Medical Centre — Reception & Interior Joinery', client: 'Private Healthcare Group', sector: 'Healthcare', service: 'joinery', status: 'Completed', year: '2023', blurb: 'Custom reception counters, clinic doors, and interior woodwork for a multi-floor private medical centre in North Jeddah.' },
  { id: 3, city: 'Riyadh',  code: 'RUH', x: 380.6, y: 267.5, name: 'National Guard Hospital — Imaging Department', client: 'Government Health Authority', sector: 'Healthcare', service: 'healthcare', status: 'Completed', year: '2022', blurb: 'CT and x-ray room construction package including lead-lined shielding, radiation doors, and Corian nursing station countertops.' },
  { id: 4, city: 'Riyadh',  code: 'RUH', x: 380.6, y: 267.5, name: 'Commercial Tower — Lobby & Reception Fit-Out', client: 'Private Developer', sector: 'Commercial', service: 'joinery', status: 'Completed', year: '2022', blurb: 'Feature reception counter, lobby panelling, and architectural woodwork package for a Grade-A commercial tower.' },
  { id: 5, city: 'Dammam',  code: 'DMM', x: 471.9, y: 217.6, name: 'Dammam Medical Complex — Oncology Wing', client: 'Government Health Authority', sector: 'Healthcare', service: 'healthcare', status: 'Ongoing', year: '2025', blurb: 'Radiation therapy room construction, lead shielding, and specialist door installation for a new oncology department.' },
  { id: 6, city: 'Madinah', code: 'MED', x: 191.4, y: 273.0, name: 'Hospitality Resort — Interior Joinery Package', client: 'Private Developer', sector: 'Hospitality', service: 'joinery', status: 'Completed', year: '2023', blurb: 'Doors, panelling, and millwork for guest rooms and public areas of a hospitality resort development.' },
  { id: 7, city: 'Jubail',  code: 'JUB', x: 459.1, y: 200.6, name: 'Industrial Facility — Electrical Panel Enclosures', client: 'Private Operator', sector: 'Industrial', service: 'steel', status: 'Completed', year: '2024', blurb: 'Custom fabricated electrical distribution panel enclosures for an industrial city facility expansion.' },
  { id: 8, city: 'Jeddah',  code: 'JED', x: 181.4, y: 361.7, name: 'Café & Dining Chain — Multi-Site Fit-Out', client: 'Private F&B Group', sector: 'Hospitality', service: 'joinery', status: 'Completed', year: '2024', blurb: 'Complete interior joinery and Corian surface works across multiple café and dining outlets in Jeddah.' },
  { id: 9, city: 'Abha',    code: 'AHA', x: 269.6, y: 457.2, name: 'Mountain Clinic — Full Interior Fit-Out', client: 'Private Healthcare', sector: 'Healthcare', service: 'corian', status: 'Ongoing', year: '2025', blurb: 'Reception counters, Corian vanity units, and interior joinery for a private clinic in the Aseer region.' },
];

export const PROJECT_FILTERS = [
  { id: 'all',        label: 'All Projects' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'joinery',    label: 'Joinery' },
  { id: 'corian',     label: 'Surfaces' },
  { id: 'steel',      label: 'Steel' },
];

export const KSA_PATH = 'M 276.9 511.8 L 273.4 499.3 L 265.4 490.5 L 263.4 478.8 L 249.6 468.4 L 235.4 443.9 L 227.9 420.1 L 209.5 400.0 L 197.6 395.2 L 180.0 367.4 L 176.9 347.1 L 178.0 329.8 L 162.8 297.4 L 150.3 286.0 L 135.9 280.0 L 127.2 263.2 L 128.6 256.6 L 121.2 241.5 L 113.4 235.0 L 103.0 213.3 L 86.8 189.7 L 73.3 169.7 L 60.0 169.8 L 64.1 153.8 L 65.3 143.5 L 68.6 131.9 L 98.2 136.5 L 109.8 127.5 L 116.1 117.0 L 136.4 113.0 L 140.8 103.2 L 149.6 98.3 L 123.1 69.1 L 176.4 54.4 L 181.5 50.0 L 213.6 57.9 L 253.2 78.4 L 328.3 137.1 L 377.8 139.4 L 401.5 142.2 L 408.1 156.1 L 427.0 155.4 L 437.4 180.6 L 450.5 187.2 L 455.0 197.5 L 473.2 209.8 L 474.8 221.8 L 472.2 231.5 L 475.5 241.4 L 483.2 249.5 L 486.7 259.1 L 490.7 266.3 L 498.8 272.1 L 506.1 270.0 L 511.2 281.1 L 512.2 287.9 L 522.4 317.5 L 602.4 332.2 L 607.8 326.0 L 620.0 346.7 L 602.3 405.1 L 522.4 434.3 L 445.6 445.5 L 420.8 458.6 L 401.7 489.3 L 389.3 494.2 L 382.6 484.4 L 372.4 485.9 L 346.7 483.0 L 341.8 480.1 L 311.1 480.7 L 303.8 483.4 L 292.9 475.8 L 285.9 490.1 L 288.6 502.4 L 276.9 511.8 Z';

export const TEAM = [
  { id: 1, name: 'Name Surname', role: 'Managing Director',              badge: 'EGC-0001', dept: 'Leadership'      },
  { id: 2, name: 'Name Surname', role: 'Operations Director',            badge: 'EGC-0002', dept: 'Operations'      },
  { id: 3, name: 'Name Surname', role: 'Head of Healthcare Projects',    badge: 'EGC-0003', dept: 'Healthcare'      },
  { id: 4, name: 'Name Surname', role: 'Head of Joinery & Millwork',     badge: 'EGC-0004', dept: 'Joinery'         },
  { id: 5, name: 'Name Surname', role: 'Head of Steel Fabrication',      badge: 'EGC-0005', dept: 'Steel'           },
  { id: 6, name: 'Name Surname', role: 'Business Development Manager',   badge: 'EGC-0006', dept: 'Commercial'      },
  { id: 7, name: 'Name Surname', role: 'HSE Manager',                    badge: 'EGC-0007', dept: 'Health & Safety' },
  { id: 8, name: 'Name Surname', role: 'Procurement Lead',               badge: 'EGC-0008', dept: 'Procurement'     },
];

export const VALUES = [
  { title: 'Precision Over Everything',   desc: 'Healthcare environments where shielding has to be right. Joinery where tolerances are measured in millimetres. We hold that standard across all our work.' },
  { title: 'In-House, End to End',         desc: 'We design, fabricate, and install with our own people. No handoffs, no subcontracting the parts that matter.' },
  { title: 'Programme Reliability',        desc: 'A hospital cannot open a department late. We understand programme criticality and deliver on the dates we commit to.' },
  { title: 'Kingdom-First Partnership',    desc: "Deep roots in Saudi Arabia's healthcare and construction market — and the relationships that come with 18 years of delivery." },
];

export const CERTIFICATIONS = [
  { code: 'ISO 9001',  name: 'Quality Management System',    desc: 'Quality management system governing all EGC fabrication and site operations.' },
  { code: 'ISO 45001', name: 'Occupational Health & Safety', desc: 'Active HSE programme with site safety audits, incident tracking, and toolbox talks.' },
  { code: 'ISO 14001', name: 'Environmental Management',     desc: 'Environmental procedures for waste, hazardous materials, and site impact.' },
];

export const CAREERS = [
  { title: 'Healthcare Project Supervisor',     dept: 'Healthcare Projects',     location: 'Jeddah / Site', type: 'Full-time' },
  { title: 'Radiation Shielding Technician',    dept: 'Healthcare Projects',     location: 'Jeddah / Site', type: 'Full-time' },
  { title: 'Site Supervisor — Joinery',         dept: 'Joinery & Millwork',      location: 'Jeddah / Site', type: 'Full-time' },
  { title: 'Joinery Shop Manager',              dept: 'Joinery & Millwork',      location: 'Jeddah',        type: 'Full-time' },
  { title: 'Corian Surface Fabricator',         dept: 'Surface Works',           location: 'Jeddah',        type: 'Full-time' },
  { title: 'Steel Fabricator',                  dept: 'Steel Fabrication',       location: 'Jeddah',        type: 'Full-time' },
  { title: 'CNC Machine Operator',              dept: 'Steel Fabrication',       location: 'Jeddah',        type: 'Full-time' },
  { title: 'HSE Officer',                       dept: 'Health & Safety',         location: 'Jeddah / Site', type: 'Full-time' },
  { title: 'Project Engineer',                  dept: 'Projects',                location: 'Jeddah / Site', type: 'Full-time' },
  { title: 'QA/QC Inspector',                   dept: 'Quality',                 location: 'Jeddah / Site', type: 'Full-time' },
  { title: 'Procurement Specialist',            dept: 'Procurement',             location: 'Jeddah',        type: 'Full-time' },
  { title: 'Business Development Executive',    dept: 'Commercial',              location: 'Jeddah',        type: 'Full-time' },
];

export const SUPPLIER_STEPS = [
  { n: '01', title: 'Register',                desc: 'Create a vendor account on the EGC ERP Supplier Portal at erp.egc-me.com.' },
  { n: '02', title: 'Submit Documents',        desc: 'Upload your Commercial Registration (CR), ZATCA certificate, product catalogue, and relevant quality certifications.' },
  { n: '03', title: 'Prequalification Review', desc: 'Our procurement team verifies your submission and may request additional information or a site/factory visit.' },
  { n: '04', title: 'Approved Vendor',         desc: "Once approved, you are listed on EGC's approved vendor register and will receive RFQs from our active project portfolio." },
];
