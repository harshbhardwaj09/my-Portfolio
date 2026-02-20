import { API_URL } from '../config';

export async function getBlogByID(id: string) {
  const res = await fetch(`${API_URL}/api/blogs/${id}`, {
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  const data = await res.json();
  return data;
}
