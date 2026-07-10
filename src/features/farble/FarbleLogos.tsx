import { Text } from '@astryxdesign/core/Text';

import { logos } from './farbleData';
import { FarbleReveal } from './FarbleReveal';

/* Fictional brands get simple geometric monograms (the sanctioned path for
   invented names). One muted color so the row reads as a logo wall, not text.
   Six distinct glyphs keyed by index. */
function LogoGlyph({ index }: { index: number }) {
  const glyphs = [
    <circle key="c" cx="11" cy="11" r="7" />,
    <rect key="r" x="4.5" y="4.5" width="13" height="13" rx="2" transform="rotate(45 11 11)" />,
    <path key="t" d="M11 4 19 18 3 18Z" />,
    <path key="h" d="M11 3 18 7 18 15 11 19 4 15 4 7Z" />,
    <path key="v" d="M4 7 11 12 18 7 M4 13 11 18 18 13" />,
    <path key="o" d="M11 4a7 7 0 1 0 0 14 M11 8a3 3 0 1 0 0 6" />,
  ];
  return (
    <svg viewBox="0 0 22 22" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {glyphs[index % glyphs.length]}
    </svg>
  );
}

export function FarbleLogos() {
  return (
    <section className="border-y border-[color:var(--color-border)] bg-[color:var(--color-background-muted)]">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
        <FarbleReveal>
          <Text type="code" color="secondary" className="block text-center text-[11px] uppercase tracking-[0.2em]">
            Powering production work at
          </Text>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-[color:var(--color-text-secondary)]">
            {logos.map((name, i) => (
              <div key={name} className="flex items-center gap-2.5 opacity-70 transition-opacity hover:opacity-100">
                <LogoGlyph index={i} />
                <span className="font-[family-name:var(--font-geist)] text-[15px] font-medium tracking-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </FarbleReveal>
      </div>
    </section>
  );
}
