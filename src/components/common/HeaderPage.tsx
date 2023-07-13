import React from 'react'

export const HeaderPage = () => {
  return (
    <nav className='flex items-center bg-gray-100
    border-b-2 h-20 text-3xl font-bold'>
      <div className='container flex items-center'>
        <img src="../../../public/videoIcon.svg" alt="Camera" className='w-12 h-12' />
        <a href='/'>MoviesApp</a>
      </div>
    </nav>
  )
}
