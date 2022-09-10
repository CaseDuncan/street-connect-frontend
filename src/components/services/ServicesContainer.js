import React, {useEffect, useState}from 'react'
import Services from './Services'
import Spinner from '../../common/spinner/Spinner'
import { Outlet , Link } from 'react-router-dom'

function ServicesContainer() {

    const[services, setServices]= useState([])
    const[loading, setLoading]= useState(true)

    useEffect(()=>{
        fetch("https://street-connect.herokuapp.com/services")
        .then((response)=>response.json())
        .then((data)=>{
          setLoading(false)
          setServices(data)
        })
    }, [])


    function AddService(newService){
      setServices([...services, newService])
    }

    const serviceList = services.map((service)=>(
      <Services
      key={service.id}
      service_name={service.service_name}
      created_at={service.created_at}
      onAddService={AddService}
      />
    ))

  return (
    <div>
      <div className='container'>
        <Link to="/services/new-service" className='mt-3'>add Service</Link>
        <Outlet/>
      </div>
      <h3>Services Provided</h3>
      { loading? <Spinner/> : 
      <div className='container'>
        <table className='table table-dark'>
      <thead>
        <tr>
          <th>Services</th>
          <th>Date Created</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        
        {serviceList}
        
      
      </tbody>
    </table>
      </div>
      }
    </div>
  )
}

export default ServicesContainer