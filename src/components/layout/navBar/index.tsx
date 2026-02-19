'use client';

import { SunMedium, MoonStar } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { ResumeButton } from './ResumeButton';

import { Drawer } from './mobile/Drawer';
import { HamburgerMenu } from './mobile/HamburgerMenu';

export default function NavBar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  // Sound init
  useEffect(() => {
    clickSound.current = new Audio('/tick.mp3');
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
    <>
      <header className="sticky top-0 z-50 relative flex justify-between items-center pb-4 pt-2 md:px-6  md:pb-10 md:pt-4 backdrop-blur-md ">
        {/* Bottom Glow Line */}
        <span
          className="
    pointer-events-none
    absolute bottom-0 left-1/2 -translate-x-1/2
    w-full h-[1px]
    bg-gradient-to-r
    from-transparent
    via-teal-400/60 via-[40%]
    to-transparent
    blur-[.7px]
  "
        />

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex justify-between items-center w-full">
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
            <a
              href="/#"
              className="text-teal-400 cursor-pointer whitespace-nowrap"
            >
              Home
            </a>
            <a
              href="/#"
              className="opacity-80 cursor-pointer hover:opacity-100 transition"
            >
              Blog
            </a>
            <a
              href="/#"
              className="opacity-80 cursor-pointer hover:opacity-100 transition"
            >
              Projects
            </a>
            <a
              href="/#"
              className="opacity-80 cursor-pointer hover:opacity-100 transition"
            >
              Contact
            </a>

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
        </div>

        {/* ================= MOBILE ================= */}
        <HamburgerMenu
          open={open}
          setOpen={setOpen}
          handleToggle={handleToggle}
          dark={dark}
        />
      </header>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= DRAWER ================= */}
      <Drawer open={open} setOpen={setOpen} />
    </>
  );
}
