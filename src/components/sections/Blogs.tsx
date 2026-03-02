import { getBlogs } from '@/lib/api/getBlogs';
import { ArrowRight, Heart } from 'lucide-react';
import Link from 'next/link';

export const Blogs = async ({ limit = 5 }) => {
  const likes = [124, 89, 256];
  const data = await getBlogs(limit);

  return (
    <div className="my-10 w-full   ml-0 md:ml-8 max-w-5xl flex flex-col gap-6">
      {data.blogs.map(
        (
          blog: { title?: string; tags?: string[]; _id: string },
          index: number,
        ) => (
          <Link
            href={`/blogs/${blog._id}`}
            key={index}
            className="
            group relative
            p-6 rounded-xl
            bg-white/5
            shadow-[25px_25px_20px_rgba(0,0,0,0.75)]
            border border-white/10
            transition-all duration-500
            hover:-translate-y-[2px]
                hover:shadow-[35px_35px_20px_rgba(0,0,0,0.9)]
            hover:bg-white/15
          "
          >
            {/* LEFT RAIL */}
            <span className="absolute left-0 top-4 bottom-4 w-[3px] bg-white/20 rounded-full" />

            {/* CONTENT */}
            <div className="pl-4 flex flex-col gap-3 pr-16">
              <h3 className="text-xl md:text-2xl font-semibold text-white/90">
                {blog?.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {blog?.tags?.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-white/10 rounded-md text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* READ COMPLETE BLOG */}
              <div className="inline-flex items-center gap-2 cursor-pointer group/read">
                {/* TEXT (UNDERLINE ONLY HERE) */}
                <span
                  className="
                  relative
                  text-sm font-medium text-white/60
                  transition-colors duration-300
                  group-hover/read:text-white

                  after:content-['']
                  after:absolute
                  after:left-0
                  after:-bottom-1
                  after:h-[1px]
                  after:w-full
                  after:bg-white
                  after:scale-x-0
                  after:origin-left
                  after:transition-transform
                  after:duration-300
                  group-hover/read:after:scale-x-100
                "
                >
                  Read complete blog
                </span>

                {/* ARROW (NO UNDERLINE EVER) */}
                <ArrowRight
                  size={16}
                  className="
                  text-white/60
                  transition-all duration-300
                  group-hover/read:text-white
                  group-hover/read:translate-x-1
                "
                />
              </div>
            </div>

            {/* HEART / LIKES */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1 text-white/50">
              <Heart size={16} />
              <span className="text-sm">{likes[index]}</span>
            </div>
          </Link>
        ),
      )}

      {/* VIEW MORE BLOGS */}
      <div className="flex justify-center mt-8">
        <Link
          href="/blogs"
          className="flex items-center gap-2 cursor-pointer group/view"
        >
          <span
            className="
        relative
        text-base font-medium text-white/70
        transition-colors duration-300
        group-hover/view:text-white
        after:content-['']
        after:absolute
        after:left-0
        after:-bottom-1
        after:h-[1px]
        after:w-full
        after:bg-white
        after:scale-x-0
        after:origin-left
        after:transition-transform
        after:duration-300
        group-hover/view:after:scale-x-100
      "
          >
            View more blogs
          </span>

          <ArrowRight
            size={18}
            className="
        text-white/70
        transition-all duration-300
        group-hover/view:text-white
        group-hover/view:translate-x-1
      "
          />
        </Link>
      </div>
    </div>
  );
};
