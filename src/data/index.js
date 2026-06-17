export const SITE = {
  name: 'Engineering Grouping Co.',
  shortName: 'EGC',
  phone: '+966 11 000 0000',
  email: 'info@egc-me.com',
  address: '[Street], [District], Riyadh, Kingdom of Saudi Arabia',
  cr: '[XXXXXXXXXX]',
  founded: '[YEAR]',
  supplierPortal: 'https://erp.egc-me.com',
  linkedin: 'https://www.linkedin.com/company/egc-me/',
};

export const NAV_LINKS = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About' },
  { href: '/divisions', label: 'Divisions' },
  { href: '/projects',  label: 'Projects' },
  { href: '/careers',   label: 'Careers' },
  { href: '/suppliers', label: 'Suppliers' },
  { href: '/contact',   label: 'Contact Us', cta: true },
];

export const STATS = [
  { n: '150+', l: 'Projects Delivered' },
  { n: '18',   l: 'Years of Operation' },
  { n: '9',    l: 'Regions Served' },
  { n: '3',    l: 'Active Divisions' },
];

export const DIVISIONS = [
  {
    id: 'steel', num: '01', label: 'Steel',
    tag: 'Structural Steel · Plate Work · Architectural Metalwork',
    summary: 'Structural steel, plate work, and architectural metalwork — designed, cut, welded, and erected by our own crews.',
    desc: 'EGC Steel handles the full lifecycle of structural steel works: from engineering coordination and shop drawings through CNC cutting, shop welding, surface treatment, and site erection. Our in-house fabrication shop gives us direct control over quality, programme, and cost.',
    capabilities: [
      { title: 'Structural Steelwork', desc: 'Primary and secondary structural frames for buildings, warehouses, and industrial facilities.' },
      { title: 'Plate Work & Fabrication', desc: 'Custom steel plate fabrication for tanks, hoppers, platforms, and bespoke structural elements.' },
      { title: 'Architectural Metalwork', desc: 'Handrails, balustrades, feature staircases, canopies, and facade metalwork.' },
      { title: 'Site Erection', desc: 'Our own erection crews mobilise with the fabrication package — no handoff risk.' },
      { title: 'Surface Treatment', desc: 'Shot blasting, primer, and topcoat application to project specification.' },
      { title: 'Engineering Coordination', desc: 'Shop drawing production, design-assist, and BIM coordination support.' },
    ],
    specs: [
      { k: 'Material Grades', v: 'A36, A572, S275, S355 and project-specified grades' },
      { k: 'Shop Capacity',   v: '[X] tonnes/month fabrication capacity' },
      { k: 'Cutting',         v: 'CNC plasma and oxy-fuel cutting' },
      { k: 'Welding',         v: 'AWS D1.1 qualified welders — MIG / TIG / SMAW' },
      { k: 'NDT',             v: 'UT, MT, PT — third-party certified' },
      { k: 'Certifications',  v: 'ISO 9001 quality management' },
    ],
    sectors: ['Government & Infrastructure', 'Industrial & Petrochemical', 'Commercial & Mixed-Use', 'Giga-Projects'],
  },
  {
    id: 'wood', num: '02', label: 'Wood',
    tag: 'Joinery · Millwork · Architectural Woodwork',
    summary: 'Architectural woodwork and joinery for interiors, hospitality fit-outs, and custom millwork, built to drawing in our timber shop.',
    desc: 'EGC Wood produces architectural joinery, custom millwork, and interior woodwork for hospitality, commercial, and residential developments. From solid timber structures to veneer panelling and bespoke furniture-grade casework, our timber shop delivers to international finishing standards.',
    capabilities: [
      { title: 'Architectural Joinery',  desc: 'Doors, frames, panelling, and bespoke interior woodwork designed and produced in-house.' },
      { title: 'Custom Millwork',        desc: 'Reception desks, feature walls, built-in furniture, and decorative mouldings.' },
      { title: 'Hospitality Fit-Out',    desc: 'Guest room, lobby, and F&B woodwork packages for hotels and resorts.' },
      { title: 'Timber Structures',      desc: 'Exposed timber frames, pergolas, and external timber cladding systems.' },
      { title: 'Site Installation',      desc: 'Our own installation crews for both interior and exterior woodwork.' },
      { title: 'Finishing',              desc: 'Staining, lacquering, and paint finishing to international FF&E specification.' },
    ],
    specs: [
      { k: 'Species',       v: 'Oak, Teak, Walnut, MDF, and project-specified timbers' },
      { k: 'Standards',     v: 'AWI quality grades, project specification' },
      { k: 'Machining',     v: 'CNC routing, precision milling, edge banding' },
      { k: 'Finishes',      v: 'Water-based and solvent lacquers, stains, oils' },
      { k: 'Shop Capacity', v: '[X] sqm/month millwork capacity' },
      { k: 'Certifications',v: 'ISO 9001 quality management' },
    ],
    sectors: ['Hospitality & Tourism', 'Commercial Interiors', 'Residential Fit-Out', 'Retail & F&B'],
  },
  {
    id: 'leadsheet', num: '03', label: 'Lead Sheet', badge: 'NEW',
    tag: 'Roofing · Flashing · Waterproofing',
    summary: 'EGC is expanding into lead sheet works for roofing, flashing, and waterproofing applications.',
    desc: "EGC's third division brings the same in-house fabrication and site discipline to lead sheet works. Lead sheet is the material of choice for long-life, maintenance-free roofing, flashing, and waterproofing on high-specification projects. EGC is building this capability to serve giga-projects and premium developments across the Kingdom.",
    capabilities: [
      { title: 'Roofing Systems',        desc: 'Lead sheet roofing laid by trained operatives to BS EN 12588 and project specification.' },
      { title: 'Flashing & Weatherings', desc: 'Valley, step, soaker, abutment, and chimney flashings in code-weight lead.' },
      { title: 'Waterproofing',          desc: 'Lead sheet waterproofing for flat roofs, parapets, and below-ground details.' },
      { title: 'Heritage & Conservation',desc: 'Sympathetic lead sheet works to conservation-grade specification.' },
      { title: 'Cladding',               desc: 'Lead sheet cladding for facades, domes, and feature architectural elements.' },
      { title: 'Fabricated Components',  desc: 'In-house fabrication of bespoke lead sheet components prior to site installation.' },
    ],
    specs: [
      { k: 'Standard',      v: 'BS EN 12588 — milled lead for building purposes' },
      { k: 'Codes',         v: 'Code 3 to Code 8 as specified' },
      { k: 'Testing',       v: 'Water-test and third-party inspection available' },
      { k: 'Fixings',       v: 'Copper clips and nails, stainless steel fixings' },
      { k: 'Certifications',v: 'ISO 9001 quality management (in progress)' },
    ],
    sectors: ['Giga-Projects & Premium Developments', 'Heritage & Conservation', 'Government Infrastructure', 'Hospitality & Leisure'],
  },
];

