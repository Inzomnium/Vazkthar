const importAll = (r) =>
  r.keys().map((key) => {
    const fileName = key.replace('./', '');
    const baseName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '');

    // Extraer número de orden desde cualquier parte del nombre
    const orderMatch = baseName.match(/\[\[(\d+)\]\]/);
    const rawOrder = orderMatch ? orderMatch[1] : null;

    // Eliminar el [[n]] del baseName antes de hacer splits
    const cleanedBaseName = baseName.replace(/\[\[(\d+)\]\]/, '').trim();

    // Separaciones por delimitadores definidos
    const [titlePart, rest1 = ''] = cleanedBaseName.split('&&');
    const [captionPart, rest2 = ''] = rest1.split('---');
    const [techniquePart, rest3 = ''] = rest2.split('___');
    const [yearPart] = rest3.split('##');

    const format = (str) =>
      str
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();

    const generateSlug = (str) =>
      str
        .toLowerCase()
        .replace(/[-_\s]+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

    return {
      image: r(key),
      title: format(titlePart),
      caption: captionPart ? format(captionPart) : '',
      technique: techniquePart ? format(techniquePart) : '',
      year: yearPart ? yearPart.trim() : '',
      slug: generateSlug(titlePart),
      order: rawOrder ? parseInt(rawOrder, 10) : null,
    };
  });

// Orden por número explícito primero, luego por título
const works = importAll(require.context('../img/', false, /\.(jpg|jpeg|png|webp)$/))
  .sort((a, b) => {
    const aOrder = a.order !== null ? a.order : Infinity;
    const bOrder = b.order !== null ? b.order : Infinity;
    return aOrder - bOrder || a.title.localeCompare(b.title);
  });

console.table(
  works.map((w) => ({
    Title: w.title,
    Caption: w.caption,
    Technique: w.technique,
    Year: w.year,
    Order: w.order,
    Slug: w.slug,
  }))
);

export default works;
