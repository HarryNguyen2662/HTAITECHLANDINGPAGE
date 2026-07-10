import { Footer } from '@/template/Footer';
import { Navbar } from '@/template/Navbar';

export default function UnauthLayout(props: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
