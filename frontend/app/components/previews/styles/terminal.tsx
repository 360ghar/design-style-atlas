import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function TerminalPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.7 : 1;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* scanline overlay (§14) + glow (§7) — token-derived only */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, ${p.ink}12 0 1px, transparent 1px 3px)`,
            boxShadow: `inset 0 0 24px ${p.ink}26`,
          }}
        />
        {/* terminal chrome: dots + path (§5, §11) */}
        <div
          className="relative flex items-center gap-2"
          style={{
            background: p.surface,
            borderBottom: `1px solid ${p.ink}33`,
            padding: `${6 * s}px ${10 * s}px`,
          }}
        >
          <span style={{ display: "flex", gap: 4 * s }}>
            {[p.accent2, p.accent, p.ink].map((c) => (
              <i
                key={c}
                style={{ width: 7 * s, height: 7 * s, borderRadius: 999, background: c, display: "block" }}
              />
            ))}
          </span>
          <span
            className="truncate"
            style={{ fontSize: 6.5 * s, color: p.muted, whiteSpace: "nowrap" }}
          >
            <span style={{ color: p.accent }}>~</span>/design-styles — bash
          </span>
          <span className="hidden sm:inline" style={{ marginLeft: "auto", fontSize: 6 * s, color: p.muted }}>
            tab ↹
          </span>
        </div>
        {/* streaming session hero (§1, §15) */}
        <div
          className="relative flex-1"
          style={{ padding: `${9 * s}px ${10 * s}px`, fontSize: 7 * s, lineHeight: 1.6 }}
        >
          <div style={{ color: p.muted, whiteSpace: "nowrap" }}>
            visitor@atlas:<span style={{ color: p.accent }}>~</span>$ ./browse --style terminal
          </div>
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 700,
              fontSize: large ? 30 : 17,
              lineHeight: 1.05,
              letterSpacing: "0.01em",
              marginTop: 5 * s,
              textShadow: `0 0 24px ${p.ink}40`,
            }}
          >
            PROMPT IS
            <br />
            THE HERO<span className="pv-blink" style={{ marginLeft: 4 }}>█</span>
          </div>
          <div aria-hidden style={{ color: p.muted, letterSpacing: "0.1em", marginTop: 4 * s }}>
            ────────────────────
          </div>
          <div className="truncate" style={{ whiteSpace: "nowrap" }}>
            ▸ loading specimens… <span style={{ color: p.accent2 }}>██████</span>
            <span style={{ color: p.muted }}>░░ 78%</span>
          </div>
          <div className="truncate" style={{ color: p.muted, whiteSpace: "nowrap" }}>
            <span style={{ color: p.ink }}>✓</span> archive indexed in 0.04s
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: 7 * s, marginTop: 6 * s }}
          >
            <span
              style={{
                border: `1px solid ${p.ink}`,
                color: p.ink,
                background: p.surface,
                padding: `${3.5 * s}px ${8 * s}px`,
                fontSize: 6.5 * s,
                fontWeight: 700,
                letterSpacing: "0.08em",
                whiteSpace: "nowrap",
              }}
            >
              [ GET STARTED ]
            </span>
            <span className="truncate" style={{ color: p.muted, fontSize: 6.5 * s, whiteSpace: "nowrap" }}>
              $ deploy <span style={{ color: p.accent }}>~/prod</span> [y/N]_
            </span>
          </div>
        </div>
        {/* status footer (§5 htop bar) */}
        <div
          className="relative grid grid-cols-3"
          style={{
            background: p.surface,
            borderTop: `1px solid ${p.ink}33`,
            fontSize: 6 * s,
            color: p.muted,
          }}
        >
          {["UTF-8 · bash", "80×24 · ▁▃▅", "● 0.04s · ✓"].map((t, i) => (
            <div
              key={t}
              className="truncate"
              style={{
                padding: `${5 * s}px ${10 * s}px`,
                whiteSpace: "nowrap",
                borderLeft: i ? `1px solid ${p.ink}33` : "none",
                color: i === 2 ? p.ink : p.muted,
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
