import React from 'react'
import { aToZList, footerMenu } from '../utils/constants'
import { Link } from 'react-router-dom'
import { FaDiscord } from 'react-icons/fa'
import { GrReddit } from 'react-icons/gr'

const Footer = () => {
  const {first, second} = footerMenu;

  return (
    <footer id='layout-footer' className='mt-8 min-h-[60vh] w-full px-6 pt-20 pb-32'>
      <h2 className='text-2xl font-semibold'>A-Z List <span className="ml-2 font-normal text-sm text-gray-400">Searching anime order by alphabet name A to Z.</span></h2>
      <div className="flex items-center gap-2 mt-4">
        {aToZList.map(listItem => (
          <Link to={`/az-list/${listItem}`} className='font-semibold text-sm py-1 px-3 rounded bg-gray-500 hover:bg-primPurple duration-100 ease-in-out' key={listItem} >{listItem}</Link>
        ))}
      </div>
      <div className="mt-12 flex items-center gap-6">
        <img src="/aniwave_logo.png" alt="AniWave" className='object-contain h-12' />
        <div className="rounded-full px-6 py-2 flex items-center gap-4 bg-white text-primBlack">
          Join now
          <span className="flex gap-4">
            <GrReddit size={23} className='hover:text-lightRed' />
            <FaDiscord size={23} className='hover:text-primPurple' />
          </span>
        </div>
      </div>
      <div className='mt-4'>
        {first.map(menuItem => (
          <Link to={`/${menuItem.toLowerCase()}`} className='text-gray-300 font-semibold text-sm py-1 pr-3 rounded hover:text-primPurple duration-100 ease-in-out' key={menuItem}>{menuItem}</Link>
        ))}
      </div>
      <div className='mt-2'>
        {second.map(menuItem => (
          <Link to="/" className='text-gray-300 font-semibold text-sm py-1 pr-3 rounded hover:text-primPurple duration-100 ease-in-out' key={menuItem}>{menuItem}</Link>
        ))}
      </div>
      <p className="text-gray-300 mt-4">Copyright &copy; aniwave.to. All Rights Reserved</p>
      <p className='text-sm mt-2 text-gray-400'>This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
    </footer>
  )
}

export default Footer