import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function GameBoyDmgPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col justify-between overflow-hidden"
        style={{
          background: "#BDB8AE", // Classic Game Boy gray chassis
          color: p.ink,
          fontFamily: p.display,
          padding: `${10 * s}px 0`,
        }}
      >
        {/* DMG-01 Chassis Screen Bezel (Dark Gray with Magenta & Blue Accent Lines) */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col"
          style={{
            maxWidth: 360 * s,
            background: "#5B5B66", // Dark bezel surround
            borderRadius: `6px 6px ${16 * s}px 6px`,
            padding: `${8 * s}px ${12 * s}px ${12 * s}px`,
            boxShadow: `inset 0 2px 4px rgba(0,0,0,0.4), 0 ${4 * s}px ${12 * s}px rgba(0,0,0,0.25)`,
          }}
        >
          {/* Top Line Rules with BATTERY LED */}
          <div className="flex items-center justify-between" style={{ marginBottom: 6 * s }}>
            {/* Battery Indicator */}
            <div className="flex items-center" style={{ gap: 4 * s }}>
              <span
                style={{
                  width: 5 * s,
                  height: 5 * s,
                  borderRadius: "50%",
                  background: "#D32F2F", // Red Battery LED
                  boxShadow: "0 0 6px #D32F2F",
                }}
              />
              <span style={{ fontSize: 5 * s, color: "#CCCCCC", letterSpacing: "0.08em" }}>BATTERY</span>
            </div>

            {/* Magenta / Blue Accent Stripes */}
            <div className="flex flex-col" style={{ gap: 2 * s, width: 80 * s }}>
              <div style={{ height: 1.5 * s, background: "#881B4C" }} />
              <div style={{ height: 1.5 * s, background: "#1B3B88" }} />
            </div>
          </div>

          {/* Authentic 4-Shade Olive Green LCD Screen */}
          <div
            className="relative flex flex-1 flex-col justify-between overflow-hidden"
            style={{
              background: p.bg, // #8BAC0F
              border: "3px solid #0F380F",
              borderRadius: 3 * s,
              padding: `${8 * s}px`,
              color: p.ink, // #0F380F
              boxShadow: "inset 0 0 10px rgba(15,56,15,0.4)",
            }}
          >
            {/* Pixel Grid / Scanline Texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(15, 56, 15, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 56, 15, 0.12) 1px, transparent 1px)",
                backgroundSize: `${3 * s}px ${3 * s}px`,
                pointerEvents: "none",
              }}
            />

            {/* In-Game HUD Header */}
            <div className="flex items-center justify-between" style={{ fontSize: 6.5 * s, fontWeight: 700 }}>
              <span>LINK-01</span>
              <span>♥ ♥ ♥ ♥</span>
              <span>04280 PTS</span>
            </div>

            {/* Center Dialogue Box */}
            <div
              style={{
                margin: `${6 * s}px 0`,
                border: "2px solid #0F380F",
                background: p.surface, // #9BBC0F
                padding: `${6 * s}px`,
              }}
            >
              <div style={{ fontSize: 7 * s, fontWeight: 700, lineHeight: 1.3 }}>
                IT&apos;S DANGEROUS TO GO ALONE! TAKE THIS.
              </div>
              <div className="flex items-center justify-between" style={{ marginTop: 4 * s, fontSize: 6 * s }}>
                <span>[A] ACCEPT</span>
                <span>▶ CONTINUE</span>
              </div>
            </div>

            {/* Bottom Status Row */}
            <div className="flex items-center justify-between" style={{ fontSize: 6 * s }}>
              <span>WORLD 1-1</span>
              <span>TIME: 284</span>
            </div>
          </div>
        </div>

        <div style={{ padding: `0 ${10 * s}px` }}>
          <Meta meta={meta} large={large} />
        </div>
      </div>
    </Frame>
  );
}
