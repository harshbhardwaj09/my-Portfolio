'use client';

import { useEffect, useState } from 'react';
import ProgressBar from './ProgressBar';
import TableOfContents from './TableOfContents';
import CodeEnhancer from './CodeEnhancer';

interface Props {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: Props) {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll('h2, h3'),
    ) as HTMLHeadingElement[];

    const items = elements.map((el) => {
      const id = el.innerText.toLowerCase().replace(/\s+/g, '-');
      el.id = id;
      return { id, text: el.innerText };
    });

    setHeadings(items);
  }, []);

  return (
    <>
      <ProgressBar />
      <CodeEnhancer />

      <div className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <article
              className="
              w-full
              prose
              sm:prose-lg
              dark:prose-invert
              prose-headings:font-bold
              prose-headings:bg-gradient-to-r
              prose-headings:from-teal-400
              prose-headings:to-cyan-400
              prose-headings:bg-clip-text
              prose-headings:text-transparent
              prose-p:text-gray-300
              prose-li:text-gray-300
              prose-strong:text-white
              prose-blockquote:border-teal-400
              max-w-none
            "
            >
              {children}
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
