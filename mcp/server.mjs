#!/usr/bin/env node
/**
 * Design Styles MCP server (stdio, zero deps, static-safe).
 * Reads the prebuilt JSON in frontend/public/api/ with fallback to designs/.
 *
 * Tools:
 *  - list_styles    { query?, category?, limit? }
 *  - get_style      { slug, format?: "full" | "slim" | "tokens" }
 *  - match_vibe     { query, limit? }
 *  - get_contract   { slug }
 * Prompts:
 *  - verify_style   { slug? } — self-verification checklist against the contract
 * Resources (passive injection into agent context windows):
 *  - design-style://<slug> — one Markdown resource per style (slim spec)
 *
 * Framing: buffered JSON parser (one object per write, pretty-printed
 * multiline payloads included). readline-per-line is not used.
 *
 * Run: npm run mcp  (from frontend/) or: node mcp/server.mjs
 */
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, "..");
const apiDir = join(repoRoot, "frontend", "public", "api");
const designsDir = join(repoRoot, "designs");

function loadIndex() {
  const p = join(apiDir, "styles.json");
  if (existsSync(p)) {
    try {
      const j = JSON.parse(readFileSync(p, "utf8"));
      if (Array.isArray(j.styles)) return j.styles;
    } catch { /* fall through */ }
  }
  // Fallback: minimal parse from designs/ frontmatter (no gray-matter dep).
  const out = [];
  let slugs = [];
  try { slugs = readdirSync(designsDir).filter((s) => existsSync(join(designsDir, s, "DESIGN.md"))); }
  catch { return []; }
  for (const slug of slugs.sort()) {
    const raw = readFileSync(join(designsDir, slug, "DESIGN.md"), "utf8");
    const fm = raw.match(/^---\n([\s\S]*?)\n---/);
    const head = fm ? fm[1] : "";
    const get = (k) => (head.match(new RegExp(`^${k}:\\s*(.+)$`, "m"))?.[1] ?? "").trim().replace(/^["']|["']$/g, "");
    out.push({
      slug,
      name: get("name") || slug,
      description: get("description") || "",
      category: get("category") || "Uncategorized",
      tags: [],
      preview: {},
      urls: {},
    });
  }
  return out;
}

function loadStyle(slug) {
  const p = join(apiDir, `${slug}.json`);
  if (existsSync(p)) return JSON.parse(readFileSync(p, "utf8"));
  // Fallback: raw file only.
  const rawPath = join(designsDir, slug, "DESIGN.md");
  if (!existsSync(rawPath)) return null;
  return { slug, full: readFileSync(rawPath, "utf8") };
}

function matchVibe(styles, query, limit = 5) {
  const toks = String(query ?? "").toLowerCase().split(/\s+/).filter(Boolean);
  if (toks.length === 0) return styles.slice(0, limit);
  const scored = styles.map((s) => {
    const vibes = s.vibes ? `${s.vibes.brightness} ${s.vibes.saturation} ${s.vibes.type} ${s.vibes.mood}` : "";
    const hay = `${s.name} ${s.description} ${s.category} ${(s.tags ?? []).join(" ")} ${s.slug} ${vibes}`.toLowerCase();
    let score = 0;
    for (const t of toks) {
      if (`${s.slug} ${s.name}`.toLowerCase().includes(t)) score += 4;
      if (vibes.includes(t)) score += 3;
      else if (hay.includes(t)) score += 2;
    }
    return { s, score };
  });
  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((r) => r.s);
}

const TOOLS = [
  {
    name: "list_styles",
    description: "List design styles with optional text query, category filter, and limit. Returns slug, name, description, category, tags, vibes, urls.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Free-text filter over name/description/tags (e.g. 'brutal neon')" },
        category: { type: "string", description: "Exact category name (e.g. 'Brutalist')" },
        limit: { type: "number", description: "Max results (default 20, max 100)" },
      },
    },
  },
  {
    name: "get_style",
    description: "Get one style's spec. Formats: slim (<1500 tokens), tokens (cssVars + tailwind), full (complete DESIGN.md).",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Style slug, e.g. 'neo-brutalism'" },
        format: { type: "string", enum: ["slim", "tokens", "full"], description: "Default 'slim'" },
      },
      required: ["slug"],
    },
  },
  {
    name: "match_vibe",
    description: "Match a vibe description ('dark playful neon serif dashboard') to the closest styles.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Vibe words, e.g. 'dark minimal serif'" },
        limit: { type: "number", description: "Max results (default 5)" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_contract",
    description: "Get one style's machine token contract (palette, fonts, radius, shadows, borders, spacing) for auditing code against the style.",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Style slug, e.g. 'neo-brutalism'" },
      },
      required: ["slug"],
    },
  },
];

