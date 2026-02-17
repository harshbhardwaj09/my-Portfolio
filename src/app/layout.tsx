import Footer from '../components/layout/footer';
import '../../global.css';
import Navbar from '../components/layout/navBar';
import SideSocials from '../components/sections/SideSocials';
import ReactQueryProvider from '../providers/ReactQueryProvider';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-fixed bg-black/95">
      <body className={poppins.className}>
        {/* Providers is client-side, but layout remains server-side */}
        <ReactQueryProvider>
          <SideSocials />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
