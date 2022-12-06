import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {

  const {user,logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
        
        <Link to='/'>
          <h1 className='text-red-700 text-5xl py-2 font-bold cursor-pointer hover:text-red-500 md:text-3xl uppercase ease-out duration-700'>Qué ver</h1>
        </Link>
        
        {user?.email ? 
        
          <div className='flex md:flex-col md:items-center'>
          
          <Link to='/account'>
            <button className='text-white uppercase py-2 px-2'>Mi Cuenta</button>
          </Link>  

         
          <button onClick={handleLogout} className='bg-red-600 hover:bg-red-500 px-6 py-2 rounded-md cursor-pointer text-white uppercase md:px-4 '>Salir</button>
          
            
          </div> 
          
          :

          <div className='flex md:flex-col md:items-center'>
          
            <Link to='/login'>
              <button className='text-white uppercase py-2 px-2'>Iniciar Sesion</button>
            </Link>  

            <Link to='/signup'>
              <button className='bg-red-700 hover:bg-red-500 px-6 py-2 rounded-md cursor-pointer ease-out duration-700 text-white uppercase md:px-4 '>Registrarse</button>
            </Link>  
  
          </div>
          
          
          }
          
    </div>
  )
}

export default Navbar