import React, {useEffect, useState}from 'react'
import Services from './Services'
import Spinner from '../../common/spinner/Spinner'


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
      service={service}
      onAddService={AddService}
      />
    ))

  return (
    <div>
      <h3>Services Provided</h3>
      { loading? <Spinner/> : 
      <div className='container'>
        <div className='row'>
        
        {serviceList}
        </div>
      </div>
      }
    </div>
  )
}

export default ServicesContainer