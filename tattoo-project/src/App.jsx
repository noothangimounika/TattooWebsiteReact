import './App.css';


import React from 'react'
import PortfilioComp from './formComp/PortfilioComp';
import ArtistesComp from './formComp/ArtistesComp';


// import Register from './formComp/Register';
// import Login from './formComp/Login';
// import ForgetPassword from './formComp/ForgetPassword';
// import EmailVerification from './formComp/EmailVerification';
// import { Route, Routes } from 'react-router-dom';


// import EmailValidationForm from './loginComp/EmailValidationForm';
// import RegisterForm from './loginComp/RegisterForm';
// import LoginForm from './loginComp/LoginForm';
import Testimonials from './loginComp/Testimonials';




const App = () => {
  return (
    <div>
      <Testimonials />
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <EmailValidationForm /> */}

      {/* <Register />
      <Login /> */}
      {/* <ForgetPassword />
      <EmailVerification /> */}

      {/* <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/forgetpassword' element={< ForgetPassword/>} />
        <Route path='/emailverification' element={<EmailVerification />} />
      </Routes> */}

        {/* <PortfilioComp /> */}
        {/* <ArtistesComp /> */}
      

     

    </div>
  )
}

export default App