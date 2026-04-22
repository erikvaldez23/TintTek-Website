const fs = require('fs');
const path = require('path');

/**
 * Static Sitemap Generator
 * Generates sitemap.xml based on the same routes used for pre-rendering.
 * This avoids the need for crawling and ensures the sitemap is always up to date.
 */

const BASE_URL = 'https://tinttekplus.com';
const ROUTES = [
  '/',
  '/services/vehicle-window-tinting',
  '/services/tesla-window-tinting',
  '/services/commercial-window-tinting',
  '/services/residential-window-tinting',
  '/services/vehicle-paint-correction',
  '/services/vehicle-paint-protection',
  '/services/headlight-services',
  '/services/ceramic-coating',
  '/services/windshield-protection-film',
  '/gallery',
  '/support',
  '/blogs',
  '/privacy-policy',
];

function generateSitemap() {
  console.log('🚀 Generating sitemap.xml...');

  const sitemapEntries = ROUTES.map((route) => {
    const url = `${BASE_URL}${route === '/' ? '' : route}`;
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  }).join('\n');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

  const publicPath = path.join(__dirname, 'public', 'sitemap.xml');
  const distPath = path.join(__dirname, 'dist', 'sitemap.xml');

  // Save to public folder (for future builds)
  fs.writeFileSync(publicPath, sitemapXml, 'utf-8');
  console.log(`✅ Saved to ${publicPath}`);

  // Also save to dist folder (if it exists) so it's included in the current deployment
  if (fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.writeFileSync(distPath, sitemapXml, 'utf-8');
    console.log(`✅ Saved to ${distPath}`);
  }
}

try {
  generateSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
