import Appear from "@/components/animation/Appear";
import MagneticText from "@/components/animation/MagneticText";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen pl-4 mt-10 flex gap-20 pointer-events-none">

      {/* LEFT */}
      <div className="flex-1 text-white max-w-3xl">
        <MagneticText>
          <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
            Harsh
          </h1>
        </MagneticText>
             <MagneticText>
          <h1 className="text-7xl md:text-8xl font-extrabold leading-tight">
            Bhardwaj
          </h1>
        </MagneticText>

        <MagneticText>
          <h2 className="mt-4 text-3xl text-teal-400 font-semibold">
            Full Stack Developer
          </h2>
        </MagneticText>

        <p className="mt-6 text-xl text-white/80 max-w-2xl">
          I build clean, scalable, and performant web applications with strong
          focus on user experience and modern frontend systems.
        </p>

        <p className="mt-4 text-lg text-white/90">
          React • Next.js • TypeScript • Node.js
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex-1 flex justify-center">
         <Appear delay={200}>
  <div className="relative w-96 h-96">
    <Image
      src="/dev3.png"
      alt="Profile"
      fill
      className="object-contain"
    />
  </div>
</Appear>
      </div>

    </div>
  );
}
