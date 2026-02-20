export const metadata = {
  title: 'Contact',
};
const headingStyling = `mt-10 text-5xl ml-0 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;
export default function ContactPage() {
  return (
    <div className="min-h-screen ml-0  flex flex-col items-center">
      <h2 className={headingStyling}>Hire Me</h2>
      <p className="text-lg mt-1 text-teal-100">
        Currently open to new opportunities and collaborations.
      </p>
      <ul className="mt-1 text-gray-300">
        <li className="text-teal-100">
          Email:{' '}
          <a
            href="mailto:harshbhardwaj3009@gmail.com"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            harshbhardwaj3009@gmail.com
          </a>
        </li>
        <li className="text-teal-100">
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/harsh-bhardwaj-5826881a9"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            https://linkedin.com/in/harsh-bhardwaj-5826881a9
          </a>
        </li>
        <li className="text-teal-100">
          GitHub:{' '}
          <a
            href="https://github.com/harshbhardwaj09"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            https://github.com/harshbhardwaj09
          </a>
        </li>
        <li className="text-teal-100">
          Twitter:{' '}
          <a
            href="https://x.com/compile_what"
            className="text-teal-300 hover:text-teal-400"
          >
            {' '}
            https://x.com/compile_what
          </a>
        </li>
        <li className="text-teal-100">
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
