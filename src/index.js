import React from 'react';
import ReactDOM from 'react-dom/client';
 

import reportWebVitals from './reportWebVitals';
 
import App from './App';
 import Header from './components/Header'
 import Data from './components/Data'
 import Footer from './components/Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App/> */}
     <Header/>
     <Data/>
     <Footer/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
