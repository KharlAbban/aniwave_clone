import React from 'react'
import { FaClosedCaptioning, FaMicrophone, FaPlay } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SingleAnimeCard = ({animeItem}) => {
    const {id, name, img, duration, episodes: {eps, sub, dub}} = animeItem;

  return (
    <div className='relative xl:w-1/6 lg:w-1/5 md:w-1/4 w-1/3 rounded mb-4 px-3'>
        {/* Poster div */}
        <Link to={`/watch/${id}`} className="peer relative rounded overflow-hidden mb-2 group inline-block z-0">
            <div className="absolute top-0 left-0 h-full w-full hidden group-hover:flex justify-center items-center duration-200 bg-black/60">
                <FaPlay size={40} />
            </div>
            <img src={img} alt={name} loading='lazy' className='min-w-full min-h-full' />
            <div className="absolute bottom-0 h-7 bg-lightBlack text-gray-300 rounded-b w-full flex gap-1 items-center px-1 animeSubInfo">
                <p className='relative px-1 rounded-sm bg-primPurple'>
                    <span className='text-sm font-medium flex gap-1 items-center relative z-10'>
                        <FaClosedCaptioning size={17} />
                        {sub}
                    </span>
                </p>
                <p className='relative ms-1 px-1 rounded-sm'>
                    <span className="relative z-10 text-sm font-medium flex gap-1 items-center">
                        <FaMicrophone size={15} />
                        {sub}
                    </span>
                </p>
                <p className='relative px-1 text-sm rounded-sm'>
                    <span className='relative z-10 text-gray-1 font-medium00'>
                        {eps}
                    </span>
                </p>
            </div>

        </Link>

        {/* Tooltip div */}
        <div className="absolute top-1/4 z-[999] left-[90%] hidden hover:block peer-hover:block ps-4">
            <div className="bg-primPurple py-2 px-1">
                {id}
            </div>
        </div>
        
        {/* Anime name */}
        <div className="w-full">
            <Link to={`/watch/${id}`} className='hover:text-purple-400 duration-200 text-[1rem] leading-5'>{name.length > 40 ? `${name.slice(0,40)}...` : name}</Link>
        </div>
    </div>
  )
}

export default SingleAnimeCard


// w-[310px] h-[278px]