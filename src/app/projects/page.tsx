import { Projects } from '@/components/sections/Projects';

const headingStyling = `mt-10 text-5xl ml-0 md:ml-8 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;

export default function ProjectPage() {
  return (
    <div className="min-h-screen ml-0">
      <h2 className={headingStyling}>Recent Projects</h2>
      <Projects />
    </div>
  );
}
