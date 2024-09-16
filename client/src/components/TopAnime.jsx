import React from 'react'

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
        {day.map(item => (
          <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        ))}
        {/* <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div>
        <div className="bg-lightBlack rounded border-e-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique?r</div> */}
      </div>
    </aside>
  )
}

export default TopAnime