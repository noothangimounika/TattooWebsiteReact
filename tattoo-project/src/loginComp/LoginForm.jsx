import React, { useState } from 'react'
import './LoginForm.css'
import { Link } from 'react-router-dom'

const LoginForm = () => {
    const [loginform, setloginform] = useState({
        email: '',
        password: '',
    })


    // const handlechange = (e) => {
    //     const { name, value } = e.target;

    // }

    return (
        <div className='LoginForm-container'>
            <h1>Login</h1>
            <center>
                <form action="" >

                    <input type='email' name='email'  placeholder='enter email' required  /> <br />


                    <input type="password" name='password'placeholder='password'  /> <br />

                    <input type="submit" className='btn btn-primary '   name='Submit' />


                </form>
            </center>

            <center>
          <div className="register-button-div" >
          <p>If you Have not an account?</p>
          <Link to="/register"><button className='btn btn-primary w-5 '>Register</button></Link>
          </div>

        </center>
            

        </div>
    )
}

export default LoginForm