import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { GithubContribute } from '@/components/sections/GithubContribute';
import { Blogs } from '@/components/sections/Blogs';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Harsh Bhardwaj — Full Stack Developer skilled in React, Next.js, TypeScript, Node.js, and MongoDB. Explore my projects, blogs, and GitHub contributions.',
  openGraph: {
    title: 'Harsh Bhardwaj | Full Stack Developer',
    description:
      'Explore projects, blogs, and GitHub contributions by Harsh Bhardwaj.',
    type: 'website',
  },
};

const headingStyling = `mt-10 text-5xl ml-0 md:ml-8 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;

export default function Home() {
  return (
    <div className="min-h-screen pl-0 md:pl-4">
      <About />
      <h2 className={headingStyling}>Recent Blogs</h2>
      <Blogs />
      <h2 className={headingStyling}>Recent Projects</h2>
      <Projects />
      <h2 className={headingStyling}>GitHub Contribution</h2>
      <GithubContribute />
    </div>
  );
}
