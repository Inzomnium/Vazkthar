const importAll = (r) =>
  r.keys().map((key) => {
    const fileName = key.replace('./', '');
    const baseName = fileName.replace(/\.(jpg|jpeg|png|webp)$/, '');

    let rawTitle = baseName;
    let rawCaption = '';

    if (baseName.includes('&&')) {
      [rawTitle, rawCaption] = baseName.split('&&');
    }

    const format = (str) =>
      str
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();

    const generateSlug = (str) =>
      str
        .toLowerCase()
        .replace(/[-_\s]+/g, '-')       // reemplaza espacios y guiones bajos por guion
        .replace(/[^a-z0-9-]/g, '')     // elimina caracteres no válidos
        .replace(/-+/g, '-')            // evita guiones repetidos
        .replace(/^-|-$/g, '');         // elimina guiones al inicio/fin

    return {
      image: r(key),
      title: format(rawTitle),
      caption: rawCaption ? format(rawCaption) : '',
      slug: generateSlug(rawTitle),
    };
  });

const works = importAll(require.context('../img/', false, /\.(jpg|jpeg|png|webp)$/));
export default works;
