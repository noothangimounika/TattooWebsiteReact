// import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import DesginModul from './DesginModule';
import SelectProductById from './SelectProductById';
import Cart from './Cart';
import { Provider } from 'react-redux';

// import Design from './Design';


// import React from 'react'




// import Register from './formComp/Register';
// import Login from './formComp/Login';
// import ForgetPassword from './formComp/ForgetPassword';
// import EmailVerification from './formComp/EmailVerification';
// import { Route, Routes } from 'react-router-dom';



import Testimonials from './loginComp/Testimonials';

// import PortfilioComp from './formComp/PortfilioComp';





const App = () => {
  return (
    <div>
     
     



      {/* <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/forgetpassword' element={< ForgetPassword/>} />
        <Route path='/emailverification' element={<EmailVerification />} />
      </Routes> */}


        {/* <PortfilioComp /> */}
        {/* <Testimonials /> */}

       {/* <Design /> */}



      
        
         <Router>
          <Routes>
          <Route path='/' element={<DesginModul />} />
          <Route path='/selectProduct' element={<SelectProductById />} />
          <Route path="/cart" element={<Cart />} />
          </Routes>
       
       </Router>

     
          

       

     

    </div>
  )
}

export default App