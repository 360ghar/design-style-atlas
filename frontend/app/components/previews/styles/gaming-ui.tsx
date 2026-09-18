import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GamingUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* AAA HUD Status Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.bg,
                fontFamily: p.display,
                fontSize: 7 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${6 * s}px`,
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)",
              }}
            >
              LVL 84
            </span>
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 800 }}>
              CHAMPION
            </span>
          </div>
          <span style={{ fontSize: 6 * s, color: p.accent2, fontFamily: "monospace", fontWeight: 700 }}>
            HP 2,450 / 2,450
          </span>
        </div>

        {/* Central Quest Card / HUD Frame */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.accent}`,
            boxShadow: `0 0 ${16 * s}px ${p.accent}25`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          <div className="flex items-start justify-between">
            <div>
              <div style={{ fontSize: 5.5 * s, color: p.accent2, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase" as const }}>
                LEGENDARY QUEST ACTIVE
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 900,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 ${4 * s}px 0`,
                  color: p.ink,
                }}
              >
                The Citadel Breach
              </h3>
            </div>
            <span
              style={{
                background: `${p.accent2}25`,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                fontSize: 5.5 * s,
                fontWeight: 800,
                padding: `${2 * s}px ${6 * s}px`,
              }}
            >
              TIER S
            </span>
          </div>

          <p style={{ fontSize: 6 * s, color: p.muted, lineHeight: 1.45, margin: `${4 * s}px 0` }}>
            Defeat the server monolith before the countdown expires.
          </p>

          {/* XP Bar */}
          <div style={{ marginTop: 6 * s }}>
            <div className="flex items-center justify-between" style={{ fontSize: 5 * s, color: p.muted, marginBottom: 2 * s }}>
              <span>XP PROGRESS</span>
              <span style={{ color: p.accent }}>7,850 / 10,000</span>
            </div>
            <div style={{ height: 4 * s, background: `${p.ink}22`, borderRadius: 2 * s, overflow: "hidden" }}>
              <div style={{ width: "78%", height: "100%", background: `linear-gradient(90deg, ${p.accent}, ${p.accent2})` }} />
            </div>
          </div>
        </div>

        {/* Footer Kill-feed */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontFamily: "monospace",
            color: p.muted,
          }}
        >
          <span>⚔ KILLFEED: ATLAS x CORE</span>
          <span style={{ color: p.accent }}>[PRESS E TO LOOT]</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
