import Image from 'next/image';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

export const blogComponents: MDXComponents = {
  h1: (props) => (
    <h1
      className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent my-6"
      {...props}
    />
  ),

  h2: (props) => (
    <h2 className="text-2xl font-semibold my-8 text-white" {...props} />
  ),

  h3: (props) => (
    <h3 className="text-xl font-semibold my-6 text-white" {...props} />
  ),

  p: (props) => <p className="my-4 text-gray-300 leading-7" {...props} />,

  ul: (props) => (
    <ul className="list-disc ml-6 my-4 text-gray-300" {...props} />
  ),

  ol: (props) => (
    <ol className="list-decimal ml-6 my-4 text-gray-300" {...props} />
  ),

  li: (props) => <li className="my-2" {...props} />,

  strong: (props) => <strong className="text-white font-semibold" {...props} />,

  em: (props) => <em className="italic text-gray-200" {...props} />,

  mark: (props) => (
    <mark
      className="bg-yellow-400/20 text-yellow-300 px-1 py-0.5 rounded"
      {...props}
    />
  ),

  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-teal-400 pl-6 italic my-6 text-gray-300"
      {...props}
    />
  ),

  code: (props) => (
    <code
      className="bg-zinc-800 text-cyan-400 px-1.5 py-0.5 rounded-md text-sm"
      {...props}
    />
  ),

  pre: (props) => (
    <pre
      className="bg-zinc-900 p-5 rounded-xl overflow-x-auto my-8 text-sm"
      {...props}
    />
  ),

  table: (props) => (
    <div className="overflow-x-auto my-8">
      <table
        className="w-full border border-zinc-700 text-sm [&_tr:hover]:bg-zinc-800/50"
        {...props}
      />
    </div>
  ),

  th: (props) => (
    <th
      className="px-4 py-3 text-left bg-zinc-800 text-teal-400 font-semibold border-b border-zinc-700"
      {...props}
    />
  ),

  td: (props) => (
    <td
      className="px-4 py-3 border-b border-zinc-800 text-gray-300"
      {...props}
    />
  ),

  hr: () => <div className="my-10 border-t border-zinc-700" />,

  a: (props) => {
    const href = props.href || '';
    const isInternal = href.startsWith('/') || href.startsWith('#');

    const baseClass =
      'text-teal-400 font-medium underline underline-offset-4 hover:text-cyan-400 transition-colors';

    if (isInternal) {
      return (
        <Link href={href} className={baseClass}>
          {props.children}
        </Link>
      );
    }

    return (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        {...props}
      />
    );
  },

  img: (props: React.ComponentProps<'img'>) => (
    <Image
      src={props.src as string}
      alt={props.alt || ''}
      width={900}
      height={500}
      className="rounded-xl my-8"
    />
  ),
};
