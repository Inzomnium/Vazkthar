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

    return {
      image: r(key),
      title: format(rawTitle),
      caption: rawCaption ? format(rawCaption) : '',
    };
  });

// 👇 ESTE ES EL PUNTO CLAVE
const works = importAll(require.context('../img/', false, /\.(jpg|jpeg|png|webp)$/));
export default works;


