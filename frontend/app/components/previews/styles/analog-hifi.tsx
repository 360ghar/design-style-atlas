import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AnalogHifiPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
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
        {/* Brushed Anodized Aluminum Faceplate */}
        <div
          className="relative mx-auto flex w-full flex-1 flex-col justify-between"
          style={{
            maxWidth: 420 * s,
            background: "linear-gradient(180deg, #E6E8EB 0%, #D0D3D8 100%)",
            color: "#181A1D",
            borderRadius: 4 * s,
            border: "1px solid #FFFFFF",
            boxShadow: `0 ${10 * s}px ${30 * s}px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.9)`,
            padding: `${10 * s}px ${12 * s}px`,
          }}
        >
          {/* Top Brand Nameplate */}
          <div className="flex items-center justify-between" style={{ marginBottom: 6 * s }}>
            <div className="flex items-center" style={{ gap: 6 * s }}>
              <span style={{ fontSize: 9 * s, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                MARANTZ
              </span>
              <span style={{ fontSize: 6 * s, color: "#60646B", fontWeight: 600 }}>MODEL 2270 STEREO</span>
            </div>
            {/* Green Power / Tuned LED */}
            <div className="flex items-center" style={{ gap: 4 * s }}>
              <span
                style={{
                  width: 6 * s,
                  height: 6 * s,
                  borderRadius: "50%",
                  background: p.accent2,
                  boxShadow: `0 0 8px ${p.accent2}`,
                }}
              />
              <span style={{ fontSize: 5.5 * s, fontWeight: 700, color: "#45484E" }}>STEREO</span>
            </div>
          </div>

          {/* Dual Backlit Amber VU Meter Bay */}
          <div
            className="flex items-center"
            style={{
              gap: 8 * s,
              background: "#141518",
              padding: `${6 * s}px ${8 * s}px`,
              borderRadius: 3 * s,
              border: "1.5px solid #A8ACB4",
              boxShadow: "inset 0 3px 10px rgba(0,0,0,0.8)",
            }}
          >
            {/* Left Channel VU Meter */}
            <div
              className="relative flex flex-col justify-between overflow-hidden"
              style={{
                flex: 1,
                height: 52 * s,
                background: "linear-gradient(180deg, #FFBE42 0%, #FFA812 100%)",
                borderRadius: 2 * s,
                padding: `${4 * s}px ${6 * s}px`,
                boxShadow: "0 0 12px rgba(255,170,20,0.4), inset 0 0 6px rgba(0,0,0,0.3)",
                color: "#181A1D",
              }}
            >
              <div className="flex justify-between" style={{ fontSize: 5 * s, fontWeight: 700 }}>
                <span>-20 -10 -5 -3 -1 0 +1 +3 dB</span>
              </div>
              {/* Meter Needle */}
              <div
                style={{
                  position: "absolute",
                  bottom: -15 * s,
                  left: "50%",
                  width: 1.5 * s,
                  height: 60 * s,
                  background: "#181A1D",
                  transformOrigin: "bottom center",
                  transform: "rotate(-12deg)",
                }}
              />
              <div style={{ alignSelf: "center", fontSize: 6 * s, fontWeight: 800, marginTop: "auto" }}>
                LEFT VU
              </div>
            </div>

            {/* Right Channel VU Meter */}
            <div
              className="relative flex flex-col justify-between overflow-hidden"
              style={{
                flex: 1,
                height: 52 * s,
                background: "linear-gradient(180deg, #FFBE42 0%, #FFA812 100%)",
                borderRadius: 2 * s,
                padding: `${4 * s}px ${6 * s}px`,
                boxShadow: "0 0 12px rgba(255,170,20,0.4), inset 0 0 6px rgba(0,0,0,0.3)",
                color: "#181A1D",
              }}
            >
              <div className="flex justify-between" style={{ fontSize: 5 * s, fontWeight: 700 }}>
                <span>-20 -10 -5 -3 -1 0 +1 +3 dB</span>
              </div>
              {/* Meter Needle */}
              <div
                style={{
                  position: "absolute",
                  bottom: -15 * s,
                  left: "50%",
                  width: 1.5 * s,
                  height: 60 * s,
                  background: "#181A1D",
                  transformOrigin: "bottom center",
                  transform: "rotate(6deg)",
                }}
              />
              <div style={{ alignSelf: "center", fontSize: 6 * s, fontWeight: 800, marginTop: "auto" }}>
                RIGHT VU
              </div>
            </div>
          </div>

          {/* Lower Knurled Knobs & Push Buttons Deck */}
          <div className="flex items-center justify-between" style={{ marginTop: 8 * s }}>
            {/* Machined Volume Knob */}
            <div className="flex items-center" style={{ gap: 6 * s }}>
              <div
                className="relative flex items-center justify-center"
                style={{
                  width: 24 * s,
                  height: 24 * s,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at 40% 40%, #FFFFFF, #B8BAC0)",
                  border: "1.5px solid #8C9098",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
                }}
              >
                {/* Dial Notch */}
                <div
                  style={{
                    width: 2 * s,
                    height: 8 * s,
                    background: "#222",
                    position: "absolute",
                    top: 2 * s,
                    borderRadius: 1,
                  }}
                />
              </div>
              <div style={{ fontSize: 5.5 * s, fontWeight: 700, color: "#45484E", textTransform: "uppercase" }}>
                VOLUME
              </div>
            </div>

            {/* Input Selector Buttons */}
            <div className="flex items-center" style={{ gap: 4 * s }}>
              {["PHONO", "TUNER", "AUX"].map((src, i) => (
                <div
                  key={src}
                  style={{
                    background: i === 1 ? "#1C1E22" : "#D4D7DC",
                    color: i === 1 ? p.accent : "#333",
                    fontSize: 5.5 * s,
                    fontWeight: 700,
                    padding: `${3 * s}px ${6 * s}px`,
                    borderRadius: 2 * s,
                    border: "1px solid #999DA6",
                    boxShadow: i === 1 ? "inset 0 1px 3px rgba(0,0,0,0.8)" : "0 1px 2px rgba(0,0,0,0.2)",
                  }}
                >
                  {src}
                </div>
              ))}
            </div>
          </div>
        </div>

        <Meta meta={meta} large={large} />
      </div>
    </Frame>
  );
}
