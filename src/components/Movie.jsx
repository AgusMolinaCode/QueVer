import React,{useState} from 'react'
import {FaHeart, FaRegHeart, FaWindowClose} from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion,doc, updateDoc } from 'firebase/firestore'
import swal from 'sweetalert';
import ReactModal from 'react-modal';


const customStyles = {
  content: {
    top: '53%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0px',
    'border-radius': '20px',
  },
  overlay: {
    'background-color': 'rgba(0, 0, 0, 0.921)'
  }
  
};

ReactModal.setAppElement('#root');

const Movie = ({item}) => {

  const [modal,setModal] = useState(false)
  const [like, setLike] = useState(false)
  const [saved,setSaved] = useState(false)
  const {user} = UserAuth()

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  const movieID = doc(db,'users',`${user?.email}`, )

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.poster_path,
        }),
      });
    } else {
      swal("registrate!", "Registrate para guardar peliculas", "warning");
    }
  };

  return (
  <>  
    <div className='inline-block cursor-pointer w-[305px] relative p-2 '>
        <img className='w-full h-auto block rounded-lg' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
              <p className=' text-sm uppercase font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
              <button onClick={openModal} className='relative justify-center items-center bottom-9 left-1' href=""><span className='p-1 rounded-3xl bg-red-400 text-xl'>Ver Más</span></button>
              <p onClick={saveShow}>
                {like ? <FaHeart className='absolute top-4 left-8 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}</p>
            </div>
    </div>

    {modal && (
      <ReactModal
        isOpen={modal}
        style={customStyles}
        
        
      >
      <div className='flex md:grid w-full lg:grid bg-slate-800'>  
        
        
        
        <div className=' md:w-[310px] lg:hidden'>
          <img className='h-[580px] lg:w-[450px] lg:h-[420px]' width={370} src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt="" />
        </div>

        <div className='xs:w-[318px] '>
          <div className='flex justify-end m-3 xs:justify-center'>
            <button className='transition ease-in-out delay-150	' onClick={closeModal}><FaWindowClose size={'2rem'} className='text-red-600'></FaWindowClose></button>
          </div>
          <h1 className='text-white text-center mt-3 p-2 uppercase text-2xl xs:text-[20px]'>{item?.title}</h1>
          <p className='text-white xs:w-[300px] w-[370px] p-2 ml-auto text-xs  mr-auto text-center flex justify-center'>Titulo original:{item?.original_title}</p>
          <p className='text-white text-center xs:m-2 m-6'>Votacion: <span className='bg-red-800 xs:p-2 p-4 rounded-full'>{item?.vote_average}</span></p>
          <p className='text-white xs:w-[310px] w-[450px] p-1 ml-auto mr-auto text-center flex justify-center xs:hidden'>Votaciones totales: {item?.vote_count}</p>
          <p className='text-white xs:w-[310px] w-[450px] p-1 ml-auto mr-auto text-center flex justify-center xs:text-[12px]'>{item?.overview}</p>
          <p className='text-white xs:w-[310px] w-[450px] p-1 ml-auto mr-auto text-center flex justify-center xs:hidden'>Idioma original: {item?.original_language}</p>
          <p className='text-white xs:w-[310px] w-[450px] p-1 ml-auto mr-auto text-center flex justify-center'>Fecha de lanzamiento: {item?.release_date}</p>
          <p className='flex justify-center items-center uppercase gap-2 text-white' onClick={saveShow}>
                Agregar a mi lista:  <span>{like ? <FaHeart size={'3em'} className=' flex justify-center items-center text-red-700' /> : <FaRegHeart size={'3em'} className='flex justify-center items-center text-red-400'/>}</span>
                
          </p>
        </div>
      </div>  
      </ReactModal>
    )}
    
  </>   
  )
}

export default Movie

