import React, { useEffect,useState } from 'react'

const DataModule = () => {


    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/api/designs')
        .then(res=>res.json())
        .then(json=>console.log(json))
    },[])

    const fetchdata=async()=>{
        let response= await  fetch('http://localhost:5000/api/designs')
        let data= await response.json()
        console.log(data)
        // setdata(data)
    }

    useEffect (()=>{
        fetchdata()
    },[])


  return (
    <div className='DataModule'>

    </div>
  )
}

export default DataModule