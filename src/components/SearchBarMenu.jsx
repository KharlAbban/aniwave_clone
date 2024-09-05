import React, { useState } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { Link, useNavigate } from 'react-router-dom'
import { menu } from '../utils/constants'

const SearchBarMenu = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigateTo = useNavigate();

    const handleSearchSubmit = (Event) => {
        Event.preventDefault();
        if (searchTerm.trim() == "") return;
        navigateTo(`/search/${searchTerm}`);
    }

  return (
    <div className='flex items-center gap-8'>
        <form onSubmit={handleSearchSubmit} className='flex items-center gap-4 bg-primBlack rounded-lg px-4 py-1'>
            <button className='outline-none border-none bg-transparent'><FaMagnifyingGlass size={20} className='text-gray-400 hover:text-white' /></button>
            <input placeholder='Search anime..' type="text" className='placeholder:text-gray-400 py-1 min-w-80 outline-none border-none bg-transparent' value={searchTerm} onChange={(Event) => setSearchTerm(Event.target.value)} />
        </form>
        <div className='flex gap-4'>
            <ul className='list-none flex gap-4'>
                {menu.map(menuitem => (
                    <li key={menuitem.name}>
                        <Link to={menuitem.linkTo} className='flex items-center gap-1 text-gray-300 hover:text-gray-400 duration-100 ease-in-out'>
                            {menuitem.icon}
                            {menuitem.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className='flex bg-gray-800 rounded text-sm gap-2'>
                <p className='h-full bg-gray-600 text-primBlack p-1'>EN</p>
                <p className='p-1 h-full'>JP</p>
            </div>
        </div>
    </div>
  )
}

export default SearchBarMenu