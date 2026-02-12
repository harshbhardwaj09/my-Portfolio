"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 pb-2 w-full max-w-5xl md:ml-12">
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
</div>
    </footer>
  );
}
