import React from 'react';
import './Task1.css';

 import HamburgerMenu from './HamburgerMenu';
import { Link } from 'react-router-dom';
import About from '../pages/About';
 
const Header=()=>{
    return( 
    <header> 
        <div className="header1">
        <div className='head-logo'></div>
        <div className='head-content'>
          <Link to='/about'>Product</Link>
          {/* <Link href='1'>Solutions</Link>
          <Link href='1'>Resources</Link>
          <Link href='1'>Login</Link> */}
        </div>
        <div className='search-box' style={{marginRight:"20px"}}>
          <input type='search' placeholder='       Search here'></input>
         </div>
         <div className='i'> 
        <HamburgerMenu/>
        </div>
      </div>

      </header>
       
      
    );
}
export default Header;