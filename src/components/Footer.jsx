import React from 'react'

const Footer = () => {
  return (
    <>
        <footer className="footer text-white footer-center p-10 bg-white-200 text-base-content rounded">
        <div>
            <div className="flex justify-center gap-4">
            <a target="_blank" href="https://github.com/AgusMolinaCode"><img className='w-[38px] bg-white rounded-full hover:bg-orange-500 ease-out duration-700' src="/2.png" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/agustin-molina-994635138/"><img className='w-[38px] bg-white rounded-3xl hover:bg-blue-500 ease-out duration-700' src="/3.png" alt="" /></a>
            </div>
        </div> 
        <div className='p-2'>
            <p className='text-white text-center text-md md:text-xs'>Copyright © 2022 - All right reserved by Agustin Molina</p>
        </div>
        </footer>
    </>
    
  )
}

export default Footer

