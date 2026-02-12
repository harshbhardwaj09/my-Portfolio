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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-2 w-full max-w-5xl ml-0 md:ml-12">
      <div
        className="max-w-5xl mx-auto  py-4 text-center
    bg-gradient-to-r
    from-transparent
    via-teal-400/60 via-[40%]
    to-transparent"
      >
        {/* TEXT */}
        {/* MAIN TEXT */}
        <p className="text-white/60 text-md tracking-wide">
          Designed & Built by{" "}
          <span className="font-semibold text-white">Harsh Bhardwaj</span> ©{" "}
          {year}
        </p>

        {/* WORK LINE */}
        <p className="mt-4 text-white/70 text-md">
          Interested in working together?{" "}
          <a
            href="mailto:harshbhardwaj3009@gmail.com"
            className="
              text-white/90
              font-semibold
              underline underline-offset-4
              hover:text-white
              underline underline-offset-4
              transition
            "
          >
            Let’s connect
          </a>
        </p>

        {/* EMAIL DISPLAY */}
        <p className="mt-2 text-md text-white/90 font-semibold tracking-wide">
          harshbhardwaj3009@gmail.com
        </p>

        {/* MOBILE SOCIALS */}
        <div className="mt-8 flex justify-center gap-6 lg:hidden">
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
    </footer>
  );
}
