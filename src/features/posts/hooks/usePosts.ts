import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/getPosts";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};
