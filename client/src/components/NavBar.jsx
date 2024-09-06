import { IoMdMenu } from "react-icons/io";
import SearchBarMenu from './SearchBarMenu'
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='z-10 bg-lightBlack py-2 px-4 flex items-center justify-between shadow sticky top-0 w-full'>
        <div className='flex items-center gap-20'>
            <div className="logo flex items-center gap-4">
                <IoMdMenu size={27} className='mt-1' />
                <Link to="/"><img src="/aniwave_logo.png" className='object-contain h-10' alt="AniWave" /></Link>
            </div>
            <SearchBarMenu />
        </div>
        <Link to="/signin" className="text-white bg-purple-900 hover:bg-purple-950 duration-100 ease-in-out signin outline-none border-none py-1 px-4 rounded flex items-center justify-center gap-2">
            <p className='tracking-normal'>Sign in</p>
            <FaArrowRightLong size={15} />
        </Link>
    </nav>
  )
}

export default NavBar