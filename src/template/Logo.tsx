import Image from 'next/image';

import logoSrc from '../../public/assets/images/handtailogo.png';

export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image src={logoSrc} alt="H&T AI Tech" width={40} height={40} className="h-10 w-auto" />
      <span className="font-display text-xl font-semibold tracking-tight text-foreground">
        H&T AI TECH
      </span>
    </div>
  );
};
