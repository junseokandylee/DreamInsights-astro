import { query } from '../lib/db.js';
import { LOCALES, DEFAULT_LOCALE } from '../../shared/lib/i18n/config';

export const prerender = false;

export async function GET({ redirect }) {
  const baseUrl = 'https://dream-db.net';

  const [dreams, categories] = await Promise.all([
    query(`SELECT d.original_slug as slug, d.updated_at FROM dream_interpretations d JOIN interpretation_content t ON d.id = t.interpretation_id AND t.language_code = $1 AND t.is_active = true WHERE d.is_active = true ORDER BY d.views DESC NULLS LAST`, [DEFAULT_LOCALE]),
    query(`SELECT slug, name FROM categories`)
  ]);

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/trending', priority: '0.9', changefreq: 'daily' },
    { url: '/category', priority: '0.8', changefreq: 'weekly' },
  ];

  const categoryPages = (categories || []).map(c => ({
    url: `/category/${c.slug}`, priority: '0.7', changefreq: 'weekly'
  }));

  const dreamPages = (dreams || []).map(d => ({
    url: `/dream/${d.slug}`, priority: '0.6', changefreq: 'monthly', lastmod: d.updated_at
  }));

  // Build all pages with locale variants
  const allPages = [];

  // For each locale, add locale-prefixed paths (except ko which uses unprefixed)
  for (const locale of LOCALES) {
    const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

    for (const sp of staticPages) {
      allPages.push({ url: `${prefix}${sp.url}`, priority: sp.priority, changefreq: sp.changefreq });
    }
    for (const cp of categoryPages) {
      allPages.push({ url: `${prefix}${cp.url}`, priority: cp.priority, changefreq: cp.changefreq });
    }
    for (const dp of dreamPages) {
      allPages.push({ url: `${prefix}${dp.url}`, priority: dp.priority, changefreq: dp.changefreq, lastmod: dp.lastmod });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
${p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>` : ''}\n    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
