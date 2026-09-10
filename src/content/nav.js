/* Nav structure only — labels are pulled from UI content in Header.jsx so
 * each label lives in exactly one place (src/content/ui.js). */
export const NAV_STRUCTURE = [
  { key: 'about', segment: 'about' },
  {
    key: 'sectors',
    children: [
      { key: 'whatWeBuild', segment: 'what-we-build', labelKey: 'sectorHealthcare', tagKey: 'sectorHealthcareTag' },
      { key: 'manufacturing', segment: 'manufacturing', labelKey: 'sectorManufacturing', tagKey: 'sectorManufacturingTag' },
      { key: 'softwareEngineering', segment: 'software-engineering', labelKey: 'sectorSoftware', tagKey: 'sectorSoftwareTag' },
    ],
  },
  { key: 'projects', segment: 'projects' },
  { key: 'careers', segment: 'careers' },
  { key: 'suppliers', segment: 'suppliers' },
  { key: 'contact', segment: 'contact', cta: true },
];
