import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function NewspaperPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const display = `"Times New Roman", Times, serif`;
  const body = `Georgia, "Times New Roman", serif`;
  const bg = "#F7F4EC";
  const surface = "#FFFFFF";
  const ink = "#1A1A1A";
  const muted = "#6E6A61";
  const accent = "#A6192E";
  const agate = large ? 7 : 5;
  const cols = [
    "The council voted 7–2 after a five-hour session. Crews start at the north pier in spring.",
    "Merchants split on the levy. ‘Density is trust,’ the mayor said. Markets rose on the news.",
    "Full text and ward maps on page A12. Jump to Metro, col. 4 for the dissent.",
  ];
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col px-[6%] py-[5%]"
        style={{ backgroundColor: bg, color: ink, fontFamily: body }}
      >
        <div
          className="flex items-center justify-between"
          style={{
            fontSize: agate,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: muted,
          }}
        >
          <span>Vol. CXII — No. 214</span>
          <span style={{ color: ink }}>Thursday, Sept. 17, 2026</span>
          <span>
            Price <span style={{ color: accent }}>One Cent</span>
          </span>
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: display,
            fontWeight: 900,
            fontSize: large ? 30 : 16,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            marginTop: large ? 6 : 4,
          }}
        >
          The Daily Ledger
        </div>
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `3px solid ${ink}`,
            borderBottom: `1px solid ${ink}`,
            marginTop: large ? 6 : 4,
            padding: large ? "4px 0" : "3px 0",
            fontSize: agate,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          <span>World</span>
          <span>Metro</span>
          <span>Markets ▲</span>
          <span>Sports</span>
          <span style={{ color: muted }}>☀ 21°C</span>
        </div>
        <div
          style={{
            marginTop: large ? 8 : 5,
            fontSize: agate,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: accent,
          }}
        >
          Lede story — Riverfront vote
        </div>
        <div
          style={{
            fontFamily: display,
            fontWeight: 900,
            fontSize: large ? 17 : 10,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            marginTop: 2,
          }}
        >
          City Votes 7–2 to Rebuild the Riverfront
        </div>
        <div
          className="grid grid-cols-3"
          style={{ marginTop: large ? 6 : 4, flex: 1, minHeight: 0 }}
        >
          {cols.map((text, i) => (
            <div
              key={i}
              style={{
                borderLeft: i === 0 ? "none" : `1px solid ${ink}`,
                paddingLeft: i === 0 ? 0 : large ? 8 : 5,
                paddingRight: i === 2 ? 0 : large ? 8 : 5,
                fontSize: large ? 8 : 5.5,
                lineHeight: 1.5,
                textAlign: "justify",
                hyphens: "auto",
              }}
            >
              {text}
            </div>
          ))}
        </div>
        <div style={{ borderTop: `3px solid ${ink}`, marginTop: large ? 8 : 5, paddingTop: large ? 5 : 4 }}>
          <div
            style={{
              fontSize: agate,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Classifieds <span style={{ color: muted }}>— agate type</span>
          </div>
          <div className="grid grid-cols-3" style={{ gap: large ? 6 : 4, marginTop: 4 }}>
            {["For sale: press desk", "Help wanted: carriers", "Notices: folio A14"].map((c) => (
              <div
                key={c}
                style={{
                  backgroundColor: surface,
                  border: `1px solid ${ink}`,
                  padding: large ? "4px 5px" : "3px 4px",
                  fontSize: large ? 6.5 : 4.5,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
