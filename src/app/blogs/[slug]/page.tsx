import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { blogComponents } from '@/components/mdx/blogComponents';
import { getBlogByID } from '@/lib/api/getBlogByID';
import BlogLayout from '@/components/mdx/BlogLayout';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import BlogImage from '@/components/mdx/BlogImage';
import { Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import BlogEngagement from '@/components/mdx/BlogEngagement';

const IMAGE_FRAME_CLASS =
  'mx-auto relative w-full max-w-3xl overflow-hidden rounded-2xl aspect-[16/9]';

// 🔍 Dynamic SEO metadata from blog data
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const id = (await params).slug;
  try {
    const post = await getBlogByID(id);
    const description = post.content?.slice(0, 160).replace(/[#*`\n]/g, '').trim();

    return {
      title: post.title,
      description,
      keywords: post.tags || [],
      openGraph: {
        title: post.title,
        description,
        type: 'article',
        ...(post.coverImage && { images: [{ url: post.coverImage }] }),
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description,
        ...(post.coverImage && { images: [post.coverImage] }),
      },
    };
  } catch {
    return { title: 'Blog Not Found' };
  }
}

export default async function BlogPag({
  params,
}: {
  params: { slug: string };
}) {
  const id = (await params).slug;
  const [post] = await Promise.all([
    getBlogByID(id),
    new Promise((resolve) => setTimeout(resolve, 500)),
  ]);

  return (
    <BlogLayout>
      <div className="w-full overflow-x-hidden">
        <div className=" mb-8">
          {/* TITLE */}
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-6 text-white">
            {post.title}
          </h1>

          {/* META */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 text-zinc-400">
            {/* LEFT */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-sm font-medium text-white">
                H
              </div>

              <span className="text-white font-medium">Harsh Bhardwaj</span>

              <div className="flex items-center gap-1">
                <Calendar size={15} className="text-green-400" />
                <span>Feb 24, 2026</span>
              </div>
            </div>

            {/* RIGHT */}
            <BlogEngagement
              blogId={id}
              content={post.content}
              initialViewCount={post.viewCount ?? 0}
              initialLikeCount={post.likeCount ?? 0}
            />
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <MDXRemote
          source={post.content}
          components={{
            ...blogComponents,

            /* ================= COVER IMAGE ================= */

            CoverImage: () => {
              if (!post.coverImage) return null;

              return (
                <div className="my-8 w-full">
                  <div className={IMAGE_FRAME_CLASS}>
                    <BlogImage
                      src={post.coverImage}
                      alt={post.title || 'Cover'}
                      priority
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
                <div className="w-full">
                  <div className={IMAGE_FRAME_CLASS}>
                    <BlogImage
                      src={imageSrc}
                      alt={`Blog Image ${numericIndex + 1}`}
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
