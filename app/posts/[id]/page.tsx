import { getPostByID } from "../../lib/api";
import { Post } from "../../types/type";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function PostDetailsPage({ params }: Props) {
  const post: Post = await getPostByID(params.id);

  if (!post) return notFound();

  return (
    <div className="flex mx-auto items-center justify-center h-lvh">
      <div className="block max-w-sm p-6 bg-white border border-amber-300 rounded-lg shadow-xs hover:bg-gray-100 dark:bg-gray-800 dark:border-purple-300 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <div className="flex items-center justify-center">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {post.body}
          </p>
        </div>
      </div>
    </div>
  );
}
