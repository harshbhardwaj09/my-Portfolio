import Footer from '../components/layout/footer';
import '../../global.css';
import Navbar from '../components/layout/navBar';
import SideSocials from '../components/sections/SideSocials';
import ReactQueryProvider from '../providers/ReactQueryProvider';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: 'Harsh Bhardwaj | Full Stack Developer',
    template: '%s | Harsh Bhardwaj',
  },
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
  description:
    'Portfolio of Harsh Bhardwaj — Full Stack Developer showcasing projects, technical blogs, and GitHub contributions. Built with Next.js, React, and TypeScript.',
  keywords: [
    'Harsh Bhardwaj',
    'Full Stack Developer',
    'Portfolio',
    'React',
    'Next.js',
    'TypeScript',
    'Web Developer',
    'Express',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Firebase',
    'Cloudinary',
    'Resend',
    'MDX',
  ],
  authors: [{ name: 'Harsh Bhardwaj' }],
  openGraph: {
    title: 'Harsh Bhardwaj | Full Stack Developer',
    description:
      'Portfolio of Harsh Bhardwaj — Full Stack Developer showcasing projects, technical blogs, and GitHub contributions.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
