const CompleteBlog = ({ id }: { id: string }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">Complete Blog Page</h1>
      <p className="text-white">Blog ID: {id}</p>
    </div>
  );
};
export default CompleteBlog;
