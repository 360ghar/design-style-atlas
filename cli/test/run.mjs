#!/usr/bin/env node
/** CLI smoke tests: node cli/test/run.mjs (from the repo root or anywhere). */
import { spawnSync } from "node:child_process";
import { chmodSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const audit = join(here, "..", "audit.mjs");
const shop = join(here, "fixtures", "shop");
const clean = join(here, "fixtures", "shop", "clean.html");

let failures = 0;
const check = (name, cond, detail = "") => {
  if (cond) console.log(`  ok  ${name}`);
  else {
    failures++;
    console.error(`FAIL  ${name}${detail ? ` — ${detail}` : ""}`);
  }
};

function run(extraArgs) {
  const r = spawnSync(process.execPath, [audit, ...extraArgs], { encoding: "utf8" });
  return { code: r.status, out: r.stdout ?? "", err: r.stderr ?? "" };
}

// 1. Full fixture scan, JSON format: exact per-check counts.
const shopJson = run([shop, "--format", "json"]);
check("audit exits 0 without --ci", shopJson.code === 0, `exit ${shopJson.code}: ${shopJson.err}`);
let data = null;
try {
  data = JSON.parse(shopJson.out);
} catch {
  check("valid JSON output", false, shopJson.out.slice(0, 300));
}
if (data) {
  const by = {};
  for (const v of data.violations) by[v.check] = (by[v.check] ?? 0) + 1;
  const expected = { palette: 4, fonts: 2, radius: 2, "shadow-hard": 1, "border-width": 1 };
  for (const [c, n] of Object.entries(expected)) {
    check(`${c}: ${n} violation(s)`, by[c] === n, `got ${by[c] ?? 0}`);
  }
  check("total violations = 10", data.summary?.count === 10, `got ${data.summary?.count}`);
  check("scans 3 files", data.filesScanned === 3, `got ${data.filesScanned}`);
  check("DESIGN.lock resolved style", data.style === "neo-brutalism" && data.source === "DESIGN.lock", JSON.stringify(data.source));
}

// 2. --ci flips the exit code when violations exist.
const shopCi = run([shop, "--ci"]);
check("--ci exits 1 on violations", shopCi.code === 1, `exit ${shopCi.code}`);
check("--ci prints a text report", shopCi.out.includes("violation(s) across"), shopCi.out.slice(0, 200));

// 3. Clean file: zero violations even under --ci.
const cleanCi = run([clean, "--style", "neo-brutalism", "--ci"]);
check("clean file exits 0 with --ci", cleanCi.code === 0, `exit ${cleanCi.code}: ${cleanCi.out}`);
check("clean file reports zero violations", cleanCi.out.includes("No violations"), cleanCi.out.slice(0, 200));

// 4. Undeclared style, no flag: usage error (exit 2), not a crash.
const emptyDir = join(here, "fixtures", "shop", "components");
const noStyle = run([emptyDir]);
check("undeclared style exits 2 with guidance", noStyle.code === 2 && /DESIGN\.lock/.test(noStyle.err), `exit ${noStyle.code}: ${noStyle.err}`);

// 5. Tailwind utilities: named color scale, radius, shadow, and border
//    utilities flag violations; comment hexes and href hashes do not.
const tailwindDir = join(here, "fixtures", "tailwind");
const tailwindJson = run([tailwindDir, "--format", "json"]);
let tailwind = null;
try {
  tailwind = JSON.parse(tailwindJson.out);
} catch {
  check("tailwind valid JSON output", false, tailwindJson.out.slice(0, 300));
}
if (tailwind) {
  const byTailwind = {};
  for (const v of tailwind.violations) byTailwind[v.check] = (byTailwind[v.check] ?? 0) + 1;
  check("tailwind total violations = 4", tailwind.summary?.count === 4, `got ${tailwind.summary?.count}`);
  check("tailwind palette flags bg-purple-500", byTailwind.palette === 1 && tailwind.violations.some((v) => v.found === "bg-purple-500"), JSON.stringify(byTailwind));
  check("tailwind radius flags rounded-3xl", byTailwind.radius === 1 && tailwind.violations.some((v) => v.found === "rounded-3xl"), JSON.stringify(byTailwind));
  check("tailwind shadow flags shadow-2xl", byTailwind["shadow-hard"] === 1 && tailwind.violations.some((v) => v.found === "shadow-2xl"), JSON.stringify(byTailwind));
  check("tailwind border flags bare border", byTailwind["border-width"] === 1 && tailwind.violations.some((v) => v.found === "border"), JSON.stringify(byTailwind));
  check("tailwind ignores comment hex and href hash", !tailwind.violations.some((v) => String(v.found).includes("222222") || String(v.found).includes("333333")), JSON.stringify(tailwind.violations.map((v) => v.found)));
}

// 6. Quoted CSS-in-JS values must be parsed, and the hard-offset Tailwind
//    syntax the report recommends must not be flagged as blurred.
const quotedDir = join(here, "fixtures", "quoted-css-in-js");
const quotedJson = run([quotedDir, "--format", "json"]);
let quoted = null;
try {
  quoted = JSON.parse(quotedJson.out);
} catch {
  check("quoted CSS-in-JS valid JSON output", false, quotedJson.out.slice(0, 300));
}
if (quoted) {
  const byQuoted = {};
  for (const v of quoted.violations) byQuoted[v.check] = (byQuoted[v.check] ?? 0) + 1;
  check("quoted borderRadius \"16px\" is flagged", byQuoted.radius === 1 && quoted.violations.some((v) => String(v.found).startsWith("border-radius: \"16px\"")), JSON.stringify(quoted.violations.map((v) => v.found)));
  check("quoted boxShadow \"0 4px 12px …\" is flagged", byQuoted["shadow-hard"] === 1, JSON.stringify(byQuoted));
  check("quoted border \"1px solid …\" is flagged", byQuoted["border-width"] === 1, JSON.stringify(byQuoted));
  check("shadow-[4px_4px_0_#111111] is not flagged as blurred", !quoted.violations.some((v) => String(v.found).includes("shadow-[4px_4px_0_#111111]")), JSON.stringify(quoted.violations.map((v) => v.found)));
  check("quoted CSS-in-JS total violations = 3", quoted.summary?.count === 3, `got ${quoted.summary?.count}`);
}

// 7. An unreadable directory must not be reported as a clean audit. Built in a
//    temp dir because git does not preserve directory modes.
const lockedDir = mkdtempSync(join(tmpdir(), "dsa-locked-"));
writeFileSync(join(lockedDir, "DESIGN.lock"), '{ "style": "neo-brutalism", "version": "1.0.0" }\n');
writeFileSync(join(lockedDir, "panel.html"), '<div style="border-radius: 16px"></div>\n');
chmodSync(lockedDir, 0o000);
const lockedRun = run([lockedDir]);
chmodSync(lockedDir, 0o755);
rmSync(lockedDir, { recursive: true, force: true });
if (process.getuid?.() === 0) {
  console.log("  ok  unreadable directory (skipped — running as root)");
} else {
  check("unreadable directory exits 2 instead of reporting a clean audit", lockedRun.code === 2 && /Could not read directory/.test(lockedRun.err), `exit ${lockedRun.code}: ${lockedRun.err || lockedRun.out}`);
}

console.log(failures === 0 ? "\nCLI tests: all passed." : `\nCLI tests: ${failures} failure(s).`);
process.exit(failures === 0 ? 0 : 1);
