import { getBlogByID } from '@/lib/api/getBlogByID';
import { calculateReadTime } from '@/lib/utils';
const headingStyling = `text-4xl mb-4 font-bold text-teal-200 [text-shadow:15px_15px_7px_black]`;

export default async function CompleteBlog({ id }: { id: string }) {
  const blog = await getBlogByID(id);
  const readTime = calculateReadTime(blog.content);

  return (
    <article className="max-w-4xl mx-auto mt-10">
      {/* Title */}
      <h1 className={headingStyling}>{blog.title}</h1>
      {/* Cover Image */}
      <div className="w-full h-[400px] rounded-2xl overflow-hidden mb-10">
        <img
          src={blog?.coverImage || '/profile.png'}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta Info */}
      <div className="flex items-center gap-4 text-gray-500 mb-10 text-sm">
        <span>{new Date(blog.createdAt).toDateString()}</span>
        <span>•</span>
        <span>{readTime} min read</span>
      </div>

      {/* Blog Content */}
      <div
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
