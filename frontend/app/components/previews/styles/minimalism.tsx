import type { StyleMeta } from "../../../lib/styles";
import { Frame, Meta } from "../frame";

export function MinimalismPreview({ meta, large }: { meta: StyleMeta; large?: boolean }) {
  const p = meta.preview;
  const hairline = `${p.ink}1C`;
  const faint = `${p.ink}0D`;

  const icon = large ? 16 : 9;
  const rowIcon = large ? 14 : 8;

  return (
    <Frame meta={meta} large={large}>
      <div
        className={large ? "flex min-h-[640px] flex-col" : "absolute inset-0 flex flex-col"}
        style={{ background: p.bg, color: p.ink, fontFamily: p.body }}
      >
        {/* Nav — §11: wordmark left, links right, single CTA, hairline */}
        <header
          className="flex shrink-0 items-center justify-between"
          style={{
            padding: large ? "18px 5%" : "8px 6%",
            borderBottom: `1px solid ${hairline}`,
            background: p.bg,
          }}
        >
          <div
            style={{
              fontFamily: p.display,
              fontWeight: 500,
              fontSize: large ? 15 : 7.5,
              letterSpacing: "-0.01em",
            }}
          >
            Atelier<span style={{ color: p.muted }}>.</span>
          </div>
          <nav
            className="flex items-center"
            style={{ gap: large ? 22 : 9 }}
            aria-label="Primary"
          >
            {["Work", "Studio", "Journal", "Contact"].map((l) => (
              <span
                key={l}
                style={{
                  fontSize: large ? 13 : 6.2,
                  fontWeight: 500,
                  color: p.ink,
                  lineHeight: 1,
                }}
              >
                {l}
              </span>
            ))}
            <span
              style={{
                background: p.ink,
                color: p.surface,
                fontSize: large ? 12.5 : 6.2,
                fontWeight: 500,
                padding: large ? "10px 18px" : "4.5px 9px",
                borderRadius: 6,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Start a project
            </span>
          </nav>
        </header>

        {/* Main — single quiet statement + product card */}
        <main
          className="grid flex-1 items-center"
          style={{
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: large ? 48 : 14,
            padding: large ? "56px 5% 48px" : "10px 6% 10px",
            minHeight: 0,
          }}
        >
          {/* Left: hero type */}
          <div style={{ minWidth: 0 }}>
            <div
              className="flex items-center"
              style={{ gap: large ? 8 : 4 }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: large ? 6 : 4, height: large ? 6 : 4, background: p.accent2 }}
              />
              <span
                style={{
                  fontSize: large ? 10.5 : 5.8,
                  fontWeight: 500,
                  letterSpacing: "0.16em",
                  color: p.muted,
                }}
              >
                ESSAY Nº 04 — CLARITY
              </span>
            </div>
            <h1
              style={{
                fontFamily: p.display,
                fontWeight: 500,
                fontSize: large ? 40 : 18,
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                margin: 0,
                marginTop: large ? 16 : 7,
              }}
            >
              Less, but
              <br />
              better.
            </h1>
            <p
              style={{
                margin: 0,
                marginTop: large ? 14 : 6,
                fontSize: large ? 15 : 7.2,
                lineHeight: 1.6,
                color: p.muted,
                maxWidth: large ? "36ch" : "30ch",
              }}
            >
              One typeface, near-monochrome, and room to breathe.
            </p>
            <div
              className="flex items-center"
              style={{ gap: large ? 10 : 6, marginTop: large ? 22 : 8 }}
            >
              <span
                style={{
                  background: p.ink,
                  color: p.surface,
                  fontSize: large ? 13 : 6.8,
                  fontWeight: 500,
                  padding: large ? "12px 22px" : "5px 11px",
                  borderRadius: 6,
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                }}
              >
                Get started
              </span>
              <span
                style={{
                  border: `1px solid ${p.ink}44`,
                  color: p.ink,
                  fontSize: large ? 13 : 6.8,
                  fontWeight: 500,
                  padding: large ? "11px 20px" : "4.5px 10px",
                  borderRadius: 6,
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                }}
              >
                Learn more
              </span>
            </div>
            <div
              style={{
                marginTop: large ? 16 : 6,
                fontSize: large ? 12.5 : 6.2,
                color: p.ink,
                display: "flex",
                alignItems: "center",
                gap: large ? 6 : 3,
              }}
            >
              <span style={{ borderBottom: `1px solid ${hairline}` }}>Read the principles</span>
              <svg width={icon * 0.7} height={icon * 0.7} viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 12L12 4M12 4H6M12 4v6" stroke={p.ink} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Right: signature quiet product card — §10 */}
          <article
            style={{
              background: p.surface,
              border: `1px solid ${hairline}`,
              borderRadius: large ? 10 : 8,
              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
              padding: large ? 22 : 10,
              minWidth: 0,
            }}
          >
            <div
              className="flex items-center justify-between"
              style={{ paddingBottom: large ? 12 : 6 }}
            >
              <span
                style={{
                  fontSize: large ? 10 : 5.5,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  color: p.muted,
                }}
              >
                PROJECT — QUIET HOUSE
              </span>
              <span
                style={{
                  fontSize: large ? 10.5 : 5.5,
                  fontWeight: 500,
                  color: p.ink,
                  border: `1px solid ${hairline}`,
                  borderRadius: 999,
                  padding: large ? "4px 10px" : "2px 6px",
                  lineHeight: 1,
                }}
              >
                Live
              </span>
            </div>
            <div
              style={{
                fontFamily: p.display,
                fontWeight: 500,
                fontSize: large ? 17 : 8.5,
                letterSpacing: "-0.01em",
                lineHeight: 1.25,
              }}
            >
              Fewer rooms, more light.
            </div>
            <div
              style={{
                fontSize: large ? 14 : 6.8,
                lineHeight: 1.5,
                color: p.muted,
                marginTop: large ? 6 : 3,
              }}
            >
              Oak, limewash, one window per wall.
            </div>

            <div style={{ marginTop: large ? 14 : 7 }}>
              {[
                { label: "Structure", value: "Complete", done: true },
                { label: "Palette", value: "3 tones", done: true },
                { label: "Type", value: "Inter only", done: false },
              ].map((r, i) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between"
                  style={{
                    borderTop: `1px solid ${i === 0 ? hairline : faint}`,
                    padding: large ? "10px 0" : "4.5px 0",
                  }}
                >
                  <span
                    className="flex items-center"
                    style={{ gap: large ? 8 : 4, minWidth: 0 }}
                  >
                    <svg width={rowIcon} height={rowIcon} viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                      {r.done ? (
                        <path d="M2.5 8.5l3.5 3.5 7-8" stroke={i === 0 ? p.accent2 : p.ink} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                      ) : (
                        <circle cx="8" cy="8" r="5.5" stroke={p.muted} strokeWidth={1.5} />
                      )}
                    </svg>
                    <span style={{ fontSize: large ? 12.5 : 6.2, fontWeight: 500 }}>{r.label}</span>
                  </span>
                  <span style={{ fontSize: large ? 12.5 : 6.2, color: p.muted }}>{r.value}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: large ? 12 : 6,
                background: p.bg,
                border: `1px solid ${hairline}`,
                borderRadius: 6,
                padding: large ? "12px 14px" : "6px 7px",
              }}
            >
              <div
                className="flex items-center justify-between"
                style={{ marginBottom: large ? 8 : 4 }}
              >
                <span style={{ fontSize: large ? 11 : 5.8, fontWeight: 500 }}>Subtracted</span>
                <span style={{ fontSize: large ? 11 : 5.8, color: p.muted }}>12 of 16</span>
              </div>
              <div
                style={{
                  height: large ? 4 : 3,
                  borderRadius: 999,
                  background: `${p.ink}14`,
                  overflow: "hidden",
                }}
              >
                <div style={{ width: "72%", height: "100%", background: p.ink, borderRadius: 999 }} />
              </div>
            </div>
          </article>
        </main>

        {/* Footer strip — quiet meta, whitespace separator (no rule box) */}
        <footer
          className="flex shrink-0 items-center justify-between"
          style={{
            borderTop: `1px solid ${hairline}`,
            padding: large ? "12px 5%" : "5px 6%",
            fontSize: large ? 10.5 : 5.5,
            letterSpacing: "0.08em",
            color: p.muted,
          }}
        >
          <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            SET IN INTER · 65CH MEASURE
          </span>
          <span style={{ whiteSpace: "nowrap", marginLeft: 12 }}>150MS EASE-OUT</span>
        </footer>
      </div>
      <Meta meta={meta} large={large} />
    </Frame>
  );
}
