"use client";

import { useState } from "react";
import { copyText, downloadText } from "../lib/clipboard";
import type { StyleDefinition } from "../lib/style-definitions";
import { STYLE_DEFINITIONS } from "../lib/style-definitions";

export interface TokenOverrides {
  bg?: string;
  surface?: string;
  ink?: string;
  muted?: string;
  accent?: string;
  accent2?: string;
  cardRadius?: string;
  btnRadius?: string;
  badgeRadius?: string;
  cardBorder?: string;
  cardShadow?: string;
}

/* ---------- color math ---------- */

function toRgb(hex: string): [number, number, number] | null {
  let h = hex.trim();
  if (!h.startsWith("#")) return null;
  h = h.slice(1);
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  if (h.length !== 6 && h.length !== 8) return null;
  h = h.slice(0, 6);
  const n = parseInt(h, 16);
  if (Number.isNaN(n)) return null;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function toHex(r: number, g: number, b: number): string {
  const c = (v: number) =>
    Math.round(Math.min(255, Math.max(0, v))).toString(16).padStart(2, "0");
  return `#${c(r)}${c(g)}${c(b)}`.toUpperCase();
}

export function lerpHex(a: string, b: string, t: number): string {
  const ra = toRgb(a);
  const rb = toRgb(b);
  if (!ra || !rb) return t < 0.5 ? a : b;
  return toHex(
    ra[0] + (rb[0] - ra[0]) * t,
    ra[1] + (rb[1] - ra[1]) * t,
    ra[2] + (rb[2] - ra[2]) * t
  );
}

export function mixDefs(a: StyleDefinition, b: StyleDefinition, t: number): StyleDefinition {
  const pick = <T,>(x: T, y: T): T => (t < 0.5 ? x : y);
  return {
    ...a,
    preview: {
      ...a.preview,
      bg: lerpHex(a.preview.bg, b.preview.bg, t),
      surface: lerpHex(a.preview.surface, b.preview.surface, t),
      ink: lerpHex(a.preview.ink, b.preview.ink, t),
      muted: lerpHex(a.preview.muted, b.preview.muted, t),
      accent: lerpHex(a.preview.accent, b.preview.accent, t),
      accent2: lerpHex(a.preview.accent2, b.preview.accent2, t),
    },
    cardBorder: pick(a.cardBorder, b.cardBorder),
    cardShadow: pick(a.cardShadow, b.cardShadow),
    cardRadius: pick(a.cardRadius, b.cardRadius),
    btnRadius: pick(a.btnRadius, b.btnRadius),
    badgeRadius: pick(a.badgeRadius, b.badgeRadius),
  };
}

export function applyOverrides(def: StyleDefinition, o: TokenOverrides): StyleDefinition {
  return {
    ...def,
    preview: {
      ...def.preview,
      bg: o.bg ?? def.preview.bg,
      surface: o.surface ?? def.preview.surface,
      ink: o.ink ?? def.preview.ink,
      muted: o.muted ?? def.preview.muted,
      accent: o.accent ?? def.preview.accent,
      accent2: o.accent2 ?? def.preview.accent2,
    },
    cardRadius: o.cardRadius ?? def.cardRadius,
    btnRadius: o.btnRadius ?? def.btnRadius,
    badgeRadius: o.badgeRadius ?? def.badgeRadius,
    cardBorder: o.cardBorder ?? def.cardBorder,
    cardShadow: o.cardShadow ?? def.cardShadow,
  };
}

/* ---------- export builders ---------- */

export function toCssVars(def: StyleDefinition): string {
  const p = def.preview;
  return `:root {\n  --bg: ${p.bg};\n  --surface: ${p.surface};\n  --ink: ${p.ink};\n  --muted: ${p.muted};\n  --accent: ${p.accent};\n  --accent-2: ${p.accent2};\n  --font-display: ${p.display};\n  --font-body: ${p.body};\n  --radius-card: ${def.cardRadius};\n  --radius-btn: ${def.btnRadius};\n  --border-card: ${def.cardBorder};\n  --shadow-card: ${def.cardShadow};\n}`;
}

export function toTailwind(def: StyleDefinition): string {
  const p = def.preview;
  const fam = (s: string) => s.split(",").map((x) => `"${x.trim()}"`).join(", ");
  return `// tailwind.config.js — theme.extend (remix of ${def.slug})\n{\n  colors: {\n    bg: "${p.bg}",\n    surface: "${p.surface}",\n    ink: "${p.ink}",\n    muted: "${p.muted}",\n    accent: "${p.accent}",\n    accent2: "${p.accent2}",\n  },\n  fontFamily: {\n    display: [${fam(p.display)}],\n    body: [${fam(p.body)}],\n  },\n  borderRadius: {\n    card: "${def.cardRadius}",\n    btn: "${def.btnRadius}",\n  },\n}`;
}

export function toSlim(def: StyleDefinition): string {
  const p = def.preview;
  return [
    `# ${def.name} (remix) — style prompt for an AI coding agent`,
    `${def.description}`,
    ``,
    `## Tokens`,
    `- bg ${p.bg} · surface ${p.surface} · ink ${p.ink} · muted ${p.muted} · accent ${p.accent} · accent2 ${p.accent2}`,
    `- display: ${p.display}`,
    `- body: ${p.body}`,
    `- radius: card ${def.cardRadius} / btn ${def.btnRadius} / badge ${def.badgeRadius}`,
    `- border: ${def.cardBorder} · shadow: ${def.cardShadow}`,
    ``,
    `## Use`,
    `Apply these tokens to all UI work. Keep body text contrast ≥ 4.5:1 against bg and surface.`,
  ].join("\n");
}

export function toRemixMarkdown(def: StyleDefinition, sources: string[]): string {
  return [
    `# ${def.name} — REMIX (sources: ${sources.join(" + ")})`,
    ``,
    `> Remix generated in the Design Styles playground. Paste into your agent as @REMIX-DESIGN.md.`,
    ``,
    `## Tokens`,
    ``,
    `\`\`\`css`,
    toCssVars(def),
    `\`\`\``,
    ``,
    `## Tailwind`,
    ``,
    `\`\`\`js`,
    toTailwind(def),
    `\`\`\``,
    ``,
    `## Prompt`,
    ``,
    toSlim(def),
    ``,
  ].join("\n");
}

/* ---------- controls ---------- */

const COLOR_KEYS = ["bg", "surface", "ink", "muted", "accent", "accent2"] as const;
const RADIUS_CHOICES = ["0px", "4px", "6px", "8px", "10px", "16px", "18px", "20px", "28px", "9999px"];

function isHexColor(v: string): boolean {
  return /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(v.trim());
}

export function TokenPlayground({
  base,
  overrides,
  onChange,
  onReset,
}: {
  base: StyleDefinition;
  overrides: TokenOverrides;
  onChange: (o: TokenOverrides) => void;
  onReset: () => void;
}) {
  const eff = applyOverrides(base, overrides);
  return (
    <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-2">
      <div>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] opacity-60">Colors</p>
        <div className="mt-3 space-y-2.5">
          {COLOR_KEYS.map((k) => {
            const val = eff.preview[k];
            return (
              <label key={k} className="flex items-center gap-3">
                <input
                  type="color"
                  value={isHexColor(val) ? val.slice(0, 7) : "#000000"}
                  onChange={(e) => onChange({ ...overrides, [k]: e.target.value.toUpperCase() })}
                  className="h-8 w-10 cursor-pointer border border-black/20 bg-transparent p-0.5"
                  aria-label={`${k} color picker`}
                />
                <span className="w-16 font-mono text-[11px] uppercase">{k}</span>
                <input
                  type="text"
                  value={val}
                  spellCheck={false}
                  onChange={(e) => onChange({ ...overrides, [k]: e.target.value })}
                  className="w-32 border border-black/20 bg-transparent px-2 py-1 font-mono text-[11px]"
                  aria-label={`${k} hex value`}
                />
              </label>
            );
          })}
        </div>
      </div>
      <div>
        <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] opacity-60">Shape + stroke</p>
        <div className="mt-3 space-y-2.5">
          {(
            [
              ["cardRadius", "Card radius"],
              ["btnRadius", "Button radius"],
              ["badgeRadius", "Badge radius"],
            ] as [keyof TokenOverrides, string][]
          ).map(([k, label]) => (
            <label key={k} className="flex items-center gap-3">
              <span className="w-24 font-mono text-[11px] uppercase">{label}</span>
              <select
                value={String(eff[k as keyof StyleDefinition] ?? "")}
                onChange={(e) => onChange({ ...overrides, [k]: e.target.value })}
                className="border border-black/20 bg-transparent px-2 py-1 font-mono text-[11px]"
              >
                {RADIUS_CHOICES.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </label>
          ))}
          <label className="flex items-center gap-3">
            <span className="w-24 font-mono text-[11px] uppercase">Border</span>
            <input
              type="text"
              value={eff.cardBorder}
              spellCheck={false}
              onChange={(e) => onChange({ ...overrides, cardBorder: e.target.value })}
              className="w-full border border-black/20 bg-transparent px-2 py-1 font-mono text-[11px]"
            />
          </label>
          <label className="flex items-center gap-3">
            <span className="w-24 font-mono text-[11px] uppercase">Shadow</span>
            <input
              type="text"
              value={eff.cardShadow}
              spellCheck={false}
              onChange={(e) => onChange({ ...overrides, cardShadow: e.target.value })}
              className="w-full border border-black/20 bg-transparent px-2 py-1 font-mono text-[11px]"
            />
          </label>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="mt-4 border border-current px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.1em] opacity-70 hover:opacity-100 cursor-pointer"
        >
          Reset tokens
        </button>
      </div>
    </div>
  );
}

