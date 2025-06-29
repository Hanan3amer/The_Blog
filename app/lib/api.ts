import { notFound } from "next/navigation";
export async function getAllPosts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  return data.json();
}

export async function getPostByID(id: number) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!data.ok) {
    notFound();
  }
  return data.json();
}
