"use client";
import { useEffect, useState, ReactNode } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
};

export default function FadeUp({ children, delay = 0 }: FadeUpProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {children}
    </div>
  );
}
