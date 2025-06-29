import { Post } from "@/app/types/type";

export async function getAllPosts(): Promise<Post[]> {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!data.ok) {
    throw new Error("Failed to fetch posts");
  }

  return data.json();
}

export async function getPostByID(id: string): Promise<Post | null> {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!data.ok) {
    return null;
  }

  return data.json();
}
