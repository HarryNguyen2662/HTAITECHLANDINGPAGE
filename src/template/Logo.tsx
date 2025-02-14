import Image from 'next/image';
import logoSrc from '../../public/assets/images/handtailogo.png';

export const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Image src={logoSrc} alt="Handtail Logo" width={100} height={50} />
      <span style={{ marginLeft: '10px', fontSize: '1.5rem', fontWeight: 'bold', color: 'black' }}>H&T AI TECH</span>
    </div>
  );
};