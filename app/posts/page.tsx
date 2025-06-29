import { getAllPosts } from "../lib/api";
import PostCard from "../components/PostCard";
import RecentPosts from "../components/RecentPosts";
import { Post } from "../types/type";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <div className="space-y-16 max-w-6xl mx-auto px-4">
      <RecentPosts />
      <h2 className="text-2xl font-semibold text-center py-2 max-w-sm mx-auto text-gray-500 border-y  border-y-amber-300 dark:border-y-purple-300 dark:text-white">
        All blog Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
