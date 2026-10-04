Drop client-supplied OEM partner logo files here:

  siemens-healthineers.svg
  philips-healthcare.svg
  ge-healthcare.svg

Then point each entry in src/content/partners.js at its file, e.g.

  { id: 'siemens-healthineers', name: 'Siemens Healthineers', logo: '/images/partners/siemens-healthineers.svg' }

While `logo` is null the PartnerStrip (src/components/Parts.jsx) shows the manufacturer's
name as text, so this folder can stay empty until the files are supplied and cleared for use.
Use a single-colour or greyscale version and a transparent background; the strip renders
logos at 28px high.
