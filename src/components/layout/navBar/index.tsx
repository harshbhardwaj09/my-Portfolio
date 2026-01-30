"use client";

import { SunMedium, MoonStar } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ResumeButton } from "./ResumeButton";

export default function NavBar() {
  const [dark, setDark] = useState(true);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  // dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // sound init
  useEffect(() => {
    clickSound.current = new Audio("/tick.mp3");
    clickSound.current.volume = 1;
  }, []);

  const handleToggle = () => {
    if (clickSound.current) {
      clickSound.current.currentTime = 0;
      clickSound.current.play();
    }
    setDark(!dark);
  };

  return (
    // <header className="sticky top-0 z-50 flex justify-center">
    <header className="sticky top-0 z-50 flex justify-between items-center px-6 py-4">
      <ResumeButton />
      <div
        className="
          inline-flex items-center gap-10
          px-10 py-2.5
          text-base md:text-lg font-semibold
          text-white
          bg-[#191514]/60
          backdrop-blur-md
          border-[1.5px] border-teal-400/60
          rounded-full
          shadow-[1px_1px_8px_teal,-1px_1px_8px_teal-400/60]
        "
      >
        <a href="/#" className="text-teal-400 cursor-pointer whitespace-nowrap">
          Home
        </a>

        <a
          href="/#"
          className="opacity-80 hover:opacity-100 cursor-pointer whitespace-nowrap transition"
        >
          Blog
        </a>

        <a
          href="/#"
          className="opacity-80 hover:opacity-100 cursor-pointer whitespace-nowrap transition"
        >
          Projects
        </a>

        <a
          href="/#"
          className="opacity-80 hover:opacity-100 cursor-pointer whitespace-nowrap transition"
        >
          Contact
        </a>

        {/* 🌙 / 🌞 Toggle button */}
        <button
          onClick={handleToggle}
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-full
            border border-white/40
            bg-white/80
            hover:bg-white/100
            transition
          "
        >
          {dark ? (
            <SunMedium size={20} color="teal" />
          ) : (
            <MoonStar size={20} color="teal" />
          )}
        </button>
      </div>
    </header>
  );
}
