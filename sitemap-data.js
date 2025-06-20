const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, 'src', 'img');
const outputFile = path.join(__dirname, 'works-static.js');

const generateSlug = (str) =>
  str
    .toLowerCase()
    .replace(/[-_\s]+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

const files = fs.readdirSync(imagesDir)
  .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
  .map(file => {
    const baseName = file.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const rawTitle = baseName.includes('&&') ? baseName.split('&&')[0] : baseName;
    return { slug: generateSlug(rawTitle) };
  });

fs.writeFileSync(outputFile, 'module.exports = ' + JSON.stringify(files, null, 2));
console.log(`✔ Generated works-static.js with ${files.length} slugs`);
