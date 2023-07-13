import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MovieProps } from '../types/MovieProps';
import * as yup from 'yup';

type SearchFormProps = {
  onSubmit: (data: MovieProps) => void;
};

const schema = yup.object().shape({
  Title: yup.string().required('Search query is required'),
  Type: yup.string().oneOf(['movie', 'series'], 'Type must be either movie or series'),
});

export const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<MovieProps>({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='container flex w-full gap-6'>
      <div className='flex flex-col'>
        <div className='flex flex-col'>
          <label htmlFor="searchQuery" className='py-4 text-lg font-semibold'>
            Name of Movie/Series/Episode
            <span className='text-red-600'> *</span>
          </label>
          <input
            className='rounded-md h-14 pl-4 w-[512px] border-2 border-gray-300'
            placeholder='type here ...'
            id="searchQuery"
            {...register("Title")}
          />
          {errors.Title && <span className='font-bold text-red-600 pt-4'>{errors.Title.message}</span>}
        </div>
        <div className='py-4'>
          <button className='text-white rounded-lg bg-blue-500 py-2 px-4' type="submit">Search</button>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='py-4'>
          <label htmlFor="selecttype" className='text-lg font-semibold'>
            Select type
            <span className='text-red-600'> *</span>
          </label>
        </div>
        <div className='flex gap-2 py-4'>
          <input id="movie" type="radio" value="movie" {...register("Type")} />
          <label className='text-lg font-semibold' htmlFor="movie">Movie</label>
          <input id="series" type="radio" value="series" {...register("Type")} />
          <label className='text-lg font-semibold' htmlFor="series">Series</label>
        </div>
        <div>
          {errors.Type && <span className='font-bold pt-2 text-red-600'>{errors.Type.message}</span>}
        </div>
      </div>
    </form>
  );
};
