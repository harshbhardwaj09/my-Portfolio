import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const socials = [
  {
    icon: MdEmail,
    link: "mailto:harshbhardwaj3009@gmail.com",
    label: "Email",
    color: "#14b8a6", // theme match subtle teal
  },
  {
    icon: FaGithub,
    link: "https://github.com/harshbhardwaj09",
    label: "GitHub",
    color: "#ffffff",
  },
  {
    icon: FaLinkedin,
    link: "linkedin.com/in/harsh-bhardwaj-5826881a9",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: FaXTwitter,
    link: "https://x.com/compile_what",
    label: "X",
    color: "#ffffff",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/unseen_harsh/",
    label: "Instagram",
    color: "#E1306C",
  },
];

export const projects = [
  {
    title: "Integrating Algolia Search",
    desc: "Custom multisite compatible WordPress plugin for global search using Algolia.",
    tech: ["Algolia", "WordPress", "PHP"],
    live: "#",
    github: "#",
  },
  {
    title: "Time To Have More Fun",
    desc: "Single-page app to help choose travel destinations.",
    tech: ["Next.js", "Firebase", "Tailwind"],
    live: "#",
    github: "#",
  },
  {
    title: "Headless CMS From Scratch",
    desc: "Custom headless CMS built using Node, Express and Firebase.",
    tech: ["Node", "Express", "Firebase"],
    live: "#",
    github: "#",
  },
  {
    title: "Google Keep Clone",
    desc: "A clean Google Keep clone with realtime sync.",
    tech: ["Vue", "Firebase"],
    live: "#",
    github: "#",
  },
];