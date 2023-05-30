import React from 'react'
import x from "../Assets/girl.jpg"
import y from "../Assets/boy.jpg"
import a from "../Assets/one.jpg"
import size from "../Assets/size.jpeg"
import master from "../Assets/master.png"
import "./LiveChat.css"

export default function LiveChat() {
  return (
    <>

<div className='live vh-100'>
<div className='d-flex'>
<div className='sectionfour m-3 border'>
  
   <div className='picc'>
  <img src={x} className='im' alt='girlpic'/>
  <h1>Sara Moria</h1>
  <div> <i className="fa-solid fa-location-dot pt-3"></i>
  <span className='fw-bold m-2'>china</span>
  </div>
  <div>
  <i className="fa-solid fa-phone"></i>
<span className='m-2'>0101895436</span>
  </div>

  <div>
  <i class="fa-solid fa-envelope"></i>
<span className='m-2'>SaraMoria@gmail.com</span>
  </div> 

  <div>
  <i class="fa-brands fa-instagram"></i>
<span className='m-2'>instrgram activity</span>
<img src={x} className='insta d-block' alt="pic" />
  </div>

</div>  
</div>





{/* section one */}
<div className="m-3 ico border text-center ">

<img src={x} className=' img d-block' alt='girlpic'/>
   <i className="fa-regular fa-comment-dots text-dark pt-3 fs-4 d-block"></i>
   <i className="fa-solid fa-user text-dark fs-4 pt-3 d-block"></i>
   <i className="fa-solid fa-users text-dark fs-4 pt-3 d-block"></i>
   <i className="fa-solid fa-message text-dark fs-4 pt-3 d-block"></i>
   <i className="fa-solid fa-gear text-dark fs-4 pt-3 d-block"></i>
</div>


<div className='m-3 ico border'>

<div className='button d-flex '>
 <i class="fa-solid fa-magnifying-glass p-3 fs-4 "></i>
 <p className='fs-5 pt-2'>Search ...</p>
 </div>

<div className='d-flex  align-items-center p-3'>

 <div className='pic'>
 <img src={y} className='img mt-3' alt='boypic'/>
 </div>

 <div>
 <p className='m-3 fw-bold'>Alex judy</p>
 <h3 className='fs-6'>can i ask you a question?...</h3>
 </div>
 </div>

 <div className='d-flex  align-items-center p-3'>

 <div className='pic'>
 <img src={x} className='img mt-3' alt='girlpic'/>
 </div>

 <div>
 <p className='m-3 fw-bold'>Sara Moria</p>
 <h3 className='fs-6'>Amazing work...</h3>
 </div>
 <span className='m-5 new bg-dark text-white text-center'>Now</span>
 </div>

 <div className='d-flex  align-items-center p-3'>

<div className='pic'>
<img src={a} className='img mt-3' alt='boypic'/>
</div>

<div>
<p className='m-3 fw-bold'>joe</p>
 <h3 className='fs-6'>I would like to ask about the price of a piece!</h3>
<h3 className='fs-6'></h3>
</div>
</div>
</div>

<div>
{/* section three */}
<div className='sectionthree m-3 border'>
<div className='d-flex justify-content-between'>

  <div className='mt-5 section'>
  <span className='fw-bold fs-4 spannn'>Sara Moria </span>
  <span className='fw-bold fs-4 m-4'>Online</span>
  </div>

  <div> 
  <i className="fa-solid fa-folder mt-5 "></i>
<i className="fa-solid fa-phone m-4"></i>
<i class="fa-solid fa-video "></i>  
  </div>
</div>

<div >
<img src={x} className='img mt-3' alt='girlpic'/>
<span className='spanone p-2 m-3 '> can i find this size please?</span>
</div>

<div >
<img src={a} className='img mt-3' alt='boypic'/>
<img src={size} className='sizee' alt='pic'/>
<span className='spanone p-2 m-3'>yes,there is a size in this color</span>
</div>

<div>
<img src={x} className='img mt-3' alt='girlpic'/>
<span className='spanone p-2 m-3'>Can i pay with a credit card?</span>
</div>

<div>
<img src={a} className='img mt-3' alt='girlpic'/>
<img src={master} className='master' alt='pic'/>
<span className='spanone p-2 m-3'>Definitely yes,throuh visa or Mastercard</span>
</div>

<div className='bttn mt-5'>
<i class="fa-regular fa-face-smile fs-4 p-3"></i>
<span className='fs-5'>Type a message...</span>
<span><i class="fa-solid fa-paper-plane"></i></span>
</div>
</div>






</div></div></div>
</>
  )}

 









  
