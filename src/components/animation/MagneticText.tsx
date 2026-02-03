"use client";
import { useEffect, useState, ReactNode } from "react";

export default function MagneticText({ children }: { children: ReactNode }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setActive(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`
        relative inline-block
        transition-all duration-700 ease-out
        ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* glow layer */}
      <span
        className={`
          absolute inset-0
          bg-gradient-to-r from-transparent via-teal-400/20 to-transparent
          blur-xl
          transition-opacity duration-700
          ${active ? "opacity-100" : "opacity-0"}
        `}
      />
      <span className="relative">{children}</span>
    </div>
  );
}
