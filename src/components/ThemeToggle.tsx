'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--ht-line)] text-[var(--ht-muted)]"
        aria-label="Toggle theme"
      >
        <span className="size-4 rounded-full border border-current" />
      </button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="inline-flex size-9 items-center justify-center rounded-md border border-[var(--ht-line)] text-[var(--ht-ink)] transition-colors hover:border-[var(--ht-accent)] hover:text-[var(--ht-accent)]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
    >
      {isDark
        ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          )
        : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
            </svg>
          )}
    </button>
  );
}
