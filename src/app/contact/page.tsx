import { Blogs } from '@/components/sections/Blogs';

const headingStyling = `mt-10 text-5xl ml-0 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;
export default function ContactPage() {
  return (
    <div className="min-h-screen ml-0 md:ml-6 md:w-[50%]">
      <h2 className={headingStyling}>Hire Me</h2>
      <p className="text-lg mt-4 text-gray-300">
        I'm currently open to new opportunities and collaborations. If you're
        interested in working together or have any questions, feel free to reach
        out to me through the following channels:
      </p>
      <ul className="mt-4 text-gray-300">
        <li>
          Email:{' '}
          <a
            href="mailto:harshbhardwaj3009@gmail.com"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            harshbhardwaj3009@gmail.com
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/harsh-bhardwaj-5826881a9"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            https://linkedin.com/in/harsh-bhardwaj-5826881a9
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href="https://github.com/harshbhardwaj09"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            https://github.com/harshbhardwaj09
          </a>
        </li>
        <li>
          Twitter:{' '}
          <a
            href="https://x.com/compile_what"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            https://x.com/compile_what
          </a>
        </li>
        <li>
          Instagram:{' '}
          <a
            href="https://www.instagram.com/unseen_harsh/"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            https://www.instagram.com/unseen_harsh
          </a>
        </li>
      </ul>
    </div>
  );
}
