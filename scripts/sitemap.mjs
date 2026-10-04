// Generates dist/sitemap.xml, dist/robots.txt, dist/llms.txt and dist/llms-full.txt from the same
// content modules the pages render from, so none of them can drift out of date.
// Runs as the last step of `npm run build` (after prerender.mjs).
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { LOCALES, DEFAULT_LOCALE, ROUTES, STANDALONE_ROUTES, SITE_URL, routeUrl } from '../src/content/routes.js';
import { SITE } from '../src/content/site.js';
import { getSeo } from '../src/content/seo.js';
import { getFaqs } from '../src/content/faq.js';
import { SERVICES } from '../src/content/services.js';
import { ARTICLES } from '../src/content/knowledge.js';
import { HOME, ABOUT } from '../src/content/home.js';
import { HUB, MANUFACTURING, SOFTWARE, SYSTEMS } from '../src/content/sectors.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(path.resolve(__dirname, '..'), 'dist');
const TODAY = new Date().toISOString().slice(0, 10);

/* ── sitemap ── */
function alternates(segment) {
  const links = LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${routeUrl(l, segment)}" />`);
  links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${routeUrl(DEFAULT_LOCALE, segment)}" />`);
  return links.join('\n');
}

function sitemap() {
  const entries = [];
  for (const r of ROUTES) {
    for (const locale of LOCALES) {
      entries.push(`  <url>\n    <loc>${routeUrl(locale, r.segment)}</loc>\n    <lastmod>${TODAY}</lastmod>\n${alternates(r.segment)}\n  </url>`);
    }
  }
  for (const r of STANDALONE_ROUTES) entries.push(`  <url>\n    <loc>${SITE_URL}${r.path}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </url>`);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
}

/* ── robots: everyone is welcome, AI search and assistant crawlers explicitly ── */
const AI_AGENTS = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Bingbot',
  'DuckAssistBot', 'MistralAI-User', 'cohere-ai', 'Amazonbot', 'meta-externalagent', 'CCBot', 'YouBot',
];

function robots() {
  const groups = ['Googlebot', ...AI_AGENTS].map((a) => `User-agent: ${a}\nAllow: /\n`).join('\n');
  return `# Engineering Grouping Co. (EGC) — egc-me.com
# Search engines and AI assistants are welcome to crawl, index and cite this site.
# A plain-language summary for language models is at ${SITE_URL}/llms.txt

User-agent: *
Allow: /

${groups}
Sitemap: ${SITE_URL}/sitemap.xml
`;
}

/* ── llms.txt (https://llmstxt.org) ── */
const FACTS = {
  en: () => HOME.en.glance.rows.map(([k, v]) => `- ${k}: ${v}`).join('\n'),
  ar: () => HOME.ar.glance.rows.map(([k, v]) => `- ${k}: ${v}`).join('\n'),
};

function pageLine(key, locale) {
  const r = ROUTES.find((x) => x.key === key);
  const s = getSeo(key, locale);
  return `- [${s.name}](${routeUrl(locale, r.segment)}): ${s.description}`;
}

function llms() {
  const core = ['hub', 'shielding', 'doors', 'mep', 'surfaces', 'manufacturing', 'software', 'systems', 'about', 'projects', 'contact'];
  const guides = ROUTES.filter((r) => r.article).map((r) => r.key);
  const section = (locale) =>
    [...core.map((k) => pageLine(k, locale)), '', ...guides.map((k) => pageLine(k, locale))].join('\n');

  return `# Engineering Grouping Co. (EGC)

> Engineering Grouping Co. (EGC), also known as Engineering Group and, in Arabic, التجمع الهندسي (legal name: شركة المجموعة الهندسية), is a healthcare contractor headquartered in Jeddah, Saudi Arabia. It prepares MRI, CT, PET-CT and X-ray rooms for hospitals: radiation and magnetic shielding, lead-lined and RF-shielded medical doors, specialised MEP and infection-control surfaces. It also runs a Wood & Corian factory in Jeddah and a software engineering team (HIS, RIS, PIMS, ERP, websites). Nurse call systems, operating-room clocks and turnkey installation are planned.

## Key facts
${FACTS.en()}
- Phone: ${SITE.en.phone}
- Email: ${SITE.en.email}
- Address: ${SITE.en.address}

## English pages
- [Home](${routeUrl('en', '')}): ${getSeo('home', 'en').description}
${section('en')}

## Arabic pages (الصفحات العربية)
- [الرئيسية](${routeUrl('ar', '')}): ${getSeo('home', 'ar').description}
${section('ar')}

## Optional
- [Full text of the main pages](${SITE_URL}/llms-full.txt)
- [Sitemap](${SITE_URL}/sitemap.xml)
`;
}

