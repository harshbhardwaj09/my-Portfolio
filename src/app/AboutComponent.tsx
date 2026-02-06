import Appear from "@/components/animation/Appear";
import MagneticText from "@/components/animation/MagneticText";
import Image from "next/image";
import { SkillsComponents } from "./SkillsComponent";
/* common hover utility (so repeat na ho) */
const textHover =
  "hover:scale-[1.02] transition-transform duration-500 ease-out";

export const AboutComponent = () => {
  return (
    <div className="my-10 flex gap-20">
      {/* LEFT — TEXT */}
      <div className="flex-1 text-white max-w-3xl pt-8">
        <MagneticText>
          <h1
            className={`
              text-7xl md:text-8xl font-extrabold leading-tight
              ${textHover}
              cursor-default
              text-white/80 [text-shadow:15px_15px_5px_black]

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
            text-white/80 [text-shadow:15px_15px_5px_black]

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
          applications with strong focus on user experience and modern frontend
          systems pplications with strong.I build clean, scalable, and
          performant clean, scalabl web applications.
        </p>
        <h2
          className={
            "mt-8 text-5xl font-extrabold text-white/80 [text-shadow:15px_15px_7px_black]"
          }
        >
          Technical Skills
        </h2>
        <SkillsComponents />
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
  );
};
