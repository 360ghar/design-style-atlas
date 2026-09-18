import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SkeuomorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Leather Chassis with Dashed Perimeter Stitching */}
        <div
          className="my-auto flex flex-col justify-between"
          style={{
            background: p.surface,
            borderRadius: 8 * s,
            border: `2px solid ${p.ink}33`,
            boxShadow: `0 1px 0 ${p.surface}, 0 ${8 * s}px ${24 * s}px ${p.bg}, 0 ${2 * s}px ${6 * s}px ${p.bg}`,
            padding: `${12 * s}px ${14 * s}px`,
            position: "relative",
          }}
        >
          {/* Dashed Perimeter Stitching */}
          <div
            className="pointer-events-none absolute inset-1.5"
            style={{
              border: `1.5px dashed ${p.muted}55`,
              borderRadius: 6 * s,
            }}
          />

          <div className="flex items-start justify-between" style={{ position: "relative", zIndex: 1 }}>
            <div>
              <div
                style={{
                  fontSize: 6 * s,
                  fontWeight: 700,
                  color: p.accent2,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                Analog Master Recorder
              </div>
              <h3
                style={{
                  fontFamily: p.display,
                  fontSize: 13 * s,
                  fontWeight: 700,
                  color: p.ink,
                  textShadow: `0 1px 0 ${p.surface}`,
                  lineHeight: 1.15,
                  margin: `${3 * s}px 0 0 0`,
                }}
              >
                Stitched Leather &amp; Machined Dials
              </h3>
            </div>

            {/* Machined Brushed Aluminum Dial */}
            <div
              style={{
                width: 32 * s,
                height: 32 * s,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${p.surface} 30%, ${p.muted} 90%)`,
                border: `2px solid ${p.muted}`,
                boxShadow: `0 1px 0 ${p.surface}, 0 ${4 * s}px ${8 * s}px ${p.bg}, inset 0 1px 2px ${p.surface}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: 3 * s,
                  height: 10 * s,
                  background: p.accent2,
                  borderRadius: 2 * s,
                  transform: "rotate(45deg)",
                  marginTop: -6 * s,
                }}
              />
            </div>
          </div>

          {/* Analog VU Meter Level Display */}
          <div
            style={{
              background: p.bg,
              border: `1.5px solid ${p.ink}66`,
              borderRadius: 4 * s,
              padding: `${6 * s}px ${10 * s}px`,
              margin: `${8 * s}px 0`,
              boxShadow: `inset 0 ${2 * s}px ${6 * s}px ${p.bg}`,
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="flex items-center justify-between" style={{ fontSize: 5.5 * s, color: p.muted }}>
              <span>-20 dB</span>
              <span>-10 dB</span>
              <span style={{ color: p.accent2 }}>0 dB</span>
              <span style={{ color: p.accent }}>+3 dB</span>
            </div>
            {/* VU Meter needle bar */}
            <div
              style={{
                height: 4 * s,
                background: `${p.surface}22`,
                borderRadius: 2 * s,
                marginTop: 3 * s,
                overflow: "hidden",
              }}
            >
              <div style={{ width: "72%", height: "100%", background: `linear-gradient(90deg, ${p.accent2}, ${p.accent})` }} />
            </div>
          </div>

          <div
            className="flex items-center justify-between"
            style={{
              borderTop: `1px solid ${p.ink}15`,
              paddingTop: 6 * s,
              position: "relative",
              zIndex: 1,
            }}
          >
            <span style={{ fontSize: 6 * s, color: p.muted }}>
              Calibre 1974 · Dual Track
            </span>
            <button
              type="button"
              style={{
                background: `linear-gradient(180deg, ${p.accent}, ${p.accent}CC)`,
                color: p.surface,
                border: `1px solid ${p.ink}44`,
                borderRadius: 999,
                fontSize: 6.5 * s,
                fontWeight: 700,
                padding: `${4 * s}px ${14 * s}px`,
                cursor: "pointer",
                boxShadow: `0 1px 0 ${p.surface}, 0 ${2 * s}px ${6 * s}px ${p.bg}, inset 0 1px 0 ${p.surface}66`,
              }}
            >
              ● Record Track
            </button>
          </div>
        </div>

        {/* Skeuomorphic Realism Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: 5.5 * s,
            color: p.muted,
            textShadow: `0 1px 0 ${p.surface}44`,
          }}
        >
          <span>✦ DASHED LEATHER STITCHING</span>
          <span>✦ BRUSHED METAL DIALS</span>
          <span style={{ color: p.accent2 }}>✦ REALISTIC TOP LIGHT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
