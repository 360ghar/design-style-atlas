import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const popPath = join(here, "..", "app", "lib", "popularity.json");
const designsDir = join(here, "..", "..", "designs");

const pop = JSON.parse(readFileSync(popPath, "utf8"));
const existingOrder = pop.order;

// Placements relative to existing anchor styles
const insertions = [
  { slug: "spatial-computing", after: "apple-liquid-glass" },
  { slug: "raycast-inspired", after: "linear-inspired" },
  { slug: "duotone", after: "gradient-design" },
  { slug: "blueprint", after: "dataviz-terminal" },
  { slug: "heritage-classic", after: "quiet-luxury" },
  { slug: "cassette-futurism", after: "cyberpunk" },
  { slug: "game-boy-dmg", after: "pixel-8bit" },
  { slug: "glitch-art", after: "hacker-aesthetic" },
  { slug: "de-stijl", after: "bauhaus" },
  { slug: "constructivism", after: "de-stijl" },
  { slug: "steampunk", after: "futurism" },
  { slug: "analog-hifi", after: "skeuomorphism" },
  { slug: "racing-telemetry", after: "gaming-ui" },
  { slug: "acid-graphics", after: "liquid-chrome" },
  { slug: "bioluminescence", after: "aurora-glow" },
  { slug: "raw-html", after: "minimal-brutalism" },
  { slug: "papercut", after: "illustration-led" },
  { slug: "plasticine-clay", after: "claymorphism" },
  { slug: "deconstructivism", after: "anti-design" },
  { slug: "botanical-herbarium", after: "dark-academia" },
];

const newOrder = [...existingOrder];
for (const item of insertions) {
  if (newOrder.includes(item.slug)) continue;
  const idx = newOrder.indexOf(item.after);
  if (idx !== -1) {
    newOrder.splice(idx + 1, 0, item.slug);
  } else {
    newOrder.push(item.slug);
  }
}

// Check coverage with designs/
const slugsOnDisk = readdirSync(designsDir).filter((s) => !s.startsWith("."));
console.log(`Slugs on disk: ${slugsOnDisk.length}, New order count: ${newOrder.length}`);

// Verify all on disk are in newOrder
for (const s of slugsOnDisk) {
  if (!newOrder.includes(s)) {
    console.error(`Missing rank for: ${s}`);
  }
}

// Verify no extras in newOrder
for (const s of newOrder) {
  if (!slugsOnDisk.includes(s)) {
    console.error(`Extra slug in order: ${s}`);
  }
}

pop.order = newOrder;
pop.updated = new Date().toISOString().slice(0, 10);

writeFileSync(popPath, JSON.stringify(pop, null, 2) + "\n", "utf8");
console.log(`[update-popularity] successfully updated popularity.json with ${newOrder.length} styles`);
