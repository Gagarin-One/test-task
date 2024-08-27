import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { Post } from "./usePost";

export const useSearchPosts = (query: string) => {

  return useQuery<Post[]>({
    queryKey:['searchPosts', query],
    queryFn: async () => {
      if (!query) return []

      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${query}`)

      return data 
    },
    enabled: !!query, // Запрос выполняется только если query не пустой
  }
  );
};
