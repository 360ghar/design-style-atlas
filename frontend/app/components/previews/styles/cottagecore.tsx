import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CottagecorePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Gingham pantry header */}
        <div className="flex items-center justify-between" style={{ borderBottom: `1px dashed ${p.accent}66`, paddingBottom: 4 * s }}>
          <span style={{ fontFamily: p.display, fontSize: 9 * s, fontStyle: "italic", color: p.accent }}>
            ✿ Bramble & Thyme
          </span>
          <div className="flex items-center" style={{ gap: 6 * s, fontSize: 6 * s, color: p.muted }}>
            <span>Pantry</span>
            <span>·</span>
            <span>Herbs</span>
            <span>·</span>
            <span>Bakes</span>
          </div>
        </div>

        {/* Handwritten Recipe Card */}
        <div
          className="my-auto"
          style={{
            background: p.surface,
            border: `1px solid ${p.accent}44`,
            borderRadius: 14 * s,
            padding: `${14 * s}px ${16 * s}px`,
            boxShadow: `0 ${4 * s}px ${16 * s}px ${p.ink}0a`,
            position: "relative",
          }}
        >
          {/* Wildflower stamp */}
          <div style={{
            position: "absolute",
            top: 10 * s,
            right: 12 * s,
            border: `1px dashed ${p.accent2}`,
            borderRadius: 4 * s,
            padding: `${2 * s}px ${6 * s}px`,
            fontSize: 5 * s,
            color: p.accent2,
            fontWeight: 700,
            textTransform: "uppercase" as const,
          }}>
            BATCH #04
          </div>
          <div style={{ fontSize: 5.5 * s, color: p.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
            Sunday Morning Ritual
          </div>
          <h3
            style={{
              fontFamily: p.display,
              fontSize: 14 * s,
              fontWeight: 400,
              fontStyle: "italic",
              lineHeight: 1.2,
              margin: `${3 * s}px 0 ${5 * s}px 0`,
            }}
          >
            Wild Blackberry Tart
          </h3>
          <p style={{ fontSize: 6.5 * s, color: p.muted, lineHeight: 1.5 }}>
            Handwritten recipe cards, pressed botanical wildflowers, terracotta kitchen warmth, and stitched linen borders.
          </p>
          <div className="flex items-center" style={{ gap: 8 * s, marginTop: 8 * s }}>
            <span
              style={{
                background: p.accent,
                color: p.surface,
                fontSize: 6 * s,
                fontStyle: "italic",
                padding: `${4 * s}px ${14 * s}px`,
                borderRadius: 999,
              }}
            >
              Gather ingredients ✿
            </span>
            <span style={{ fontSize: 6 * s, color: p.accent2, fontStyle: "italic" }}>
              45 min simmer
            </span>
          </div>
        </div>

        {/* Calico footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px dashed ${p.accent}55`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>✿ PRESSED WILDFLOWERS</span>
          <span>LINEN &amp; TERRACOTTA</span>
          <span style={{ color: p.accent }}>SLOW LIVING</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
