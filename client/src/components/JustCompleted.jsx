import React from 'react'

const JustCompleted = ({completedAnimes}) => {
  return (
    <div className='w-1/3'>
      <h2 className='text-gray-200 text-2xl mb-2'>Just Completed</h2>
      {completedAnimes.map((completedAnime, idx) => (
        <div className='w-full gap-1 rounded bg-lightBlack flex items-center mb-3' key={completedAnime.id}>
          <img src={completedAnime.img} className='h-20' alt={completedAnime.name} />
          <div className='px-2'>
            <h3 className='text-gray-300'>{completedAnime.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default JustCompleted