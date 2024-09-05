import React from 'react'
import './Submit.css'
import { Navigate, useNavigate } from 'react-router-dom';
function About() {
    const Navigate = useNavigate();
  return (
   <div className='container'>
     <h1>
        That's About Page 
        <button className='btn' onClick={()=>Navigate("/submit")}>Back</button>
     </h1>
     </div>
  )
}






export default About