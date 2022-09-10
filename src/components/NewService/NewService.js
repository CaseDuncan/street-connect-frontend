import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

function NewService({AddService}) {

    let navigate = useNavigate()
  

    const[newService, setNewService] = useState({
        service_name: "",
    })

    const handleChange = (e) =>{
        const name = e.target.name
        const value = e.target.value
        setNewService({...newService, [name]:value})
    }
  

    function handleAddService(e){
        e.preventDefault();
        const addService ={
            service_name: newService.service_name
        }
        fetch("https://street-connect.herokuapp.com/services", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(addService)            
        })
        .then((res)=>res.json())
        .then((AddService)=>{
          
            setNewService({
                service_name: "",
            })
            
        })
        navigate('/services',{replace: true})
        

    }
  return (
    <div>
        <div className='container'>
            <hr/>
            <div className='row'>
                <div className='d-flex justify-content-center '>
                    <form onSubmit={handleAddService}>
                        <h3>Add New Service</h3>
                <div className="row g-3 align-items-center">
                <div className="col-auto">
                <label htmlFor="service_name" className="col-form-label">Service Name</label>
                </div>
                <div className="col-auto">
                    <input type="text" id="service_name" 
                    className="form-control"
                    name='service_name'
                    onChange={handleChange}
                    />

                </div>
                <button type='submit' className='form-control btn btn-success'>Create</button>
                </div>
                </form>
                </div>
            </div>
            
        </div>
       
        
        </div>
  )
}

export default NewService