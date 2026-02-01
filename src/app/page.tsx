import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen px-10 pt-10 flex justify-center">
      <div className="text-white text-center max-w-3xl">
        <h1 className="text-5xl md:text-8xl font-bold leading-tight">
          Harsh Bhardwaj
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl text-teal-400">
          Full Stack Developer
        </h2>

        <p className="mt-6 text-white/70 text-lg leading-relaxed">
          I build clean, scalable, and performant web applications using modern
          technologies. I focus on creating great user experiences with solid
          frontend and backend foundations.
        </p>

        <p className="mt-4 text-white/50">
          React • Next.js • TypeScript • Node.js
        </p>
      </div>
    </div>
  );
}
