import Footer from '../components/layout/footer';
import '../../global.css';
import Navbar from '../components/layout/navBar';
import SideSocials from '../components/sections/SideSocials';
import ReactQueryProvider from '../providers/ReactQueryProvider';
import { Poppins } from 'next/font/google';
import type { Metadata } from 'next';

const SITE_URL = 'https://my-portfolio-harsh-bhardwaj.vercel.app';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Harsh Bhardwaj | Full Stack Developer',
    template: '%s | Harsh Bhardwaj',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/profile.png',
    apple: '/profile.png',
  },
  description:
    'Harsh Bhardwaj portfolio: Full Stack and Frontend Developer showcasing projects, technical blogs, and GitHub contributions. Built with Next.js, React, TypeScript, express, and MongoDB.',
  keywords: [
    'Harsh Bhardwaj',
    'Harsh Bhardwaj portfolio',
    'Harsh Bhardwaj frontend developer',
    'Harsh Bhardwaj full stack developer',
    'Harsh Bhardwaj developer',
    'Harsh frontend developer portfolio',
    'frontend developer portfolio',
    'full stack portfolio',
    'best developer portfolio',
    'Full Stack Developer',
    'Frontend Developer',
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
  creator: 'Harsh Bhardwaj',
  category: 'Technology',
  openGraph: {
    title: 'Harsh Bhardwaj | Full Stack Developer',
    description:
      'Harsh Bhardwaj portfolio with frontend and full stack projects, technical blogs, and GitHub contributions.',
    type: 'website',
    siteName: 'Harsh Bhardwaj Portfolio',
    locale: 'en_IN',
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/profile.png`,
        width: 1200,
        height: 1200,
        alt: 'Harsh Bhardwaj - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@compile_what',
    title: 'Harsh Bhardwaj | Full Stack Developer',
    description:
      'Harsh Bhardwaj portfolio with frontend and full stack projects, technical blogs, and GitHub contributions.',
    images: [`${SITE_URL}/profile.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Harsh Bhardwaj Portfolio',
  url: SITE_URL,
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Harsh Bhardwaj',
  url: SITE_URL,
  jobTitle: 'Full Stack Developer',
  description:
    'Frontend and Full Stack Developer portfolio with projects and technical blogs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-fixed bg-black/95">
      <body className={poppins.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
