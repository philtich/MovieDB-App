import React from 'react';
import { MovieProps } from './../types/MovieProps';

type MoviesListProps = {
  movies: MovieProps[];
};

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <section className='container py-2 flex flex-col'>
      <h2 className='text-3xl font-bold py-4'>Result</h2>
      <table className="table-auto">
        <thead>
          <tr className='border-b-2 border-gray-300'>
            <th className='text-start text-gray-500 pb-2'>Title</th>
            <th className='text-start text-gray-500 pb-2'>Year</th>
            <th className='text-start text-gray-500 pb-2'>Type</th>
            <th className='text-start text-gray-500 pb-2'>Detailview</th>
          </tr>
        </thead>
        <tbody>
        {movies && movies.map((movie: MovieProps) => (
          <tr key={movie.imdbID}>
            <td className='py-4 border-b-2 border-gray-300'>{movie.Title}</td>
            <td className='py-4 border-b-2 border-gray-300'>{movie.Year}</td>
            <td className='py-4 border-b-2 border-gray-300'>{movie.Type}</td>
            <td className='py-4 border-b-2 border-gray-300'>
              <a className='py-2 px-4 rounded-md bg-gradient-to-r from-pink-400
              to-orange-400' href={`/movie/${movie.imdbID}`}>
                Show more
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </section>
  );
};
