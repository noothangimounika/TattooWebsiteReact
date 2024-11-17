import React from 'react'
import './Register.css'


// import { VscAccount } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import { RiRotateLockFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";

const Register = () => {
  return (
    <div className=''>

            

        <center className='Register-Container'>

        

            <form className='form' action="" method=''>

            <h1>Register</h1>
           
            <div >
                 
                <span style={{fontSize:'24px',fontWeight:'900',color:'#04081e',marginRight:'10px'}}><IoMdContact />  </span>                    
                <input type="text" name='name' placeholder='Enter name' style={{marginTop:'15px'}} required /> <br />

            </div>


            <div >
                 
                 <span style={{fontSize:'22px',fontWeight:'900',color:'#04081e',marginRight:'10px'}}><MdEmail />  </span>                    
                 <input type="email" name='email' placeholder='Enetr email' required /> <br />
 
             </div>


             <div >
                 
                 <span style={{fontSize:'22px',fontWeight:'900',color:'#04081e',marginRight:'10px'}}> <FaLock /> </span>                    
                 <input type="password" name="password" placeholder='Password' required /> <br />
 
             </div>


             <div >
                 
                 <span style={{fontSize:'27px',fontWeight:'900',color:'#04081e',marginRight:'10px'}}> <RiRotateLockFill /> </span>                    
                 <input type='password' name='conform_password' placeholder='Conform Password'required  /> <br />
 
             </div>


             <div >
                 
                 <span style={{fontSize:'22px',fontWeight:'900',color:'#04081e',marginRight:'10px'}}> <FaPhone /> </span>                    
                 <input type="number" name='phone' placeholder='Phone No' required  /> <br />
 
             </div>
                        

            <Link to='/login'>
            <input type="submit" value="Register" name='submit' id='submit' className='btn btn-primary'  />
            </Link>


            <div className="login-button-div" >
          <p>Have an account?</p>
          <Link to="/login"><button className='btn btn-primary w-5 '>Login</button></Link>
          </div>

            </form>
        </center>

        <center>
       
        </center>
       
    </div>
  )
}

export default Register