import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "./usePost";


interface PostsResponse {
  totalCount: number;
  posts: Post[];
}


export const usePosts = (page: number) => {
  return useQuery<PostsResponse>({
    queryKey: ["posts", page],
    queryFn: async () => {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * 10}&_limit=10`);
      
      // Достаем totalCount из заголовков
      const totalCount:number = response.headers['x-total-count'];
      
      // Возвращаем объект с данными и totalCount
      return { totalCount, posts: response.data };
    }
  });
};
