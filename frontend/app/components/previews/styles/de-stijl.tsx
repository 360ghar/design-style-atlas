import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function DeStijlPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px`,
        }}
      >
        {/* Mondrian Asymmetrical Orthogonal Grid Canvas */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col"
          style={{
            maxWidth: 420 * s,
            border: "5px solid #111111",
            background: "#111111",
            gap: 5 * s,
          }}
        >
          {/* Top Section */}
          <div className="flex w-full" style={{ height: 95 * s, gap: 5 * s }}>
            {/* Cadmium Red Giant Hero Tile */}
            <div
              style={{
                flex: 1.4,
                background: p.accent, // #E52521
                padding: `${10 * s}px`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#FFFFFF",
              }}
            >
              <div style={{ fontSize: 6.5 * s, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                DE STIJL — 1917
              </div>
              <h2
                style={{
                  fontFamily: p.display,
                  fontSize: 16 * s,
                  fontWeight: 800,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                }}
              >
                PURE
                <br />
                HARMONY
              </h2>
            </div>

            {/* Right Stack: White and Cobalt Blue */}
            <div className="flex flex-col" style={{ flex: 1, gap: 5 * s }}>
              <div
                style={{
                  flex: 1.2,
                  background: p.surface,
                  padding: `${8 * s}px`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ fontSize: 6 * s, fontWeight: 700, color: p.ink, textTransform: "uppercase" }}>
                  Mondrian &amp; Rietveld
                </div>
                <div style={{ fontSize: 6.5 * s, color: p.muted, marginTop: 2 * s, lineHeight: 1.3 }}>
                  Orthogonal equilibrium of line and primary tone.
                </div>
              </div>

              {/* Cobalt Blue Block */}
              <div
                style={{
                  flex: 0.8,
                  background: p.accent2, // #0045A5
                }}
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex w-full" style={{ height: 42 * s, gap: 5 * s }}>
            {/* Neutral Off-White Strip */}
            <div
              style={{
                flex: 1.2,
                background: "#EAEAEA",
                padding: `${6 * s}px ${10 * s}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontSize: 6.5 * s, fontFamily: p.display, fontWeight: 700, textTransform: "uppercase" }}>
                COMPOSITION A
              </span>
              <span style={{ fontSize: 6 * s, color: p.muted }}>GEOMETRIC LAW</span>
            </div>

            {/* Yellow Accent Tile */}
            <div
              style={{
                flex: 0.6,
                background: "#FED100", // Yellow
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 800,
                fontSize: 8 * s,
                color: "#111111",
              }}
            >
              № 01
            </div>

            {/* Black Accent Square */}
            <div style={{ width: 42 * s, background: "#111111" }} />
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
