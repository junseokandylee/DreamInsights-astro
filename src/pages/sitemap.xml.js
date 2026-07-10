import { query } from '../lib/db.js';

export const prerender = false;

export async function GET({ redirect }) {
  const baseUrl = 'https://dream-db.net';

  const [dreams, categories] = await Promise.all([
    query(`SELECT d.original_slug as slug, d.updated_at FROM dream_interpretations d JOIN interpretation_content t ON d.id = t.interpretation_id AND t.language_code = 'ko' AND t.is_active = true WHERE d.is_active = true ORDER BY d.views DESC NULLS LAST`),
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

  const allPages = [...staticPages, ...categoryPages, ...dreamPages];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${baseUrl}${p.url}</loc>
${p.lastmod ? `    <lastmod>${p.lastmod}</lastmod>` : ''}
    <changefreq>${p.changefreq}</changefreq>
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
