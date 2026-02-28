import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { blogComponents } from '@/components/mdx/blogComponents';
import { Metadata } from 'next';
import { getBlogByID } from '@/lib/api/getBlogByID';
import BlogLayout from '@/components/mdx/BlogLayout';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
interface PageProps {
  params: {
    slug: string;
  };
}

// export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
//   const post = await getBlogByID(params.slug);
//   if (!post) return {};
//   return {
//     title: post.title,
//     description: post.description,
//   };
// }

export default async function BlogPag({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;
  console.log('blog id: ', id);
  const post = await getBlogByID(id);
  if (!post) return notFound();

  return (
    <BlogLayout>
      <MDXRemote
        source={post.content}
        components={{
          ...blogComponents,
          CoverImage: () => {
            if (!post.coverImage) return null;

            return (
              <div className="my-10 flex justify-center">
                <div className="w-full max-w-3xl relative overflow-hidden rounded-2xl bg-zinc-900">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={1200}
                    height={800}
                    priority
                    unoptimized
                    className="w-full h-auto object-cover max-h-[75vh]"
                  />
                </div>
              </div>
            );
          },
          ImageBlock: ({ index }: { index?: string }) => {
            if (!index) return null;

            const numericIndex = Number(index);
            const imageSrc = post.images?.[numericIndex];

            if (!imageSrc) return null;

            return (
              <div className="my-8 flex justify-center">
                <div className="w-full max-w-2xl">
                  <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-900">
                    <Image
                      src={imageSrc}
                      alt={`Blog Image ${numericIndex + 1}`}
                      width={1200}
                      height={800}
                      unoptimized
                      className="w-full h-auto object-cover rounded-2xl max-h-[60vh] sm:max-h-[70vh]"
                    />
                  </div>
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
    </BlogLayout>
  );
}
