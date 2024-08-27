import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePost = ( postId :number) => {
  return useQuery<Post>({
    queryKey: ["post", postId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      return data;
    },
  });
};