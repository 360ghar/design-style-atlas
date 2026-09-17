import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function FuturismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const pad = large ? 28 : 14;
  return (
    <Frame meta={meta} large={large}>
      <div className="flex h-full flex-col" style={{ background: p.bg, color: p.ink, fontFamily: p.body }}>
        {/* speed-line nav */}
        <div className="overflow-hidden">
          <div
            className="flex items-center justify-between"
            style={{ padding: `${large ? 14 : 8}px ${pad}px`, transform: "skewX(-8deg)", margin: `0 ${large ? -12 : -6}px` }}
          >
            <div style={{ fontFamily: p.display, fontStyle: "italic", fontWeight: 800, fontSize: large ? 17 : 10, letterSpacing: "0.02em" }}>
              VELOCITÀ<span style={{ color: p.accent }}>.</span>
            </div>
            <div className="flex items-center" style={{ gap: large ? 14 : 7 }}>
              {(large ? ["MACCHINE", "PISTE", "MANIFESTO"] : ["MACCHINE", "PISTE"]).map((l) => (
                <span key={l} style={{ fontSize: large ? 10 : 6.5, fontWeight: 700, letterSpacing: "0.16em", color: p.muted }}>
                  {l} <span style={{ color: p.accent }}>›</span>
                </span>
              ))}
              <span
                style={{
                  background: p.accent,
                  color: p.surface,
                  fontSize: large ? 10 : 6.5,
                  fontWeight: 800,
                  fontStyle: "italic",
                  letterSpacing: "0.12em",
                  padding: large ? "8px 16px 8px 14px" : "4px 9px 4px 7px",
                  clipPath: "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                LAUNCH ››
              </span>
            </div>
          </div>
        </div>

        {/* diagonal dynamic hero */}
        <div className="relative flex-1 overflow-hidden" style={{ padding: `${large ? 26 : 12}px ${pad}px` }}>
          {/* diagonal speed bands */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true" style={{ transform: "skewX(-14deg)", marginLeft: large ? 60 : 30 }}>
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: `${18 + i * (large ? 26 : 14)}%`,
                  left: i === 1 ? "38%" : "8%",
                  height: large ? 8 - i * 2 : 5 - i,
                  width: i === 1 ? "70%" : "46%",
                  background: i === 1 ? p.accent : p.ink,
                  opacity: i === 1 ? 1 : 0.85,
                }}
              />
            ))}
            <div
              style={{
                position: "absolute",
                top: large ? "56%" : "58%",
                left: "8%",
                height: 3,
                width: "34%",
                background: p.accent2,
              }}
            />
          </div>

          <div className="relative" style={{ transform: "skewX(-6deg)", maxWidth: large ? 560 : 300 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ background: p.accent, height: large ? 10 : 5, width: large ? 72 : 36 }} />
              <span style={{ fontSize: large ? 10 : 6.5, fontWeight: 700, letterSpacing: "0.2em", color: p.muted }}>
                MANIFESTO Nº 7 — SPEED IS SACRED
              </span>
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontStyle: "italic",
                fontWeight: 900,
                fontSize: large ? 64 : 26,
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                marginTop: large ? 14 : 7,
              }}
            >
              VELOCITÀ
              <br />
              <span style={{ color: p.accent }}>400</span>
              <span style={{ fontSize: large ? 30 : 13, verticalAlign: "top", marginLeft: 6 }}>KM/H</span>
            </div>
            <p style={{ fontSize: large ? 14 : 8, lineHeight: 1.5, color: p.muted, marginTop: large ? 12 : 6, maxWidth: large ? 380 : 200 }}>
              Diagonals, not horizons. The machine dreams at full throttle.
            </p>
            <div style={{ display: "flex", gap: large ? 12 : 6, marginTop: large ? 18 : 9 }}>
              <span
                style={{
                  background: p.ink,
                  color: p.surface,
                  fontStyle: "italic",
                  fontWeight: 800,
                  fontSize: large ? 12 : 7,
                  letterSpacing: "0.12em",
                  padding: large ? "12px 26px 12px 20px" : "6px 12px 6px 9px",
                  clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
                }}
              >
                DRIVE ››
              </span>
              <span
                style={{
                  border: `2px solid ${p.ink}`,
                  color: p.ink,
                  fontStyle: "italic",
                  fontWeight: 800,
                  fontSize: large ? 12 : 7,
                  letterSpacing: "0.12em",
                  padding: large ? "10px 24px 10px 18px" : "4px 10px 4px 7px",
                  clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
                  background: p.surface,
                }}
              >
                SPECS ›
              </span>
            </div>
            {/* card-size telemetry strip (large uses the floating spec plate) */}
            {!large && (
              <div style={{ display: "flex", gap: 6, marginTop: 9 }}>
                {[
                  ["TOP SPEED", "400 KM/H"],
                  ["0–100", "2.4 SEC"],
                  ["DRAG", "0.19 CD"],
                ].map(([k, v]) => (
                  <div key={k} style={{ background: p.surface, borderTop: `3px solid ${p.accent}`, padding: "5px 7px", flex: 1 }}>
                    <div style={{ fontSize: 5, fontWeight: 700, letterSpacing: "0.14em", color: p.muted }}>{k}</div>
                    <div style={{ fontFamily: p.display, fontStyle: "italic", fontWeight: 800, fontSize: 9 }}>{v}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* spec plate card — large only, avoids overlap on cards */}
          {large && (
            <div
              className="absolute"
              style={{
                right: pad,
                top: 24,
                width: 230,
                background: p.surface,
                borderTop: `4px solid ${p.accent}`,
              }}
            >
              <div style={{ padding: "12px 14px" }}>
                <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.18em", color: p.muted }}>
                  SPEC PLATE — V12
                </div>
                <div style={{ fontFamily: p.display, fontStyle: "italic", fontWeight: 800, fontSize: 26, lineHeight: 1 }}>
                  1ʼ12<span style={{ color: p.accent }}>″</span>04
                </div>
                {[
                  ["TOP SPEED", "400 KM/H"],
                  ["0–100", "2.4 SEC"],
                  ["DRAG", "0.19 CD"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 10,
                      padding: "6px 0",
                      borderTop: `1px solid ${p.ink}22`,
                      marginTop: 4,
                    }}
                  >
                    <span style={{ color: p.muted }}>{k}</span>
                    <span style={{ fontWeight: 700 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: p.ink, color: p.surface, fontSize: 9, fontWeight: 700, letterSpacing: "0.16em", padding: "7px 14px" }}>
                TELEMETRY LIVE <span style={{ color: p.accent }}>●</span>
              </div>
            </div>
          )}
        </div>

        {/* manifest footer */}
        <div style={{ background: p.ink }}>
          <div style={{ background: p.accent, height: 3 }} />
          <div className="overflow-hidden">
            <div
              className="flex items-center justify-between"
              style={{
                color: p.surface,
                padding: `${large ? 12 : 7}px ${pad}px`,
                transform: "skewX(-8deg)",
                margin: `0 ${large ? -12 : -6}px`,
              }}
            >
              <span style={{ fontFamily: p.display, fontStyle: "italic", fontWeight: 700, fontSize: large ? 13 : 7, letterSpacing: "0.06em" }}>
                WE WILL SING OF VELOCITY <span style={{ color: p.accent }}>{"///"}</span> ART. 4 — THE MANIFESTO
              </span>
              <span style={{ fontSize: large ? 10 : 6, fontWeight: 700, letterSpacing: "0.18em", opacity: 0.7 }}>
                MILANO — {large ? "TORINO 1909 »»" : "1909 »»"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
