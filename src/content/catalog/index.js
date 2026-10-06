/* The wide catalogue: every service and product EGC covers, one page each.
 * The core pages (hub, four disciplines, manufacturing, software) live in services.js and sectors.js;
 * these entries hang under them as children and are linked from /services/.
 * Only add a service here once the client has confirmed that EGC does it. */
import { ROOMS } from './rooms.js';
import { BUILDING } from './building.js';
import { INTERIORS } from './interiors.js';
import { FACTORY } from './factory.js';
import { SOFTWARE_PAGES } from './software.js';

export const CATALOG = [...ROOMS, ...BUILDING, ...INTERIORS, ...FACTORY, ...SOFTWARE_PAGES];
export const CATALOG_KEYS = CATALOG.map((c) => c.key);
export const byKey = (key) => CATALOG.find((c) => c.key === key);
export const childrenOf = (parent) => CATALOG.filter((c) => c.parent === parent);

/* The groups shown on /services/, in the nav, in the footer and on the home page.
 * `core` is the existing page the group hangs under; `disciplines` adds the four specialist disciplines. */
export const GROUPS = [
  { id: 'specialist', core: 'hub', disciplines: true, keys: ['mriRoom', 'ctRoom', 'petCtRoom', 'xrayRoom'] },
  { id: 'building', core: 'mep', keys: ['medicalGas', 'hvac', 'fireProtection', 'nurseCall'] },
  { id: 'interiors', core: 'hospitalFitOut', keys: ['hospitalFitOut', 'orCeilings', 'wallPanels', 'hermeticDoors'] },
  { id: 'factory', core: 'manufacturing', keys: ['woodenDoors', 'corianSurfaces', 'joinery'] },
  { id: 'software', core: 'software', keys: ['hisRis', 'erp', 'websites'] },
];
