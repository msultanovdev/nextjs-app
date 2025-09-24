import { Post as PostType } from "../types";

export function Post({ post }: { post: PostType }) {
  return (
    <article className="bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 group">
      <h2 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
        {post.title}
      </h2>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
        {post.body}
      </p>
      <div className="mt-4 pt-3 border-t border-gray-50">
        <span className="text-xs text-gray-400 font-medium">
          Post #{post.id}
        </span>
      </div>
    </article>
  );
}
