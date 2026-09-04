import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

const root = process.cwd();
const writingRoot = path.join(root, 'src', 'content', 'writing');
const distRoot = path.join(root, 'dist', 'writing');
const copied = [];
const warnings = [];

function filesIn(directory) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesIn(target) : /\.(md|mdx)$/i.test(entry.name) ? [target] : [];
  });
}

function frontmatter(file) {
  const source = fs.readFileSync(file, 'utf8');
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: source };
  return { data: parse(match[1]) ?? {}, body: source.slice(match[0].length) };
}

function isDraft(data) {
  return data.draft === true || data.draft === 'true';
}

function entrySlug(file) {
  const basename = path.basename(file).replace(/\.(md|mdx)$/, '');
  return basename === 'index' ? path.basename(path.dirname(file)) : basename;
}

function outputDirectory(file, data) {
  const date = new Date(data.publishedAt);
  return path.join(
    distRoot,
    String(date.getFullYear()),
    String(date.getMonth() + 1).padStart(2, '0'),
    entrySlug(file),
  );
}

function linkedAssets(body) {
  const links = new Set();
  const markdownLink = /!?\[[^\]]*?\]\(([^)]+)\)/g;
  let match;

  while ((match = markdownLink.exec(body))) {
    const href = match[1].trim().replace(/^<|>$/g, '').split(/[?#]/)[0];
    if (!href || href.startsWith('/') || /^[a-z][a-z0-9+.-]*:/i.test(href)) continue;
    links.add(href);
  }

  return [...links];
}

for (const file of filesIn(writingRoot)) {
  const { data, body } = frontmatter(file);
  if (isDraft(data) || !data.publishedAt) continue;

  const sourceDirectory = path.dirname(file);
  const output = outputDirectory(file, data);

  for (const href of linkedAssets(body)) {
    const source = path.resolve(sourceDirectory, href);
    const relative = path.relative(sourceDirectory, source);
    if (relative.startsWith('..') || path.isAbsolute(relative)) {
      warnings.push(`${path.relative(root, file)}: skipped outside note folder: ${href}`);
      continue;
    }
    if (!fs.existsSync(source) || !fs.statSync(source).isFile()) {
      warnings.push(`${path.relative(root, file)}: linked asset not found: ${href}`);
      continue;
    }

    const target = path.join(output, relative);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(source, target);
    copied.push(path.relative(root, target));
  }
}

console.log(`Copied ${copied.length} linked asset(s).`);
for (const file of copied) console.log(`- ${file}`);

if (warnings.length) {
  console.warn(`Warnings (${warnings.length}):`);
  for (const warning of warnings) console.warn(`- ${warning}`);
}
