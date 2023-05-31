import React, { useState } from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import axios from "axios"
 import {useNavigate}from "react-router-dom"
//  destruct saveuserdata
export default function Login({saveUserData}) {
  let[errMsg,setErrMsg]=useState("");
  let[loading,setloading]=useState(false);
  let navigate=useNavigate()
  // let baseUrl="https://ecommerce.routemisr.com"
  // let baseUrl="https://sticky-note-fe.vercel.app/signup"
let validate=yup.object({
email:yup.string().required().email("Enter valid email"),
password:yup.string().required().matches(/^[A-Za-z0-9!@#$%&*-_]{3,16}$/,"Enter valid password"),
})

  let formik =useFormik({
    
   initialValues:{
    email:"",
    password:"",
   } ,
   onSubmit:(values)=>{
    // console.log(values);
    sendDataLogin(values)
  },
  validationSchema:validate,
  })
  // save data in api
  async function sendDataLogin(objData){
    // console.log(data);
    setloading(true)
    let myData= await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",objData).catch((error)=>{
    // console.log(error);
      setErrMsg(error.response.data.message);
      setloading(false)
    })
    console.log(myData);
      setloading(false)
   
    if(myData?.data.message=="success"){
      // go to Home
      // data.user
      // using token
localStorage.setItem("token",myData.data.token)
      // callfun
      saveUserData(myData.data.user)
      navigate("/Home")
    }
  }
 
  return (
    <div>
      <h2>Login Now:</h2>
      <form onSubmit={formik.handleSubmit}>
      
       <div className='my-3'>
        <label htmlFor='email'>email</label>
        <input onChange={formik.handleChange} type='email' name='email' id='email' className='form-control'/>
        <p className='text-danger'>{formik.errors.email}</p>
       </div>
       {errMsg!=""?<div className='alert alert-danger'>
        {errMsg} 

         </div>:""}
       

       <div className='my-3'>
        <label htmlFor='password'>password</label>
        <input onChange={formik.handleChange}  type='password' name='password' id='password' className='form-control'/>
        <p className='text-danger'>{formik.errors.password}</p>
       </div>

      
       {loading?<button type='button' className='btn btn-success'>
        <i className='fa-solid fa-spinner fa-spin text-white'></i>
       </button>: <button  disabled={!formik.isValid}type='submit' className='btn btn-success mb-5'>Login</button>}
      </form>
    </div>
  )
}