const PROMPTS = [
  {
    name: "verify_style",
    description: "Self-verify UI output against a style's token contract before declaring work done.",
    arguments: [
      {
        name: "slug",
        description: "Style slug (e.g. 'neo-brutalism'). Omit to resolve from the repo's DESIGN.lock.",
        required: false,
      },
    ],
  },
];

function verifyStylePrompt(slug) {
  const target = slug ? `"${slug}"` : "declared in the repo's DESIGN.lock (or .well-known/design-style.json)";
  return [
    `Verify the UI work in this repo against the style contract (${target}). Do not declare the work done until all steps pass.`,
    ``,
    `1. Resolve the style slug${slug ? "" : " from DESIGN.lock / .well-known/design-style.json at the repo root"}.`,
    `2. Load the contract: local <atlas-repo>/frontend/public/api/<slug>.contract.json, or fetch https://design-styles.dev/api/<slug>.contract.json.`,
    `3. Run the audit CLI if available: node <atlas-repo>/cli/audit.mjs . --ci — treat every reported line as a bug.`,
    `4. If the CLI is unavailable, check manually in every changed file: colors (hex/rgb literals) within the contract palette; primary font families from the contract stacks; border-radius within the contract range (pill values allowed); border widths >= the contract minimum; box-shadow blur = 0 for hard-shadow styles.`,
    `5. Visually confirm one produced screen against the style's specimen page (see urls.page in the contract): borders, shadow style, type scale, spacing feel.`,
    `6. Report: checks run, violations found, fixes applied. Remaining violations = work not done.`,
  ].join("\n");
}

function textResult(text) {
  return { content: [{ type: "text", text }] };
}

/** Passive style injection: one resource per style slug. */
function listResources() {
  return loadIndex().map((s) => ({
    uri: `design-style://${s.slug}`,
    name: s.name || s.slug,
    description: s.description || "",
    mimeType: "text/markdown",
  }));
}

