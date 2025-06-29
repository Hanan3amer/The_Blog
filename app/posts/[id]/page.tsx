import { getPostByID, getAllPosts } from "@/app/lib/api";
import { Post } from "@/app/types/type";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post: Post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPostByID(params.id);

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
        <div className="flex items-center justify-center">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {post.body}
          </p>
        </div>
      </div>
    </div>
  );
}
