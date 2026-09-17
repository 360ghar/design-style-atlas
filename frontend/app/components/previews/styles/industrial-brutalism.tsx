import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function IndustrialBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const mono = "ui-monospace, monospace";
  const hazard = `repeating-linear-gradient(45deg, ${p.accent} 0 8px, #111 8px 16px)`;
  const gauges: Array<[string, string, string, boolean]> = [
    ["LOAD", "68%", "68%", false],
    ["TEMP", "42C", "42%", true],
    ["TORQ", "9.1K", "72%", false],
  ];
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* gantry bar — signature */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "8px 12px" : "5px 8px",
            background: "#111",
            borderBottom: "2px solid #555",
          }}
        >
          <span
            style={{
              fontFamily: p.display,
              fontSize: large ? 15 : 9,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            HEAVY<span style={{ color: p.accent }}>{"//"}</span>SYS
          </span>
          <span
            style={{
              fontFamily: mono,
              fontSize: large ? 8 : 6,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7CFF6B",
            }}
          >
            ● NOMINAL
          </span>
        </div>

        {/* stencil/mono spec bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: large ? "5px 12px" : "3px 8px",
            borderBottom: "2px solid #555",
            fontFamily: mono,
            fontSize: large ? 8 : 5.5,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: p.muted,
          }}
        >
          <span>EST.2019 — PLANT 07</span>
          <span>40.71N / 74.00W</span>
        </div>

        {/* steel-panel hero */}
        <div style={{ padding: large ? "10px 12px 8px" : "6px 8px 5px" }}>
          <div
            style={{
              position: "relative",
              border: "2px solid #555",
              background: `linear-gradient(180deg, ${p.surface} 0%, ${p.bg} 100%)`,
              padding: large ? "12px 12px 10px" : "7px 8px 6px",
            }}
          >
            {large ? (
              <>
                {["top:5px;left:5px", "top:5px;right:5px", "bottom:5px;left:5px", "bottom:5px;right:5px"].map(
                  (pos) => {
                    const [v, h] = pos.split(";");
                    const [vk, vv] = v.split(":");
                    const [hk, hv] = h.split(":");
                    return (
                      <span
                        key={pos}
                        style={{
                          position: "absolute",
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: p.muted,
                          border: "1px solid #111",
                          [vk]: vv,
                          [hk]: hv,
                        }}
                      />
                    );
                  }
                )}
              </>
            ) : null}
            <div
              style={{
                fontFamily: mono,
                fontSize: large ? 8 : 5.5,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: p.accent,
              }}
            >
              SPEC PLATE · UNIT 07
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontSize: large ? 30 : 16,
                lineHeight: 1,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                marginTop: large ? 5 : 3,
              }}
            >
              BUILT TO <span style={{ color: p.accent }}>HAUL</span>
            </div>
            <div
              style={{
                fontSize: large ? 10 : 6.5,
                color: p.muted,
                marginTop: large ? 4 : 2,
              }}
            >
              Rated steel system. 24/7 duty cycle.
            </div>
            <div style={{ display: "flex", gap: large ? 8 : 5, marginTop: large ? 8 : 5 }}>
              <span
                style={{
                  background: p.accent,
                  color: "#111",
                  fontFamily: mono,
                  fontWeight: 700,
                  fontSize: large ? 8 : 5.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: large ? "6px 10px" : "4px 7px",
                  border: `2px solid ${p.ink}`,
                }}
              >
                ENGAGE
              </span>
              <span
                style={{
                  color: p.accent,
                  fontFamily: mono,
                  fontWeight: 700,
                  fontSize: large ? 8 : 5.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: large ? "6px 10px" : "4px 7px",
                  border: `2px solid ${p.accent}`,
                }}
              >
                SPECS
              </span>
            </div>
          </div>
        </div>

        {/* spec table — signature gauges */}
        <div
          className="grid flex-1 grid-cols-3"
          style={{ gap: large ? 8 : 5, padding: large ? "0 12px" : "0 8px" }}
        >
          {gauges.map((g) => (
            <div
              key={g[0]}
              style={{
                border: "2px solid #555",
                background: p.surface,
                padding: large ? 8 : 5,
              }}
            >
              <div
                style={{
                  fontSize: large ? 7 : 5,
                  fontFamily: mono,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: p.muted,
                }}
              >
                SPEC · {g[0]}
              </div>
              <div
                style={{
                  fontFamily: p.display,
                  fontSize: large ? 20 : 12,
                  color: p.accent,
                }}
              >
                {g[1]}
              </div>
              <div style={{ background: "#111", height: 5, marginTop: 4 }}>
                <div
                  style={{
                    background: g[3] ? p.accent2 : p.accent,
                    width: g[2],
                    height: "100%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* hazard divider */}
        <div style={{ height: large ? 10 : 7, marginTop: large ? 8 : 5, background: hazard }} />

        {/* spec + warning CTA footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "7px 12px" : "4px 8px",
            background: "#111",
            borderTop: "2px solid #555",
          }}
        >
          <span
            style={{
              fontFamily: mono,
              fontSize: large ? 8 : 5.5,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: p.muted,
            }}
          >
            IP65 · 24/7 DUTY
          </span>
          <span
            style={{
              background: p.accent2,
              color: "#111",
              fontFamily: mono,
              fontWeight: 700,
              fontSize: large ? 8 : 5.5,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: large ? "5px 9px" : "3px 6px",
            }}
          >
            ⚠ OVERLOAD
          </span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
