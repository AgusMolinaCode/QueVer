import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className=' w-full h-[400px] object-cover' src="../100.jpg" alt="" /> 
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[420px]'></div>
        <div className=' p-4'>
          <h1 className='text-4xl font-bold uppercase text-center'>Mi Lista</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account