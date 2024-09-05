import { FaCircle } from "react-icons/fa";
import { trendingAnimes } from "../utils/constants"
import SlideShowCard from "./SlideShowCard";
import { useEffect, useState } from "react";

const TrendingAnimeSlideShow = () => {
  const [currSlideIdx, setCurrSlideIdx] = useState("slide0");

  const goToSlide = (slideIdx) => {
    const slideId = `#slide${slideIdx}`;

    setCurrSlideIdx(`slide${slideIdx}`);
    document.querySelector(slideId).scrollIntoView({behavior: "smooth", block: "center", inline: "start"});
  }

  useEffect(() => {
    goToSlide(parseInt(currSlideIdx.slice(5)));
    const interval = setInterval(() => {
      setCurrSlideIdx((prevSlide) => {
        return parseInt(prevSlide.slice(5)) === trendingAnimes.length - 1 ? "slide0": `slide${parseInt(prevSlide.slice(5)) + 1}`
      }
    );
    }, 5000);
    return () => clearInterval(interval);
  }, [currSlideIdx]);

  if (!trendingAnimes) return "Loading...";

  return (
    <div className="w-full min-h-[70vh] bg-gradient-to-b from-primBlack to-lightBlack/40 pt-5 px-2">
      <div className="relative w-full flex flex-col">
        <div className="carousel w-full overflow-x-hidden">
          {trendingAnimes.map((anime, idx) => (
            <SlideShowCard trendingAnime={anime} slideIndex={idx} key={anime.id} />
          ))}
        </div>
        <div className="flex gap-2 ps-6 absolute bottom-2">
          {trendingAnimes.map((anime, idx) => (
            <a key={anime.id} id={idx} onClick={() => goToSlide(idx)} className={`rounded-full text-gray-400 hover:text-primPurple ${idx === parseInt(currSlideIdx.slice(5)) ? 'text-primPurple' : ''}`}><FaCircle size={10} /></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingAnimeSlideShow