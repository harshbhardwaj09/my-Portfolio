"use client";

import { SunMedium, MoonStar } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function NavBar() {
  const [dark, setDark] = useState(true);
  const clickSound = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // sound init
  useEffect(() => {
    clickSound.current = new Audio("/tick.mp3");
    clickSound.current.volume = 1
  }, []);

  const handleToggle = () => {
    if(clickSound.current){
    clickSound.current.currentTime = 0;
    clickSound.current.play();
    }
    setDark(!dark);
  };

  return (
    <header className="sticky top-0 z-50 flex justify-end my-4 p-4">
      <div className="inline-flex items-center gap-10 px-10 py-4 text-lg font-semibold text-white bg-[#191514]/80 backdrop-blur-md border border-white/60 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.15)]">

        <a className="text-teal-400 cursor-pointer whitespace-nowrap">Home</a>
        <a className="opacity-70 hover:opacity-100 cursor-pointer whitespace-nowrap">Blog</a>
        <a className="opacity-70 hover:opacity-100 cursor-pointer whitespace-nowrap">Projects</a>
        <a className="opacity-70 hover:opacity-100 cursor-pointer whitespace-nowrap">Contact</a>

        {/* 🌙 / 🌞 Button with sound */}
        <button
          onClick={handleToggle}
          className="w-10 h-10 flex items-center justify-center rounded-full border border-white/60 hover:bg-white/10 transition"
        >
          {dark ? (
            <SunMedium size={18} color="teal" />
          ) : (
            <MoonStar size={18} color="teal" />
          )}
        </button>

      </div>
    </header>
  );
}
