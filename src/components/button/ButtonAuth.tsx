"use client"

import {signIn, signOut, useSession} from 'next-auth/react'
import Image from 'next/image'
import Loader from '../loader/Loader'

export default function ButtonAuth() {
  const {data: session, status} = useSession()

  const handleSignIn = async () => {
    await signIn('cognito', {callbackUrl: '/documents'})
  }

  const handleSignOut = async () => {
    await signOut({callbackUrl: '/'})
  }

  if (status === 'loading') {
    return <Loader/>
  }

  //<p>{session.user?.name}</p>
  if (session) {
    return (
      <>
        <button className='box-border bg-white rounded-md px-3 py-1 border-solid border-2 border-white font-medium ease-in duration-200 text-blue-500 hover:text-white hover:bg-red-600 hover:border-red-600 mx-2' onClick={handleSignOut}>Salir</button>
      </>
    )
  }
  return (
    <>
      <button className='bg-blue-600 hover:bg-blue-700 text-white w-60 font-semibold py-3.5 px-4 rounded-md flex justify-center m-1 ease-in duration-200' onClick={handleSignIn}>
        <Image className="mr-2" src='/assets/admin-user.svg' alt='Admin login' width={20} height={20} />
        Iniciar sesión
      </button>
    </>
  )
}