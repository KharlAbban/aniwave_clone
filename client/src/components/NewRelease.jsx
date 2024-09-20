import React from 'react'

const NewRelease = ({newReleaseAnimes}) => {
  return (
    <div className='w-1/3'>
      <h2 className='text-gray-200 text-2xl mb-2'>New Release</h2>
      {newReleaseAnimes.map((newRelease, idx) => (
        <div className='w-full gap-1 rounded bg-lightBlack flex items-center mb-3' key={newRelease.id}>
          <img src={newRelease.img} className='h-20' alt={newRelease.name} />
          <div className='px-2'>
            <h3 className='text-gray-300'>{newRelease.name}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewRelease