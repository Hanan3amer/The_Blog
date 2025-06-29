"use client";
import React, { useEffect, useState } from "react";
import { getAllPosts } from "../lib/api";
import PostCard from "../components/PostCard";
import AOS from "aos";
import "aos/dist/aos.css";
import Loading from "./Loader";
import { Post } from "../types/type";
export default function RecentPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    AOS.init({ duration: 500, once: false });

    const fetchPosts = async () => {
      const data = await getAllPosts();
      setPosts(data.slice(0, 4));
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) return <Loading />;

  return (
    <>
      <h2 className="text-2xl font-semibold text-center py-2 max-w-sm mx-auto text-gray-500 border-y  border-y-amber-300 my-5 dark:border-y-purple-300 dark:text-white">
        Recent Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        <div data-aos="fade-right">
          <PostCard post={posts[0]} />
        </div>
        <div data-aos="fade-left">
          <PostCard post={posts[1]} />
        </div>
        <div className="ml-0 md:ml-12" data-aos="fade-right">
          <PostCard post={posts[2]} />
        </div>
        <div className="ml-0 md:ml-12" data-aos="fade-left">
          <PostCard post={posts[3]} />
        </div>
      </div>
    </>
  );
}
