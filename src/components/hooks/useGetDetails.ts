import { useQuery } from '@tanstack/react-query';
import { MovieProps } from '../types/MovieProps';

export const useGetDetails = (imdbID: string) => {
  const fetchMovieDetails = async (imdbID: string) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${imdbID}&apikey=373b961b`
      );
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error(data.Error || 'Failed to fetch movie details.');
      }
    } catch (error) {
      throw new Error('Failed to fetch movie details.');
    }
  };

  return useQuery<MovieProps>(['movie', imdbID], () => fetchMovieDetails(imdbID), {
    enabled: !!imdbID,
  });
};
