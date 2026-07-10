import { query } from '../lib/db.js';
import { LOCALES, DEFAULT_LOCALE } from '../../shared/lib/i18n/config';

export const prerender = false;

export async function GET({ redirect }) {
  const baseUrl = 'https://dream-db.net';

  // Fetch dreams without content JOIN (fast, 40K rows)
  // Limit sitemap to top dreams by views for performance
  const [dreams, categories] = await Promise.all([
    query(`SELECT original_slug as slug, updated_at FROM dream_interpretations WHERE is_active = 1 ORDER BY views DESC LIMIT 1000`, []),
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

  // Build XML with locale variants (ko = unprefixed)
  const parts = ['<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'];

  for (const locale of LOCALES) {
    const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

    for (const sp of staticPages) {
      parts.push(`  <url>\n    <loc>${baseUrl}${prefix}${sp.url}</loc>\n    <changefreq>${sp.changefreq}</changefreq>\n    <priority>${sp.priority}</priority>\n  </url>`);
    }
    for (const cp of categoryPages) {
      parts.push(`  <url>\n    <loc>${baseUrl}${prefix}${cp.url}</loc>\n    <changefreq>${cp.changefreq}</changefreq>\n    <priority>${cp.priority}</priority>\n  </url>`);
    }
    for (const dp of dreamPages) {
      parts.push(`  <url>\n    <loc>${baseUrl}${prefix}${dp.url}</loc>\n${dp.lastmod ? `    <lastmod>${dp.lastmod}</lastmod>\n` : ''}    <changefreq>${dp.changefreq}</changefreq>\n    <priority>${dp.priority}</priority>\n  </url>`);
    }
  }

  parts.push('</urlset>');

  return new Response(parts.join('\n'), {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
}
