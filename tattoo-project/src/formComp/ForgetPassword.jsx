import React from 'react'
// import './ForgetPassword.css'
import './Register.css'

import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ForgetPassword = () => {

  return (
    <div>

      <center className='ForgetPassword-Container'>

        <form action="" className='form'>

          <h1>Forget Password</h1>

          <div >

            <span style={{ fontSize: '22px', fontWeight: '900', color: '#04081e', marginRight: '10px' }}><MdEmail />  </span>
            <input type="email" name='email' placeholder='Enetr email' required /> <br />

          </div>


          {/* <div >

            <span style={{ fontSize: '22px', fontWeight: '900', color: '#04081e', marginRight: '10px' }}> <FaLock /> </span>
            <input type="password" name="password" placeholder='Password' required /> <br />

          </div> */}

          <input type="submit" id='submit' className='btn btn-primary ' name='Submit' />



          <div className="register-button-div" >
            <p>Don't have an account? </p>
            <Link to="/"><button className='btn btn-primary w-5 '>Sign Up</button></Link>

          </div>

         

          <div className="login-button-div" style={{ marginTop:'-10px' }}>
            <p >Have an account?</p>
            <Link to="/login"><button className='btn btn-primary w-5 '>Sign In</button></Link>
          </div>



               {/* <div className="register-button-div" style={{ marginTop: '-10px' }} >
            <p>If you forget password</p>
            <Link to="/forget"><button className='btn btn-primary w-5 '>Forgotten ?</button></Link>

          </div> */}


        </form>


      </center>



    </div>
  )
}

export default ForgetPassword