export function MixControls({
  baseSlug,
  mixSlug,
  mixT,
  onMixSlug,
  onMixT,
}: {
  baseSlug: string;
  mixSlug: string | null;
  mixT: number;
  onMixSlug: (s: string | null) => void;
  onMixT: (t: number) => void;
}) {
  const slugs = Object.keys(STYLE_DEFINITIONS).sort();
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap items-center gap-3">
        <span className="border px-3 py-1.5 font-mono text-[11px] font-semibold">{baseSlug}</span>
        <span aria-hidden="true" className="font-mono">×</span>
        <select
          value={mixSlug ?? ""}
          onChange={(e) => onMixSlug(e.target.value || null)}
          className="border border-black/25 bg-transparent px-3 py-1.5 font-mono text-[11px]"
          aria-label="Style to mix with"
        >
          <option value="">Pick a style to mix…</option>
          {slugs.filter((s) => s !== baseSlug).map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {mixSlug && (
          <button
            type="button"
            onClick={() => onMixSlug(null)}
            className="font-mono text-[11px] uppercase underline underline-offset-4 cursor-pointer"
          >
            Clear mix
          </button>
        )}
      </div>
      {mixSlug && (
        <div className="mt-5 max-w-xl">
          <div className="flex items-center justify-between font-mono text-[11px]">
            <span>{baseSlug} ({100 - mixT}%)</span>
            <span>{mixSlug} ({mixT}%)</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={mixT}
            onChange={(e) => onMixT(Number(e.target.value))}
            className="mt-2 w-full"
            aria-label="Mix balance"
          />
          <p className="mt-2 font-mono text-[10.5px] opacity-60">
            Colors lerp between the two styles. Border, shadow, and radii switch at the midpoint.
          </p>
        </div>
      )}
    </div>
  );
}

