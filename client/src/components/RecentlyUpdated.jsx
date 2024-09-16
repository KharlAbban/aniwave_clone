import React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import SingleAnimeCard from './SingleAnimeCard'

const RecentlyUpdated = ({updatedAnimes}) => {
  return (
    <section className='w-full mt-3'>
      <header className='flex items-center justify-between mb-3'>
        <h2 className='font-semibold text-2xl mb-4 text-gray-200'>Recently Updated</h2>
        {/* Pagination helpers */}
        <nav className='flex items-center gap-2 pr-3'>
          <ul className='list-none flex gap-1'>
            <li className='p-1 hover:text-gray-200 text-gray-400 cursor-pointer'>All</li>
            <li className='p-1 hover:text-gray-200 text-gray-400 cursor-pointer'>Sub</li>
            <li className='p-1 hover:text-gray-200 text-gray-400 cursor-pointer'>Dub</li>
            <li className='p-1 hover:text-gray-200 text-gray-400 cursor-pointer'>Trending</li>
            <li className='p-1 hover:text-gray-200 text-gray-400 cursor-pointer'>Random</li>
          </ul>
          <GrPrevious className='ml-2 text-gray-400 hover:text-gray-200' />
          <GrNext className='text-gray-400 hover:text-gray-200' />
        </nav>
      </header>
      <main>
        <div className="w-full flex flex-wrap">
          {updatedAnimes.map(animeItem => (
            <SingleAnimeCard animeItem={animeItem} key={animeItem.id} />
          ))}
        </div>
      </main>
    </section>
  )
}

export default RecentlyUpdated