import { Projects } from '@/components/sections/Projects';
import type { Metadata } from 'next';

const headingStyling = `mt-10 text-5xl ml-0 md:ml-8 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Projects by Harsh Bhardwaj — budget tracker, portfolio website, freelance landing pages, and RESTful backend APIs built with Next.js, React, TypeScript, and more.',
  openGraph: {
    title: 'Projects | Harsh Bhardwaj',
    description:
      'Explore full-stack projects by Harsh Bhardwaj built with Next.js, React, TypeScript, MongoDB, and more.',
    type: 'website',
  },
};
export default function ProjectPage() {
  return (
    <div className="min-h-screen ml-0">
      <h2 className={headingStyling}>My Projects</h2>
      <Projects showViewMore={false} />
    </div>
  );
}
