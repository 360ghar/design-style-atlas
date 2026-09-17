import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

const MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace";
const NOMINAL = "#7CFF6B";

export function SciFiUIPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = large ? 8 : 5.5;
  const pad = large ? 12 : 8;
  const gap = large ? 8 : 6;
  const corner = large ? 12 : 9;
  const rows: Array<[label: string, value: string, color: string]> = [
    ["VEL", "7.66 KM/S", p.accent],
    ["HULL", "98.2% OK", NOMINAL],
    ["FUEL", "61% LOW", p.accent2],
  ];
  return (
    <Frame meta={meta} large={large}>
      <div
        className="relative flex h-full flex-col"
        style={{ background: p.bg, padding: pad, gap, fontFamily: p.body, overflow: "hidden", fontSize: fs }}
      >
        {/* HUD frame corners */}
        <div style={{ position: "absolute", top: 3, left: 3, width: corner, height: corner, borderTop: `2px solid ${p.accent}`, borderLeft: `2px solid ${p.accent}` }} />
        <div style={{ position: "absolute", top: 3, right: 3, width: corner, height: corner, borderTop: `2px solid ${p.accent}`, borderRight: `2px solid ${p.accent}` }} />
        <div style={{ position: "absolute", bottom: 3, left: 3, width: corner, height: corner, borderBottom: `2px solid ${p.accent}`, borderLeft: `2px solid ${p.accent}` }} />
        <div style={{ position: "absolute", bottom: 3, right: 3, width: corner, height: corner, borderBottom: `2px solid ${p.accent}`, borderRight: `2px solid ${p.accent}` }} />

        {/* command bar */}
        <div className="flex items-center justify-between" style={{ color: p.muted, fontFamily: MONO, fontSize: fs - 1, letterSpacing: "0.18em", fontWeight: 700 }}>
          <span style={{ color: p.ink }}>◆ ASTRA-9 <span style={{ color: p.muted }}>SYS.NAV</span></span>
          <span style={{ border: `1px solid ${p.accent2}`, color: p.accent2, padding: large ? "2px 6px" : "1px 4px" }}>ALERT 2</span>
          <span style={{ color: p.accent }}>T+04:12:55</span>
        </div>

        {/* holographic hero readout */}
        <div style={{ position: "relative", flex: 1, minHeight: 0, border: `1px solid ${p.accent}66`, background: `${p.surface}CC`, padding: large ? 10 : 7, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -1, left: -1, width: 10, height: 10, borderTop: `2px solid ${p.accent}`, borderLeft: `2px solid ${p.accent}` }} />
          <div style={{ position: "absolute", top: -1, right: -1, width: 10, height: 10, borderTop: `2px solid ${p.accent}`, borderRight: `2px solid ${p.accent}` }} />
          <div className="flex items-center justify-between" style={{ fontFamily: MONO, fontSize: fs - 1, letterSpacing: "0.18em", color: p.muted, fontWeight: 700 }}>
            <span>APPROACH VECTOR · CH-04</span>
            <span style={{ display: "flex", alignItems: "center", gap: 4, color: NOMINAL }}>
              <span style={{ width: 5, height: 5, background: NOMINAL, boxShadow: `0 0 6px ${NOMINAL}` }} /> NOMINAL
            </span>
          </div>
          <div style={{ fontFamily: p.display, color: p.ink, fontWeight: 700, fontSize: large ? 21 : 14, lineHeight: 1.05, marginTop: large ? 6 : 4 }}>
            HOLD <span style={{ color: p.accent, textShadow: `0 0 12px ${p.accent}66` }}>ORBIT 98.2%</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: large ? 6 : 4, marginTop: large ? 8 : 5, fontFamily: MONO, fontSize: fs - 0.5 }}>
            {rows.map(([label, value, color]) => (
              <div key={label} style={{ border: `1px solid ${p.accent}44`, padding: large ? 4 : 3, background: `${p.bg}AA` }}>
                <div style={{ color: p.muted, letterSpacing: "0.15em" }}>{label}</div>
                <div style={{ color, fontWeight: 700, marginTop: 1 }}>{value}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: large ? 8 : 5, height: large ? 10 : 7, border: `1px solid ${p.accent}44`, background: `repeating-linear-gradient(90deg,${p.accent}33 0 2px,transparent 2px 5px)` }} />
        </div>

        {/* telemetry footer */}
        <div className="flex items-center justify-between" style={{ borderTop: `1px solid ${p.accent}44`, paddingTop: large ? 6 : 4, fontFamily: MONO, fontSize: fs - 1, letterSpacing: "0.14em", color: p.muted, fontWeight: 700 }}>
          <span>SIG <span style={{ color: p.accent }}>-42DB</span></span>
          <span>PWR <span style={{ color: p.accent }}>87%</span></span>
          <span>EVT <span style={{ color: p.accent2 }}>002 CAUTION</span></span>
          <span style={{ color: p.accent }}>▮▮▮▯▯ SCAN</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
