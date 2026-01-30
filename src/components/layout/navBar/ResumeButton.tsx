export const ResumeButton = () => (
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
  opacity-80 
    px-10 py-3
    rounded-xl
    text-base md:text-lg font-semibold
      text-white/80
      hover:text-white
    bg-[#191514]/60
    border border-teal-400/60
    shadow-[0_6px_0_#0d9488]
    -translate-y-[3px]
    hover:translate-y-[-1px]
    hover:shadow-[0_4px_0_#0d9488]
    active:translate-y-[3px]
    active:shadow-none
    transition-all duration-150
    whitespace-nowrap
  "
  >
    Resume
  </a>
);
