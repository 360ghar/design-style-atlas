import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CyberpunkPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* rain streaks (§14) + scanlines (§14) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(105deg, ${p.accent2}14 0 1px, transparent 1px 14px), repeating-linear-gradient(0deg, ${p.ink}0F 0 1px, transparent 1px 3px)`,
          }}
        />
        {/* neon nav: chrome + Japanese */}
        <div
          className="relative flex items-center justify-between gap-2 overflow-hidden whitespace-nowrap"
          style={{
            padding: `${7 * s}px ${10 * s}px`,
            borderBottom: `1px solid ${p.accent2}`,
            background: p.surface,
            boxShadow: `0 1px 12px ${p.accent2}55`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 6 * s, flexShrink: 0 }}>
            <span style={{ fontFamily: p.display, fontWeight: 900, fontSize: 9 * s, letterSpacing: "0.08em" }}>
              KIRA<span style={{ color: p.accent2 }}>{"//"}</span>DYNE
            </span>
            <span style={{ color: p.accent2, fontSize: 8 * s }}>電脳</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7 * s,
              fontSize: 5.5 * s,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: p.muted,
              flexShrink: 0,
            }}
          >
            <span style={{ color: p.ink }}>WATSON</span>
            <span className="hidden sm:inline">HEYWOOD</span>
            <span style={{ display: "flex", gap: 2.5 * s }} aria-hidden="true">
              {[p.accent, p.accent, p.accent, p.muted, p.muted].map((c, i) => (
                <i key={i} style={{ width: 4 * s, height: 4 * s, background: c, display: "block", transform: "skewX(-15deg)" }} />
              ))}
            </span>
            <span style={{ fontFamily: "monospace", letterSpacing: "0.05em", color: p.accent2 }}>¥48,210</span>
          </div>
        </div>
        {/* ticker seam */}
        <div
          className="relative truncate"
          style={{ background: p.accent, color: p.bg, fontSize: 5.5 * s, fontWeight: 800, letterSpacing: "0.22em", padding: `${2.5 * s}px ${10 * s}px` }}
        >
          WANTED LVL 3 — HIGH-TECH LOW-LIFE — NEON ON WET BLACK — 高科技 · 低生活
        </div>
        {/* glitch hero */}
        <div className="relative flex min-w-0 flex-1 items-center overflow-hidden" style={{ padding: `${8 * s}px ${10 * s}px` }}>
          <span
            aria-hidden="true"
            style={{
              writingMode: "vertical-rl" as const,
              color: p.accent2,
              fontSize: 8 * s,
              letterSpacing: "0.3em",
              borderLeft: `1px solid ${p.accent2}`,
              paddingLeft: 3 * s,
              marginRight: 7 * s,
              flexShrink: 0,
            }}
          >
            夜の街
          </span>
          <div style={{ minWidth: 0, flexShrink: 1 }}>
            <div style={{ color: p.accent, fontSize: 6 * s, fontWeight: 800, letterSpacing: "0.28em", whiteSpace: "nowrap" }}>
              NIGHT CITY // 02:47 AM
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 19 * s,
                lineHeight: 0.95,
                marginTop: 4 * s,
                textShadow: `2px 0 0 ${p.accent}, -2px 0 0 ${p.accent2}`,
              }}
            >
              CHROME
              <br />
              UP<span style={{ color: p.accent }}>_</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 * s, marginTop: 6 * s }}>
              <span
                style={{
                  fontSize: 6.5 * s,
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  border: `1.5px solid ${p.accent}`,
                  color: p.accent,
                  padding: `${4 * s}px ${8 * s}px`,
                  background: p.surface,
                  boxShadow: `0 0 12px ${p.accent}44`,
                  whiteSpace: "nowrap",
                }}
              >
                JACK IN ▸
              </span>
              <span style={{ fontFamily: "monospace", fontSize: 6 * s, color: p.muted, whiteSpace: "nowrap" }}>lat 35.68 / rain 82%</span>
            </div>
          </div>
          {/* chamfered vendor chip */}
          <div
            style={{
              marginLeft: "auto",
              background: p.surface,
              border: `1px solid ${p.accent2}`,
              clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              padding: `${6 * s}px ${8 * s}px`,
              minWidth: 64 * s,
              flexShrink: 0,
              boxShadow: `0 0 16px ${p.accent2}33`,
            }}
          >
            <div style={{ fontSize: 5.5 * s, fontWeight: 800, letterSpacing: "0.2em", color: p.accent2 }}>IMPLANT</div>
            <div style={{ fontFamily: p.display, fontWeight: 800, fontSize: 10 * s }}>¥12.8K</div>
            <div style={{ fontSize: 5.5 * s, color: p.muted, fontFamily: "monospace" }}>stock: 03 · 渋谷</div>
          </div>
        </div>
        {/* stat footer */}
        <div
          className="relative grid grid-cols-3"
          style={{ borderTop: `1px solid ${p.accent2}`, background: p.surface }}
        >
          {[
            ["REP", "★★★★☆"],
            ["HEAT", "LVL 3"],
            ["UPTIME", "99.2%"],
          ].map(([k, v], i) => (
            <div key={k} style={{ padding: `${5 * s}px ${10 * s}px`, borderLeft: i ? `1px solid ${p.muted}` : "none", minWidth: 0 }}>
              <div style={{ fontSize: 5 * s, fontWeight: 800, letterSpacing: "0.22em", color: p.muted }}>{k}</div>
              <div style={{ fontFamily: "monospace", fontSize: 7.5 * s, color: i === 1 ? p.accent : p.ink, whiteSpace: "nowrap" }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
