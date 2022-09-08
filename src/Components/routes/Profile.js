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
      <div>
      <h1>Welcome, {user.name}!</h1>
      <img alt={user.name} src={user.picture ? user.picture: noPic}/>
      <h3>Email: {user.email}</h3>
      </div>
      <Footer/>
    </>
  )
}