export function RemixExport({ def, sources }: { def: StyleDefinition; sources: string[] }) {
  const [msg, setMsg] = useState<string | null>(null);

  async function copy(text: string, label: string) {
    try {
      await copyText(text);
    } catch {
      setMsg("Copy failed.");
      return;
    }
    setMsg(`${label} copied.`);
    setTimeout(() => setMsg(null), 2000);
  }

  function download() {
    downloadText(toRemixMarkdown(def, sources), "REMIX-DESIGN.md");
  }

  const btn =
    "border px-3 py-2 font-mono text-[10.5px] font-semibold uppercase tracking-[0.1em] transition-colors cursor-pointer border-[#111110] dark:border-white/30 hover:bg-[#111110] hover:text-white dark:hover:bg-white dark:hover:text-[#0c0c0e]";

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-wrap gap-2">
        <button type="button" className={btn} onClick={() => copy(toCssVars(def), "CSS vars")}>Copy CSS vars</button>
        <button type="button" className={btn} onClick={() => copy(toTailwind(def), "Tailwind snippet")}>Copy Tailwind</button>
        <button type="button" className={btn} onClick={() => copy(toSlim(def), "Slim prompt")}>Copy slim prompt</button>
        <button type="button" className={btn} onClick={download}>↓ REMIX-DESIGN.md</button>
      </div>
      {msg && <p aria-live="polite" className="mt-2 font-mono text-[11px] opacity-70">{msg}</p>}
      <pre className="mt-4 overflow-x-auto border border-black/15 p-3 font-mono text-[11px] leading-relaxed whitespace-pre-wrap">
        {toCssVars(def)}
      </pre>
      <p className="mt-2 font-mono text-[10.5px] opacity-60">
        Pastes into a blank Next.js + Tailwind app: drop the vars in globals.css, map them in tailwind.config.
      </p>
    </div>
  );
}
