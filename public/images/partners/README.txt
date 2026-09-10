Drop client-supplied OEM partner logo files here, named to match
src/content/partners.js:

  siemens-healthineers.svg
  philips-healthcare.svg
  ge-healthcare.svg

Until a file exists, PartnerStrip.jsx automatically falls back to a clean
text badge for that partner (no broken image, no placeholder graphic) —
so this directory can safely stay empty until real logo files are
supplied and cleared for use.
