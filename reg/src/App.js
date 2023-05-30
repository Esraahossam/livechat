import React, { useEffect, useState } from 'react'
import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from './Layout'
import Register from './Register'
import Login from './Login'
import NotFound from './NotFound'
import Profile from './Profile'
import jwt_decode from "jwt-decode"
import Home from './Home'
import LiveChat from './Live Chat/LiveChat'
export default function App() {

  let [userData,setUserData]=useState(null)



// getdata from localstorage
useEffect(()=>{
  // didmount phase
  if (localStorage.getItem("token")){
    let token = localStorage.getItem("token")
    // console.log(token);

    let myData=jwt_decode(token) 
    // console.log(myData);
    saveUserData(myData)
  }
},[])
function saveUserData(myData){
  setUserData(myData)
}
 function Logout(){
  setUserData(null)
  localStorage.removeItem("token")
  return <Navigate to="/Login"/>
 }

 function ProtectedRouting2(props){
  if (localStorage.getItem("token")!=null){
    return <Navigate to="/Home"/>
  }
  else{
    return props.children
  }
 }
function ProtectRouting(props){
  // console.log(props.children);
if (localStorage.getItem("token")){
  // go to path
return props.children
}
else{
  // go to login
  return <Navigate to="/Login"/>
}
}

let routes=createBrowserRouter([
 {path:"",element:<Layout Logout={Logout} userData={userData}/>,children:[
{path:"Home",element:<ProtectRouting><Home/></ProtectRouting>},
{index:true,element:<ProtectedRouting2><Register/></ProtectedRouting2>},
{path:"Login",element:<Login saveUserData={saveUserData}/>},
{path:"LiveChat",element:<ProtectRouting><LiveChat/></ProtectRouting>},
{path:"Profile",element:<ProtectRouting><Profile userData={userData}/></ProtectRouting>},
{path:"*",element:<Register/>},
 ]}



])


  return (
  <RouterProvider router={routes}/>
  )
}

