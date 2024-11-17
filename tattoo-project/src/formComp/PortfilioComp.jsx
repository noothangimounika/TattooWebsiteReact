import React from 'react'
import './PortfilioComp.css'
import {Link} from 'react-router-dom'


const PortfilioComp = () => {
  return (
    <div className='PortfilioComp-Conatiner'>
      
        {/* <img src="/assets/tattooporfilioimg.jpg" alt="" /> */}

        <div className="img0container">
        <img src="/assets/portfiloimg.png" alt="" />
        </div>

        <div className="text-container">
            <h1>Take a look at <br /> our tattoo <br /> portfolio</h1>
            <p>
            Magna nisl egestas amet netus lectus malesuada diam et <br /> 
            ullamcorper et in urna maecenas praesent ut vitae tempus <br />
             sollicitudin pharetra ipsum molestie urna scelerisque
            </p>
            <Link to=''>
            <button>Browse portfolio</button>
            </Link>

        </div>
    </div>
  )
}

export default PortfilioComp