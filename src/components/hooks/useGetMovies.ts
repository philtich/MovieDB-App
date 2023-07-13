import { useQuery } from '@tanstack/react-query';
import { MovieProps } from '../types/MovieProps';

export const useGetMovies = (Title: string) => {
  return useQuery<MovieProps[]>({
    queryKey: ["Movies", Title],
    queryFn: async() => {
        if (Title !== ""){
        const response = await fetch(
          `http://www.omdbapi.com/?&apikey=373b961b&s=${Title}`
        );
        const data = await response.json();
        
        console.log(data);
        return data;
      } 
      else 
      {
        return [];
      }  
    },
  })
};
