import CompleteBlog from '@/components/pages/completeBlog';

const headingStyling = `mt-10 text-5xl ml-0 md:ml-8 font-extrabold text-teal-200 [text-shadow:15px_15px_7px_black]`;

export const metadata = {
  title: 'blogs',
};

export default async function BlogsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;
  console.log('blog id: ', id);
  return (
    <div className="min-h-screen ml-0">
      <CompleteBlog id={id} />
    </div>
  );
}
