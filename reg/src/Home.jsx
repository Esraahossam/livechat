import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {
let [productsList,setProduct]=useState([]);

useEffect(()=>{
getAllProducts()
},[])
 async function getAllProducts(){
    let{data}=await axios.get("https://route-ecommerce.onrender.com/api/v1/products")
    console.log(data.data);
    setProduct(data.data)

  }

  return (
    <div className='row g-3 mt-5 '>
        {productsList.map((product)=>{
          
      return  <div key={product._id} className='col-md-2'>
           <div className='product '>
       <img src={product.imageCover} className='w-100' alt=''/>
       <span className='text-success'>{product.category.name}</span>
       <h2 className='h6 fw-bold'>{product.title.split(" ").slice(0,2).join(" ")}</h2>
       <div className='d-flex justify-content-between'>
       <p>{product.price}EGP</p>
       <div className=''>
       <i className='fa-solid fa-star text-warning'></i>{product.ratingsAverage}
       </div>
       </div>
       </div>
       </div>

        })}
 
 </div>
  )
}

