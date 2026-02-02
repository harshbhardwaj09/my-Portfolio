"use client";
import { useEffect, useState } from "react";

type Props = {
  lines: string[];
  speed?: number;
};

export default function TerminalText({ lines, speed = 500 }: Props) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < lines.length) {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, lines[index]]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(t);
    }
  }, [index, lines, speed]);

  return (
    <div className="font-mono text-left space-y-3">
      {visibleLines.map((line, i) => (
        <div key={i}>
          <span className="text-teal-400 text-xl">$</span> {line}
        </div>
      ))}
      <span className="animate-pulse">▉</span>
    </div>
  );
}
