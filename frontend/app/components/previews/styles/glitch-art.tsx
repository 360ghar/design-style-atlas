import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GlitchArtPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: p.bg, // #0B0C10
          color: p.ink, // #66FCF1
          fontFamily: p.display,
          padding: `${10 * s}px`,
        }}
      >
        {/* CRT Scanline and Video Noise Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(11, 12, 16, 0) 50%, rgba(0, 0, 0, 0.6) 50%)",
            backgroundSize: "100% 3px",
            pointerEvents: "none",
            zIndex: 5,
            opacity: 0.75,
          }}
        />

        {/* Top VHS Tracking Line */}
        <div className="relative z-10 flex items-center justify-between" style={{ fontSize: 6.5 * s, color: "#FFFFFF" }}>
          <div className="flex items-center" style={{ gap: 6 * s }}>
            <span
              style={{
                width: 6 * s,
                height: 6 * s,
                borderRadius: "50%",
                background: "#FF0055",
                boxShadow: "0 0 8px #FF0055",
              }}
            />
            <span style={{ fontWeight: 700, letterSpacing: "0.08em" }}>REC ● 00:42:19</span>
          </div>
          <span style={{ color: p.accent, letterSpacing: "0.1em" }}>SP // TRACKING +04</span>
          <span style={{ color: p.accent2 }}>CH-09</span>
        </div>

        {/* Central Chromatic Aberration & Glitch Tearing Headline */}
        <div className="relative z-10 my-auto flex flex-col justify-center" style={{ padding: `${8 * s}px 0` }}>
          {/* Cyan/Red Displaced Text Layer */}
          <div className="relative">
            {/* Red offset shadow layer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: -3 * s,
                fontFamily: p.display,
                fontSize: 26 * s,
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#FF0055",
                opacity: 0.8,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                clipPath: "polygon(0 25%, 100% 25%, 100% 55%, 0 55%)",
              }}
            >
              SIGNAL
              <br />
              CORRUPT
            </div>

            {/* Cyan offset layer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 3 * s,
                fontFamily: p.display,
                fontSize: 26 * s,
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#00FFFF",
                opacity: 0.8,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                clipPath: "polygon(0 60%, 100% 60%, 100% 85%, 0 85%)",
              }}
            >
              SIGNAL
              <br />
              CORRUPT
            </div>

            {/* Base crisp layer */}
            <h2
              style={{
                fontFamily: p.display,
                fontSize: 26 * s,
                fontWeight: 900,
                lineHeight: 0.95,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
              }}
            >
              SIGNAL
              <br />
              <span style={{ color: p.ink }}>CORRUPT</span>
            </h2>
          </div>

          {/* Glitched Telemetry Data Card */}
          <div
            style={{
              marginTop: 10 * s,
              background: "#1F2833",
              borderLeft: `3px solid ${p.accent}`,
              borderRight: `3px solid ${p.accent2}`,
              padding: `${6 * s}px ${10 * s}px`,
              maxWidth: 340 * s,
            }}
          >
            <div style={{ fontSize: 6 * s, color: "#FF0055", fontWeight: 700 }}>
              &gt; MEMORY_BUFFER_OVERFLOW: 0x7FFF8A41
            </div>
            <div style={{ fontSize: 6.5 * s, color: p.muted, marginTop: 2 * s }}>
              Chromatic RGB displacement and horizontal raster tear artifacts.
            </div>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="relative z-10 flex items-center justify-between" style={{ fontSize: 6 * s, color: p.muted }}>
          <span>FRAME: 1492 / DROPPED: 18</span>
          <span style={{ color: p.accent2 }}>DATAMOSH ACTIVE_</span>
        </div>

        <div className="relative z-10">
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
