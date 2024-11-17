import React from 'react'
// import './Login.css'
import './Register.css'

import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

import { IoLogoFacebook } from "react-icons/io5";

import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";


// import { FcGoogle } from "react-icons/fc";



const Login = () => {
    return (
        <div >


           


            <center className='Login-Container'>

                <form action="" className='form'>

                <h1>Login To Your Account</h1>



                <center>
                <p style={{marginTop:'10px',fontWeight:'500'}}>Login using Socila Networks </p>

                <div className="icons-dic" style={{marginBottom:'10px'}}>


                    <Link to='https://www.google.com/'>
                        <span style={{ fontSize: '35px', fontWeight: '900', color: '#faaac7' }}><FaGoogle /></span>
                    </Link>

                    <Link to='https://www.facebook.com/login.php/'>
                        <span style={{ fontSize: '40px', fontWeight: '900', color: 'blue' }}><IoLogoFacebook /></span>
                    </Link>


                    <Link to='https://www.instagram.com/'>
                        <span style={{ fontSize: '35px', fontWeight: '900', color: 'red' }}><FaInstagramSquare /></span>
                    </Link>

                </div>
                <p style={{fontSize:'20px', fontWeight:'bold'}}>or</p>
            </center>



                   

                    {/* <input type='email' name='email' placeholder='enter email' required /> <br />


                    <input type="password" name='password' placeholder='password' /> <br /> */}

                    <div >

                        <span style={{ fontSize: '22px', fontWeight: '900', color: '#04081e', marginRight: '10px' }}><MdEmail />  </span>
                        <input type="email" name='email' placeholder='Enetr email' required /> <br />

                    </div>


                    <div >

                        <span style={{ fontSize: '22px', fontWeight: '900', color: '#04081e', marginRight: '10px' }}> <FaLock /> </span>
                        <input type="password" name="password" placeholder='Password' required /> <br />

                    </div>

                    <input type="submit" value='Login' id='submit' className='btn btn-primary ' name='Submit' />



                    <div className="register-button-div" >
                        <p>Don't have an account? </p>
                        <Link to="/"><button className='btn btn-primary w-5 '>Sign Up</button></Link>

                    </div>

                    <div className="register-button-div" style={{ marginTop: '-10px' }} >
                        <p>If you forget password</p>
                        <Link to="/forgetpassword"><button className='btn btn-primary w-5 '>Forgotten ?</button></Link>

                    </div>

                </form>


            </center>


        </div>
    )
}

export default Login