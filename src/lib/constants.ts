import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

export const socials = [
  {
    icon: MdEmail,
    link: 'mailto:harshbhardwaj3009@gmail.com',
    label: 'Email',
    color: '#14b8a6', // theme match subtle teal
  },
  {
    icon: FaGithub,
    link: 'https://github.com/harshbhardwaj09',
    label: 'GitHub',
    color: '#ffffff',
  },
  {
    icon: FaLinkedin,
    link: 'https://linkedin.com/in/harsh-bhardwaj-5826881a9',
    label: 'LinkedIn',
    color: '#0A66C2',
  },
  {
    icon: FaXTwitter,
    link: 'https://x.com/compile_what',
    label: 'X',
    color: '#ffffff',
  },
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/unseen_harsh/',
    label: 'Instagram',
    color: '#E1306C',
  },
];

export const projects = [
  {
    title: 'budget cash flow',
    desc: 'A personal budget tracker to manage expenses and income, view spending insights through interactive charts, filter by category or date range, with Google sign-in and real-time cloud sync.',
    tech: ['Next.js 16','TypeScript 5', 'Tailwind CSS 4', 'Recharts 3', 'Firebase'],
    live: 'https://budget-cash-flow.vercel.app/',
    github: 'https://github.com/harshbhardwaj09/budget-cash-flow.git',
  },
  {
    title: 'Goswami Tyre Services',
    desc: 'A freelance under-development project — a business landing page for a local tyre service shop with smooth scroll navigation, service listings, contact section, and fully responsive design. Built and delivered independently for a real client.',
    tech: ['Next.js 16', 'React 19', 'TypeScript 5', 'Tailwind CSS 3', 'React Scroll'],
    github: 'https://github.com/harshbhardwaj09/goswami-tyre-service',
    live:'https://goswami-tyre-service.vercel.app/'
  },
  {
    title: 'Portfolio UI',
    desc: 'A developer portfolio website with a built-in blog powered by MDX, dynamic project showcase, GitHub contribution calendar, contact form with validation, and Cloudinary-hosted images — all styled with Tailwind CSS.',
    tech: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 3", "MDX 3", "Cloudinary"],
    live: 'https://my-portfolio-harsh-bhardwaj.vercel.app/',
    github: 'https://github.com/harshbhardwaj09/my-Portfolio.git',
  },
  {
    title: 'Portfolio BE',
    desc: 'A RESTful backend API for the portfolio website — handles blog management with Cloudinary image uploads, contact form emails via Resend, and MongoDB for data persistence, all built with Express and TypeScript.',
    tech: ['Node.js', 'Express 4', 'TypeScript 5', 'MongoDB', 'Cloudinary', 'Resend'],
    github: 'https://github.com/harshbhardwaj09/my-Portfolio-be',
  },
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];
