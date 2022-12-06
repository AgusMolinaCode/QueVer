import axios from 'axios'
import React, {useEffect, useState} from 'react'
import requests from '../Request'

const Main = () => {
  const [movies, setMovies] = useState([])

  const movie = movies[Math.floor(Math.random()* movies.length)]

  useEffect(() => {
    axios.get(requests.requestTrending)
        .then((response) => {
            setMovies(response.data.results)
            console.log(response.data.results);
        })
  },[])

  const truncateString = (str,num) => {
    if (str?.length > num) {
      return str.slice(0,num) + '...'
    } else {
      return str;
    }
  }

  return (
    <div className='w-full h-[720px] md:h-[390px] text-white'>
        <div className='w-full h-full'>
          <div className='absolute w-full h-[720px] md:h-[390px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-fill md:object-center' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
          <div className='absolute w-full top-[20%] p-8 md:p-4'>
            <h1 className='text-5xl md:text-2xl font-bold'>{movie?.title}</h1>
            <p className='mt-5 mb-5'>Calificacion: <span className='p-3 rounded-3xl bg-red-400 text-xl'>{movie?.vote_average}</span></p>
            <p className='text-gray-400 text-sm'>Lanzamiento: {movie?.release_date}</p> 
            <p className='w-full text-gray-200 max-w-sm'>{truncateString(movie?.overview,120)}</p>
          </div> 
        </div>
    </div>
  )
}

export default Main