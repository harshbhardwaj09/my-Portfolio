export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex justify-end my-4 p-4">
      <div
        className="
          inline-flex items-center gap-10
          px-10 py-4
          text-md
          text-white
          font-semibold
          bg-[#191514]/80
          backdrop-blur-md
          border border-white/60
          rounded-full
          shadow-[0_10px_30px_rgba(255,255,255,0.15)]
        "
      >
        <a className="text-teal-400 font-semibold whitespace-nowrap cursor-pointer">Home</a>
        <a className="opacity-70 hover:opacity-100 transition whitespace-nowrap cursor-pointer">Blog</a>
        <a className="opacity-70 hover:opacity-100 transition whitespace-nowrap cursor-pointer">Resources</a>
        <a className="opacity-70 hover:opacity-100 transition whitespace-nowrap cursor-pointer">Projects</a>
        <a className="opacity-70 hover:opacity-100 transition whitespace-nowrap cursor-pointer">Test</a>
        </div>
    </header>
  );
}
