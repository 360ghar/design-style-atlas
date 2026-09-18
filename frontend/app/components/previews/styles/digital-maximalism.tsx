import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DigitalMaximalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          padding: `${12 * s}px ${14 * s}px`,
        }}
      >
        {/* Cyber-Decal Top Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 10 * s,
                fontWeight: 900,
                color: p.accent,
                textShadow: `0 0 ${10 * s}px ${p.accent}`,
                background: `${p.accent}15`,
                border: `1.5px solid ${p.accent}`,
                borderRadius: 999,
                padding: `${1 * s}px ${8 * s}px`,
                letterSpacing: "0.08em",
              }}
            >
              CYBER★SPHERE
            </span>
            <span
              style={{
                background: `${p.accent2}22`,
                color: p.accent2,
                border: `1px solid ${p.accent2}`,
                borderRadius: 999,
                fontSize: 6 * s,
                fontWeight: 800,
                padding: `${1 * s}px ${6 * s}px`,
                boxShadow: `0 0 ${8 * s}px ${p.accent2}66`,
              }}
            >
              V3.0 ONLINE
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.accent, fontFamily: p.display }}>
            ★ INTERNET NATIVE ★
          </span>
        </div>

        {/* Central Bubbly Cyber Card with Layered Neon Glows */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 18 * s,
            border: `1.5px solid ${p.accent}`,
            boxShadow: `0 0 ${20 * s}px ${p.accent}44, 0 0 ${40 * s}px ${p.accent2}22`,
            padding: `${14 * s}px ${16 * s}px`,
            position: "relative",
          }}
        >
          {/* Floating Sticker Pill */}
          <div
            className="pv-float"
            style={{
              position: "absolute",
              top: -8 * s,
              right: 14 * s,
              background: p.accent2,
              color: p.ink,
              border: `1.5px solid ${p.accent}`,
              borderRadius: 999,
              padding: `${2 * s}px ${8 * s}px`,
              fontSize: 6 * s,
              fontWeight: 900,
              boxShadow: `0 0 ${10 * s}px ${p.accent2}`,
            }}
          >
            ✦ GLOSS OVERLOAD
          </div>

          <div>
            <div
              style={{
                fontSize: 6 * s,
                fontWeight: 800,
                color: p.accent2,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Internet-Native Excess · Y2K+
            </div>
            <h3
              style={{
                fontFamily: p.display,
                fontSize: 14 * s,
                fontWeight: 900,
                color: p.ink,
                textShadow: `0 0 ${10 * s}px ${p.accent}66`,
                lineHeight: 1.15,
                margin: `${3 * s}px 0 0 0`,
              }}
            >
              Gradients, Glass &amp; Widget Chaos
            </h3>
            <p
              style={{
                fontSize: 7 * s,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
              }}
            >
              Neon cyan glow stacks, bouncy bubble surfaces, floating cursors, and unrepentant digital maximalism.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 8 * s,
              borderTop: `1px solid ${p.accent}22`,
            }}
          >
            <span style={{ fontSize: 6.5 * s, color: p.accent, fontWeight: 700 }}>
              ⚡ 48 Active Widgets Attached
            </span>
            <button
              type="button"
              style={{
                background: p.accent,
                color: p.bg,
                border: "none",
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 0 ${14 * s}px ${p.accent}`,
              }}
            >
              Launch Deck ✦
            </button>
          </div>
        </div>

        {/* Footer Cyber Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}33`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>✦ NEON CYAN KEYLINES</span>
          <span>✦ BUBBLY 18PX CORNERS</span>
          <span style={{ color: p.accent2 }}>✦ GLOSS NEVER DIES</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
