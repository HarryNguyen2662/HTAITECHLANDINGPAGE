'use client';

import Image from 'next/image';
import Link from 'next/link';

export const Logo = ({ compact = false }: { compact?: boolean }) => {
  return (
    <Link href="/" className="group flex items-center gap-3 no-underline">
      <Image
        src="/assets/images/handtailogo.png"
        alt="H&T AI TECH"
        width={compact ? 36 : 42}
        height={compact ? 36 : 42}
        className="object-contain"
      />
      <span
        className={`font-semibold tracking-tight text-[var(--ht-ink)] transition-opacity group-hover:opacity-80 ${
          compact ? 'text-sm' : 'text-base sm:text-lg'
        }`}
      >
        H&T AI TECH
      </span>
    </Link>
  );
};
