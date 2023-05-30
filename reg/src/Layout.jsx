import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout( {userData,Logout}) {
  return (
    <div>
    <Navbar Logout={Logout} userData={userData}/>
    <div className='container'>
    <Outlet/> 
    </div> 
     <Footer/> 
    </div>
  )
}
