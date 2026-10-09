/* Equipment manufacturers EGC prepares rooms for. `ratio` is the logo's width / height
 * and `h` its display height in px (tuned per mark so the three read at the same
 * visual weight). To add a partner, drop an SVG into public/images/partners/ and add a row.
 * Without a `logo`, the strip falls back to the name as text. */
export const PARTNERS = [
  { id: 'siemens-healthineers', name: 'Siemens Healthineers', logo: '/images/partners/siemens-healthineers.svg', ratio: 4, h: 46 },
  { id: 'philips-healthcare', name: 'Philips Healthcare', logo: '/images/partners/philips-healthcare.svg', ratio: 5.454, h: 32 },
  { id: 'ge-healthcare', name: 'GE HealthCare', logo: '/images/partners/ge-healthcare.svg', ratio: 4.5, h: 38 },
];
