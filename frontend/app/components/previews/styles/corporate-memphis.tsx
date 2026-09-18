import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function CorporateMemphisPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const softShadow = `0 8px 28px ${p.ink}14`;
  const hairline = `${p.ink}1F`;

  return (
    <Frame meta={meta} large={large}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: large ? 640 : "100%",
          background: p.bg,
          color: p.ink,
          fontFamily: p.body,
        }}
      >
        {/* announcement */}
        <div
          style={{
            background: p.surface,
            color: p.muted,
            textAlign: "center",
            fontWeight: 600,
            fontSize: large ? 11 : 5.5,
            letterSpacing: "0.04em",
            padding: large ? "7px 16px" : "3px 8px",
          }}
        >
          NEW&nbsp;&nbsp;The team rituals kit is live — grab the templates
        </div>

        {/* nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: large ? "12px 28px" : "5px 10px",
            background: p.bg,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 4 }}>
            <span style={{ display: "flex" }}>
              <span style={{ width: large ? 14 : 7, height: large ? 14 : 7, borderRadius: 999, background: p.accent }} />
              <span
                style={{
                  width: large ? 14 : 7,
                  height: large ? 14 : 7,
                  borderRadius: 999,
                  background: p.accent2,
                  marginLeft: large ? -5 : -2.5,
                  opacity: 0.9,
                }}
              />
            </span>
            <span style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 14 : 7, letterSpacing: "-0.01em" }}>
              SynergyCloud
            </span>
          </div>
          <div className="hidden @sm:flex items-center" style={{ gap: large ? 16 : 6, color: p.muted, fontWeight: 600, fontSize: large ? 12 : 5.5 }}>
            <span>Product</span>
            <span>Pricing</span>
            {!large ? null : <span>Customers</span>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: large ? 10 : 4 }}>
            {!large ? null : (
              <span style={{ fontSize: 12, fontWeight: 600, color: p.muted }}>Sign in</span>
            )}
            <span
              style={{
                background: p.accent,
                color: p.bg,
                borderRadius: 999,
                fontWeight: 700,
                fontSize: large ? 12 : 5.5,
                padding: large ? "10px 18px" : "3.5px 8px",
                minHeight: large ? 44 : undefined,
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Get started
            </span>
          </div>
        </div>

        {/* hero */}
        <div
          className="grid grid-cols-1 @md:grid-cols-[1.05fr_1fr]"
          style={{
            gap: large ? 24 : 8,
            alignItems: "center",
            padding: large ? "clamp(14px, 3cqi, 28px)" : "8px 10px 6px",
            backgroundImage: `radial-gradient(${p.muted}3D 1px, transparent 1.2px)`,
            backgroundSize: large ? "16px 16px" : "9px 9px",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                background: p.surface,
                color: p.accent,
                borderRadius: 999,
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontSize: large ? 10 : 5,
                padding: large ? "5px 10px" : "2px 6px",
              }}
            >
              HR + FINANCE FRIENDLY
            </span>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.06,
                fontSize: large ? 38 : 13.5,
                marginTop: large ? 10 : 4,
              }}
            >
              Teamwork makes the KPI work.
            </div>
            <div style={{ color: p.muted, fontSize: large ? 14.5 : 6.5, lineHeight: 1.5, marginTop: large ? 10 : 4 }}>
              Onboard, pay, and cheer your crew in one friendly hub.
            </div>
            <div style={{ display: "flex", gap: large ? 10 : 4, marginTop: large ? 16 : 6 }}>
              <span
                style={{
                  background: p.accent,
                  color: p.bg,
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: large ? 13 : 6,
                  padding: large ? "12px 22px" : "4px 9px",
                  boxShadow: softShadow,
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: large ? 44 : undefined,
                }}
              >
                Start free
              </span>
              <span
                style={{
                  background: p.bg,
                  color: p.ink,
                  border: `1.5px solid ${hairline}`,
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: large ? 13 : 6,
                  padding: large ? "11px 20px" : "3.5px 8px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Watch demo
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: large ? 8 : 4, marginTop: large ? 14 : 5 }}>
              <span style={{ display: "flex" }}>
                {[p.accent, p.accent2, p.ink].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      width: large ? 22 : 9,
                      height: large ? 22 : 9,
                      borderRadius: 999,
                      background: c,
                      border: `2px solid ${p.bg}`,
                      marginLeft: i === 0 ? 0 : large ? -7 : -3,
                    }}
                  />
                ))}
              </span>
              <span style={{ fontSize: large ? 11.5 : 5.5, color: p.muted, fontWeight: 600 }}>4.9 from 2,000 happy teams</span>
            </div>
          </div>

          {/* flat-figure scene */}
          <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", minHeight: large ? 300 : 96 }}>
            <div
              style={{
                position: "absolute",
                width: large ? 300 : 104,
                height: large ? 270 : 92,
                background: p.surface,
                borderRadius: "58% 42% 55% 45% / 52% 56% 44% 48%",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: large ? 120 : 42,
                height: large ? 120 : 42,
                left: large ? 18 : 6,
                top: large ? 6 : 2,
                background: `${p.accent}1F`,
                borderRadius: "50%",
              }}
            />
            <div style={{ position: "relative", display: "flex", alignItems: "flex-end", gap: large ? 16 : 6 }}>
              {[
                { skin: p.accent, body: p.ink, h: large ? 118 : 42 },
                { skin: p.accent2, body: p.accent, h: large ? 148 : 52 },
                { skin: p.ink, body: p.accent2, h: large ? 108 : 38 },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: large ? 34 : 13, height: large ? 34 : 13, borderRadius: 999, background: f.skin }} />
                  <div
                    style={{
                      width: large ? 40 : 15,
                      height: f.h,
                      borderRadius: 999,
                      background: f.body,
                      marginTop: large ? 6 : 2,
                    }}
                  />
                  <div style={{ display: "flex", gap: large ? 6 : 2, marginTop: large ? -f.h + 18 : -(f.h - 7) }}>
                    <span style={{ width: large ? 8 : 3, height: large ? 52 : 18, borderRadius: 999, background: f.skin, transform: "rotate(24deg)" }} />
                    <span style={{ width: large ? 8 : 3, height: large ? 52 : 18, borderRadius: 999, background: f.skin, transform: "rotate(-24deg)" }} />
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                position: "absolute",
                right: large ? 4 : 0,
                top: large ? 34 : 8,
                background: p.bg,
                borderRadius: large ? 12 : 6,
                boxShadow: softShadow,
                padding: large ? "8px 12px" : "3px 6px",
                fontSize: large ? 11 : 5,
                fontWeight: 700,
              }}
            >
              <span style={{ color: p.accent }}>✓</span> Payroll done
            </div>
            <div
              style={{
                position: "absolute",
                left: large ? 2 : 0,
                bottom: large ? 30 : 6,
                background: p.ink,
                color: p.bg,
                borderRadius: 999,
                padding: large ? "7px 12px" : "2.5px 6px",
                fontSize: large ? 11 : 5,
                fontWeight: 700,
              }}
            >
              Thumbs up!
            </div>
          </div>
        </div>

        {/* feature trio — large only keeps card clean */}
        {!large ? null : (
          <div
            className="grid grid-cols-1 @sm:grid-cols-3"
            style={{ gap: 12, padding: "6px clamp(14px, 3cqi, 28px) 4px" }}
          >
            {[
              { t: "Hire in days", d: "Offer letters, docs, and hellos.", chip: p.accent },
              { t: "Pay globally", d: "Salaries in 40 currencies.", chip: p.accent2 },
              { t: "Cheer loudly", d: "Shout-outs every Friday.", chip: p.ink },
            ].map((c) => (
              <div key={c.t} style={{ background: p.surface, borderRadius: 16, padding: 14, boxShadow: softShadow }}>
                <span style={{ display: "inline-flex", width: 28, height: 28, borderRadius: 10, background: c.chip, color: p.bg, alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13 }}>
                  ✓
                </span>
                <div style={{ fontFamily: p.display, fontWeight: 700, fontSize: 13, marginTop: 6 }}>{c.t}</div>
                <div style={{ color: p.muted, fontSize: 11.5, marginTop: 3 }}>{c.d}</div>
              </div>
            ))}
          </div>
        )}

        {/* blob CTA footer */}
        <div style={{ padding: large ? "16px 28px 34px" : "5px 10px 16px", marginTop: "auto" }}>
          <div
            style={{
              background: p.accent,
              color: p.bg,
              borderRadius: large ? "26px 52px 26px 52px" : "10px 18px 10px 18px",
              padding: large ? "20px 24px" : "7px 10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: large ? 190 : 66,
                height: large ? 190 : 66,
                borderRadius: "50%",
                background: `${p.bg}1F`,
                right: large ? 130 : 46,
                top: large ? -70 : -24,
              }}
            />
            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: p.display, fontWeight: 800, fontSize: large ? 20 : 8, letterSpacing: "-0.01em" }}>
                Bring the whole crew.
              </div>
              <div style={{ fontSize: large ? 12.5 : 5.5, opacity: 0.9, marginTop: large ? 4 : 1 }}>
                Free 14-day trial — no card, just high-fives.
              </div>
            </div>
            <div style={{ position: "relative", display: "flex", alignItems: "center", gap: large ? 12 : 5 }}>
              <span
                style={{
                  background: p.bg,
                  color: p.accent,
                  borderRadius: 999,
                  fontWeight: 800,
                  fontSize: large ? 12.5 : 5.5,
                  padding: large ? "11px 20px" : "4px 9px",
                  minHeight: large ? 44 : undefined,
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                Get started
              </span>
              <span style={{ display: "flex" }}>
                {[p.bg, `${p.bg}B3`, `${p.bg}66`].map((c, i) => (
                  <span key={i} style={{ width: large ? 20 : 8, height: large ? 20 : 8, borderRadius: 999, background: c, border: `2px solid ${p.accent}`, marginLeft: i === 0 ? 0 : large ? -7 : -3 }} />
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
