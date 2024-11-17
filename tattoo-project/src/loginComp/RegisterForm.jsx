import React, { useState } from 'react'
import './RegisterForm.css'
import{Link} from 'react-router-dom'

const RegisterForm = () => {
    const [formdata,setformdata]=useState({
        name:'',
        email:'',
        password:'',
        conform_password:'',
        phone:'',
    })


    const handlechange=(e)=>{
        const{name,value}=e.target;
        console.log(onchange)
        setformdata({
            ...formdata,  //  here ... is spread operator
            [name]:value
        })
    }




    const handlesubmit=async(e)=>{

        e.preventDefault();
        console.log('submit')
        
        try{

            const response= await fetch('http://localhost:5000/api/register',{
                method:'post',
                body:JSON.stringify(formdata),
                headers:{
                    "Content-Type": "application/json"
                },
                mode:'cors'

            })

            const data=await response.json()
            console.log(data)

        }
        catch(err){
            console.log("error is " + err)

        }
    }


  return (
    <div className='RegisterForm-Conatiner'>
        <h1 >Register For Login</h1>

        <center>
        <form onSubmit={handlesubmit} method='post'>
            <input type="text" name='name' placeholder='Enter name' value={formdata.name} required onChange={handlechange} /> <br />
            <input type="email" name='email' placeholder='Enetr email' value={formdata.email} required onChange={handlechange} /> <br />
            <input type="password" name="password" placeholder='Password' value={formdata.password} required onChange={handlechange} /> <br />
            <input type='password' name='conform_password' placeholder='Conform Password' value={formdata.conform_password} required onChange={handlechange} /> <br />
            <input type="number" name='phone' placeholder='Phone No' value={formdata.phone} required onChange={handlechange} /> <br />  

            <input type="submit" value="Register" name='submit  ' className='btn btn-primary'  />

            {/* <button className='btn btn-primary' type='submit'>Register</button> */}

        </form>
        </center>

        <center>
          <div className="login-button-div" >
          <p>Have an account?</p>
          <Link to="/login"><button className='btn btn-primary w-5 '>Login</button></Link>
          </div>

        </center>
       
    </div>
  )
}

export default RegisterForm


