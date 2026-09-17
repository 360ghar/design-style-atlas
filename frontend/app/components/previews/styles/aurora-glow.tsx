import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function AuroraGlowPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const pad = large ? 14 : 8;
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col overflow-hidden"
        style={{ background: "#050914", color: "#E8F1FF", fontFamily: "Inter, Outfit, sans-serif" }}
      >
        {/* dark nav */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: `${large ? 10 : 6}px ${pad}px`,
            borderBottom: "1px solid rgba(0,229,160,0.35)",
            background: "#050914",
          }}
        >
          <div className="flex items-center" style={{ gap: 6 }}>
            <span
              style={{
                width: large ? 10 : 7,
                height: large ? 10 : 7,
                borderRadius: 99,
                background: "#00E5A0",
                boxShadow: "0 0 40px rgba(0,229,160,0.25), 0 0 100px rgba(124,92,255,0.20)",
              }}
            />
            <span
              style={{
                fontFamily: "Outfit, Sora, sans-serif",
                fontWeight: 700,
                fontSize: large ? 11 : 7.5,
                letterSpacing: "0.08em",
              }}
            >
              AURORA
            </span>
          </div>
          <div className="flex items-center" style={{ gap: 6 }}>
            <span style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.18em", fontWeight: 600, color: "#6E86A3" }}>
              ● KP 5 LIVE
            </span>
            <span
              style={{
                fontSize: large ? 8 : 5.5,
                fontWeight: 700,
                color: "#050914",
                background: "#00E5A0",
                borderRadius: 99,
                padding: large ? "4px 10px" : "2px 7px",
                boxShadow: "0 0 40px rgba(0,229,160,0.25), 0 0 100px rgba(124,92,255,0.20)",
              }}
            >
              Watch
            </span>
          </div>
        </div>

        {/* aurora ribbon hero + glass card */}
        <div className="relative flex-1" style={{ padding: `${large ? 16 : 9}px ${pad}px`, overflow: "hidden" }}>
          <svg
            viewBox="0 0 200 70"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", filter: "blur(1.5px)" }}
          >
            <path
              className="pv-drift"
              d="M-10 42 Q 40 6, 100 30 T 210 18"
              fill="none"
              stroke="#00E5A0"
              strokeWidth="7"
              opacity="0.5"
              strokeLinecap="round"
            />
            <path
              d="M-10 52 Q 50 20, 110 40 T 210 30"
              fill="none"
              stroke="#7C5CFF"
              strokeWidth="5"
              opacity="0.55"
              strokeLinecap="round"
            />
          </svg>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(#E8F1FF 1px, transparent 1px)",
              backgroundSize: "16px 16px",
              opacity: 0.18,
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              top: "30%",
              height: 40,
              background: "rgba(0,229,160,0.12)",
              filter: "blur(18px)",
            }}
          />
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontSize: large ? 8 : 5.5,
                fontWeight: 600,
                letterSpacing: "0.18em",
                color: "#00E5A0",
                textShadow: "0 0 12px rgba(0,229,160,0.6)",
              }}
            >
              POLAR NIGHT · 69°N
            </div>
            <div
              style={{
                fontFamily: "Outfit, Sora, sans-serif",
                fontWeight: 700,
                fontSize: large ? 24 : 14,
                lineHeight: 1.05,
                marginTop: 2,
              }}
            >
              Tonight over
              <br />
              Tromsø
            </div>
            {/* glass card */}
            <div
              style={{
                marginTop: large ? 10 : 6,
                border: "1px solid rgba(0,229,160,0.35)",
                borderTop: "2px solid #00E5A0",
                borderRadius: 16,
                background: "#0A1220",
                opacity: 0.96,
                padding: large ? "9px 12px" : "6px 9px",
                boxShadow: "0 0 40px rgba(0,229,160,0.25), 0 0 100px rgba(124,92,255,0.20)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="flex items-center justify-between">
                <span style={{ fontSize: large ? 8 : 5.5, letterSpacing: "0.16em", fontWeight: 600, color: "#6E86A3" }}>
                  ● OBSERVATORY LIVE
                </span>
                <span style={{ fontSize: large ? 8 : 5.5, fontWeight: 700, color: "#7C5CFF" }}>22:14</span>
              </div>
              <div style={{ display: "flex", gap: large ? 10 : 7, marginTop: 5 }}>
                {[
                  ["KP", "5.3"],
                  ["-14°", "CLEAR"],
                  ["94%", "GLOW"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: "Outfit, Sora, sans-serif", fontWeight: 700, fontSize: large ? 13 : 8 }}>
                      {v}
                    </div>
                    <div style={{ fontSize: large ? 7 : 5, letterSpacing: "0.14em", color: "#6E86A3", fontWeight: 600 }}>
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* glow CTA footer */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: `${large ? 9 : 6}px ${pad}px`,
            background: "#0A1220",
            borderTop: "1px solid rgba(0,229,160,0.35)",
          }}
        >
          <span style={{ fontSize: large ? 8 : 5.5, color: "#6E86A3", fontWeight: 500 }}>Peak at midnight · still sky</span>
          <span
            style={{
              fontSize: large ? 8.5 : 6,
              fontWeight: 700,
              color: "#050914",
              background: "#00E5A0",
              borderRadius: 99,
              padding: large ? "5px 12px" : "3px 9px",
              boxShadow: "0 0 40px rgba(0,229,160,0.25), 0 0 100px rgba(124,92,255,0.20)",
            }}
          >
            Get sky alert
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
