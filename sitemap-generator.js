const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Importa los slugs generados automáticamente
const works = require('./works-static');

// Dominio base de tu sitio
const BASE_URL = 'https://vakzthar.com';

(async () => {
  try {
    const sitemap = new SitemapStream({ hostname: BASE_URL });

    // Rutas estáticas
    sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });
    sitemap.write({ url: '/gallery', changefreq: 'weekly', priority: 0.9 });

    // Rutas dinámicas para cada imagen
    works.forEach(work => {
      sitemap.write({
        url: `/gallery/${work.slug}`,
        changefreq: 'monthly',
        priority: 0.7,
      });
    });

    sitemap.end();

    const sitemapOutput = await streamToPromise(sitemap).then(data => data.toString());

    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapOutput);
    console.log(`✅ sitemap.xml generado con ${works.length + 2} rutas`);
  } catch (err) {
    console.error('❌ Error al generar sitemap:', err);
  }
})();
