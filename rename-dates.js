// rename-dates.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, 'src', 'img');

// Matchea: ...___MM-YYYY[[N]].ext
const re = /(.*___)(\d{2})-(\d{4})(\[\[\d+\]\]\.[^.]+)$/i;

let changes = 0;

for (const name of fs.readdirSync(ROOT)) {
  const full = path.join(ROOT, name);
  if (!fs.statSync(full).isFile()) continue;

  const m = name.match(re);
  if (!m) continue;

  const [, pre, mm, yyyy, post] = m;
  const newName = `${pre}${yyyy}-${mm}${post}`;
  const target = path.join(ROOT, newName);

  console.log(`${name}  ->  ${newName}`);
  changes++;

  if (process.argv.includes('--apply')) {
    fs.renameSync(full, target);
  }
}

console.log(changes ? `\n${changes} archivo(s) ${process.argv.includes('--apply') ? 'renombrados.' : 'a renombrar (dry-run). Usa --apply para aplicar.'}` : 'No se encontraron archivos con patrón ___MM-YYYY[[');
