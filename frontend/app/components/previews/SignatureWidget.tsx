import type { StyleDefinition } from "../../lib/style-definitions";
import { getLuminance } from "../../lib/preview-theme";

export function SignatureWidget({ def, large }: { def: StyleDefinition; large?: boolean }) {
  const p = def.preview;
  const sig = def.signatureType;
  const isDark = getLuminance(p.bg) < 0.4;

  if (sig === "terminal") {
    return (
      <div
        className="overflow-hidden font-mono transition-colors"
        style={{
          background: isDark ? "#0C100C" : "#F4F6F0",
          border: isDark ? "1px solid #22C55E44" : "1.5px solid #16A34A",
          borderRadius: def.cardRadius,
          boxShadow: isDark ? `0 0 20px #22C55E22` : "0 4px 16px rgba(22, 163, 74, 0.12)",
          color: isDark ? "#4ADE80" : "#166534",
          fontSize: large ? 12 : 9,
          padding: large ? 14 : 8,
        }}
      >
        <div
          className="flex items-center justify-between border-b pb-2 mb-2"
          style={{
            borderColor: isDark ? "#22C55E33" : "#16A34A33",
            color: isDark ? "#86EFAC" : "#15803D",
          }}
        >
          <span>bash — 80×24</span>
          <span>● ONLINE</span>
        </div>
        <div className="space-y-1 overflow-x-auto no-scrollbar text-pretty">
          <div className="truncate"><span style={{ color: isDark ? "#22C55E" : "#15803D" }}>$</span> git clone agent://system.git</div>
          <div className="truncate" style={{ color: isDark ? "rgba(134, 239, 172, 0.6)" : "rgba(21, 128, 61, 0.7)" }}>
            Cloning into &apos;system&apos;... remote: 100 objects
          </div>
          <div className="truncate"><span style={{ color: isDark ? "#22C55E" : "#15803D" }}>$</span> ./agent --mode autonomous --style={def.slug}</div>
          <div className="font-semibold flex items-center gap-1 flex-wrap" style={{ color: isDark ? "#22C55E" : "#15803D" }}>
            <span>[READY] System listening on port 8080</span>
            <span
              className="inline-block w-2 h-3.5 pv-blink"
              style={{ background: isDark ? "#4ADE80" : "#16A34A" }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (sig === "windows95") {
    const winBg = isDark ? "#242428" : "#C0C0C0";
    const winBorder = isDark ? "2px outset #52525B" : "2px outset #FFFFFF";
    const winTitleBg = isDark ? "#1E3A8A" : "#000080";
    const winInnerBg = isDark ? "#18181B" : "#FFFFFF";
    const winInnerText = isDark ? "#F4F4F6" : "#333333";
    const winBtnBorder = isDark ? "1px outset #52525B" : "1px outset #FFFFFF";

    return (
      <div
        style={{
          background: winBg,
          border: winBorder,
          color: isDark ? "#FFFFFF" : "#000000",
          fontSize: large ? 11 : 8,
          padding: 3,
        }}
      >
        <div
          className="flex items-center justify-between px-2 py-1 font-bold text-white mb-2"
          style={{ background: winTitleBg }}
        >
          <span>{def.name} - Explorer</span>
          <div className="flex gap-1">
            {["_", "□", "×"].map((btn) => (
              <span
                key={btn}
                className="inline-flex items-center justify-center font-mono font-bold"
                style={{
                  background: winBg,
                  border: winBtnBorder,
                  color: isDark ? "#FFFFFF" : "#000000",
                  width: large ? 14 : 10,
                  height: large ? 14 : 10,
                  fontSize: large ? 9 : 7,
                }}
              >
                {btn}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            background: winInnerBg,
            border: isDark ? "2px inset #3F3F46" : "2px inset #808080",
            padding: large ? "8px 12px" : "4px 8px",
          }}
        >
          <div className="font-bold mb-1" style={{ color: p.ink }}>C:\SYSTEM\{def.slug.toUpperCase()}</div>
          <p style={{ color: winInnerText }}>Ready to execute 32-bit instructions with 100% native dialog fidelity.</p>
        </div>
      </div>
    );
  }

  if (sig === "macos") {
    return (
      <div
        className="overflow-hidden"
        style={{
          background: isDark ? "#1E1E24" : "#ECECEC",
          border: isDark ? "1px solid rgba(255,255,255,0.15)" : "1px solid #B0B0B0",
          borderRadius: large ? 8 : 6,
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          color: isDark ? "#F4F4F6" : "#1A1A1A",
          fontSize: large ? 12 : 8,
        }}
      >
        <div
          className="flex items-center justify-between px-3 py-2 border-b"
          style={{
            background: isDark ? "#282830" : "linear-gradient(to bottom, #F6F6F6, #E0E0E0)",
            borderColor: isDark ? "rgba(255,255,255,0.1)" : "#CCCCCC",
          }}
        >
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>
          <span className="font-medium text-[11px]" style={{ color: isDark ? "#D4D4D8" : "#4D4D4D" }}>
            {def.name} Specimen
          </span>
          <div className="w-8" />
        </div>
        <div className="p-3" style={{ background: isDark ? "#18181D" : "#FFFFFF" }}>
          <p className="font-medium">Quartz Composition Engine</p>
          <p className="text-[11px] mt-1" style={{ color: p.muted }}>Brushed metal panels and refined optical balance.</p>
        </div>
      </div>
    );
  }

  if (sig === "cyberpunk") {
    return (
      <div
        className="relative overflow-hidden font-mono"
        style={{
          background: isDark ? "rgba(10, 10, 20, 0.9)" : "rgba(240, 244, 248, 0.95)",
          border: `1.5px solid ${p.accent}`,
          boxShadow: `0 0 20px ${p.accent}55, inset 0 0 15px ${p.accent}22`,
          color: p.ink,
          fontSize: large ? 11 : 8,
          padding: large ? 12 : 8,
        }}
      >
        <div className="flex items-center justify-between border-b pb-1 mb-2" style={{ borderColor: `${p.accent}44` }}>
          <span style={{ color: p.accent }}>{"// HUD: MATRIX_OVERRIDE"}</span>
          <span
            className="text-[9px] px-1 border"
            style={{
              background: isDark ? "rgba(0,0,0,0.6)" : "#FFFFFF",
              borderColor: p.accent2,
              color: p.accent2,
            }}
          >
            SYNC 99.9%
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center my-2">
          {["BANDWIDTH", "ICE_BREAKER", "NEURAL_LINK"].map((stat, i) => (
            <div
              key={stat}
              className="p-1 border"
              style={{
                borderColor: `${p.accent}33`,
                background: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.7)",
              }}
            >
              <div className="text-[8px] opacity-70">{stat}</div>
              <div className="font-bold text-[11px]" style={{ color: i === 1 ? p.accent2 : p.accent }}>
                {["10.4 TB", "ACTIVE", "LOCKED"][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (sig === "neobrutalism") {
    const neoBorder = isDark ? "2.5px solid #FFFFFF" : "2.5px solid #111111";
    const neoShadow = isDark
      ? (large ? "5px 5px 0 #FFE600" : "3px 3px 0 #FFE600")
      : (large ? "5px 5px 0 #111111" : "3px 3px 0 #111111");

    return (
      <div
        className="flex flex-col gap-2"
        style={{
          background: p.accent2,
          border: neoBorder,
          boxShadow: neoShadow,
          color: isDark ? "#FFFFFF" : "#111111",
          padding: large ? 12 : 8,
        }}
      >
        <div className="flex items-center justify-between font-black uppercase text-[10px] tracking-wider">
          <span
            className="px-2 py-0.5"
            style={{ background: isDark ? "#FFFFFF" : "#111111", color: isDark ? "#000000" : "#FFFFFF" }}
          >
            ★ HARD SHADOWS
          </span>
          <span
            className="px-2 py-0.5 border"
            style={{
              background: isDark ? "#18181B" : "#FFFFFF",
              borderColor: isDark ? "#FFFFFF" : "#000000",
              color: isDark ? "#FFFFFF" : "#000000",
            }}
          >
            ZERO BLUR
          </span>
        </div>
        <div style={{ fontFamily: p.display, fontWeight: 900, fontSize: large ? 16 : 12, lineHeight: 1.1 }}>
          THE HIGH-CONTRAST MANIFESTO
        </div>
      </div>
    );
  }

  if (sig === "swiss") {
    return (
      <div
        className="grid grid-cols-12 gap-0 border-t border-b"
        style={{ borderColor: p.ink, color: p.ink, fontSize: large ? 11 : 8 }}
      >
        <div className="col-span-4 p-3 border-r" style={{ borderColor: p.ink }}>
          <div className="font-bold text-[24px] leading-none" style={{ fontFamily: p.display }}>01</div>
          <div className="text-[9px] uppercase tracking-wider mt-1 opacity-70">Grid System</div>
        </div>
        <div className="col-span-8 p-3 flex flex-col justify-between">
          <div className="font-bold leading-tight" style={{ fontFamily: p.display }}>
            Flush left. Ragged right. Never centered.
          </div>
          <div className="text-[9px] opacity-60">Zürich 1957 — Max Bill / Josef Müller-Brockmann</div>
        </div>
      </div>
    );
  }

  if (sig === "glassmorphism") {
    return (
      <div
        className="relative overflow-hidden p-4 rounded-xl border backdrop-blur-md"
        style={{
          background: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.16)",
          borderColor: isDark ? "rgba(255, 255, 255, 0.18)" : "rgba(255, 255, 255, 0.35)",
          boxShadow: isDark
            ? "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
            : "0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
          color: p.ink,
        }}
      >
        <div className="flex items-center justify-between text-[11px] mb-2 font-medium">
          <span>Frosted Optical Layer</span>
          <span className="px-2 py-0.5 rounded-full bg-white/25 border border-white/40 text-[9px]">16px Blur</span>
        </div>
        <div className="font-semibold text-[14px]">Sub-surface Specular Sheen</div>
      </div>
    );
  }

  if (sig === "claymorphism") {
    return (
      <div
        className="p-4 text-center rounded-3xl"
        style={{
          background: p.surface,
          boxShadow: isDark
            ? "inset 2px 2px 4px rgba(255,255,255,0.1), inset -3px -3px 6px rgba(0,0,0,0.5), 8px 12px 24px rgba(0,0,0,0.4)"
            : "inset 3px 3px 6px rgba(255,255,255,0.9), inset -3px -3px 6px rgba(0,0,0,0.1), 8px 12px 24px rgba(0,0,0,0.1)",
          color: p.ink,
        }}
      >
        <div className="font-bold text-[14px]">Inflated 3D Volume</div>
        <div className="text-[10px] opacity-75 mt-1">Sculpted clay geometry with tactile curvature</div>
      </div>
    );
  }

  if (sig === "fashion") {
    return (
      <div
        className="py-3 border-t border-b"
        style={{ borderColor: `${p.ink}33`, color: p.ink }}
      >
        <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.25em] opacity-60">
          <span>Look 12 — Haute</span>
          <span>Autumn / Winter</span>
        </div>
        <div className="text-center py-2" style={{ fontFamily: p.display, fontStyle: "italic", fontSize: large ? 22 : 16 }}>
          “Elegance is refusal.”
        </div>
      </div>
    );
  }

  if (sig === "linear") {
    return (
      <div
        className="p-3 rounded-lg border font-mono"
        style={{
          background: p.surface,
          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15, 23, 42, 0.12)",
          boxShadow: "0 0 30px rgba(94,106,210,0.2)",
          color: p.ink,
          fontSize: large ? 11 : 8,
        }}
      >
        <div className="flex items-center justify-between mb-2 opacity-80 text-[10px]">
          <span>CYCLE 42 · IN PROGRESS</span>
          <span>94%</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
          <div className="h-full bg-[#5E6AD2] rounded-full w-[94%]" />
        </div>
      </div>
    );
  }

  if (sig === "pixel") {
    const pixBorder = isDark ? "#FFFFFF" : "#000000";
    const pixShadow = isDark ? "4px 4px 0 #FFFFFF" : "4px 4px 0 #000000";

    return (
      <div
        className="p-3 font-mono border-2"
        style={{
          background: p.surface,
          borderColor: pixBorder,
          boxShadow: pixShadow,
          color: p.ink,
          fontSize: large ? 11 : 8,
        }}
      >
        <div className="flex justify-between items-center mb-1">
          <span>HP [♥♥♥♥♡]</span>
          <span>LVL 99</span>
        </div>
        <div className="font-bold">QUEST: BUILD SYSTEM COMPLETE</div>
      </div>
    );
  }

  // Default clean bento signature
  return (
    <div
      className="p-3 flex items-center justify-between"
      style={{
        background: p.surface,
        border: def.cardBorder,
        borderRadius: def.cardRadius,
        boxShadow: def.cardShadow,
        color: p.ink,
        fontSize: large ? 11 : 8,
      }}
    >
      <div>
        <div className="font-bold">{def.featureTitle}</div>
        <div className="text-[10px] opacity-75 mt-0.5">{def.featureDesc}</div>
      </div>
      <div className="text-right pl-3 shrink-0">
        <div className="font-bold text-[13px]" style={{ color: p.accent }}>{def.metricValue}</div>
        <div className="text-[9px] opacity-60 uppercase">{def.metricDelta}</div>
      </div>
    </div>
  );
}
