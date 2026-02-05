"use client";

import { Folder, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

/* PROJECT DATA */
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
    <section className="mt-24 max-w-6xl ml mr-64 px-4">
      {/* GRID — 2 PER ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group
              relative
              rounded-xlā
              bg-bg-white/5
              border border-white/10
              p-6
              min-h-[230px]

              shadow-[0_10px_30px_rgba(0,0,0,0.6)]
              transition-all duration-500 ease-out
              hover:-translate-y-[6px]
              hover:shadow-[0_25px_60px_rgba(0,0,0,0.85)]
            "
          >
            {/* TOP ROW */}
            <div className="flex items-center justify-between mb-6">
              {/* FOLDER ICON */}
              <Folder
                size={34}
                className="
                  text-teal-400
                  transition-all duration-500
                  group-hover:drop-shadow-[0_0_14px_rgba(45,212,191,0.9)]
                "
              />

              {/* LINKS */}
              <div className="flex items-center gap-4 text-white/60">
                <a
                  href={project.github}
                  target="_blank"
                  aria-label="GitHub Repository"
                  className="hover:text-white transition"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  aria-label="Live Project"
                  className="hover:text-white transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            {/* TITLE */}
            <h3
              className="
                text-xl font-semibold
                text-white/90
                mb-3
                transition-colors duration-300
                group-hover:text-teal-300
                cursor-default
              "
            >
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-white/60 leading-relaxed mb-6 cursor-default">
              {project.desc}
            </p>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 text-xs font-medium">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    text-white/50
                    tracking-wide
                    transition-colors duration-300
                    group-hover:text-white/80
                    cursor-default
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
