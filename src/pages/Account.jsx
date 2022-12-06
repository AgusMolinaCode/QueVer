import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover' src="../100.jpg" alt="" /> 
        <div className=' p-4'>
          <h1 className='text-4xl font-bold uppercase text-center'>Mi Lista</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account