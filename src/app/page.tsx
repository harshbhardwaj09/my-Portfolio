"use client"
import Appear from "@/components/animation/Appear";
import MagneticText from "@/components/animation/MagneticText";
import Image from "next/image";
import { Blogs } from "./Blogs";
const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Tailwind Css",
  "ruby",
  "fucku",
];
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { ProjectsComponent } from "./ProjectsComponent";
const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
];

/* common hover utility (so repeat na ho) */
const textHover =
  "hover:scale-[1.02] transition-transform duration-500 ease-out";

export default function Home() {
  return (
    <div className="min-h-screen pl-4">
      <div className="mt-10 flex gap-20">
        {/* LEFT — TEXT */}
        <div className="flex-1 text-white max-w-3xl pt-8">
          <MagneticText>
            <h1
              className={`
              text-7xl md:text-8xl font-extrabold leading-tight
              ${textHover}
              cursor-default
            `}
            >
              Harsh
            </h1>
          </MagneticText>

          <MagneticText>
            <h1
              className={`
              text-7xl md:text-8xl font-extrabold leading-tight
              ${textHover}
              cursor-default
            `}
            >
              Bhardwaj
            </h1>
          </MagneticText>

          <MagneticText>
            <h2
              className={`
              mt-4 text-4xl text-teal-200 font-bold
              ${textHover}
              cursor-default
            `}
            >
              Full Stack Developer
            </h2>
          </MagneticText>

          <p
            className={`
            mt-6 text-xl text-white/80 max-w-2xl
            ${textHover}
            cursor-default
          `}
          >
            I build clean, scalable, and performant clean, scalabl web
            applications with strong focus on user experience and modern
            frontend systems pplications with strong.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            {techs.map(({ name, icon: Icon, color }) => (
              <div
                key={name}
                style={{
                  boxShadow: `6px 6px 10px ${color}30`, // normal shadow (light)
                }}
                className="
      group relative
      w-40 h-14
      flex items-center gap-3
      px-4
      rounded-lg
      bg-white/8
      border border-white/10

      cursor-default select-none
      transition-all duration-500 ease-out
      hover:-translate-y-[2px]
    "
              >
                {/* ICON — original brand color */}
                <Icon size={20} color={color} />

                {/* TEXT — same as icon color */}
                <span style={{ color }} className="font-medium tracking-wide">
                  {name}
                </span>

                {/* HOVER LINE — brand color */}
                <span
                  style={{ backgroundColor: color }}
                  className="
        pointer-events-none
        absolute left-4 right-4 bottom-2
        h-[1.5px]
        scale-x-0
        origin-left
        transition-transform duration-500 ease-out
        group-hover:scale-x-100
      "
                />
              </div>
            ))}

            {/* {techs.map(({ name, icon: Icon, color }) => (
  <div
    key={name}
    className="
      group
      flex items-center gap-3
      w-40 h-14
      px-4
      rounded-xl
      bg-white/8
      backdrop-blur-sm
      border border-white/15

      transition-all duration-500 ease-out
      hover:bg-white/12
      hover:shadow-[0_8px_20px_rgba(255,255,255,0.15)]
      hover:-translate-y-[2px]
    "
  >
    <Icon size={20} color={color} />
    <span className="text-white/90 font-medium tracking-wide">
      {name}
    </span>
  </div>
))} */}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex-1 flex justify-center">
          <Appear delay={200}>
            <div className="relative w-96 h-96">
              <Image
                src="/dev3.png"
                alt="Profile"
                fill
                className="
                object-contain
                drop-shadow-[2px_2px_1px_teal]
                hover:drop-shadow-[4px_4px_10px_teal]
                transition-[filter]
                duration-[1000ms]
                ease-out
              "
              />
            </div>
          </Appear>
        </div>
      </div>
      <h2
        className={`
              mt-8 text-5xl font-extrabold text-white
              cursor-default
           
            `}
      >
        Recent Blogs
      </h2>
      <Blogs />
           <h2
        className={`
              mt-8 text-5xl font-extrabold text-white
              cursor-default
            `}
      >
        Projects
      </h2>
      <ProjectsComponent/>

    </div>
  );
}
