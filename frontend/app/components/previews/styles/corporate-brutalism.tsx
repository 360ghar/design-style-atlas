import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CorporateBrutalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const fs = large
    ? { kicker: 8, title: 22, stat: 17, small: 8, tiny: 7.5 }
    : { kicker: 5.5, title: 13, stat: 10.5, small: 6, tiny: 5.5 };
  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "5%",
          background: p.bg,
          fontFamily: p.body,
        }}
      >
        {/* Enterprise topbar: logo + SLA pill, heavy rule */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: `3px solid ${p.ink}`,
            paddingBottom: large ? 8 : 6,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 7 : 5 }}>
            <div
              style={{
                width: large ? 18 : 12,
                height: large ? 18 : 12,
                background: p.ink,
                color: p.surface,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: large ? 11 : 7,
                lineHeight: 1,
              }}
            >
              G
            </div>
            <strong
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: large ? 13 : 8.5,
                letterSpacing: "0.04em",
                color: p.ink,
              }}
            >
              GLOBEX INDUSTRIES
            </strong>
          </div>
          <span
            style={{
              border: `2px solid ${p.ink}`,
              background: p.surface,
              color: p.ink,
              fontSize: fs.tiny,
              fontWeight: 800,
              letterSpacing: "0.12em",
              padding: large ? "3px 8px" : "2px 5px",
              whiteSpace: "nowrap",
            }}
          >
            SLA 99.99%
          </span>
        </div>

        {/* KPI hero + hard-shadow primary CTA */}
        <div style={{ marginTop: large ? 10 : 7 }}>
          <div
            style={{
              fontSize: fs.kicker,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: p.accent,
            }}
          >
            Q3 — OPERATING REVIEW
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 8,
              marginTop: 4,
            }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                fontSize: fs.title,
                lineHeight: 1,
                color: p.ink,
              }}
            >
              Output, audited.
            </div>
            <div
              style={{
                background: p.ink,
                color: p.surface,
                border: `2px solid ${p.ink}`,
                boxShadow: `3px 3px 0 ${p.accent}`,
                fontSize: fs.small,
                fontWeight: 800,
                letterSpacing: "0.15em",
                padding: large ? "7px 12px" : "5px 8px",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
            >
              FILE 10-K →
            </div>
          </div>
        </div>

        {/* Bordered stat blocks */}
        <div
          className="grid grid-cols-3"
          style={{ gap: large ? 8 : 5, marginTop: large ? 10 : 7 }}
        >
          {[
            ["REV", "$4.8B", "+12%"],
            ["OP-EX", "$2.1B", "−4%"],
            ["HC", "8,412", "+306"],
          ].map((s) => (
            <div
              key={s[0]}
              style={{
                border: `2px solid ${p.ink}`,
                background: p.surface,
                padding: large ? "7px 8px" : "4px 5px",
              }}
            >
              <div
                style={{
                  fontSize: fs.tiny,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: p.muted,
                }}
              >
                {s[0]}
              </div>
              <div
                style={{
                  fontFamily: p.display,
                  fontWeight: 800,
                  fontSize: fs.stat,
                  color: p.ink,
                  fontVariantNumeric: "tabular-nums",
                  lineHeight: 1.2,
                }}
              >
                {s[1]}
              </div>
              <div
                style={{
                  fontSize: fs.tiny,
                  fontWeight: 700,
                  color: p.accent,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {s[2]}
              </div>
            </div>
          ))}
        </div>

        {/* Data-row footer */}
        <div
          style={{
            marginTop: "auto",
            borderTop: `1px solid ${p.ink}`,
            paddingTop: large ? 6 : 4,
            display: "flex",
            justifyContent: "space-between",
            gap: 8,
            fontSize: fs.tiny,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: p.muted,
            fontVariantNumeric: "tabular-nums",
            whiteSpace: "nowrap",
          }}
        >
          <span>AUDITED · ISO 9001</span>
          <span>§4.2 COMPLIANT</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
