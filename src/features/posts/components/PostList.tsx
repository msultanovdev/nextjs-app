"use client";

import { usePosts } from "../hooks/usePosts";
import { Post } from "./Post";

export function PostList() {
  const { data, isLoading, error } = usePosts();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="animate-pulse text-gray-500">Loading posts...</div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-64">
        <div className="text-red-500">Something went wrong</div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
