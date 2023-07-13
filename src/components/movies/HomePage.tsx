import React, { useEffect, useState } from 'react';
import { useGetMovies } from '../hooks/useGetMovies';
import { MovieProps } from '../types/MovieProps';
import { SearchForm } from './SearchForm';
import { MoviesList } from './MoviesList';

export const HomePage = () => {
  const [Title, setTitle] = useState('');
  const { data, isError, error, isLoading } = useGetMovies(Title);

  const onSubmit = (data: MovieProps) => {
    setTitle(data.Title);
  };

  useEffect(() => {
    setTitle(Title);
  }, [Title]);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center py-12'>
        <h2 className='text-3xl font-semibold'>Loading...</h2>
      </div>
    );
  }


  if (isError && error) {
    return (
      <div className='flex justify-center items-center py-20 text-3xl font-bold'>
        Error: {error.message}
      </div>
    );
  }

  if (data && data.Response === 'False') {
    return (
      <div className='flex justify-center items-center py-20 text-3xl font-bold'>
        Error: {data.error}
      </div>
    );
  }

  return (
    <div className='bg-gray-100 py-20'>
      <SearchForm onSubmit={onSubmit} />

      <hr className='container border-1 border-gray-500' />

      {data && data.Response === 'True' && data.Search && (
        <MoviesList movies={data.Search} />
      )}

      {!isLoading && !error && data && data.Response === 'True' && data.Search?.length === 0 && (
        <div className='flex justify-center py-14 text-red-600 font-bold text-lg'>No movies found</div>
      )}
    </div>
  );
};
