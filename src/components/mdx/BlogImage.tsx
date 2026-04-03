'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function BlogImage({ src, alt, priority = false }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Shimmer skeleton shown until image loads */}
      {!loaded && (
        <span className="absolute inset-0 rounded-2xl animate-pulse bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 bg-[length:200%_100%]" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 1024px, (min-width: 768px) 90vw, 100vw"
        priority={priority}
        unoptimized
        onLoad={() => setLoaded(true)}
        className={`object-cover rounded-2xl transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
}
