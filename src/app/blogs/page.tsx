import { Blogs } from '@/components/sections/Blogs';
import type { Metadata } from 'next';

const headingStyling = `mt-10 text-5xl ml-0 md:ml-8 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'Read blogs by Harsh Bhardwaj on web development, React, Next.js, TypeScript, and modern frontend & backend technologies.',
  keywords: [
    'web development blog',
    'React',
    'Next.js',
    'TypeScript',
    'frontend',
    'backend',
    'Harsh Bhardwaj',
  ],
  openGraph: {
    title: 'Blogs | Harsh Bhardwaj',
    description:
      'Read blogs by Harsh Bhardwaj on web development, React, Next.js, TypeScript, and modern frontend & backend technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blogs | Harsh Bhardwaj',
    description:
      'Read blogs by Harsh Bhardwaj on web development, React, Next.js, TypeScript, and modern technologies.',
  },
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen ml-0">
      <h2 className={headingStyling}>My Blogs</h2>
      <Blogs limit={20} showViewMore={false} />
    </div>
  );
}
