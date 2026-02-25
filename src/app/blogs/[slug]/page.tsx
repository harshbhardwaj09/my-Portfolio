import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { blogComponents } from '@/components/mdx/blogComponents';
import { Metadata } from 'next';
import { getBlogByID } from '@/lib/api/getBlogByID';
import BlogLayout from '@/components/mdx/BlogLayout';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

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
        components={blogComponents}
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
