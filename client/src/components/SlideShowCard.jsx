import { FaMicrophone, FaPlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SlideShowCard = ({trendingAnime, slidesLength}) => {
    const {name, id, img, quality, category, releasedDay, description} = trendingAnime;

  return (
    <div className="w-full flex justify-between flex-shrink-0" style={{width: `${100/slidesLength}%`}}>
        <div className="w-full h-full flex flex-col justify-center px-5">
        <h1 className="font-semibold text-5xl mb-4">{name.length > 55 ? `${name.slice(0,55)}...` : name}</h1>
        <div className="flex items-center gap-2 my-1">
            <p className="border border-gray-400 text-gray-400 rounded px-1 text-sm font-semibold">PG 13</p>
            <p className="px-1 bg-gray-400 font-bold text-primBlack rounded text-sm">{quality}</p>
            <p className="px-1 bg-gray-400 font-bold text-primBlack rounded text-sm">{category}</p>
            <p className="px-1 bg-gray-400 font-bold text-primBlack rounded text-sm">CC</p>
            <FaMicrophone size={20} className="text-gray-300" />
            <p className="text-lg text-gray-300">{releasedDay}</p>
        </div>
        <p className="text-gray-400 tracking-wide w-11/12 my-1">{description.slice(0,155)}...</p>
        <Link to={`/watch/${id}`} className="flex items-center gap-2 outline-none border-none bg-primPurple hover:bg-purple-950 duration-100 ease-in-out shadow w-fit px-8 py-3 rounded mt-4">
            <FaPlay size={25} />
            <p className="font-semibold text-xl">PLAY NOW</p>
        </Link>
        </div>
          <img
              src={img}
              loading="lazy"
              className="skeleton min-w-[910px] max-h-[420px] object-cover rounded-2xl" />
    </div>
  )
}

export default SlideShowCard