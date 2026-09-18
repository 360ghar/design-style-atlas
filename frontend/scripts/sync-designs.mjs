import { existsSync, mkdirSync, cpSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const frontendDir = join(here, "..");
const src = join(frontendDir, "..", "designs");
const dest = join(frontendDir, "public", "designs");

// Fail loudly when the canonical designs/ source is missing so a bad
// checkout or wrong cwd never ships a site with zero styles.
const sentinel = join(src, "neo-brutalism", "DESIGN.md");
if (!existsSync(sentinel)) {
  console.error(
    `[design-styles] missing designs source: expected ${sentinel}\n` +
      `Run from the frontend/ directory of a full design-style-atlas checkout.`
  );
  process.exit(1);
}

mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
console.log(`[design-styles] synced ${src} -> ${dest}`);
