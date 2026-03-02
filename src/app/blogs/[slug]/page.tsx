import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { blogComponents } from '@/components/mdx/blogComponents';
import { getBlogByID } from '@/lib/api/getBlogByID';
import BlogLayout from '@/components/mdx/BlogLayout';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';

export default async function BlogPag({
  params,
}: {
  params: { slug: string };
}) {
  console.log('params>>', params);
  const id = (await params).slug;
  console.log('Fetching blog post with ID:', id);
  const post = await getBlogByID(id);

  return (
    <BlogLayout>
      <div className="w-full overflow-x-hidden">
        <MDXRemote
          source={post.content}
          components={{
            ...blogComponents,

            /* ================= COVER IMAGE ================= */

            CoverImage: () => {
              if (!post.coverImage) return null;

              return (
                <div className="my-8 w-full">
                  <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl bg-zinc-900">
                    <Image
                      src={post.coverImage}
                      alt={post.title || 'Cover'}
                      width={1600}
                      height={900}
                      priority
                      unoptimized
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  </div>
                </div>
              );
            },

            /* ================= BLOG IMAGE ================= */

            ImageBlock: ({ index }: { index?: string }) => {
              if (!index) return null;

              const numericIndex = Number(index);
              const imageSrc = post.images?.[numericIndex];
              if (!imageSrc) return null;

              return (
                <div className="my-8 w-full">
                  <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-zinc-900">
                    <Image
                      src={imageSrc}
                      alt={`Blog Image ${numericIndex + 1}`}
                      width={1200}
                      height={800}
                      unoptimized
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  </div>
                </div>
              );
            },
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </div>
    </BlogLayout>
  );
}
