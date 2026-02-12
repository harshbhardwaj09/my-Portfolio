import { BlogsComponent } from "./BlogsComponent";
import { ProjectsComponent } from "./ProjectsComponent";
import { AboutComponent } from "./AboutComponent";
import { GithubContributeComponent } from "./GithubContributeComponent";
import { FaBlog, FaProjectDiagram, FaRProject } from "react-icons/fa";
const headingStyling = `mt-10 text-5xl   ml-0 md:ml-8 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;

export default function Home() {
  return (
    <div
      className="min-h-screen pl-4 
    
    "
    >
      <AboutComponent />
      <h2 className={headingStyling}>Recent Blogs</h2>
      <BlogsComponent />
      <h2 className={headingStyling}>Recent Projects</h2>
      <ProjectsComponent />
      <h2 className={headingStyling}>GitHub Contribution</h2>
      <GithubContributeComponent />
    </div>
  );
}
