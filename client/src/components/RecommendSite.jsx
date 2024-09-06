import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaFacebook, FaInfo } from 'react-icons/fa6'

const RecommendSite = () => {
  return (
    <article className='w-full mx-2 rounded bg-black text-gray-500 py-3 px-4 max-w-[1100px]'>
      <div className="flex gap-2 items-center">
        <FaInfoCircle />
        <p className="text-xs">If you enjoy the website, please consider sharing it with your friends. Thank you!</p>
      </div>
      <div className='flex gap-2 mt-3'>
        <p className='text-center leading-3 font-semibold text-lg'>667k <br /><span className="text-sm font-normal">shares</span></p>
        <button className='flex items-center gap-4 border-none outline-none bg-blue-700 rounded px-5 py-1 text-gray-50'>
          <FaFacebook />
          92.9k
        </button>
        <button className='flex items-center gap-4 border-none outline-none bg-blue-700 rounded px-5 py-1 text-gray-50'>
          <FaFacebook />
          92.9k
        </button>
        <button className='flex items-center gap-4 border-none outline-none bg-blue-700 rounded px-5 py-1 text-gray-50'>
          <FaFacebook />
          92.9k
        </button>
        <button className='flex items-center gap-4 border-none outline-none bg-blue-700 rounded px-5 py-1 text-gray-50'>
          <FaFacebook />
          92.9k
        </button>
        <button className='flex items-center gap-4 border-none outline-none bg-blue-700 rounded px-5 py-1 text-gray-50'>
          <FaFacebook />
          92.9k
        </button>
        <button className='flex items-center gap-4 border-none outline-none bg-blue-700 rounded px-5 py-1 text-gray-50'>
          <FaFacebook />
          92.9k
        </button>
      </div>
    </article>
  )
}

export default RecommendSite