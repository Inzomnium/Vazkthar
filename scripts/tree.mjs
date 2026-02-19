import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? "src";
const maxDepth = Number(process.argv[3] ?? 3);
const ignore = new Set(["node_modules", ".git", "dist", "build", ".next", "coverage"]);

function walk(dir, prefix = "", depth = 0) {
  if (depth > maxDepth) return;
  const items = readdirSync(dir, { withFileTypes: true })
    .filter(d => !ignore.has(d.name))
    .sort((a, b) => Number(b.isDirectory()) - Number(a.isDirectory()) || a.name.localeCompare(b.name));

  items.forEach((d, i) => {
    const isLast = i === items.length - 1;
    const pointer = isLast ? "└── " : "├── ";
    console.log(prefix + pointer + d.name);

    if (d.isDirectory()) {
      const nextPrefix = prefix + (isLast ? "    " : "│   ");
      walk(join(dir, d.name), nextPrefix, depth + 1);
    }
  });
}

console.log(root);
walk(root);
