"use client";

import { Folder, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Integrating Algolia Search",
    desc: "Custom multisite compatible WordPress plugin for global search using Algolia.",
    tech: ["Algolia", "WordPress", "PHP"],
    live: "#",
    github: "#",
  },
  {
    title: "Time To Have More Fun",
    desc: "Single-page app to help choose travel destinations.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Headless CMS From Scratch",
    desc: "Custom headless CMS built using Node, Express and Firebase.",
    tech: ["Node", "Express", "Firebase"],
    live: "#",
    github: "#",
  },
  {
    title: "Google Keep Clone",
    desc: "A clean Google Keep clone with realtime sync.",
    tech: ["Vue", "Firebase"],
    live: "#",
    github: "#",
  },
];

export const ProjectsComponent = () => {
  return (
    <section className="my-10 w-full max-w-5xl">
      {/* GRID — 2 PER ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              rounded-xl
              bg-white/5
              border border-white/10
              p-6
              min-h-[230px]

              shadow-[25px_25px_20px_rgba(0,0,0,0.75)]
              transition-all duration-500 ease-out
              hover:-translate-y-[6px]
              hover:shadow-[35px_35px_20px_rgba(0,0,0,0.9)]
            hover:bg-white/15

            "
          >
            {/* TOP */}
            <div className="flex items-center justify-between mb-6">
              <Folder
                size={34}
                className="
                  text-teal-400
                  transition-all duration-500
                  group-hover:drop-shadow-[0_0_14px_rgba(45,212,191,0.9)]
                "
              />

              <div className="flex items-center gap-4 text-white/60">
                <a
                  href={project.github}
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-white/90 mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-white/60 leading-relaxed mb-6">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-medium">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-white/50 group-hover:text-white/80 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-16 items-center gap-2 cursor-pointer group/view">
        <span
          className="
              relative
              text-base font-medium text-white/70
              transition-colors duration-300
              group-hover/view:text-white

              after:content-['']
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[1px]
              after:w-full
              after:bg-white
              after:scale-x-0
              after:origin-left
              after:transition-transform
              after:duration-300
              group-hover/view:after:scale-x-100
            "
        >
          View more projects
        </span>

        <ArrowRight
          size={18}
          className="
              text-white/70
              transition-all duration-300
              group-hover/view:text-white
              group-hover/view:translate-x-1
            "
        />
      </div>

      {/* VIEW ALL PROJECTS */}
    </section>
  );
};
