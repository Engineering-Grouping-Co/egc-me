/* OEM partner trust strip (Home + About). Logo files are placeholders —
 * see public/images/partners/README.txt — swap for client-supplied files.
 * Text-badge fallback renders automatically if a logo fails to load. */
export const PARTNERS = [
  { id: 'siemens-healthineers', name: 'Siemens Healthineers', logo: '/images/partners/siemens-healthineers.svg' },
  { id: 'philips-healthcare', name: 'Philips Healthcare', logo: '/images/partners/philips-healthcare.svg' },
  { id: 'ge-healthcare', name: 'GE Healthcare', logo: '/images/partners/ge-healthcare.svg' },
];

export const PARTNER_STRIP_COPY = {
  en: {
    label: 'Room-Preparation Partner For',
    note: 'Supporting equipment installations for leading OEM medical imaging manufacturers across Saudi Arabia.',
  },
  ar: {
    label: 'شريك تجهيز الغرف لمعدات',
    note: 'دعم تركيب معدات كبرى الشركات المصنّعة لأجهزة التصوير الطبي في جميع أنحاء المملكة العربية السعودية.',
  },
};