function readResource(uri) {
  const slug = String(uri ?? "").replace(/^design-style:\/\//, "").trim();
  if (!slug) throw Object.assign(new Error("Missing resource URI (expected design-style://<slug>)"), { code: -32602 });
  const data = loadStyle(slug);
  if (!data) throw Object.assign(new Error(`Unknown style slug: "${slug}"`), { code: -32602 });
  return {
    contents: [
      {
        uri: `design-style://${slug}`,
        mimeType: "text/markdown",
        text: data.slim ?? data.full?.slice(0, 4000) ?? "unavailable",
      },
    ],
  };
}

function getContract(slug) {
  const p = join(apiDir, `${slug}.contract.json`);
  if (existsSync(p)) return JSON.parse(readFileSync(p, "utf8"));
  throw new Error(
    `No contract for "${slug}". Run: cd frontend && node scripts/build-api.mjs (writes public/api/<slug>.contract.json).`
  );
}

function callTool(name, args = {}) {
  const styles = loadIndex();
  if (name === "list_styles") {
    const q = String(args.query ?? "").trim().toLowerCase();
    const cat = args.category ? String(args.category) : null;
    const limit = Math.min(Math.max(Number(args.limit) || 20, 1), 100);
    let out = styles;
    if (cat) out = out.filter((s) => s.category === cat);
    if (q) {
      const toks = q.split(/\s+/);
      out = out.filter((s) => {
        const hay = `${s.name} ${s.description} ${s.category} ${(s.tags ?? []).join(" ")} ${s.slug}`.toLowerCase();
        return toks.every((t) => hay.includes(t));
      });
    }
    return textResult(JSON.stringify({ count: out.length, styles: out.slice(0, limit) }, null, 2));
  }
  if (name === "get_style") {
    const slug = String(args.slug ?? "").trim();
    if (!slug) throw new Error("Missing required argument: slug");
    const format = String(args.format ?? "slim");
    const data = loadStyle(slug);
    if (!data) throw new Error(`Unknown style slug: "${slug}"`);
    if (format === "tokens") {
      const payload = data.tokens
        ? { slug: data.slug, name: data.name, preview: data.preview, tokens: data.tokens, urls: data.urls }
        : { slug, note: "tokens unavailable (fallback mode)", full: data.full?.slice(0, 2000) };
      return textResult(JSON.stringify(payload, null, 2));
    }
    if (format === "full") {
      return textResult(data.full ?? data.slim ?? "unavailable");
    }
    return textResult(data.slim ?? data.full?.slice(0, 4000) ?? "unavailable");
  }
  if (name === "match_vibe") {
    const limit = Math.min(Math.max(Number(args.limit) || 5, 1), 20);
    const hits = matchVibe(styles, String(args.query ?? ""), limit);
    return textResult(
      JSON.stringify(
        { query: args.query, results: hits.map((s) => ({ slug: s.slug, name: s.name, description: s.description, category: s.category, vibes: s.vibes ?? null })) },
        null,
        2
      )
    );
  }
  if (name === "get_contract") {
    const slug = String(args.slug ?? "").trim();
    if (!slug) throw new Error("Missing required argument: slug");
    const contract = getContract(slug);
    return textResult(JSON.stringify(contract, null, 2));
  }
  throw new Error(`Unknown tool: ${name}`);
}

function handleMessage(msg) {
  if (!msg || typeof msg !== "object") return;
  const { id, method, params } = msg;
  const reply = (result, error, defaultCode = -32603) => {
    const out = { jsonrpc: "2.0", id };
    if (error) {
      const code = typeof error === "object" && error?.code ? error.code : defaultCode;
      out.error = { code, message: String(error?.message ?? error) };
    } else {
      out.result = result ?? {};
    }
    process.stdout.write(JSON.stringify(out) + "\n");
  };
  try {
    if (method === "initialize") {
      reply({
        protocolVersion: "2024-11-05",
        capabilities: { tools: {}, prompts: {}, resources: {} },
        serverInfo: { name: "design-styles", version: "1.2.0" },
      });
    } else if (method === "notifications/initialized" || method?.startsWith("notifications/")) {
      // no reply for notifications
    } else if (method === "ping") {
      reply({});
    } else if (method === "tools/list") {
      reply({ tools: TOOLS });
    } else if (method === "tools/call") {
      const { name, arguments: args } = params ?? {};
      try {
        reply(callTool(name, args ?? {}));
      } catch (err) {
        reply({
          content: [{ type: "text", text: `Error: ${err?.message ?? err}` }],
          isError: true,
        });
      }
    } else if (method === "prompts/list") {
      reply({ prompts: PROMPTS });
    } else if (method === "prompts/get") {
      const name = String(params?.name ?? "");
      if (name !== "verify_style") return reply(null, `Unknown prompt: ${name}`, -32602);
      const slug = String(params?.arguments?.slug ?? "").trim() || null;
      reply({
        description: "Self-verify UI output against a style token contract.",
        messages: [
          {
            role: "user",
            content: { type: "text", text: verifyStylePrompt(slug) },
          },
        ],
      });
    } else if (method === "resources/list") {
      reply({ resources: listResources() });
    } else if (method === "resources/read") {
      try {
        reply(readResource(params?.uri));
      } catch (err) {
        reply(null, err, -32602);
      }
    } else {
      if (id != null) reply(null, `Method not found: ${method}`, -32601);
    }
  } catch (err) {
    if (id != null) reply(null, err);
  }
}

// Buffered stdio framing: accumulate bytes and extract balanced top-level
// JSON objects (strings and escapes respected), so pretty-printed multiline
// payloads parse. Falls back to resyncing on the next "{" for stray bytes.
let stdioBuffer = "";

function pumpStdio(final = false) {
  const buf = stdioBuffer;
  const n = buf.length;
  let i = 0;
  while (i < n) {
    while (i < n && /\s/.test(buf[i])) i++;
    if (i >= n) break;
    if (buf[i] !== "{") {
      const nx = buf.indexOf("{", i + 1);
      if (nx < 0) break;
      i = nx;
    }
    let depth = 0;
    let inStr = false;
    let esc = false;
    let j = i;
    for (; j < n; j++) {
      const c = buf[j];
      if (inStr) {
        if (esc) esc = false;
        else if (c === "\\") esc = true;
        else if (c === '"') inStr = false;
      } else if (c === '"') inStr = true;
      else if (c === "{") depth++;
      else if (c === "}") {
        depth--;
        if (depth === 0) {
          j++;
          break;
        }
      }
    }
    if (depth !== 0) break; // incomplete object — wait for more data
    try {
      handleMessage(JSON.parse(buf.slice(i, j)));
    } catch {
      // Malformed object: skip it and keep the session alive.
    }
    i = j;
  }
  stdioBuffer = final ? "" : buf.slice(i);
}

process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  stdioBuffer += chunk;
  pumpStdio(false);
});
process.stdin.on("end", () => pumpStdio(true));
