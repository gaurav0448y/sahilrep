import React from 'react';
 
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Login from './navigation/Login';
import Submit from './pages/Submit';
import About from './pages/About';
 

function App() {
     
  return (
 
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/submit' element={<Submit/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    </Router>

  );
}

export default App;
