"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socials = [
  {
    icon: MdEmail,
    link: "mailto:harshbhardwaj3009@gmail.com",
    color: "#14b8a6", // theme match subtle teal
  },
  {
    icon: FaGithub,
    link: "https://github.com/harshbhardwaj09",
    color: "#ffffff",
  },
  {
    icon: FaLinkedin,
    link: "https://linkedin.com",
    color: "#0A66C2",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com",
    color: "#ffffff",
  },
  {
    icon: FaInstagram,
    link: "https://instagram.com",
    color: "#E1306C",
  },
];
import { SunMedium, MoonStar, Menu, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { ResumeButton } from "./ResumeButton";

export default function NavBar() {
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  // Dark mode toggle
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Sound init
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
        <div className="flex md:hidden items-center justify-between w-full px-4">
          {/* Theme Toggle */}
          <button
            onClick={handleToggle}
            className="w-10 h-10 flex items-center justify-center text-teal-400 ml-2"
          >
            {dark ? <SunMedium size={26} /> : <MoonStar size={26} />}
          </button>

          {/* Hamburger / Close */}
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex items-center justify-center text-teal-400"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ================= DRAWER ================= */}
      <div
        className={`
          fixed top-0 left-0 h-full w-80
          bg-black/90
          z-50
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex flex-col mt-20 px-8 gap-6 text-white text-lg">
          <a
            onClick={() => setOpen(false)}
            className="border-b border-white/10 pb-3"
          >
            Home
          </a>
          <a
            onClick={() => setOpen(false)}
            className="border-b border-white/10 pb-3"
          >
            Blog
          </a>
          <a
            onClick={() => setOpen(false)}
            className="border-b border-white/10 pb-3"
          >
            Projects
          </a>
          <a
            onClick={() => setOpen(false)}
            className="border-b border-white/10 pb-3"
          >
            Contact
          </a>

          <div className="mt-6">
            <ResumeButton />
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 flex justify-center gap-3">
            {socials.map(({ icon: Icon, link, color }, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                w-11 h-11
                flex items-center justify-center
                rounded-lg
                bg-white/5
                border border-white/10
                transition-all duration-300
                hover:bg-white/10
                hover:scale-110
              "
              >
                <Icon size={20} color={color} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
