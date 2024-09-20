import React from 'react'

const NewAdded = ({newAnimes}) => {
  return (
    <div className='w-1/3'>
      <h2 className='text-gray-200 text-2xl mb-2'>Newly Added</h2>
      {newAnimes.map((newAnime, idx) => (
        <div className='w-full gap-1 rounded bg-lightBlack flex items-center mb-3' key={newAnime.id}>
          <img src={newAnime.img} className='h-20' alt={newAnime.name} />
          <div className='px-2'>
            <h3 className='text-gray-300'>{newAnime.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewAdded