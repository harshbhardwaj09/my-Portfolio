"use client";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  color?: string;
};

export default function TypeCursor({
  text,
  speed = 120,
  color = "text-blue-500",
}: Props) {
  const [value, setValue] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i < text.length) {
      const t = setTimeout(() => {
        setValue((p) => p + text[i]);
        setI(i + 1);
      }, speed);
      return () => clearTimeout(t);
    }
  }, [i, text, speed]);

  return (
    <span className={`inline-flex items-center font-extrabold ${color}`}>
      {value}
      <span className="ml-1 w-[10px] h-[1.2em] bg-current animate-pulse" />
    </span>
  );
}
