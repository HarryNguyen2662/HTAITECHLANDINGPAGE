import { Link } from '@astryxdesign/core/Link';
import { Text } from '@astryxdesign/core/Text';

import { footer } from './farbleData';

export function FarbleFooter() {
  return (
    <footer className="bg-[color:var(--color-background-body)]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2.5">
          <span className="rounded-inner flex size-6 items-center justify-center bg-[color:var(--color-accent)] font-[family-name:var(--font-geist)] text-xs font-bold text-[color:var(--color-on-accent)]">
            F
          </span>
          <Text type="body" color="secondary" className="text-sm">
            {footer.tagline}
          </Text>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Footer">
          {footer.links.map(label => (
            <Link
              key={label}
              href="#"
              color="inherit"
              isStandalone
              className="text-sm text-[color:var(--color-text-secondary)] transition-colors hover:text-[color:var(--color-text-primary)]"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
