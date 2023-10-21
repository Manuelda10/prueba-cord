"use client"

import {signIn, signOut, useSession} from 'next-auth/react'

export default function ButtonAuth() {
  const {data: session, status} = useSession()

  console.log({session, status})

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Sign out</button>
        <p>Signed in as {session.user?.email}</p>
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}