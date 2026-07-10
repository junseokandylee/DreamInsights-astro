import { query } from '../../../lib/db.js';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { SEO_CONFIG, isValidLocale } from '../../../../shared/lib/i18n/config';

export const prerender = false;

const WIDTH = 1200;
const HEIGHT = 630;
let fontData = null;

async function getFont() {
  if (fontData) return fontData;
  try {
    fontData = await readFile(join(process.cwd(), 'src', 'fonts', 'NotoSansKR[wght].ttf'));
  } catch {
    fontData = null;
  }
  return fontData;
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrapText(text, max = 22) {
  const lines = [];
  let r = text;
  while (r.length > 0) {
    if (r.length <= max) { lines.push(r); break; }
    lines.push(r.slice(0, max));
    r = r.slice(max);
  }
  return lines;
}

export async function GET({ params }) {
  const slug = params.slug;
  const localeParam = params.locale || 'ko';
  const locale = isValidLocale(localeParam) ? localeParam : 'ko';

  if (!slug) return new Response('Missing slug', { status: 400 });

  try {
    const result = await query(`
      SELECT d.original_slug as slug, t.title, c.name as category_name
      FROM dream_interpretations d
      JOIN interpretation_content t ON d.id = t.interpretation_id AND t.language_code = $1 AND t.is_active = true
      LEFT JOIN categories c ON d.category_id = c.id
      WHERE d.original_slug = $2
    `, [locale, slug]);

    const dream = result.rows?.[0];
    const siteName = SEO_CONFIG[locale].siteName;
    const title = dream?.title || slug.replace(/-/g, ' ');
    const category = dream?.category_name || '';
    const font = await getFont();

    const lines = wrapText(title, 22);
    const textY = 280 + (lines.length === 1 ? 30 : 0);
    const textEls = lines.map((line, i) =>
      `<text x="80" y="${textY + i * 52}" font-family="'Noto Sans KR'" font-weight="700" font-size="44" fill="white">${esc(line)}</text>`
    ).join('\n');

    const catBadge = category
      ? `<rect x="80" y="505" rx="20" ry="20" width="${80 + category.length * 18}" height="40" fill="rgba(255,255,255,0.2)"/>
         <text x="100" y="531" font-family="'Noto Sans KR'" font-size="18" fill="rgba(255,255,255,0.9)">${esc(category)}</text>`
      : '';

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5"/>
      <stop offset="100%" style="stop-color:#7C3AED"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <rect x="60" y="380" width="${WIDTH - 120}" height="1" fill="rgba(255,255,255,0.3)"/>
  <text x="80" y="210" font-family="'Noto Sans KR'" font-weight="500" font-size="24" fill="rgba(255,255,255,0.7)">🌙 ${esc(siteName)}</text>
  ${textEls}
  ${catBadge}
  <text x="${WIDTH - 120}" y="${HEIGHT - 40}" font-family="'Noto Sans KR'" font-size="16" fill="rgba(255,255,255,0.5)" text-anchor="end">dream-db.net</text>
</svg>`;

    const opts = { fitTo: { mode: 'width', value: WIDTH } };
    if (font) Object.assign(opts, { font: { fontData: Array.from(font) } });

    const resvg = new Resvg(svg, opts);
    const pngData = resvg.render().asPng();

    return new Response(pngData, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    });
  } catch (err) {
    console.error('OG image error:', err);
    return new Response(`OG error: ${err.message}`, { status: 500 });
  }
}
