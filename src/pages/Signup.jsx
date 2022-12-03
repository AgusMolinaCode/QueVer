import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user,signUp} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signUp(email,password)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='absolute w-full h-full object-cover' src="../100.jpg" alt="" />
          <div className='bg-black/60 fixed top-0 left-0 pt-4 w-full h-screen rounded-lg'></div>
          <div className='fixed w-full px-4 py-32 z-50'>
              <div className='max-w-[400px] h-[400px] pt-4 mx-auto bg-black/75 rounded-lg text-white'>
                <div className='max-w-[320px] mx-auto py-1 rounded-lg'>
                  <h1 className='uppercase text-3xl font-bold text-center'>Regístrate</h1>
                  <form onSubmit={handleSubmit} className='w-full flex flex-col py-2'>
                    <input onChange={(e) => setEmail(e.target.value)} className='p-2 my-2 bg-gray-500 rounded-md' type="email" placeholder='Email' autoComplete='email' />
                    <input onChange={(e) => setPassword(e.target.value)} className='p-2 my-2 bg-gray-500 rounded-md' type="password" placeholder='Contraseña' />
                    <button className='bg-red-600 py-4 my-6 rounded-md font-bold uppercase'>registrarse</button>
                    <div className='flex justify-between items-center text-gray-500'>
                      <p><input className='mr-2' type="checkbox" />Recuerdame</p>
                      <p>Ayuda?</p>
                    </div>
                    <p className='py-8'><span className='text-gray-600'>Ya tienes cuenta?</span><Link to='/login' className='uppercase'> Ingresar</Link></p>
                  </form>
                </div>
              </div>
            </div>
      </div>
    </>
    
  )
}

export default Signup