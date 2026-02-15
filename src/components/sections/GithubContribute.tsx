"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);
export const GithubContribute = () => {
  return (
    <div className="my-10 w-full   ml-0 md:ml-8 max-w-5xl bg-white/5 border border-white/10 rounded-xl p-6 flex items-center justify-center shadow-[25px_25px_20px_rgba(0,0,0,0.75)] font-bold overflow:visible text-white/80">
      <GitHubCalendar
        username="harshbhardwaj09"
        blockSize={10}
        blockMargin={6}
        fontSize={14}
        colorScheme="dark"
        year={2026}
        showWeekdayLabels
      />
    </div>
  );
};
