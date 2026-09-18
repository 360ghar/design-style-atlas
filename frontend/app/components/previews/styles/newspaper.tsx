import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function NewspaperPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const s = large ? 1.6 : 1;

  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col justify-between"
        style={{
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
          padding: `${10 * s}px ${12 * s}px`,
        }}
      >
        {/* Newspaper Flag / Nameplate */}
        <div>
          <div
            className="flex items-center justify-between"
            style={{
              fontSize: 5.5 * s,
              color: p.muted,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              borderBottom: `1px solid ${p.ink}44`,
              paddingBottom: 2 * s,
            }}
          >
            <span>“The Paper of Record”</span>
            <span>VOL. CLXXIV · NO. 59,204</span>
            <span>LATE CITY EDITION · $2.50</span>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: `${3 * s}px 0`,
            }}
          >
            <div
              style={{
                fontFamily: p.display,
                fontSize: 16 * s,
                fontWeight: 900,
                letterSpacing: "0.04em",
                color: p.ink,
                lineHeight: 1,
              }}
            >
              The Metropolitan Gazette
            </div>
          </div>

          <div
            style={{
              borderTop: `3px solid ${p.ink}`,
              borderBottom: `1px solid ${p.ink}`,
              padding: `${2 * s}px 0`,
              display: "flex",
              justifyContent: "space-between",
              fontSize: 5.5 * s,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            <span>WASHINGTON</span>
            <span>INTERNATIONAL</span>
            <span>BUSINESS</span>
            <span>SCIENCE</span>
            <span>ARTS</span>
          </div>
        </div>

        {/* Multi-Column Front Page Grid */}
        <div className="my-auto grid grid-cols-3" style={{ gap: 8 * s }}>
          {/* Lead Headline Column (spans 2) */}
          <div className="col-span-2">
            <h2
              style={{
                fontFamily: p.display,
                fontSize: 13 * s,
                fontWeight: 800,
                lineHeight: 1.1,
                color: p.ink,
                margin: 0,
              }}
            >
              SENATE APPROVES LANDMARK TRANSIT CORRIDOR ACCORD
            </h2>
            <div
              style={{
                fontSize: 5.5 * s,
                fontWeight: 700,
                color: p.muted,
                margin: `${3 * s}px 0`,
                textTransform: "uppercase",
              }}
            >
              By Special Correspondent · Capitol Bureau
            </div>
            <p
              style={{
                fontSize: 6.5 * s,
                lineHeight: 1.45,
                color: p.ink,
                margin: 0,
              }}
            >
              Following thirty hours of floor debate, legislators passed the $48 billion infrastructure package connecting eastern maritime ports to inland rail hubs.
            </p>
          </div>

          {/* Side Column Briefing Well */}
          <div
            className="border-l pl-3"
            style={{
              borderColor: `${p.ink}33`,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 5.5 * s,
                  fontWeight: 800,
                  color: p.accent,
                  textTransform: "uppercase",
                  marginBottom: 2 * s,
                }}
              >
                NEWS SUMMARY
              </div>
              <div style={{ fontSize: 6 * s, fontWeight: 700, lineHeight: 1.3 }}>
                Markets Rally as Central Banks Hold Interest Rates Steady
              </div>
              <p
                style={{
                  fontSize: 5.5 * s,
                  color: p.muted,
                  margin: `${2 * s}px 0 0 0`,
                  lineHeight: 1.4,
                }}
              >
                European exchanges climbed 1.2% following morning releases.
              </p>
            </div>
            <div
              style={{
                fontSize: 5.5 * s,
                fontWeight: 700,
                borderTop: `1px solid ${p.ink}22`,
                paddingTop: 3 * s,
                color: p.accent,
              }}
            >
              INDEX ON PAGE A12 →
            </div>
          </div>
        </div>

        {/* Newsprint Dateline Footer */}
        <div
          className="flex items-center justify-between"
          style={{
            borderTop: `1px solid ${p.ink}44`,
            paddingTop: 3 * s,
            fontSize: 5.5 * s,
            color: p.muted,
          }}
        >
          <span>WEATHER: 64° CLEAR</span>
          <span>ESTABLISHED 1851 · ALL RIGHTS RESERVED</span>
          <span>PAGE A1</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
