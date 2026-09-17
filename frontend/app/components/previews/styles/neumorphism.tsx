import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const OUT = "6px 6px 12px #B8BCC4, -6px -6px 12px #FFFFFF";
const IN = "inset 4px 4px 8px #B8BCC4, inset -4px -4px 8px #FFFFFF";
const IN_SM = "inset 3px 3px 6px #B8BCC4, inset -3px -3px 6px #FFFFFF";
const FONT = "Inter, Nunito, sans-serif";

export function NeumorphismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const tabs = ["Focus", "Flow", "Calm"];
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          background: "#E0E5EC",
          height: large ? 640 : "100%",
          display: "flex",
          flexDirection: "column",
          gap: large ? 22 : 10,
          padding: large ? 32 : 14,
          paddingBottom: large ? 52 : 26,
          fontFamily: FONT,
        }}
      >
        {/* soft extruded nav */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 10 : 6 }}>
            <span
              style={{
                background: "#E0E5EC",
                borderRadius: "50%",
                width: large ? 36 : 20,
                height: large ? 36 : 20,
                boxShadow: OUT,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ width: large ? 12 : 7, height: large ? 12 : 7, borderRadius: "50%", background: "#4D7CFE" }} />
            </span>
            <span style={{ fontWeight: 700, fontSize: large ? 15 : 9, color: "#4A5568", textShadow: "1px 1px 0 #FFFFFF" }}>
              softform
            </span>
          </div>
          <div
            style={{
              background: "#E0E5EC",
              borderRadius: 999,
              boxShadow: OUT,
              padding: large ? 5 : 3,
              display: "flex",
              gap: large ? 4 : 2,
            }}
          >
            {tabs.map((t, i) => (
              <span
                key={t}
                style={{
                  borderRadius: 999,
                  padding: large ? "9px 18px" : "4px 9px",
                  fontSize: large ? 12 : 7,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: i === 0 ? "#4D7CFE" : "#4A5568",
                  background: "#E0E5EC",
                  boxShadow: i === 0 ? IN_SM : "none",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* embossed hero dials */}
        <div
          style={{
            background: "#E0E5EC",
            borderRadius: 16,
            boxShadow: OUT,
            padding: large ? 28 : 12,
            display: "flex",
            alignItems: "center",
            gap: large ? 28 : 12,
            flex: large ? undefined : 1,
            minHeight: 0,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: large ? 12 : 6.5, fontWeight: 600, letterSpacing: "0.18em", color: "#8A94A6" }}>
              NOW PLAYING
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: large ? 36 : 15,
                lineHeight: 1.05,
                color: "#4A5568",
                textShadow: "1px 1px 0 #FFFFFF",
                marginTop: large ? 8 : 3,
              }}
            >
              Soft Circuitry
            </div>
            <div style={{ fontSize: large ? 15 : 8, color: "#4A5568", marginTop: large ? 8 : 3 }}>
              Extruded calm for deep focus sessions.
            </div>
            {/* concave slider well */}
            <div
              style={{
                marginTop: large ? 18 : 8,
                background: "#E0E5EC",
                borderRadius: 999,
                boxShadow: IN_SM,
                height: large ? 22 : 12,
                display: "flex",
                alignItems: "center",
                padding: large ? "0 5px" : "0 3px",
              }}
            >
              <div style={{ position: "relative", width: "100%", height: large ? 8 : 4, borderRadius: 999, background: "#E0E5EC", boxShadow: IN_SM }}>
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "62%", borderRadius: 999, background: "#4D7CFE" }} />
                <span
                  style={{
                    position: "absolute",
                    left: "62%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: large ? 26 : 14,
                    height: large ? 26 : 14,
                    borderRadius: "50%",
                    background: "#E0E5EC",
                    boxShadow: OUT,
                  }}
                />
              </div>
            </div>
            {/* transport + toggle row */}
            <div style={{ display: "flex", alignItems: "center", gap: large ? 12 : 6, marginTop: large ? 16 : 8 }}>
              {["\u23EE", "\u23F8", "\u23ED"].map((b, i) => (
                <span
                  key={b}
                  style={{
                    background: "#E0E5EC",
                    borderRadius: "50%",
                    width: large ? 40 : 22,
                    height: large ? 40 : 22,
                    boxShadow: i === 1 ? IN_SM : OUT,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: large ? 13 : 8,
                    color: i === 1 ? "#4D7CFE" : "#4A5568",
                  }}
                >
                  {b}
                </span>
              ))}
              <span
                style={{
                  marginLeft: "auto",
                  background: "#E0E5EC",
                  borderRadius: 999,
                  boxShadow: IN_SM,
                  width: large ? 64 : 34,
                  height: large ? 32 : 18,
                  display: "inline-flex",
                  alignItems: "center",
                  padding: large ? "0 4px" : "0 2px",
                  justifyContent: "flex-end",
                }}
              >
                <span style={{ width: large ? 24 : 13, height: large ? 24 : 13, borderRadius: "50%", background: "#E0E5EC", boxShadow: OUT, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ width: large ? 8 : 5, height: large ? 8 : 5, borderRadius: "50%", background: "#FF6B9D" }} />
                </span>
              </span>
            </div>
          </div>
          {/* hero dial */}
          <div
            style={{
              background: "#E0E5EC",
              borderRadius: "50%",
              width: large ? 148 : 76,
              height: large ? 148 : 76,
              boxShadow: OUT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                background: "#E0E5EC",
                borderRadius: "50%",
                width: large ? 96 : 48,
                height: large ? 96 : 48,
                boxShadow: IN,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: large ? 26 : 14,
                color: "#4D7CFE",
              }}
            >
              {"\u25B6"}
            </span>
          </div>
        </div>

        {/* concave CTA */}
        <div style={{ display: "flex", gap: large ? 16 : 8 }}>
          <span
            style={{
              flex: 1,
              textAlign: "center",
              background: "#E0E5EC",
              borderRadius: 999,
              boxShadow: IN,
              padding: large ? "16px 20px" : "8px 10px",
              fontSize: large ? 14 : 8,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#4D7CFE",
            }}
          >
            Start Session
          </span>
          <span
            style={{
              flex: 1,
              textAlign: "center",
              background: "#E0E5EC",
              borderRadius: 999,
              boxShadow: OUT,
              padding: large ? "16px 20px" : "8px 10px",
              fontSize: large ? 14 : 8,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#4A5568",
            }}
          >
            Presets
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
