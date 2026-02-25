import Image from 'next/image';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

const blogComponents: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-extrabold my-6" {...props} />,
  h2: (props) => <h2 className="text-2xl font-bold my-5" {...props} />,
  h3: (props) => <h3 className="text-xl font-semibold my-4" {...props} />,
  p: (props) => (
    <p className="my-3 text-gray-800 dark:text-gray-200" {...props} />
  ),

  ul: (props) => <ul className="list-disc ml-6 my-3" {...props} />,
  ol: (props) => <ol className="list-decimal ml-6 my-3" {...props} />,
  li: (props) => <li className="my-2" {...props} />,

  strong: (props) => <strong className="font-bold" {...props} />,
  em: (props) => <em className="italic" {...props} />,

  table: (props) => (
    <table className="border-collapse table-auto w-full my-6" {...props} />
  ),
  th: (props) => (
    <th className="border px-4 py-2 bg-gray-100 dark:bg-gray-700" {...props} />
  ),
  td: (props) => <td className="border px-4 py-2" {...props} />,

  a: (props) => (
    <Link href={props.href ?? '#'}>
      <a className="text-blue-600 hover:underline" {...props} />
    </Link>
  ),

  img: (props) => (
    <Image
      className="rounded-md"
      width={800}
      height={500}
      alt={props.alt}
      src={props.src ?? ''}
    />
  ),
};

export { blogComponents };
