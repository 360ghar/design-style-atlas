import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MonochromePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Top Darkroom Header */}
        <div
          className="flex items-center justify-between"
          style={{
            borderBottom: `2px solid ${p.ink}`,
            paddingBottom: 6 * s,
          }}
        >
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 9 * s,
                fontWeight: 800,
                color: p.ink,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Silver · Gelatin
            </span>
            <span
              style={{
                fontSize: 6 * s,
                fontWeight: 600,
                border: `1px solid ${p.ink}`,
                padding: `${1 * s}px ${5 * s}px`,
                borderRadius: 2 * s,
              }}
            >
              35MM
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, color: p.muted, fontFamily: p.display }}>
            ISO 400 · MONO
          </span>
        </div>

        {/* Central High-Contrast Split Stage */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `1px solid ${p.ink}22`,
            borderRadius: 6 * s,
            overflow: "hidden",
            boxShadow: `0 ${2 * s}px ${10 * s}px ${p.ink}10`,
          }}
        >
          {/* Inverted Black Block */}
          <div
            style={{
              background: p.ink,
              color: p.bg,
              padding: `${8 * s}px ${12 * s}px`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontSize: 5.5 * s, color: `${p.bg}99`, letterSpacing: "0.1em" }}>
                FRAME 024A / CONTRAST
              </div>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: 11 * s,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Brutalist Concrete &amp; Shadow
              </div>
            </div>
            <span
              style={{
                fontSize: 6.5 * s,
                border: `1px solid ${p.bg}`,
                padding: `${2 * s}px ${6 * s}px`,
                borderRadius: 4 * s,
              }}
            >
              ARCHIVED
            </span>
          </div>

          {/* Grayscale Value Step Wedge Strip */}
          <div className="flex h-2 w-full">
            {[1.0, 0.8, 0.6, 0.4, 0.2, 0.08].map((op, i) => (
              <div
                key={i}
                className="flex-1"
                style={{ background: p.ink, opacity: op }}
              />
            ))}
          </div>

          {/* Grayscale Content Bottom */}
          <div
            style={{
              padding: `${8 * s}px ${12 * s}px`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ fontSize: 6.5 * s, color: p.muted }}>
              Exposure: f/8 at 1/250s · D-76 Developer
            </span>
            <button
              type="button"
              style={{
                background: p.ink,
                color: p.bg,
                border: "none",
                borderRadius: 4 * s,
                fontSize: 6 * s,
                fontWeight: 600,
                padding: `${3 * s}px ${8 * s}px`,
                cursor: "pointer",
              }}
            >
              Inspect Plate
            </button>
          </div>
        </div>

        {/* Footer Technical Density */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}18`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            color: p.muted,
            letterSpacing: "0.06em",
          }}
        >
          <span>NEG. NO. 8839-01</span>
          <span>DENSITY: 1.42 D-MAX</span>
          <span>PRINT GRADE: 3</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
