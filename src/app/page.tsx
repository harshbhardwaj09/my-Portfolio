import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { GithubContribute } from "@/components/sections/GithubContribute";
import { Blogs } from "@/components/sections/Blogs";
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
