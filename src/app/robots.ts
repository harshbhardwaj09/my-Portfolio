import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://my-portfolio-harsh-bhardwaj.vercel.app/sitemap.xml',
  };
}
