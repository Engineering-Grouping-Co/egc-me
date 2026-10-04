// One-off utility (not part of the build): renders the 1200×630 social-share images into public/.
//   node scripts/og-images.mjs
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const logo = `data:image/png;base64,${fs.readFileSync(path.join(ROOT, 'public/logo-light.png')).toString('base64')}`;

const card = (lang) => {
  const ar = lang === 'ar';
  const h = ar ? 'مقاول مشاريع صحية لغرف التصوير الطبي في السعودية' : 'Healthcare contractor for imaging rooms in Saudi Arabia';
  const sub = ar ? 'تدريع إشعاعي ومغناطيسي، أبواب طبية، أعمال كهروميكانيكية وأسطح مقاومة للعدوى' : 'Radiation and magnetic shielding, medical doors, healthcare MEP and infection-control surfaces';
  const site = 'egc-me.com';
  return `<!doctype html><html lang="${lang}" dir="${ar ? 'rtl' : 'ltr'}"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;600&family=IBM+Plex+Sans+Arabic:wght@500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#0a0a0a;color:#fff;font-family:${ar ? "'IBM Plex Sans Arabic'" : "'IBM Plex Sans'"},sans-serif;position:relative;overflow:hidden}
.grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:56px 56px;-webkit-mask-image:linear-gradient(${ar ? '270deg' : '90deg'},transparent 10%,#000)}
.wrap{position:absolute;inset:0;padding:72px 80px;display:flex;flex-direction:column;justify-content:space-between}
img{height:92px;width:auto;align-self:flex-start}
h1{font-size:${ar ? 64 : 68}px;line-height:${ar ? 1.3 : 1.08};font-weight:600;letter-spacing:${ar ? 0 : '-0.025em'};max-width:900px}
p{font-size:30px;line-height:1.45;color:rgba(255,255,255,.72);max-width:880px;margin-top:22px}
.site{font-size:28px;color:#6fb2ff;font-weight:500}
</style></head><body><div class="grid"></div>
<div class="wrap"><img src="${logo}"><div><h1>${h}</h1><p>${sub}</p></div><div class="site">${site}</div></div></body></html>`;
};

const browser = await chromium.launch();
for (const [lang, file] of [['en', 'og-image.png'], ['ar', 'og-image-ar.png']]) {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  await page.setContent(card(lang), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(ROOT, 'public', file) });
  console.log('wrote public/' + file);
  await page.close();
}
await browser.close();
