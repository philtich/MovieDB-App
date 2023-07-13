import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDetails } from '../hooks/useGetDetails';
import { MovieProps } from '../types/MovieProps';

type MovieDetailProps ={
  Movies: MovieProps [],
}

export const MovieDetails = ({ Movies }: MovieDetailProps) => {
  const { imdbID } = useParams();

  const { data, isError, isLoading, error } = useGetDetails(imdbID);

  if (isLoading) {
    return  <div className='flex justify-center items-center py-12'>
              <h2 className='text-3xl font-semibold'>Loading...</h2>
            </div>
  }

  if (isError && error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  const { Title, Year, Plot, Released, Genre, Type, Poster } = data;

  return (
    <section className='bg-gray-100'>
      <div className='container py-8'>
        <div className='flex flex-col md:flex-row gap-14'>
          <img src={Poster} alt={Title} />
          <div className='flex flex-col gap-6'>
            <h2 className='text-3xl font-bold pt-4'>{Title}</h2>
            <p className='text-base font-medium'>{Year} / {Genre}</p>
          </div>
        </div>

        <div>
          <ul className='flex flex-col gap-4 pt-6 '>
            <li className='flex justify-start items-center border-b-2 border-gray-300 font-bold text-black'>
              <h1 className='w-20'>Title</h1>
              <span className='font-medium'>{Title}</span>
            </li>
            <li className='flex justify-start items-center border-b-2 border-gray-300 font-bold text-black'>
              <h1 className='w-20'>Year</h1>
              <span className='font-medium'>{Year}</span>
            </li>
            <li className='flex justify-start items-center border-b-2 border-gray-300 font-bold text-black'>
              <h1 className='w-20'>Genre</h1> 
              <span className='font-medium text-start'>{Genre}</span>
            </li>
            <li className='flex justify-start items-center text-start border-b-2 border-gray-300 font-bold text-black'>
              <h1 className='w-20'>Plot</h1>
              <span className='font-medium pl-4'>{Plot}</span>
            </li>
            <li className='flex justify-start items-center border-b-2 border-gray-300 font-bold text-black'>
              <h1 className='w-20'>Type</h1>
              <span className='font-medium'>{Type}</span>
            </li>
            <li className='flex justify-start items-center border-b-2 border-gray-300 font-bold text-black'>
              <h1 className='w-20'>Released</h1>
              <span className='font-medium'>{Released}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );

};

export default MovieDetails;
