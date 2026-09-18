import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GothicVictorianPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
          border: `1.5px solid ${p.accent}44`,
        }}
      >
        {/* Cathedral Arch Top Bar */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px solid ${p.accent}55`, paddingBottom: 4 * s }}>
          <span style={{ fontFamily: p.display, fontSize: 9 * s, letterSpacing: "0.15em", color: p.accent }}>
            ✠ BASILICA NOCTIS ✠
          </span>
          <span style={{ fontSize: 5.5 * s, color: p.muted, letterSpacing: "0.12em" }}>
            CANTUS VI
          </span>
        </div>

        {/* Cathedral Altar Card */}
        <div
          className="my-auto flex flex-col items-center text-center"
          style={{
            background: p.surface,
            border: `1.5px solid ${p.accent}66`,
            borderRadius: `${20 * s}px ${20 * s}px 0 0`,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 ${8 * s}px ${24 * s}px ${p.bg}`,
          }}
        >
          <div style={{ fontSize: 16 * s, color: p.accent, lineHeight: 1 }}>
            ✠
          </div>
          <h2
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 700,
              letterSpacing: "0.12em",
              margin: `${4 * s}px 0 ${4 * s}px 0`,
              color: p.ink,
            }}
          >
            Haunted Luxury &amp; Blackletter
          </h2>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45, maxWidth: "88%" }}>
            Deep burgundy velvet, antique gold filigree, candlelit cathedral drama, and ornate prayer-book rules.
          </p>
          <div style={{ marginTop: 8 * s }}>
            <span
              style={{
                border: `1px solid ${p.accent}`,
                color: p.accent,
                fontSize: 5.5 * s,
                letterSpacing: "0.2em",
                padding: `${4 * s}px ${14 * s}px`,
                fontWeight: 700,
              }}
            >
              ENTER THE CRYPT
            </span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.accent}44`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            letterSpacing: "0.15em",
            color: p.muted,
          }}
        >
          <span>BURGUNDY VELVET</span>
          <span style={{ color: p.accent }}>GOLD FILIGREE</span>
          <span>MEMENTO MORI</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
