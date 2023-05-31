import React from 'react'
import x from "../Assets/girl.jpg"
import y from "../Assets/boy.jpg"
import size from "../Assets/size.jpeg"
import "./LiveChat.css"
export default function LiveChat() {
  return (
    <>
    <div className='d-flex justify-content-center'>
    <div className="card m-5 p-2" style={{width: "25rem",height:"30rem"}}>
    <div className='d-flex head'>
    <img src={y} className="card-img-top rounded-circle p-2" alt="..."/>
    <p className='p-4 fw-bold'>Chat with Alex</p> 
    <i className="fa-solid fa-ellipsis-vertical pt-4 "></i>
    <i class="fa-solid fa-chevron-down p-4"></i>
    </div>
    
  
  <div className="card-body">
    {/* <h5 className="card-title">Card title</h5> */}
    <p className="card-text p-2">Hey,l have a few questions regarding my order</p>
    <p className="card-texttwo ms-auto">We apologize but all our customer support agents are engaged at the moment An agent will be with you shortly.Thank you for your patience.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item  fw-bold">Enter your message...</li>
    <li className="list-group-item"><i className="fa-solid fa-paperclip pe-3"></i>
    <i className="fa-regular fa-face-smile pe-3"></i>
    <i class="fa-solid fa-paper-plane"></i>
    </li>
    <li className="list-group-item">
    <i class="fa-solid fa-plus fs-5 p-2 pink"></i>    
  <button className='btun'></button>
  <i class="fa-solid fa-camera p-2 pink fs-5"></i>
  <i class="fa-solid fa-microphone p-2 pink fs-5"></i>
    </li>   
  </ul>
</div>

{/* cardtwo */}
<div className="card m-5 p-2" style={{width: "25rem",height:"30rem"}}>
    <div className='d-flex head'>
    <img src={x} className="card-img-top rounded-circle p-2" alt="..."/>
    <p className='p-4 fw-bold'>Chat with Maria</p> 
    <i className="fa-solid fa-ellipsis-vertical pt-4 "></i>
    <i class="fa-solid fa-chevron-down p-4"></i>
    </div>
    
  
  <div className="card-body">
    {/* <h5 className="card-title">Card title</h5> */}
    <p className="card-text p-2">i have issues with my order  ,this is not the color that was chosen</p>
    <img src={size} className="w-25 m-2"alt="pic" />
    {/* <p className="card-texttwo ms-auto"></p> */}
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item  fw-bold">Enter your message...</li>
    <li className="list-group-item"><i className="fa-solid fa-paperclip pe-3"></i>
    <i className="fa-regular fa-face-smile pe-3"></i>
    <i class="fa-solid fa-paper-plane"></i>
    </li>
    <li className="list-group-item">
    <i class="fa-solid fa-plus fs-5 p-2 pink"></i>    
  <button className='btun'></button>
  <i class="fa-solid fa-camera p-2 pink fs-5"></i>
  <i class="fa-solid fa-microphone p-2 pink fs-5"></i>
    </li>   
  </ul>
</div>
{/* section three */}
<div className='online '>
<div>
<img src={x} className='png w-25 rounded-circle p-3' alt='pic'/>
<span className='spannn p-3'>Online</span>   
</div>

<div className='two'>
<img src={x} className='png w-25 rounded-circle p-3' alt='pic'/>
<span className='spantwo p-3'>Online</span>   
</div>
<div className='two'>
<img src={x} className='png w-25 rounded-circle p-3' alt='pic'/>
<span className='spantwo p-3'>Online</span>   
</div>
<div className='two'>
<img src={x} className='png w-25 rounded-circle p-3' alt='pic'/>
<span className='spantwo p-3'>Online</span>   
</div>
<div className='two'>
<img src={x} className='png w-25 rounded-circle p-3' alt='pic'/>
<span className='spantwo p-3'>Online</span>   
</div>
</div>
    
 
</div>

    </>
  )
}
