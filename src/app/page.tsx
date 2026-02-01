import FadeUp from "@/components/animation/FadeUp";

export default function Home() {
  return (
    <div className="min-h-screen px-10 pt-10 flex justify-center">
      <div className="text-white text-center max-w-3xl">

        <FadeUp>
          <h1 className="text-5xl md:text-8xl font-bold leading-tight">
            Harsh Bhardwaj
          </h1>
        </FadeUp>

        <FadeUp delay={100}>
          <h2 className="mt-4 text-2xl md:text-4xl text-teal-400">
            Full Stack Developer
          </h2>
        </FadeUp>

        <FadeUp delay={200}>
          <p className="mt-6 text-white/80 text-2xl leading-relaxed">
            I build clean, scalable, and performant web applications using modern
            technologies. I focus on creating great user experiences with solid
            frontend and backend foundations.
          </p>
        </FadeUp>

        <FadeUp delay={300}>
          <p className="mt-4 text-xl text-white/95">
            React • Next.js • TypeScript • Node.js
          </p>
        </FadeUp>

      </div>
    </div>
  );
}
