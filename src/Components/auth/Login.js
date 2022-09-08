import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap'

export default function Login() {

  const { loginWithRedirect } = useAuth0()

  return (
    <div style={{padding:'5vh 5vw', textAlign:'center'}}>
      <h1 style={{fontFamily:"'Niconne', cursive", padding:'2rem'}}>Welcome to Can of Books by Stormy</h1>
      <h2>Please Login to View Your Books!</h2>
      <Button variant='dark' onClick={()=>loginWithRedirect()}>Login</Button>
    </div>
  )
}
