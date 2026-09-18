#!/usr/bin/env node
/** CLI smoke tests: node cli/test/run.mjs (from the repo root or anywhere). */
import { spawnSync } from "node:child_process";
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

console.log(failures === 0 ? "\nCLI tests: all passed." : `\nCLI tests: ${failures} failure(s).`);
process.exit(failures === 0 ? 0 : 1);
