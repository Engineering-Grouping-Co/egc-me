// Writes src/content/lastmod.json: the date each page's own content last changed, taken from git.
// Used for the sitemap <lastmod> and the WebPage dateModified in the JSON-LD, so a deploy only
// moves the dates of pages whose content or template actually changed. Shared files (header,
// footer, styles) are left out on purpose: a menu tweak must not mark every page as modified.
// Needs the full git history (see fetch-depth in .github/workflows/deploy.yml); if git is missing
// or the clone is shallow it falls back to today's date, which is no worse than before.
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const TODAY = new Date().toISOString().slice(0, 10);

const P = (f) => `src/pages/${f}.jsx`;
const C = (f) => `src/content/${f}.js`;
const SOURCES = {
  home: [P('Home'), 'src/components/HeroSlides.jsx', C('home')],
  about: [P('About'), C('home'), C('company')],
  hub: [P('Hub'), C('sectors'), C('services')],
  shielding: [P('ServicePage'), C('services')],
  doors: [P('ServicePage'), C('services')],
  mep: [P('ServicePage'), C('services')],
  surfaces: [P('ServicePage'), C('services')],
  services: [P('Services'), C('servicesIndex')],
  manufacturing: [P('Manufacturing'), C('sectors')],
  software: [P('SoftwareEngineering'), C('sectors')],
  projects: [P('Projects'), C('projects'), C('copy')],
  careers: [P('Careers'), C('careers')],
  suppliers: [P('Suppliers'), C('suppliers')],
  contact: [P('Contact')],
  legalProfile: [P('LegalProfile'), C('legalProfile')],
  privacyPolicy: [P('PrivacyPolicy'), C('legalPages')],
  terms: [P('Terms'), C('legalPages')],
};

function gitDate(files) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cs', '--', ...files], { cwd: ROOT, encoding: 'utf8' }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : TODAY;
  } catch {
    return TODAY;
  }
}

const CAT = (f) => `src/content/catalog/${f}.js`;
const PAGES = [P('DetailPage')];
for (const k of ['mriRoom', 'ctRoom', 'petCtRoom', 'xrayRoom']) SOURCES[k] = [...PAGES, CAT('rooms')];
for (const k of ['woodenDoors', 'corianSurfaces', 'joinery']) SOURCES[k] = [...PAGES, CAT('factory')];
for (const k of ['medicalGas', 'hvac', 'fireProtection', 'nurseCall']) SOURCES[k] = [...PAGES, CAT('building')];
for (const k of ['hospitalFitOut', 'orCeilings', 'wallPanels', 'hermeticDoors']) SOURCES[k] = [...PAGES, CAT('interiors')];
for (const k of ['hisRis', 'erp', 'websites']) SOURCES[k] = [...PAGES, CAT('software')];

const out = Object.fromEntries(Object.entries(SOURCES).map(([key, files]) => [key, gitDate(files)]));
writeFileSync(path.join(ROOT, 'src/content/lastmod.json'), `${JSON.stringify(out, null, 2)}\n`);
console.log('[lastmod] wrote src/content/lastmod.json');
