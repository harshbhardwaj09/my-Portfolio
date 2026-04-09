import BlogLayout from '@/components/mdx/BlogLayout';

export default function Loading() {
  return (
    <BlogLayout>
      <div className="min-h-[45vh] flex flex-col items-center justify-center gap-4">
        <div
          className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-teal-300"
          aria-hidden="true"
        />
        <p className="text-base sm:text-lg text-zinc-300">Loading blog...</p>
      </div>
    </BlogLayout>
  );
}
