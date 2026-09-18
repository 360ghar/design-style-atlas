import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function HalftonePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Comic Strip Header Bar */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 5 * s }}>
            <span
              style={{
                fontFamily: p.display,
                fontSize: 11 * s,
                fontWeight: 900,
                color: p.surface,
                background: p.accent,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                padding: `${1 * s}px ${8 * s}px`,
              }}
            >
              POW!★COMICS
            </span>
            <span
              style={{
                background: p.accent2,
                color: p.surface,
                border: `1.5px solid ${p.ink}`,
                fontSize: 6 * s,
                fontWeight: 900,
                padding: `${1 * s}px ${6 * s}px`,
              }}
            >
              BEN-DAY DOT ISSUE #1
            </span>
          </div>
          <span style={{ fontSize: 6.5 * s, fontWeight: 900, color: p.ink }}>
            10¢ PRINT RUN
          </span>
        </div>

        {/* Central Comic Panel with Ben-Day Patterned Depth & Burst Badge */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            border: `3px solid ${p.ink}`,
            boxShadow: `${5 * s}px ${5 * s}px 0 ${p.ink}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Ben-Day Dot Pattern Texture Overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(${p.accent2} 1.5px, transparent 1.5px)`,
              backgroundSize: `${8 * s}px ${8 * s}px`,
              opacity: 0.12,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="flex items-start justify-between">
              <div>
                <div
                  style={{
                    fontSize: 6 * s,
                    fontWeight: 900,
                    color: p.accent,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Four-Color Process Dot Grid
                </div>
                <h3
                  style={{
                    fontFamily: p.display,
                    fontSize: 14 * s,
                    fontWeight: 900,
                    color: p.ink,
                    lineHeight: 1.15,
                    margin: `${3 * s}px 0 0 0`,
                  }}
                >
                  Mechanical Print-Dot Drama
                </h3>
              </div>

              {/* Comic Burst Badge */}
              <div
                style={{
                  background: p.accent,
                  color: p.surface,
                  border: `2px solid ${p.ink}`,
                  boxShadow: `${2 * s}px ${2 * s}px 0 ${p.ink}`,
                  fontFamily: p.display,
                  fontWeight: 900,
                  fontSize: 8 * s,
                  padding: `${2 * s}px ${6 * s}px`,
                  transform: "rotate(4deg)",
                }}
              >
                BAM!
              </div>
            </div>

            <p
              style={{
                fontSize: 6.5 * s,
                fontWeight: 600,
                color: p.muted,
                lineHeight: 1.45,
                margin: `${6 * s}px 0 0 0`,
              }}
            >
              Roy Lichtenstein pop art aesthetics: screened rosette dots, high-contrast black contours, and primary punch.
            </p>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              marginTop: 10 * s,
              paddingTop: 6 * s,
              borderTop: `2px solid ${p.ink}`,
              position: "relative",
              zIndex: 1,
            }}
          >
            <span style={{ fontSize: 6 * s, fontWeight: 800, color: p.accent2 }}>
              Screen Frequency: 65 LPI
            </span>
            <button
              type="button"
              style={{
                background: p.ink,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                boxShadow: `${2 * s}px ${2 * s}px 0 ${p.accent}`,
                fontFamily: p.display,
                fontWeight: 900,
                fontSize: 6.5 * s,
                padding: `${3 * s}px ${12 * s}px`,
                cursor: "pointer",
              }}
            >
              READ PANEL →
            </button>
          </div>
        </div>

        {/* Footer Ben-Day Strip */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `2px solid ${p.ink}`,
            paddingTop: 4 * s,
            fontSize: 5.5 * s,
            fontWeight: 800,
            textTransform: "uppercase",
            color: p.ink,
          }}
        >
          <span>✦ BEN-DAY SCREEN DOTS</span>
          <span>✦ 5PX HARD INK SHADOW</span>
          <span style={{ color: p.accent }}>✦ ZERO BLURRY GRADIENTS</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
