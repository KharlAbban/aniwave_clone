import { FaCircle } from "react-icons/fa";
import SlideShowCard from "./SlideShowCard";
import { useEffect, useRef, useState } from "react";

const TrendingAnimeSlideShow = ({trendingAnimes}) => {
  const [currSlideIdx, setCurrSlideIdx] = useState(0);
  const slideIntervalRef = useRef(null);

  const startSlideTimer = () => {
    stopSlideTimer();

    slideIntervalRef.current = setInterval(() => {
      setCurrSlideIdx(prevSlideIdx => {
        return prevSlideIdx === trendingAnimes.length - 1? 0 : prevSlideIdx + 1
      })
    }, 5000);
  }
  const stopSlideTimer = () => {
    if (slideIntervalRef.current) clearInterval(slideIntervalRef.current);
  }
  const goToSlide = (newSlideIndex) => {
    setCurrSlideIdx(newSlideIndex);
    startSlideTimer();
  }

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer;
  }, []);

  if (!trendingAnimes) return "Loading...";

  return (
    <div className="w-full pb-20 bg-gradient-to-b from-primBlack to-lightBlack/5 pt-5 px-2">
      <div className="relative overflow-hidden">

        <div style={{transform: `translatex(-${currSlideIdx * (100 / trendingAnimes.length)}%)`, width: `${trendingAnimes.length * 100}%`}} className="flex transition-transform ease-in-out duration-300">
          {trendingAnimes.map((anime, idx) => (
            <SlideShowCard slidesLength={trendingAnimes?.length} trendingAnime={anime} slideIndex={idx} key={anime.id} />
          ))}
        </div>

        <div className="flex gap-2 ps-6 absolute bottom-2">
          {trendingAnimes.map((anime, idx) => (
            <a key={anime.id} id={idx} onClick={() => goToSlide(idx)} className={`rounded-full text-gray-400 hover:text-primPurple ${idx === currSlideIdx ? 'text-primPurple' : ''}`}><FaCircle size={10} /></a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrendingAnimeSlideShow