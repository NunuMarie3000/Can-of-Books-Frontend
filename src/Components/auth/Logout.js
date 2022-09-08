import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap'

export default function Login() {

  const { logout } = useAuth0()

  return (
    <div style={{display:'flex', justifyContent:'flex-end'}}>
      <Button variant='dark' onClick={()=>logout({ returnTo: window.location.origin })}>Logout</Button>
    </div>
  )
}