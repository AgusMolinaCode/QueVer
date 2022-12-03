import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Movie from './Movie'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowId}) => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios.get(fetchURL)
        .then((response) => {
            setMovies(response.data.results)
        })
  }, [fetchURL])

  const slideLeft = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    let slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }
  
    
  return (
    <>
        <h2 className='text-white font-bold uppercase text-lg p-4'>{title}</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft} className='bg-white absolute left-0 rounded-full opacity-40 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies.map((item,id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </div>
            <MdChevronRight onClick={slideRight} className='bg-white absolute right-0 rounded-full opacity-40 hover:opacity-90 cursor-pointer z-10 hidden group-hover:block' size={40}/>
        </div>
    </>
  )
}

export default Row
