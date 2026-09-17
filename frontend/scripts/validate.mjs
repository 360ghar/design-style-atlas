import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "designs");
const requiredSections = ["Overall aesthetic", "Typography", "Colors", "Spacing", "Layout", "Borders", "Shadows", "Radius", "Buttons", "Cards", "Navigation", "Imagery", "Icons", "Textures", "Motion", "Interactions", "Responsive", "Accessibility", "What to avoid", "Quick-start"];
const requiredPreview = ["bg", "surface", "ink", "muted", "accent", "accent2", "display", "body"];

const slugs = readdirSync(root);
let failures = 0;
if (slugs.length !== 100) {
  console.error(`Expected 100 styles, found ${slugs.length}`);
  failures++;
}
for (const slug of slugs) {
  const file = join(root, slug, "DESIGN.md");
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    console.error(`${slug}: missing DESIGN.md`);
    failures++;
    continue;
  }
  const { data } = matter(text);
  for (const key of ["slug", "name", "description", "category", "tags", "related", "preview"]) {
    if (data[key] == null || (Array.isArray(data[key]) && data[key].length === 0)) {
      console.error(`${slug}: frontmatter missing "${key}"`);
      failures++;
    }
  }
  if (data.slug !== slug) {
    console.error(`${slug}: slug mismatch (frontmatter: ${data.slug})`);
    failures++;
  }
  for (const key of requiredPreview) {
    if (!data.preview?.[key]) {
      console.error(`${slug}: preview missing "${key}"`);
      failures++;
    }
  }
  for (const section of requiredSections) {
    if (!text.includes(section)) {
      console.error(`${slug}: missing section "${section}"`);
      failures++;
    }
  }
  for (const rel of data.related ?? []) {
    if (!slugs.includes(rel)) {
      console.error(`${slug}: related slug "${rel}" does not exist`);
      failures++;
    }
  }
}
if (failures > 0) {
  console.error(`\nValidation failed with ${failures} problem(s).`);
  process.exit(1);
}
console.log(`Validation passed: ${slugs.length} styles, all sections + frontmatter + related links OK.`);
