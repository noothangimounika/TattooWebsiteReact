import React, { useEffect, useState } from 'react'

const TattooStyles = () => {

    const [data,setdata]=useState([])


    useEffect(()=>{
        fetch('http://localhost:3000/api/designs')
        .then(res=>res.json())
        .then(json=>console.log(json))
    },[])

    const fetchdata=async()=>{
        let response= await  fetch('http://localhost:3000/api/designs')
        let data= await response.json()
        console.log(data)
        setdata(data)
    }

    useEffect (()=>{
        fetchdata()
    },[])

  return (
    
    <div className='TattooStyles-Conatiner'>

    </div>
  )
}

export default TattooStyles