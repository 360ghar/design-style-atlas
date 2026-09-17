import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function SwissPosterPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const rows = large
    ? [
        { d: "09.10", t: "Sinfoniekonzert", v: "Tonhalle" },
        { d: "16.10", t: "Kammerabend II", v: "Helmhaus" },
        { d: "23.10", t: "Chor + Orgel", v: "Fraumünster" },
      ]
    : [
        { d: "09.10", t: "Sinfoniekonzert", v: "Tonhalle" },
        { d: "16.10", t: "Kammerabend II", v: "Helmhaus" },
      ];
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: large ? 640 : undefined,
          textAlign: "left",
        }}
      >
        {/* 4px black top rule */}
        <div style={{ background: p.ink, height: large ? 8 : 5, flexShrink: 0 }} />
        {/* institutional header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: large ? 12 : 8,
            padding: large ? "10px 20px" : "7px 12px",
            background: p.surface,
            borderBottom: `1px solid ${p.ink}`,
          }}
        >
          <span
            style={{
              background: p.accent,
              color: p.surface,
              fontFamily: p.display,
              fontWeight: 700,
              fontSize: large ? 11 : 7,
              letterSpacing: "0.08em",
              padding: large ? "5px 7px" : "3px 5px",
            }}
          >
            ZH
          </span>
          <span
            style={{
              fontFamily: p.display,
              fontWeight: 700,
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.18em",
              color: p.ink,
            }}
          >
            PROGRAMM&ensp;PLAKATE&ensp;ARCHIV
          </span>
          <span style={{ flex: 1 }} />
          <span
            style={{
              background: p.accent,
              color: p.surface,
              fontFamily: p.display,
              fontWeight: 700,
              fontSize: large ? 10 : 6.5,
              letterSpacing: "0.14em",
              padding: large ? "5px 9px" : "3px 6px",
            }}
          >
            SAISON 57
          </span>
        </div>
        {/* grid index bar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            borderBottom: `1px solid ${p.ink}`,
            background: p.bg,
          }}
        >
          {["01 MUSIK", "02 BÜHNE", "03 KUNST", "04 INDEX"].map((c, i) => (
            <span
              key={c}
              style={{
                fontFamily: p.display,
                fontWeight: 700,
                fontSize: large ? 9 : 6,
                letterSpacing: "0.16em",
                color: i === 3 ? p.surface : p.muted,
                background: i === 3 ? p.ink : "transparent",
                padding: large ? "6px 12px" : "4px 8px",
                borderLeft: i === 0 ? "none" : `1px solid ${p.ink}`,
              }}
            >
              {c}
            </span>
          ))}
        </div>
        {/* asymmetric hero */}
        <div style={{ display: "flex", alignItems: "stretch", flex: 1, minHeight: 0 }}>
          <div style={{ flex: "1.5", padding: large ? "18px 0 12px 20px" : "10px 0 8px 12px" }}>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 700,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.2em",
                color: p.ink,
              }}
            >
              TONHALLE · 09.10 · 20:00 UHR
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 700,
                fontSize: large ? 132 : 68,
                lineHeight: 0.85,
                letterSpacing: "-0.045em",
                color: p.ink,
                marginTop: large ? 6 : 2,
              }}
            >
              9<span style={{ color: p.accent }}>.</span>
            </div>
            <div style={{ background: p.ink, height: large ? 10 : 6, width: "72%", marginTop: large ? 10 : 6 }} />
            <div style={{ background: p.accent, height: large ? 10 : 6, width: "34%", marginTop: 4 }} />
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 700,
                fontSize: large ? 21 : 11,
                letterSpacing: "-0.01em",
                color: p.ink,
                marginTop: large ? 10 : 6,
              }}
            >
              SINFONIE-KONZERT
            </div>
            <div style={{ fontSize: large ? 13 : 8, lineHeight: 1.45, color: p.ink, marginTop: 2 }}>
              Leitung — M. Keller
              <br />
              Bruckner Neunte, ragged right
            </div>
          </div>
          <div
            style={{
              flex: "1",
              background: p.accent,
              margin: large ? "18px 20px 12px 8px" : "10px 12px 8px 6px",
              padding: large ? 14 : 8,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minWidth: 0,
            }}
          >
            <div
              style={{
                width: large ? 44 : 24,
                height: large ? 44 : 24,
                borderRadius: "50%",
                background: p.surface,
                flexShrink: 0,
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: p.display,
                  fontWeight: 700,
                  fontSize: large ? 11 : 6.5,
                  letterSpacing: "0.18em",
                  color: p.surface,
                }}
              >
                DIENSTAG
              </div>
              <div
                style={{
                  fontFamily: p.display,
                  fontWeight: 700,
                  fontSize: large ? 30 : 16,
                  lineHeight: 1,
                  color: p.surface,
                }}
              >
                20:00
              </div>
              <div style={{ background: p.ink, height: 4, width: "100%", marginTop: large ? 10 : 6 }} />
              <div style={{ background: p.accent2, height: 4, width: "100%", marginTop: 3 }} />
            </div>
          </div>
        </div>
        {/* program index rows */}
        <div style={{ padding: large ? "0 20px" : "0 12px", background: p.bg }}>
          {rows.map((r) => (
            <div
              key={r.d}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: large ? 14 : 8,
                borderTop: `1px solid ${p.ink}`,
                padding: large ? "8px 0" : "5px 0",
              }}
            >
              <span style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 15 : 9, color: p.accent }}>
                {r.d}
              </span>
              <span style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 13 : 8, color: p.ink }}>
                {r.t}
              </span>
              <span style={{ flex: 1 }} />
              <span style={{ fontSize: large ? 10 : 6.5, letterSpacing: "0.12em", color: p.muted }}>{r.v.toUpperCase()}</span>
            </div>
          ))}
        </div>
        {/* constructor footer: diagonal red/black bands */}
        <div style={{ marginTop: "auto", flexShrink: 0, paddingBottom: large ? 26 : 20 }}>
          <div style={{ display: "flex", alignItems: "stretch", overflow: "hidden", borderTop: `4px solid ${p.ink}` }}>
            <div
              style={{
                background: p.ink,
                color: p.surface,
                fontFamily: p.display,
                fontWeight: 700,
                fontSize: large ? 10 : 6.5,
                letterSpacing: "0.18em",
                padding: large ? "9px 14px" : "6px 10px",
                flex: 1,
              }}
            >
              KONSTRUKTIV — ZÜRICH 1957
            </div>
            <div style={{ background: p.accent, width: large ? 72 : 44, transform: "skewX(-20deg)", margin: "0 -10px" }} />
            <div style={{ background: p.accent2, width: large ? 14 : 8, flexShrink: 0 }} />
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
