'use client';

import { useEffect, useState } from 'react';
import { Skills } from './Skills';
import { getSiteVisits, incrementSiteVisits } from '@/lib/api/analytics';

export const About = () => {
  const showText = () => {
    setShow(true);
  };
  const [show, setShow] = useState(false);
  const [siteVisits, setSiteVisits] = useState<number>(0);

  useEffect(() => {
    showText();

    const syncVisits = async () => {
      const visitKey = 'site_visit_counted_v1';
      const hasCountedVisit = localStorage.getItem(visitKey) === '1';

      try {
        if (!hasCountedVisit) {
          const data = await incrementSiteVisits();
          setSiteVisits(data.count);
          localStorage.setItem(visitKey, '1');
          return;
        }

        const data = await getSiteVisits();
        setSiteVisits(data.count);
      } catch {
        // Ignore analytics errors to avoid blocking UI rendering
      }
    };

    void syncVisits();
  }, []);

  return (
    <div className="my-10 w-full max-w-5xl bordr border-white/10 rounded-xl">
      <div className="relative flex justify-center">
        {/* WIDTH SAME AS BLOG SECTION */}
        <div className="w-full max-w-5xl px-4 text-center relative overflow-hidden">
          {/* HUGE FAINT BACKGROUND TEXT */}
          <div className="absolute inset-0 flex items-start justify-center text-[120px] md:text-[220px] font-black text-white/5 select-none pointer-events-none tracking-tight">
            HARSH
          </div>

          {/* MAIN NAME */}
          <h2
            className={`
            relative
            text-5xl md:text-8xl
            font-black
            tracking-tight
            bg-gradient-to-r
            from-white
            via-teal-300
            to-white
            bg-[length:200%_200%]
            animate-gradientMove
            text-transparent
            bg-clip-text
            transition-all duration-1000 ease-out
            ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
          >
            Harsh Bhardwaj
          </h2>

          {/* ROLE */}
          <p
            className={`mt-6 text-xl md:text-2xl text-teal-200 transition-all duration-1000 delay-200 ${
              show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Full Stack Developer
          </p>

          {/* DESCRIPTION */}
          <p
            className={`mt-8 mx-auto max-w-2xl text-lg text-teal-100 leading-relaxed transition-all duration-1000 delay-400 ${
              show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            I design and build scalable, high-performance web applications with
            modern frontend architecture and clean backend systems.
          </p>

          {/* SKILLS SLIDER */}
          <div className="mt-16">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};
