import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "./Assets/logo.jpg"
export default function Navbar({userData,Logout}) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light mt-5">
  <div className="container">
    <div className='col-3'>
    <span className='rounded-circle'><img src={logo} className='w-25'/></span>
    <Link className="navbar-brand fw-bold" to="/">Ecommerce</Link>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* check if data is exist or null */}
      {userData?<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item fw-bold fs-5 ">
          <NavLink  className={({isActive})=>isActive==true?'nav-link active':'nav-link'} to="Home">Home</NavLink>
        </li>

        <li className="nav-item fw-bold fs-5">
          <NavLink className={({isActive})=>isActive==true?'nav-link active':'nav-link'}  to="LiveChat">LiveChat</NavLink>
        </li>
      </ul> :""}
  

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {userData?   <>
      <li className='nav-item py-3'>
      <i className='fa-brands fa-facebook mx-2'></i>
      <i className='fa-brands fa-twitter mx-2'></i>
      <i className='fa-brands fa-spotify mx-2'></i>
      <i className='fa-brands fa-youtube mx-2'></i>

     </li>
     {/* if userdata contains data  */}
     <li className="nav-item fw-bold fs-5">
          <NavLink  className={({isActive})=>isActive==true?'nav-link active':'nav-link'} to="Profile">Profile</NavLink>
        </li>
        <li className='nav-item fw-bold fs-5'>
          <span className='nav-link' onClick={Logout} >Logout</span>
        </li>
        {/* if not contains */}
      </>: <> 
      <li className="nav-item fw-bold fs-5 ">
          <NavLink  className={({isActive})=>isActive==true?'nav-link active':'nav-link'} to="Login">Login</NavLink>
        </li>
        <li className="nav-item fw-bold fs-5 ">
          <NavLink  className={({isActive})=>isActive==true?'nav-link active':'nav-link'} to="/">Register</NavLink>
        </li>
        </>}
     
        </ul>

    </div>
  </div>
</nav>    
    </div>
  )
 

}