export const PROJECTS = [
  { id: 1, city: 'Riyadh',  code: 'RUH',  x: 380.6, y: 267.5, name: 'Government Administrative Complex',   client: 'Government Authority', sector: 'Government', division: 'steel',     status: 'Completed',  year: '2023', blurb: 'Structural steel package for a multi-building government administrative complex, including erection and finish coating.' },
  { id: 2, city: 'Jeddah',  code: 'JED',  x: 181.4, y: 361.7, name: 'Coastal Retail & Hospitality Fit-Out', client: 'Private Developer',    sector: 'Private',     division: 'wood',      status: 'Completed',  year: '2022', blurb: 'Architectural joinery and custom millwork for a retail and hospitality development on the Red Sea coast.' },
  { id: 3, city: 'Dammam',  code: 'DMM',  x: 471.9, y: 217.6, name: 'Industrial Storage Facility',          client: 'Private Operator',     sector: 'Private',     division: 'steel',     status: 'Completed',  year: '2024', blurb: 'Design-assist structural steel fabrication and erection for a high-bay industrial storage facility.' },
  { id: 4, city: 'Jubail',  code: 'JUB',  x: 459.1, y: 200.6, name: 'Petrochemical Facility Expansion',     client: 'Government Authority', sector: 'Government', division: 'steel',     status: 'Ongoing',    year: '2025', blurb: 'Structural and piping-support steelwork for a phased expansion at an industrial city facility.' },
  { id: 5, city: 'Madinah', code: 'MED',  x: 191.4, y: 273.0, name: 'Hospitality Interior Fit-Out',         client: 'Private Developer',    sector: 'Private',     division: 'wood',      status: 'Completed',  year: '2023', blurb: 'Custom joinery, panelling, and millwork for guest rooms and public areas of a hospitality project.' },
  { id: 6, city: 'NEOM',    code: 'NEOM', x: 74.2,  y: 172.5, name: 'Giga-Project Site Infrastructure',    client: 'Giga-Project Authority',sector: 'Government', division: 'leadsheet', status: 'Mobilizing', year: '2026', blurb: "Early-stage roofing, flashing, and waterproofing scope for site infrastructure — EGC Lead Sheet's first mobilization." },
  { id: 7, city: 'Abha',    code: 'AHA',  x: 269.6, y: 457.2, name: 'Mountain Resort Development',          client: 'Private Developer',    sector: 'Private',     division: 'wood',      status: 'Ongoing',    year: '2025', blurb: 'Timber structures and exterior woodwork for a resort development in the Aseer highlands.' },
  { id: 8, city: 'Hail',    code: 'HAS',  x: 247.9, y: 185.8, name: 'Agricultural Logistics Hub',           client: 'Government Authority', sector: 'Government', division: 'steel',     status: 'Completed',  year: '2022', blurb: 'Pre-engineered and structural steel for a regional agricultural logistics and cold-storage hub.' },
  { id: 9, city: 'Yanbu',   code: 'YNB',  x: 151.3, y: 285.7, name: 'Industrial City Cladding Package',     client: 'Private Operator',     sector: 'Private',     division: 'leadsheet', status: 'Ongoing',    year: '2026', blurb: 'Lead sheet cladding and waterproofing package for a facility upgrade in the Yanbu Industrial City.' },
];

