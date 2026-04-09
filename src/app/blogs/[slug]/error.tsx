'use client';

import BlogLayout from '@/components/mdx/BlogLayout';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <BlogLayout>
      <div className="min-h-[45vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Something went wrong
        </h2>
        <p className="text-zinc-300 max-w-xl">
          We could not load this blog right now. Please reload the page and try
          again.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-2 rounded-md bg-teal-500 px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-teal-400"
        >
          Reload page
        </button>
      </div>
    </BlogLayout>
  );
}
