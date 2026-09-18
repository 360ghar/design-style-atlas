import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function BentoGridPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const gap = large ? 14 : 8;
  const pad = large ? 16 : 8;
  const tileShadow = "0 2px 12px rgba(28,25,23,0.06)";
  const card: React.CSSProperties = {
    background: p.surface,
    border: `1px solid ${p.ink}1A`,
    borderRadius: 14,
    boxShadow: tileShadow,
    padding: pad,
    overflow: "hidden",
  };
  return (
    <Frame meta={meta} large={large}>
      <div
        className="flex h-full flex-col"
        style={{
          background: p.bg,
          backgroundImage: `radial-gradient(${p.ink}14 1px, transparent 1.2px)`,
          backgroundSize: large ? "16px 16px" : "12px 12px",
          color: p.ink,
          fontFamily: p.body,
          padding: large ? 20 : 12,
          paddingBottom: large ? 26 : 20,
          gap: large ? 14 : 8,
        }}
      >
        {/* bento nav */}
        <div className="flex items-center justify-between">
          <div className="flex items-center" style={{ gap: large ? 10 : 6 }}>
            <span
              className="inline-flex items-center justify-center shrink-0"
              style={{
                width: large ? 20 : 14,
                height: large ? 20 : 14,
                borderRadius: 6,
                background: p.ink,
                color: p.surface,
                fontSize: large ? 10 : 7,
                fontWeight: 800,
              }}
            >
              ▦
            </span>
            <span style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 12 : 8 }}>Bento</span>
            <span className="hidden @sm:flex items-center" style={{ gap: large ? 10 : 5, marginLeft: large ? 8 : 4, color: p.muted, fontSize: large ? 10 : 6.5 }}>
              <span>Features</span>
              <span>Stats</span>
              <span>Pricing</span>
            </span>
          </div>
          <span
            style={{
              background: p.surface,
              border: `1px solid ${p.ink}1A`,
              borderRadius: 999,
              padding: large ? "5px 12px" : "3px 8px",
              fontSize: large ? 10 : 6.5,
              fontWeight: 600,
              color: p.ink,
            }}
          >
            Sign in
          </span>
        </div>

        {/* Responsive Bento Board */}
        <div
          className="grid grid-cols-2 @md:grid-cols-4 flex-1 min-h-0"
          style={{ gap }}
        >
          {/* hero tile */}
          <div
            className="col-span-2 @md:col-span-2 @md:row-span-2"
            style={{
              background: p.ink,
              color: p.surface,
              borderRadius: 14,
              boxShadow: tileShadow,
              padding: large ? 16 : 9,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: large ? 10 : 6,
              overflow: "hidden",
            }}
          >
            <div>
              <div style={{ color: p.accent2, fontSize: large ? 9 : 6, fontWeight: 700, letterSpacing: "0.08em" }}>
                ✦ FLAGSHIP
              </div>
              <div style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 20 : 12, lineHeight: 1.1, marginTop: 4 }}>
                Everything,
                <br />
                one view.
              </div>
            </div>
            <div>
              <div className="flex items-end" style={{ gap: large ? 6 : 4, height: large ? 54 : 34 }}>
                {[38, 62, 45, 80, 58, 95, 72].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      borderRadius: 4,
                      background: i === 5 ? `linear-gradient(180deg, ${p.accent2}, ${p.accent})` : `${p.surface}2E`,
                    }}
                  />
                ))}
              </div>
              <div
                style={{
                  marginTop: large ? 10 : 6,
                  borderRadius: 999,
                  background: p.accent,
                  color: p.surface,
                  fontSize: large ? 10 : 6.5,
                  fontWeight: 700,
                  padding: large ? "6px 12px" : "4px 8px",
                  alignSelf: "flex-start",
                  display: "inline-block",
                }}
              >
                Try free →
              </div>
            </div>
          </div>

          {/* avatar tile */}
          <div className="col-span-1" style={card}>
            <div className="flex items-center" style={{ gap: 4 }}>
              {["AK", "JM", "RS"].map((n, i) => (
                <span
                  key={n}
                  style={{
                    width: large ? 20 : 14,
                    height: large ? 20 : 14,
                    borderRadius: 999,
                    background: i === 0 ? p.accent : i === 1 ? p.accent2 : p.muted,
                    color: p.surface,
                    fontSize: large ? 7 : 5,
                    fontWeight: 800,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: i === 0 ? 0 : large ? -7 : -5,
                    border: `2px solid ${p.surface}`,
                  }}
                >
                  {n}
                </span>
              ))}
            </div>
            <div style={{ fontWeight: 800, fontSize: large ? 15 : 9, marginTop: large ? 6 : 4 }}>4.9 ★</div>
            <div style={{ fontSize: large ? 8.5 : 6, color: p.muted }}>12k reviews</div>
          </div>

          {/* sparkline tile */}
          <div className="col-span-1" style={card}>
            <div style={{ fontSize: large ? 8.5 : 6, color: p.muted, fontWeight: 600 }}>▲ 99.99%</div>
            <svg viewBox="0 0 80 28" style={{ width: "100%", height: large ? 30 : 20, marginTop: 4 }} aria-hidden="true">
              <path d="M2 22 L16 18 L30 20 L44 10 L58 14 L72 4 L78 6" fill="none" stroke={p.accent} strokeWidth="3" strokeLinecap="round" />
              <path d="M2 22 L16 18 L30 20 L44 10 L58 14 L72 4 L78 6 L78 28 L2 28 Z" fill={`${p.accent}22`} stroke="none" />
            </svg>
            <div style={{ fontSize: large ? 8.5 : 6, color: p.muted }}>uptime p95</div>
          </div>

          {/* wide CTA tile */}
          <div
            className="col-span-2"
            style={{
              background: `linear-gradient(120deg, ${p.accent}, ${p.accent2})`,
              color: p.surface,
              borderRadius: 14,
              boxShadow: tileShadow,
              padding: pad,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              overflow: "hidden",
            }}
          >
            <div>
              <div style={{ fontFamily: p.display, fontWeight: 700, fontSize: large ? 13 : 8.5, lineHeight: 1.15 }}>
                Ship in minutes
              </div>
              <div style={{ fontSize: large ? 9.5 : 6.5, opacity: 0.85 }}>0.04s latency · no setup</div>
            </div>
            <span
              style={{
                background: p.surface,
                color: p.ink,
                borderRadius: 999,
                fontWeight: 700,
                fontSize: large ? 9.5 : 6.5,
                padding: large ? "6px 12px" : "4px 8px",
                whiteSpace: "nowrap",
              }}
            >
              Start →
            </span>
          </div>
        </div>

        {/* footer meta */}
        <div className="flex flex-wrap items-center justify-between gap-1" style={{ color: p.muted, fontSize: large ? 9 : 6.5 }}>
          <span>Acme — Q3 launch board</span>
          <span>Updated 2m ago · 4 tiles</span>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
