import React from 'react';
import './Submit.css'
import { Navigate, useNavigate } from 'react-router-dom';
function Submit() {
    const Navigate = useNavigate();
  return (
     <div className='container'>
        <h3>Form Submitted Successfully</h3>
        <button className='btn' onClick={()=>Navigate("/")}>Ok</button>
        <button className='btn2' onClick={()=>Navigate("/about")}>Next</button>
     </div>
  );
}

export default Submit