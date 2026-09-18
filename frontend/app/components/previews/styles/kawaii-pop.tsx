import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function KawaiiPopPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Harajuku sticker header */}
        <div className="flex items-center justify-between">
          <span
            style={{
              fontFamily: p.display,
              fontSize: 10 * s,
              fontWeight: 900,
              color: p.accent,
            }}
          >
            ★ HARADOKI ★
          </span>
          <span
            style={{
              background: p.accent2,
              color: p.bg,
              fontSize: 6 * s,
              fontWeight: 800,
              padding: `${2 * s}px ${8 * s}px`,
              borderRadius: 999,
            }}
          >
            SPARKLE 100%
          </span>
        </div>

        {/* Squishy Rounded Mascot Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            borderRadius: 20 * s,
            border: `2px solid ${p.accent}55`,
            boxShadow: `0 ${6 * s}px ${18 * s}px ${p.accent}22`,
            padding: `${12 * s}px ${14 * s}px`,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 18 * s, lineHeight: 1 }}>
            (✿◠‿◠)
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 900,
              color: p.accent,
              margin: `${4 * s}px 0 ${4 * s}px 0`,
            }}
          >
            Harajuku Sticker Book!
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.45 }}>
            Chunky rounded typography, smiling mascots, star sprinkles, and playful squishy button physics.
          </p>
          <div style={{ marginTop: 6 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.surface,
                fontSize: 6.5 * s,
                fontWeight: 900,
                padding: `${4 * s}px ${16 * s}px`,
                borderRadius: 999,
                boxShadow: `0 ${3 * s}px 0 ${p.accent2}`,
                display: "inline-block",
              }}
            >
              Yay! Collect Stars ★
            </span>
          </div>
        </div>

        {/* Footer sprinkles */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            fontWeight: 800,
            color: p.muted,
          }}
        >
          <span>★ CUTE IS LOAD-BEARING</span>
          <span style={{ color: p.accent2 }}>★ SQUISHY PHYSICS</span>
          <span>HARAJUKU ✿</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
