import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { FaFacebook, FaFacebookMessenger, FaInfo, FaReddit, FaRedditAlien, FaTelegram, FaWhatsapp, FaX } from 'react-icons/fa6'

const RecommendSite = () => {
  return (
    <article className='w-full rounded bg-black text-gray-500 py-3 px-4 mb-3 me-3'>
      <div className="flex gap-2 items-center">
        <FaInfoCircle />
        <p className="text-xs">If you enjoy the website, please consider sharing it with your friends. Thank you!</p>
      </div>
      <div className='flex gap-2 mt-3'>
        <p className='text-center leading-3 font-semibold text-lg'>667k <br /><span className="text-sm font-normal">shares</span></p>
        <button className='text-sm flex items-center gap-4 border-none outline-none bg-blue-600 font-semibold hover:bg-blue-800 rounded px-5 py-1 text-gray-50'>
          <FaFacebook />
          92.9k
        </button>
        <button className='text-sm flex items-center gap-4 border-none outline-none bg-gray-950 hover:bg-gray-900 font-semibold rounded px-5 py-1 text-gray-50'>
          <FaX />
          200k
        </button>
        <button className='text-sm flex items-center gap-4 border-none outline-none bg-blue-500 hover:bg-blue-600 font-semibold rounded px-5 py-1 text-gray-50'>
          <FaFacebookMessenger />
          63k
        </button>
        <button className='text-sm flex items-center gap-4 border-none outline-none bg-red-600 hover:bg-red-700 font-semibold rounded px-5 py-1 text-gray-50'>
          <FaRedditAlien />
          210k
        </button>
        <button className='text-sm flex items-center gap-4 border-none outline-none bg-green-400 hover:bg-green-500 font-semibold rounded px-5 py-1 text-gray-50'>
          <FaWhatsapp />
          66.5k
        </button>
        <button className='flex items-center gap-4 border-none outline-none bg-blue-700 rounded px-10 py-1 text-gray-50'>
          <FaTelegram />
        </button>
      </div>
    </article>
  )
}

export default RecommendSite