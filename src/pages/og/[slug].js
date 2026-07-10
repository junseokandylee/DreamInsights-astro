import { query } from '../../lib/db.js';

export const prerender = false;

export async function GET({ params }) {
  const slug = params.slug;
  if (!slug) return new Response('Missing slug', { status: 400 });

  const dreams = await query(
    `SELECT d.views, c.name as category_name FROM dream_interpretations d LEFT JOIN categories c ON d.category_id = c.id WHERE d.original_slug = $1 AND d.is_active = true`,
    [decodeURIComponent(slug)]
  );
  const dream = dreams[0];
  const category = dream?.category_name || '꿈 해몽';
  const views = (dream?.views || 0).toLocaleString();

  const title = decodeURIComponent(slug).replace(/-/g, ' ');
  const escaped = title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const truncated = escaped.length > 60 ? escaped.slice(0, 60) + '…' : escaped;

  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea"/>
      <stop offset="100%" style="stop-color:#764ba2"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)" rx="0"/>
  <text x="600" y="120" text-anchor="middle" font-size="28" fill="rgba(255,255,255,0.9)" font-weight="700">🌙 드림디비 AI</text>
  <text x="600" y="350" text-anchor="middle" font-size="44" fill="white" font-weight="700" font-family="sans-serif">
    <tspan x="600" dy="0">${truncated}</tspan>
  </text>
  <text x="600" y="480" text-anchor="middle" font-size="22" fill="rgba(255,255,255,0.75)" font-family="sans-serif">📂 ${category} · 👁 ${views}회</text>
</svg>`;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=604800',
    },
  });
}
