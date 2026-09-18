import type { StyleMeta } from "../../../lib/styles";
import { readableTextColor } from "../../../lib/preview-theme";
import { Frame, Meta } from "../frame";

export function DuotonePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;
  // Never hardcode white here: the preview theme can flip this style to a light
  // canvas, where a white headline and white waveform bars disappear.
  const onAccent = readableTextColor(p.accent);

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${12 * s}px`,
        }}
      >
        {/* Extreme Contrast Two-Tone Backdrop Gradient Map */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${p.bg} 40%, ${p.accent} 160%)`,
            opacity: 0.85,
          }}
        />

        {/* Poster Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                width: 10 * s,
                height: 10 * s,
                borderRadius: "50%",
                background: p.accent,
                boxShadow: `0 0 12px ${p.accent}`,
              }}
            />
            <span style={{ fontFamily: p.display, fontSize: 8 * s, fontWeight: 800, letterSpacing: "-0.01em" }}>
              WAVE // SOUNDTRACK
            </span>
          </div>
          <div
            style={{
              fontSize: 6 * s,
              fontFamily: p.display,
              fontWeight: 700,
              color: p.accent,
              border: `1px solid ${p.accent}`,
              padding: `${2 * s}px ${6 * s}px`,
              borderRadius: 2,
            }}
          >
            LIVE STREAM
          </div>
        </div>

        {/* Central Bold Duotone Headline & Play Element */}
        <div className="relative z-10 my-auto flex items-center justify-between" style={{ padding: `${8 * s}px 0` }}>
          <div style={{ maxWidth: 220 * s }}>
            <div
              style={{
                fontSize: 6.5 * s,
                color: p.muted,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              SPOTIFY POSTERIZATION
            </div>
            <h2
              style={{
                fontFamily: p.display,
                fontSize: 22 * s,
                fontWeight: 900,
                lineHeight: 1.0,
                color: p.ink,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                marginTop: 2 * s,
              }}
            >
              HIGH VOLTAGE
              <br />
              <span style={{ color: p.accent }}>DUAL HUE</span>
            </h2>
          </div>

          {/* Glowing Circular Play Button */}
          <div
            className="flex items-center justify-center"
            style={{
              width: 48 * s,
              height: 48 * s,
              borderRadius: "50%",
              background: p.accent,
              color: onAccent,
              fontSize: 16 * s,
              boxShadow: `0 0 24px ${p.accent}88`,
            }}
          >
            ▶
          </div>
        </div>

        {/* Bottom Audio Frequency Waveform Strip */}
        <div
          className="relative z-10 flex items-end justify-between"
          style={{
            height: 24 * s,
            gap: 3 * s,
            padding: `${4 * s}px 0`,
            borderTop: `1px solid ${p.ink}22`,
          }}
        >
          {[20, 45, 80, 60, 30, 90, 100, 75, 50, 85, 40, 70, 95, 60, 35, 75, 90, 50, 30, 65].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background: i % 2 === 0 ? p.accent : p.ink,
                borderRadius: 1,
                opacity: 0.9,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
