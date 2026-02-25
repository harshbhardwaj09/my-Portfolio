'use client';
import { useEffect, useState } from 'react';

export default function TableOfContents({ headings }) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      headings.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el && el.getBoundingClientRect().top < 150) {
          setActive(h.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  return (
    <></>
    // <div className="sticky top-24 text-sm space-y-2">
    //   <p className="font-semibold text-white mb-3">
    //     On this page
    //   </p>

    //   {headings.map((h) => (
    //     <a
    //       key={h.id}
    //       href={`#${h.id}`}
    //       className={`block transition ${
    //         active === h.id
    //           ? "text-teal-400 font-medium"
    //           : "text-gray-400 hover:text-white"
    //       }`}
    //     >
    //       {h.text}
    //     </a>
    //   ))}
    // </div>
  );
}
