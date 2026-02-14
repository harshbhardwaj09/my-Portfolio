import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const techs = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

export const SkillsComponents = () => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {techs.map(({ name, icon: Icon, color }) => (
        <div
          key={name}
          className="
      group relative
      w-40 h-14
      flex items-center gap-3
      px-4
      rounded-lg
      bg-white/5
      border border-white/10

      cursor-default select-none
      transition-all duration-500 ease-out
      
              shadow-[10px_10px_5px_rgba(0,0,0,0.75)]
              hover:-translate-y-[6px]
              hover:shadow-[20px_20px_15px_rgba(0,0,0,0.9)]
            hover:bg-white/15
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
  );
};
