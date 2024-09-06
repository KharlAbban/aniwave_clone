import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Footer, NavBar } from '../components';
import { FaArrowLeftLong } from 'react-icons/fa6';

const ErrorPage = () => {
    const {message} = useRouteError();
    console.log(message);

  return (
    <>
      <NavBar />
      <div className='min-h-[70vh] w-full flex justify-center items-center flex-col'>
        <img src="/not_found_image.png" alt="Image of Choppa" className='object-contain h-52' />
        <h4 className="text-3xl font-semibold mb-3 text-gray-300 tracking-wide">Error 404</h4>
        {message && <p className='text-gray-300 mb-4'>{message}</p>}
        <Link to="/" className="text-white bg-purple-900 hover:bg-purple-950 duration-100 ease-in-out signin outline-none border-none py-2 px-6 rounded flex items-center justify-center gap-2">
            <FaArrowLeftLong size={20} className='mt-[1px]' />
            <p className='tracking-normal'>Back to home page</p>
        </Link>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage