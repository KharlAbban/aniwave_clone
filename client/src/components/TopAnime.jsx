// import {FaClosedCaptioning, FaMicrophone} from "react-icons"

const TopAnime = ({topAnime}) => {
  const {day, week, month} = topAnime;

  return (
    <aside className='px-2'>
      <header className="flex items-center justify-between mb-3">
        <h3 className='text-[1.7rem] text-gray-200 font-semibold'>Top anime</h3>
        <div className="join rounded bg-lightBlack">
          <button className="join-item py-1 px-2 text-center text-sm bg-primPurple hover:bg-primPurple/80">Day</button>
          <button className="join-item py-1 px-2 text-center text-sm hover:bg-primPurple/80">Week</button>
          <button className="join-item py-1 px-2 text-center text-sm hover:bg-primPurple/80">Month</button>
        </div>
      </header>
      <div className="content flex flex-col gap-3">
        {day.map((item, idx) => (
          <div className="bg-lightBlack flex items-center rounded border-e-4">
            <span className="inline-grid min-w-12 place-items-center">
              <img src={`/rank${idx+1}.png`} alt={item.id} className='h-12 px-3' />
            </span>
            <img src={item.img} alt={item.rank} className='h-20' />
            <div className="px-2">
              <h2 className="text-gray-400 mb-1 font-semibold">{item.name.length > 50 ? `${item.name.slice(0, 50).trim()}...` : item.name}</h2>
              <div className="h-7 bg-lightBlack text-gray-300 rounded-b w-full flex gap-1 items-center px-1 animeSubInfo">
                <p className='relative px-1 rounded-sm bg-primPurple'>
                    <span className='text-sm font-medium flex gap-1 items-center relative z-10'>
                        {/* <FaClosedCaptioning size={17} /> */}
                        {item.episodes.sub}
                    </span>
                </p>
                <p className='relative ms-1 px-1 rounded-sm'>
                    <span className="relative z-10 text-sm font-medium flex gap-1 items-center">
                        {/* <FaMicrophone size={15} /> */}
                        {item.episodes.sub}
                    </span>
                </p>
                <p className='relative px-1 text-sm rounded-sm'>
                    <span className='relative z-10 text-gray-1 font-medium00'>
                        {item.episodes.eps}
                    </span>
                </p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default TopAnime