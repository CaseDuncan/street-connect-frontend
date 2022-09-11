import React from 'react'
import './services.css'
import { useNavigate } from 'react-router-dom'

function Services({service}) {
  let navigate = useNavigate()

  function deleteService(id){
    fetch(`https://street-connect.herokuapp.com/services/${id}`,{
      method: "DELETE",
      headers: { 
        "Content-Type": "application/json" 
      },
    })
    .then((res)=>res.json())
    .then((data) => console.log(data))
      .catch((err)=>{
        console.log(err.message)
      })
    
      navigate('/', {replace: true})
      
  }
  return (
   <>
   <div className='col-md-4'>
    <div className='card my-3'>
      <div className='card-body'>
        <h5 className='card-text'>{service.service_name}</h5>
      </div>
      <div className='buttons'>
        <button className='btn btn-success mb-3'>Edit</button>
        <button className='btn btn-danger mb-3' onClick={()=>deleteService(service.id)} >Delete</button>
      </div>
    </div>
   </div>
   </>
   
  )
}

export default Services