import Link from "next/link";
import { GITHUB_URL } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#111110] dark:border-white/15 bg-[#fafaf8] dark:bg-[#0c0c0e] transition-colors">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
            Design Styles
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#111110]/70 dark:text-white/70">
            Design styles for AI coding agents. Each style ships a
            copy-paste-ready{" "}
            <code className="font-mono text-[12px] bg-black/5 dark:bg-white/10 px-1 py-0.5 rounded">
              DESIGN.md
            </code>{" "}
            your agent can follow.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50 dark:text-white/50">
            Use a style
          </p>
          <pre className="mt-3 overflow-x-auto border border-[#111110]/15 dark:border-white/15 bg-[#111110] dark:bg-[#141416] p-3 font-mono text-[11.5px] leading-relaxed text-[#ece9e0]">
            {`# copy a style into your project\ncp designs/neo-brutalism/DESIGN.md ./DESIGN.md\n\n# then tell your agent:\n"Follow @DESIGN.md for all UI work."`}
          </pre>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#111110]/50 dark:text-white/50">
            Project
          </p>
          <ul className="mt-3 space-y-2 text-sm text-[#111110]/80 dark:text-white/80">
            <li>
              <Link href="/#catalog" className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white">
                Browse the catalog
              </Link>
            </li>
            <li>
              <Link href="/what-is-design-md" className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white">
                What is DESIGN.md?
              </Link>
            </li>
            <li>
              <Link href="/guides/claude-code" className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white">
                DESIGN.md guides for every agent
              </Link>
            </li>
            <li>
              <Link href="/compare" className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white">
                Compare two styles
              </Link>
            </li>
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white"
              >
                View on GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#111110] dark:hover:text-white"
              >
                Contribute a style
              </a>
            </li>
          </ul>
          <p className="mt-4 font-mono text-[11px] text-[#111110]/50 dark:text-white/50">
            MIT licensed. Open source.
          </p>
        </div>
      </div>
      <div className="border-t border-[#111110]/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center sm:px-6">
          <a
            href="https://sakshammittal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[#111110]/50 underline underline-offset-4 transition-colors hover:text-[#111110] dark:text-white/50 dark:hover:text-white"
          >
            Made by Saksham Mittal
          </a>
        </div>
      </div>
    </footer>
  );
}
