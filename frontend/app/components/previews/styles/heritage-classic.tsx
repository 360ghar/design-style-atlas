import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function HeritageClassicPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg, // British Racing Green #0B1E15
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px`,
        }}
      >
        {/* Double Gold Foil Hairline Perimeter Frame */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col justify-between"
          style={{
            maxWidth: 420 * s,
            border: `1px solid ${p.accent}55`,
            padding: `${10 * s}px ${14 * s}px`,
            boxShadow: `inset 0 0 0 3px rgba(197,168,105,0.15), 0 16px 40px rgba(0,0,0,0.6)`,
            background: "rgba(18, 44, 32, 0.65)",
          }}
        >
          {/* Heraldic Crest Monogram */}
          <div className="flex flex-col items-center" style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 16 * s,
                color: p.accent, // Gold foil #C5A869
                lineHeight: 1,
                marginBottom: 2 * s,
              }}
            >
              ⚜
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 6 * s,
                fontWeight: 600,
                color: p.accent,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              SAVILE ROW // EST. MDCCCXCIV
            </div>
          </div>

          {/* Central Architectural Serif Title & Chapter */}
          <div className="my-auto flex flex-col items-center" style={{ textAlign: "center", padding: `${6 * s}px 0` }}>
            <div
              style={{
                fontFamily: p.display,
                fontSize: 6 * s,
                color: p.accent2,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                marginBottom: 2 * s,
              }}
            >
              CHAPTER IV · BESPOKE HOROLOGY
            </div>

            <h2
              style={{
                fontFamily: p.display,
                fontSize: 18 * s,
                fontWeight: 600,
                color: p.ink,
                letterSpacing: "0.02em",
                lineHeight: 1.15,
              }}
            >
              The Distinction of Pedigree
            </h2>

            {/* Gold Divider Rule with Diamond Motif */}
            <div className="flex items-center" style={{ gap: 6 * s, margin: `${6 * s}px 0`, width: "60%" }}>
              <div style={{ flex: 1, height: 1, background: `${p.accent}44` }} />
              <div style={{ width: 4 * s, height: 4 * s, background: p.accent, transform: "rotate(45deg)" }} />
              <div style={{ flex: 1, height: 1, background: `${p.accent}44` }} />
            </div>

            <p style={{ fontSize: 7 * s, color: p.muted, maxWidth: 260 * s, lineHeight: 1.5, fontStyle: "italic" }}>
              Tailored wools, hand-engraved chronometers, and quiet aristocratic restraint.
            </p>
          </div>

          {/* Bottom Hallmarked Seal Banner */}
          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.accent}33`,
              paddingTop: 6 * s,
              fontSize: 5.5 * s,
              color: p.muted,
              fontFamily: p.display,
            }}
          >
            <span>LONDON · GENEVA · EDINBURGH</span>
            <span style={{ color: p.accent, fontWeight: 700 }}>ROYAL WARRANT CERTIFIED</span>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
