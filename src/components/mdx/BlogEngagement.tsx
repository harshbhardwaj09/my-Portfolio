'use client';

import { useEffect, useMemo, useState } from 'react';
import { Clock, Eye, Heart } from 'lucide-react';
import { incrementBlogRead, likeBlog, unlikeBlog } from '@/lib/api/analytics';

type Props = {
  blogId: string;
  content: string;
  initialViewCount?: number;
  initialLikeCount?: number;
};

export default function BlogEngagement({
  blogId,
  content,
  initialViewCount = 0,
  initialLikeCount = 0,
}: Props) {
  const [viewCount, setViewCount] = useState(initialViewCount);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [liked, setLiked] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);

  const readTime = useMemo(() => {
    const words = content.split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }, [content]);

  useEffect(() => {
    const readKey = `blog_read_${blogId}`;
    const likedKey = `blog_liked_${blogId}`;

    const hasRead = localStorage.getItem(readKey) === '1';
    const hasLiked = localStorage.getItem(likedKey) === '1';

    setLiked(hasLiked);

    const syncRead = async () => {
      if (hasRead) {
        return;
      }

      try {
        const data = await incrementBlogRead(blogId);
        setViewCount(data.viewCount);
        setLikeCount(data.likeCount);
        localStorage.setItem(readKey, '1');
      } catch {
        // Keep UI functional even if tracking fails
      }
    };

    void syncRead();
  }, [blogId]);

  const handleLike = async () => {
    if (likeLoading) return;

    setLikeLoading(true);

    try {
      const data = liked ? await unlikeBlog(blogId) : await likeBlog(blogId);
      setViewCount(data.viewCount);
      setLikeCount(data.likeCount);
      const nextLiked = !liked;
      setLiked(nextLiked);
      if (nextLiked) {
        localStorage.setItem(`blog_liked_${blogId}`, '1');
      } else {
        localStorage.removeItem(`blog_liked_${blogId}`);
      }
    } catch {
      // Keep UI responsive even if API fails
    } finally {
      setLikeLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-5 text-sm">
      <div className="flex items-center gap-1">
        <Clock size={15} className="text-blue-400" />
        {readTime} min read
      </div>

      <div className="flex items-center gap-1">
        <Eye size={15} className="text-purple-400" />
        {viewCount}
      </div>

      <button
        type="button"
        onClick={handleLike}
        disabled={likeLoading}
        className={`flex items-center gap-1 transition ${
          liked ? 'text-red-400' : 'text-red-400 hover:text-red-300'
        }`}
        aria-label={liked ? 'Unlike this blog' : 'Like this blog'}
      >
        <Heart size={15} className={liked ? 'fill-red-500' : ''} />
        {likeCount}
      </button>
    </div>
  );
}
