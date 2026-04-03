import type { MetadataRoute } from 'next';
import { API_URL } from '@/lib/config';

const SITE_URL = 'https://my-portfolio-harsh-bhardwaj.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  // Dynamic blog pages
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const res = await fetch(`${API_URL}/api/blogs?page=1&limit=100`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      blogPages = data.blogs.map(
        (blog: { _id: string; updatedAt?: string }) => ({
          url: `${SITE_URL}/blogs/${blog._id}`,
          lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        }),
      );
    }
  } catch {
    // If API fails, return only static pages
  }

  return [...staticPages, ...blogPages];
}