export const PROJECT_FILTERS = [
  { id: 'all',       label: 'All Projects' },
  { id: 'steel',     label: 'Steel' },
  { id: 'wood',      label: 'Wood' },
  { id: 'leadsheet', label: 'Lead Sheet' },
];

export const KSA_PATH = 'M 276.9 511.8 L 273.4 499.3 L 265.4 490.5 L 263.4 478.8 L 249.6 468.4 L 235.4 443.9 L 227.9 420.1 L 209.5 400.0 L 197.6 395.2 L 180.0 367.4 L 176.9 347.1 L 178.0 329.8 L 162.8 297.4 L 150.3 286.0 L 135.9 280.0 L 127.2 263.2 L 128.6 256.6 L 121.2 241.5 L 113.4 235.0 L 103.0 213.3 L 86.8 189.7 L 73.3 169.7 L 60.0 169.8 L 64.1 153.8 L 65.3 143.5 L 68.6 131.9 L 98.2 136.5 L 109.8 127.5 L 116.1 117.0 L 136.4 113.0 L 140.8 103.2 L 149.6 98.3 L 123.1 69.1 L 176.4 54.4 L 181.5 50.0 L 213.6 57.9 L 253.2 78.4 L 328.3 137.1 L 377.8 139.4 L 401.5 142.2 L 408.1 156.1 L 427.0 155.4 L 437.4 180.6 L 450.5 187.2 L 455.0 197.5 L 473.2 209.8 L 474.8 221.8 L 472.2 231.5 L 475.5 241.4 L 483.2 249.5 L 486.7 259.1 L 490.7 266.3 L 498.8 272.1 L 506.1 270.0 L 511.2 281.1 L 512.2 287.9 L 522.4 317.5 L 602.4 332.2 L 607.8 326.0 L 620.0 346.7 L 602.3 405.1 L 522.4 434.3 L 445.6 445.5 L 420.8 458.6 L 401.7 489.3 L 389.3 494.2 L 382.6 484.4 L 372.4 485.9 L 346.7 483.0 L 341.8 480.1 L 311.1 480.7 L 303.8 483.4 L 292.9 475.8 L 285.9 490.1 L 288.6 502.4 L 276.9 511.8 Z';

