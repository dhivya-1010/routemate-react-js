import React from 'react'
import { useNavigate,Outlet } from 'react-router-dom'

export default function Contact() {
  const navigate=useNavigate();
  const handleSubmit=()=>{
    console.log("...........");
    return navigate("/products");
  }

  return (
    <main>
    <div className='component' >Contact</div>
    <button onClick={handleSubmit} >back to home</button>
    <Outlet/>
    </main>
  )
}
