import React from 'react'

export const FooterPage = () => {
  return (
    <footer className='bg-gray-100'>
      <div className='container flex flex-col gap-6 py-8 text-gray-500'>
        <h2 className='text-3xl text-black font-bold'>MoviesApp / <span className='italic text-black font-medium'>by Coding School</span></h2>
        <p>created in 2022 / July</p>
        <p>
          Created with: The OMDb API is a RESTful web service to obtain movie information, all<br />
          content and images on the site are contributed and maintained by out users. More Infos<br />
          on the API you can find here - <a className='underline text-blue-700' href="https://www.omdbapi.com/">https://www.omdbapi.com/</a>
        </p>
      </div>
    </footer>
  )
}