export const TEAM = [
  { id: 1, name: 'Name Surname', role: 'Managing Director',         badge: 'EGC-0001', dept: 'Leadership'      },
  { id: 2, name: 'Name Surname', role: 'Operations Director',       badge: 'EGC-0002', dept: 'Operations'      },
  { id: 3, name: 'Name Surname', role: 'Head of Steel Fabrication', badge: 'EGC-0003', dept: 'Manufacturing'   },
  { id: 4, name: 'Name Surname', role: 'Head of Timber & Joinery',  badge: 'EGC-0004', dept: 'Manufacturing'   },
  { id: 5, name: 'Name Surname', role: 'Lead Sheet Division Lead',  badge: 'EGC-0005', dept: 'Manufacturing'   },
  { id: 6, name: 'Name Surname', role: 'Business Development Mgr.', badge: 'EGC-0006', dept: 'Commercial'      },
  { id: 7, name: 'Name Surname', role: 'HSE Manager',               badge: 'EGC-0007', dept: 'Health & Safety' },
  { id: 8, name: 'Name Surname', role: 'Procurement Lead',          badge: 'EGC-0008', dept: 'Procurement'     },
];

export const VALUES = [
  { title: 'In-House Quality',      desc: 'Every piece leaves our shop meeting the specification. We do not outsource what we can control.' },
  { title: 'Programme Discipline',  desc: 'We commit to sequences, milestones, and handover dates — and we deliver on them.' },
  { title: 'Long-Term Partnerships',desc: 'Our repeat client list reflects the relationships we build on every project.' },
  { title: 'Kingdom-First Approach',desc: "Focused on Saudi Arabia's Vision 2030 projects and the contractors delivering them." },
];

export const CERTIFICATIONS = [
  { code: 'ISO 9001',  name: 'Quality Management System',       desc: 'Certified quality management system governing all EGC fabrication and site operations.' },
  { code: 'ISO 45001', name: 'Occupational Health & Safety',    desc: 'Active HSE programme with incident tracking, toolbox talks, and site safety audits.' },
  { code: 'ISO 14001', name: 'Environmental Management',        desc: 'Environmental management procedures for waste, hazardous materials, and site impact.' },
];

export const CAREERS = [
  { title: 'Senior Steel Fabricator',        dept: 'Manufacturing — Steel',      location: 'Riyadh',       type: 'Full-time' },
  { title: 'Steel Erection Foreman',         dept: 'Manufacturing — Steel',      location: 'Riyadh / Site',type: 'Full-time' },
  { title: 'CNC Machine Operator',           dept: 'Manufacturing — Steel',      location: 'Riyadh',       type: 'Full-time' },
  { title: 'Site Supervisor — Joinery',      dept: 'Manufacturing — Wood',       location: 'Jeddah',       type: 'Full-time' },
  { title: 'Joinery Shop Manager',           dept: 'Manufacturing — Wood',       location: 'Riyadh',       type: 'Full-time' },
  { title: 'Lead Sheet Technician',          dept: 'Manufacturing — Lead Sheet', location: 'NEOM',         type: 'Full-time' },
  { title: 'HSE Officer',                    dept: 'Health & Safety',            location: 'Riyadh',       type: 'Full-time' },
  { title: 'Procurement Specialist',         dept: 'Procurement',                location: 'Riyadh',       type: 'Full-time' },
  { title: 'Business Development Executive', dept: 'Commercial',                 location: 'Riyadh',       type: 'Full-time' },
  { title: 'Project Engineer',               dept: 'Projects',                   location: 'Riyadh / Site',type: 'Full-time' },
  { title: 'QA/QC Inspector',               dept: 'Quality',                    location: 'Riyadh / Site',type: 'Full-time' },
  { title: 'Finance & Admin Officer',        dept: 'Corporate',                  location: 'Riyadh',       type: 'Full-time' },
];

export const SUPPLIER_STEPS = [
  { n: '01', title: 'Register',                desc: 'Create a vendor account on the EGC ERP Supplier Portal at erp.egc-me.com.' },
  { n: '02', title: 'Submit Documents',        desc: 'Upload your Commercial Registration (CR), ZATCA certificate, product catalogue, and relevant quality certifications.' },
  { n: '03', title: 'Prequalification Review', desc: 'Our procurement team verifies your submission and may request additional information or a site/factory visit.' },
  { n: '04', title: 'Approved Vendor',         desc: "Once approved, you are listed on EGC's approved vendor register and will receive RFQs from active projects across all three divisions." },
];
