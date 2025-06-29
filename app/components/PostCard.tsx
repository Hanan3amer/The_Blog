"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { ImArrowUpRight2 } from "react-icons/im";
import { Post } from "../types/type";

export default function PostCard({ post }: { post: Post }) {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
    });
  }, []);

  return (
    <div
      className="block max-w-sm p-6 border border-amber-300 dark:border-purple-300 rounded-lg shadow-xs hover:opacity-95 
             bg-gradient-to-br from-white via-amber-50 to-yellow-100 
             dark:bg-gradient-to-br dark:from-[#10101a] dark:via-[#1a1a2a] dark:to-[#2c2c3a]"
      data-aos="fade-up"
    >
      <h5 className="mb-2 text-md font-semibold text-gray-900 dark:text-white">
        {post.title}
      </h5>
      <div className="flex items-center justify-center">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.body.slice(0, 50)}...
        </p>
        <Link href={`/posts/${post.id}`}>
          <ImArrowUpRight2 className="text-amber-500 dark:text-purple-200" />
        </Link>
      </div>
    </div>
  );
}
