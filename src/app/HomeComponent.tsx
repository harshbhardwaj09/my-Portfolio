"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomeComponent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="min-h-screen px-10 pt-10 flex gap-20">

      {/* LEFT — TEXT */}
      <div className="flex-1 max-w-3xl pl-16">
        
        <h1
          className={`
            text-6xl md:text-8xl font-bold leading-tight
            text-transparent bg-clip-text
            bg-gradient-to-r from-white via-white to-white
            transition-all duration-1000 ease-out
            ${show ? "bg-[length:100%_100%]" : "bg-[length:0%_100%]"}
          `}
          style={{
            backgroundSize: show ? "100% 100%" : "0% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          Harsh Bhardwaj
        </h1>

        <h2
          className={`
            mt-4 text-3xl
            text-transparent bg-clip-text
            bg-gradient-to-r from-teal-400 to-teal-400
            transition-all duration-1000 delay-200
          `}
          style={{
            backgroundSize: show ? "100% 100%" : "0% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          Full Stack Developer
        </h2>
        

        <p
          className={`
            mt-6 text-white/80 text-xl leading-relaxed max-w-2xl
            transition-opacity duration-700 delay-400
            ${show ? "opacity-100" : "opacity-0"}
          `}
        >
          I build clean, scalable, and performant web applications using modern
          technologies. I focus on creating great user experiences with solid
          frontend and backend foundations.
        </p>

        <p
          className={`
            mt-4 text-lg text-white/90
            transition-opacity duration-700 delay-600
            ${show ? "opacity-100" : "opacity-0"}
          `}
        >
          React • Next.js • TypeScript • Node.js
        </p>
      </div>

      {/* RIGHT — IMAGE */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-96 h-96">
          <Image
            src="/dev3.png"
            alt="Profile"
            fill
            className="object-contain"
          />
        </div>
      </div>

    </div>
  );
}