/* ── llms-full.txt: the substance of every main page as plain markdown ── */
function bullets(list) {
  return list.map((x) => `- ${x}`).join('\n');
}
function faqBlock(key, locale) {
  const f = getFaqs(key, locale);
  return f.length ? `\n### FAQ\n${f.map((x) => `**${x.q}**\n${x.a}`).join('\n\n')}\n` : '';
}

function fullFor(locale) {
  const svc = SERVICES[locale];
  const out = [];
  out.push(`# ${HOME[locale].hero.h1}\n\n${HOME[locale].hero.lead}\n\n## ${HOME[locale].glance.title}\n${FACTS[locale]()}\n${faqBlock('home', locale)}`);
  out.push(`# ${ABOUT[locale].h1}\n\n${ABOUT[locale].lead}\n\n${ABOUT[locale].story.p.join('\n\n')}`);
  out.push(`# ${HUB[locale].h1}\n\n${HUB[locale].lead}\n\n## ${HUB[locale].answer.title}\n${HUB[locale].answer.p.join('\n\n')}\n\n## ${HUB[locale].rooms.title}\n${bullets(HUB[locale].rooms.items.map((r) => `${r.t}: ${r.d}`))}${faqBlock('hub', locale)}`);
  for (const s of svc) {
    out.push(`# ${s.h1}\n\n${s.lead}\n\n## ${s.explainTitle}\n${s.explain.join('\n\n')}\n\n## ${s.full}\n${bullets(s.deliver)}\n\n## Rooms\n${bullets(s.rooms)}${faqBlock(s.id, locale)}`);
  }
  const m = MANUFACTURING[locale];
  out.push(`# ${m.h1}\n\n${m.lead}\n\n## ${m.wood.title}\n${m.wood.p.join('\n\n')}\n${bullets(m.wood.capabilities)}\n\n${m.work.text}\n\n## ${m.steel.title}\n${m.steel.text}${faqBlock('manufacturing', locale)}`);
  const sw = SOFTWARE[locale];
  out.push(`# ${sw.h1}\n\n${sw.lead}\n\n${sw.pillars.map((p) => `## ${p.t} (${p.tag})\n${p.d}\n${bullets(p.pts)}`).join('\n\n')}${faqBlock('software', locale)}`);
  const sy = SYSTEMS[locale];
  out.push(`# ${sy.h1}\n\n${sy.lead}\n\n${sy.items.map((i) => `## ${i.t}\n${i.d}`).join('\n\n')}${faqBlock('systems', locale)}`);
  for (const [slug, a] of Object.entries(ARTICLES)) {
    const t = a[locale];
    const body = t.sections
      .map((s) => `## ${s.h}\n${(s.p || []).join('\n\n')}${s.ul ? `\n${bullets(s.ul)}` : ''}${s.table ? `\n${[s.table.head, ...s.table.rows].map((r) => `| ${r.join(' | ')} |`).join('\n')}` : ''}`)
      .join('\n\n');
    out.push(`# ${t.title}\nSource: ${routeUrl(locale, `knowledge/${slug}`)}\n\n${t.intro}\n\n${body}\n\n## ${locale === 'ar' ? 'أبرز النقاط' : 'Key takeaways'}\n${bullets(t.takeaways)}${faqBlock(`article:${slug}`, locale)}`);
  }
  return out.join('\n\n---\n\n');
}

async function main() {
  const write = (name, content) => fs.writeFile(path.join(DIST, name), content, 'utf8');
  await write('sitemap.xml', sitemap());
  await write('robots.txt', robots());
  await write('llms.txt', llms());
  await write('llms-full.txt', `# Engineering Grouping Co. (EGC): full text\n\n${fullFor('en')}\n\n---\n\n# النص الكامل بالعربية\n\n${fullFor('ar')}\n`);
  console.log('[sitemap] wrote sitemap.xml, robots.txt, llms.txt, llms-full.txt');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
