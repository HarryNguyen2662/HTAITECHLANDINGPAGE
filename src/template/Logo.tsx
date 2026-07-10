'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({
  compact = false,
  inverted = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) => {
  return (
    <Link href="/" className="group flex items-center gap-3 no-underline">
      <Image
        src="/assets/images/handtailogo.png"
        alt="Handtail Logo"
        width={compact ? 40 : 48}
        height={compact ? 40 : 48}
        className="object-contain"
      />
      <span
        className={`font-semibold tracking-tight transition-opacity group-hover:opacity-80 ${
          inverted ? 'text-white' : 'text-[var(--ht-ink)]'
        } ${compact ? 'text-base' : 'text-lg sm:text-xl'}`}
        style={{ fontFamily: 'Georgia, \'Times New Roman\', serif' }}
      >
        H&T AI TECH
      </span>
    </Link>
  );
};
