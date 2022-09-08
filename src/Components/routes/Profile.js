import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import noPic from '../twitter-no-profile.jpg'

import Header from "./Header";
import Footer from "../Footer";

export default function Profile() {
  const { user, isLoading } = useAuth0()

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
    <>
      <Header/>
      <>
      <h1 style={{textAlign:'center'}}>Welcome, {user.given_name}!</h1>
      <div style={{display:'flex', justifyContent:'flex-start', alignItems:'center', gap:'2rem', marginLeft:'5vw'}}>
      <img style={{borderRadius:'10%', width:'10rem', height:'10rem'}} alt={user.name} src={user.picture ? user.picture: noPic}/>
      <div>
        <h3>Name: {user.name}</h3>
        <h3>Email: {user.email}</h3>
      </div>
      </div>
      </>
      <Footer/>
    </>
  )
}
