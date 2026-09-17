import Link from "next/link";
import { GITHUB_URL } from "../lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#111110]/15 bg-[#fafaf8]/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em]">
            Design&nbsp;Styles
          </span>
          <span className="hidden font-mono text-[11px] text-[#111110]/50 sm:inline">
            / 100
          </span>
        </Link>
        <nav className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.12em]">
          <Link
            href="/#catalog"
            className="border border-transparent px-3 py-1.5 hover:border-[#111110] hover:bg-[#111110] hover:text-[#fafaf8]"
          >
            Catalog
          </Link>
          <Link
            href="/#usage"
            className="hidden px-3 py-1.5 hover:underline sm:inline"
          >
            Usage
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#111110] bg-[#111110] px-3 py-1.5 text-[#fafaf8] hover:bg-transparent hover:text-[#111110]"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
