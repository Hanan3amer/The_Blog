import { getPostByID } from "@/app/lib/api";
import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function PostDetailsPage({ params }: Props) {
  const post = await getPostByID(Number(params.id));

  if (!post) notFound();

  return (
    <div className="flex mx-auto items-center justify-center h-lvh">
      <div
        className="block max-w-sm p-6 border border-amber-300 dark:border-purple-300 rounded-lg shadow-xs hover:opacity-95 
        bg-gradient-to-br from-white via-amber-50 to-yellow-100 
        dark:bg-gradient-to-br dark:from-[#10101a] dark:via-[#1a1a2a] dark:to-[#2c2c3a]"
      >
        <h5 className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="text-gray-700 dark:text-gray-400 text-center">
          {post.body}
        </p>
      </div>
    </div>
  );
}
