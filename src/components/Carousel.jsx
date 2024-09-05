import React, { useState } from 'react'
import { FaCircle } from 'react-icons/fa6'

const Carousel = ({children: trendingAnimes, className}) => {
    const [currSlide, setCurrSlide] = useState(0);
    console.log(trendingAnimes)
    console.log(currSlide)

    const prevSlide = () => {
        setCurrSlide(() => (currSlide === 0 ? trendingAnimes.length -1: currSlide - 1))
    }
    const nextSlide = () => {
        setCurrSlide(() => (currSlide === trendingAnimes.length -1 ? 0: currSlide + 1))
    }
  return (
    <div className={`flex overflow-hidden relative`}>
        <div className="flex flex-1 transition-transform ease-out duration-500" style={{transform: `translateX(-${currSlide*10}%)`}}>
            {trendingAnimes}
        </div>
        <div className="flex gap-2 ps-6 absolute bottom-2">
          {/* <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a>
          <a href="#item1" className="rounded-full text-gray-400 hover:text-primPurple"><FaCircle size={10} /></a> */}
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
        </div>
    </div>
  )
}

export default Carousel