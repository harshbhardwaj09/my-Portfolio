// src/lib/getBlogs.ts
/**
 * WHY WE ARE USING `fetch` INSTEAD OF AXIOS:
 * In Next.js App Router, the built-in `fetch` is NOT the normal browser fetch.
 * It is an enhanced version provided by Next.js.
 *
 * Benefits of using Next.js fetch instead of Axios here:
 *
 * 1️⃣ Built-in Caching
 *    Next.js automatically caches the response.
 *
 * 2️⃣ ISR Support (Incremental Static Regeneration)
 *    We can control revalidation timing using:
 *    next: { revalidate: 60 }
 *
 * 3️⃣ Request Deduplication
 *    If multiple components request the same data,
 *    Next.js will only make ONE network request.
 *
 * 4️⃣ Edge Runtime Compatibility
 *    Native fetch works perfectly in edge environments.
 *    Axios may cause issues in edge runtime.
 *
 * 5️⃣ Zero Extra Bundle Size
 *    Axios adds extra KBs to your project.
 *    Native fetch adds nothing.
 *
 * When SHOULD you use Axios?
 * - Client-side apps (Vite, CRA)
 * - When using interceptors
 * - When handling complex auth flows
 * - File uploads with progress tracking
 *
 * But for Server Components + SSR:
 * 👉 Always prefer native fetch.
 */

import { API_URL } from '../config';

export async function getBlogs() {
  // This log appears in the SERVER terminal,
  // not in the browser.

  // We call our Express backend API.
  // page=1 and limit=5 ensures only 5 blogs are returned.
  const res = await fetch(`${API_URL}/api/blogs?page=1&limit=105`, {
    /**
     * ISR (Incremental Static Regeneration)
     *
     * What this does:
     *
     * - First request:
     *   Next.js fetches data from backend.
     *
     * - Next 300 seconds:
     *   Next.js serves cached HTML.
     *   Backend is NOT called again.
     *
     * - After 300 seconds:
     *   Next.js re-fetches data in background.
     *
     * This improves:
     * ✔ Performance
     * ✔ Backend load reduction
     * ✔ SEO
     */
    next: { revalidate: 12 }, // Revalidate every 5 minutes
  });

  // If backend fails, we throw error.
  // Next.js will show error page if needed.
  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }
  // Convert response to JSON
  const data = await res.json();
  return data;
}
