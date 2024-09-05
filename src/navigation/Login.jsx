import React from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  return (
    <body>
    <div className="contaner">
        <div className="first-content">
            <div className="image">
                <i className="fa-solid fa-r fa-2xl" style={{color:'#d7dadf'}}/>
            </div>
            <h1>Black Matrix</h1> 
            <h4>Technology & Design</h4>
        </div>
    <div className="login-data">
        <div className="logimage"><i className="fa-regular fa-user" style={{color:'#cfcfcf',marginTop:'13px',fontSize:'20px',paddingRight:'30px'}}/>  
        <input type="text" placeholder="Username Email" style={{border:'none', width:'250px'}}/> 
        </div>
    <div className="pass-image logimage"><i className="fa-solid fa-lock" style={{color:'#efeff1',marginTop:'13px',fontSize:'20px',paddingRight:'30px'}}/>
        <input type="password" placeholder="Username Email" style={{border:'none',width:'250px'}}/></div>
        <div className="login-feature"> 
            <input type="checkbox" name="Remember Me!" value="Remember Me!"  />
            <label>  Remember Me!</label>
            <a href='1'>Forget password?</a>
        </div>
        <button onClick= {()=>navigate('/submit')} className='logbtn' style={{marginRight:'20px' }}>LOGIN</button>
    </div> 
    </div>
    
  </body>
 
  )
}

export default Login
 