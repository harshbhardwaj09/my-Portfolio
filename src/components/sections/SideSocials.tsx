"use client";

import { socials } from "@/lib/constants";

export default function SideSocials() {
  return (
    <>
      {/* LEFT SIDE SOCIAL STACK */}
      <div className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
        {socials.map(({ icon: Icon, link, label, color }, index) => (
          <a
            key={index}
            href={link}
            target={label === "Email" ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="
              group relative
              flex items-center justify-center
              w-14 h-14
              rounded-xl
              bg-white/5
              border border-white/10
              backdrop-blur-md
              transition-all duration-500 ease-out
              hover:translate-x-3
              hover:bg-white/60
              hover:shadow-[0_10px_30px_rgba(0,0,0,0.7)]
            "
          >
            {/* ICON */}
            <Icon
              size={26}
              color={color}
              className="
                transition-all duration-500 ease-out
                group-hover:rotate-12
                group-hover:scale-110
              "
            />

            {/* Subtle glow only for X */}
            {label === "X" && (
              <span
                className="
                absolute inset-0
                rounded-xl
                blur-lg
                opacity-0
                group-hover:opacity-40
                bg-x
                transition duration-500
              "
              />
            )}

            {/* Drawer Label */}
            <span
              className="
                absolute left-full ml-6
                text-sm tracking-wide
                text-white/80
                opacity-0
                transition-all duration-300
                group-hover:opacity-100
              "
            >
              {label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
