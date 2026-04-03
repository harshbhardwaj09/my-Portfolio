import { API_URL } from '../config';

export async function getSiteVisits() {
  const res = await fetch(`${API_URL}/api/analytics/visits`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch site visits');
  }
  return res.json() as Promise<{ count: number }>;
}

export async function incrementSiteVisits() {
  const res = await fetch(`${API_URL}/api/analytics/visits/increment`, {
    method: 'POST',
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to increment site visits');
  }
  return res.json() as Promise<{ count: number }>;
}

export async function incrementBlogRead(blogId: string) {
  const res = await fetch(`${API_URL}/api/blogs/${blogId}/read`, {
    method: 'POST',
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to increment blog read count');
  }
  return res.json() as Promise<{ viewCount: number; likeCount: number }>;
}

export async function likeBlog(blogId: string) {
  const res = await fetch(`${API_URL}/api/blogs/${blogId}/like`, {
    method: 'POST',
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to like blog');
  }
  return res.json() as Promise<{ viewCount: number; likeCount: number }>;
}

export async function unlikeBlog(blogId: string) {
  const res = await fetch(`${API_URL}/api/blogs/${blogId}/unlike`, {
    method: 'POST',
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed to unlike blog');
  }
  return res.json() as Promise<{ viewCount: number; likeCount: number }>;
}
