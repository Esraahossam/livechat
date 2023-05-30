import React, { useState } from 'react'
import {useFormik} from "formik"
import * as yup from "yup"
import axios from "axios"
 import {useNavigate}from "react-router-dom"
export default function Register() {
  let[errMsg,setErrMsg]=useState("");
  let[loading,setloading]=useState(false);
  let navigate=useNavigate()
  // let baseUrl="https://ecommerce.routemisr.com"
  // let baseUrl="https://sticky-note-fe.vercel.app/signup"
let validate=yup.object({
name:yup.string().required().min(2,"Name must be minmum 2 letters").max(10,"max char 10"),
email:yup.string().required().email("Enter valid email"),
phone:yup.string().required().matches(/^(010|012|015|011)[0-9]{8}$/,"Enter valid phone number"),
password:yup.string().required().matches(/^[A-Za-z0-9!@#$%&*-_]{3,16}$/,"Enter valid password"),
rePassword:yup.string().required().oneOf([yup.ref("password")],"Repassword not match")
})


  let formik =useFormik({
    
   initialValues:{
   name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
   } ,
   onSubmit:(values)=>{
    // console.log(values);
    sendData(values)
  },
  validationSchema:validate,
  })
  // save data in api
  async function sendData(objData){
    // console.log(data);
    setloading(true)
    let myData= await axios.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",objData).catch((error)=>{
    // console.log(error);
      setErrMsg(error.response.data.message);
      setloading(false)
    })
    console.log(myData);
      setloading(false)
   
    if(myData?.data.message=="success"){
      // go to login
      navigate("/Login")
    }
  }
 

  return (
    <div>
      <h2>Register Now:</h2>
      <form onSubmit={formik.handleSubmit}>
       <div className='my-3'>
        <label htmlFor='name'>name</label>
        <input onChange={formik.handleChange} type='text' name='name' id='name' className='form-control'/>
        <p className='text-danger'>{formik.errors.name}</p>
       </div>
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

       <div className='my-3'>
        <label htmlFor='repassword'>rePassword</label>
        <input onChange={formik.handleChange}  type='rePassword' name='rePassword' id='rePassword' className='form-control'/>
        <p className='text-danger'>{formik.errors.rePassword}</p>
       </div>
       <div className='my-3'>
        <label htmlFor='phone'>phone</label>
        <input  onChange={formik.handleChange} type='telephone' name='phone' id='phone' className='form-control'/>
        <p className='text-danger'>{formik.errors.phone}</p>
       </div>
       {loading?<button type='button' className='btn btn-success'>
        <i className='fa-solid fa-spinner fa-spin text-white'></i>
       </button>: <button  disabled={!formik.isValid}type='submit' className='btn btn-success'>Register</button>}
      </form>
    </div>
  )
}

