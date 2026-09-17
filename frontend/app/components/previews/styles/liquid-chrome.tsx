import type { CSSProperties } from "react";
import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function LiquidChromePreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const chromeText: CSSProperties = {
    background:
      "linear-gradient(180deg, #F2F2F5 0%, #C0C0C8 28%, #8E8E99 45%, #121218 50%, #C0C0C8 54%, #F2F2F5 68%, #7DF9FF 88%, #C0C0C8 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col overflow-hidden"
        style={{ background: "#0A0A0F", color: "#F2F2F5", fontFamily: "Outfit, Inter, sans-serif" }}
      >
        {/* dark voids + sparkles */}
        <div aria-hidden style={{ position: "absolute", inset: 0 }}>
          <div
            style={{
              position: "absolute",
              top: large ? 90 : 44,
              left: "50%",
              width: large ? 420 : 200,
              height: large ? 200 : 92,
              transform: "translateX(-50%)",
              borderRadius: "40% 60% 60% 40% / 55% 45% 60% 40%",
              background: "linear-gradient(120deg, #F2F2F5, #C0C0C8 35%, #8E8E99 55%, #121218 78%, #C0C0C8)",
              opacity: 0.9,
              boxShadow: "0 20px 80px rgba(192,192,200,0.2)",
              filter: "blur(0.5px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: large ? 118 : 56,
              left: "50%",
              width: large ? 300 : 140,
              height: large ? 10 : 5,
              transform: "translateX(-50%) rotate(-8deg)",
              borderRadius: 999,
              background: "linear-gradient(90deg, transparent, #F2F2F5, transparent)",
              opacity: 0.85,
            }}
          />
          <div style={{ position: "absolute", top: large ? 64 : 30, left: large ? 72 : 28, width: 3, height: 3, borderRadius: 999, background: "#F2F2F5" }} />
          <div style={{ position: "absolute", top: large ? 150 : 66, right: large ? 84 : 30, width: 4, height: 4, borderRadius: 999, background: "#7DF9FF" }} />
          <div style={{ position: "absolute", top: large ? 210 : 96, left: large ? 120 : 44, width: 2, height: 2, borderRadius: 999, background: "#C0C0C8" }} />
        </div>

        {/* chrome nav pill */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: large ? "20px 28px 0" : "10px 12px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 10 : 6 }}>
            <span
              style={{
                width: large ? 18 : 10,
                height: large ? 18 : 10,
                borderRadius: "55% 45% 60% 40%",
                background: "linear-gradient(135deg, #F2F2F5, #8E8E99 60%, #7DF9FF)",
                display: "inline-block",
              }}
            />
            <span style={{ fontFamily: "Unbounded, Michroma, sans-serif", fontWeight: 800, fontSize: large ? 13 : 7.5, letterSpacing: "0.2em", ...chromeText }}>
              MERCURY
            </span>
          </div>
          <div style={{ display: "flex", gap: large ? 18 : 8, fontSize: large ? 10 : 5.5, letterSpacing: "0.22em", fontWeight: 700, color: "#8E8E99" }}>
            <span>ARCHIVE</span>
            {large ? <span>COLLECTION</span> : null}
            <span>STUDIO</span>
          </div>
          <span
            style={{
              fontSize: large ? 11 : 6,
              fontWeight: 800,
              letterSpacing: "0.14em",
              color: "#0A0A0F",
              background: "linear-gradient(120deg, #F2F2F5, #C0C0C8 60%, #8E8E99)",
              borderRadius: 999,
              padding: large ? "10px 18px" : "5px 10px",
              border: "1px solid #F2F2F5",
            }}
          >
            BOOKING
          </span>
        </div>

        {/* molten hero type */}
        <div style={{ position: "relative", textAlign: "center", padding: large ? "40px 24px 0" : "14px 10px 0" }}>
          <div style={{ fontSize: large ? 11 : 6, fontWeight: 700, letterSpacing: "0.34em", color: "#7DF9FF" }}>
            MOLTEN METAL — Nº 7
          </div>
          <h1
            style={{
              fontFamily: "Unbounded, Michroma, sans-serif",
              fontWeight: 800,
              fontSize: large ? 68 : 30,
              lineHeight: 0.95,
              letterSpacing: "0.01em",
              margin: large ? "14px 0 0" : "8px 0 0",
              ...chromeText,
              filter: "drop-shadow(0 20px 80px rgba(192,192,200,0.2))",
            }}
          >
            LIQUID
            <br />
            CHROME
          </h1>
          {/* mirror reflection */}
          <div
            aria-hidden
            style={{
              fontFamily: "Unbounded, Michroma, sans-serif",
              fontWeight: 800,
              fontSize: large ? 68 : 30,
              lineHeight: 0.95,
              transform: "scaleY(-1)",
              opacity: 0.22,
              filter: "blur(1px)",
              maskImage: "linear-gradient(to top, black, transparent 78%)",
              WebkitMaskImage: "linear-gradient(to top, black, transparent 78%)",
              ...chromeText,
            }}
          >
            CHROME
          </div>
          <p style={{ color: "#8E8E99", fontSize: large ? 15 : 7.5, maxWidth: large ? 440 : 220, margin: large ? "12px auto 0" : "6px auto 0", lineHeight: 1.5 }}>
            Mirror-duplicate reflections over dark voids. One molten moment per page.
          </p>
        </div>

        {/* reflective CTA footer */}
        <div style={{ position: "relative", marginTop: "auto", padding: large ? "20px 28px 38px" : "10px 12px 22px" }}>
          <div
            style={{
              background: "#121218",
              border: "1px solid rgba(192,192,200,0.35)",
              borderRadius: 20,
              padding: large ? "16px 18px" : "8px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              boxShadow: "0 20px 80px rgba(192,192,200,0.2)",
            }}
          >
            <div>
              <div style={{ fontFamily: "Unbounded, Michroma, sans-serif", fontWeight: 700, fontSize: large ? 14 : 7.5, color: "#F2F2F5", letterSpacing: "0.06em" }}>
                OWN THE REFLECTION
              </div>
              <div style={{ fontSize: large ? 12 : 6.5, color: "#8E8E99", marginTop: 2 }}>
                Silver + one ice-blue accent. Darkness to mirror.
              </div>
            </div>
            <div style={{ display: "flex", gap: large ? 10 : 6, flexShrink: 0 }}>
              <span
                style={{
                  fontSize: large ? 11 : 6,
                  fontWeight: 800,
                  letterSpacing: "0.12em",
                  color: "#0A0A0F",
                  background: "linear-gradient(120deg, #F2F2F5, #C0C0C8 60%, #7DF9FF)",
                  borderRadius: 999,
                  padding: large ? "12px 20px" : "6px 10px",
                }}
              >
                ENTER VOID
              </span>
              {large ? (
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    color: "#C0C0C8",
                    border: "1px solid rgba(192,192,200,0.4)",
                    borderRadius: 999,
                    padding: "12px 20px",
                  }}
                >
                  LOOKBOOK
                </span>
              ) : null}
            </div>
          </div>
          <div
            aria-hidden
            style={{
              height: large ? 16 : 8,
              margin: "0 14px",
              borderRadius: "0 0 20px 20px",
              transform: "scaleY(-1)",
              opacity: 0.18,
              filter: "blur(0.5px)",
              background: "linear-gradient(to top, #C0C0C8, transparent)",
              maskImage: "linear-gradient(to top, black, transparent)",
              WebkitMaskImage: "linear-gradient(to top, black, transparent)",
            }}
          />
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
