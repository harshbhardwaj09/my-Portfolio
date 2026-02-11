"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

export const SkillsSlider = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCenterX(rect.left + rect.width / 2);
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex justify-center gap-8 flex-wrap mt-10 perspective-[1200px]"
    >
      {techs.map(({ name, icon: Icon, color }) => (
        <div
          key={name}
          className="
            group relative
            w-44 h-16
            flex items-center  gap-3
            px-5
            rounded-xl
            bg-white/5
            border border-white/10
            backdrop-blur-md
            transition-all duration-500 ease-out
            hover:-translate-y-2
            hover:shadow-[0_25px_60px_rgba(0,0,0,0.9)]
          "
        >
          {/* GLASS REFLECTION */}
          <span
            className="
            absolute inset-0
            rounded-xl
            bg-gradient-to-t from-white/10 to-transparent
            opacity-0
            group-hover:opacity-100
            transition duration-500
          "
          />

          {/* ICON */}
          <Icon size={22} color={color} />

          {/* TEXT */}
          <span style={{ color }} className="font-medium tracking-wide">
            {name}
          </span>

          {/* BRAND HOVER LINE */}
          <span
            style={{ backgroundColor: color }}
            className="
              pointer-events-none
              absolute left-5 right-5 bottom-3
              h-[1.5px]
              scale-x-0
              origin-left
              transition-transform duration-500 ease-out
              group-hover:scale-x-100
            "
          />
        </div>
      ))}
    </div>
  );
};
