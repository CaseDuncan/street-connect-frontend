import React,{useState} from 'react'
// import { useNavigate } from 'react-router-dom';

function NewService({onAddService}) {
    // let navigate = useNavigate()

    const[serviceName, setServiceName] = useState('')
    const[submit, setSubmit] = useState(false)

    function handleAddService(e){
        e.preventDefault();
        fetch("http://localhost:9292/services", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                serviceName: serviceName
            })            
        })
        .then((res)=>res.json())
        .then((newService)=>{
            onAddService(newService)
            setServiceName("")
            setSubmit(true)
        })
        

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
                    onChange={(e)=>setServiceName(e.target.value)}
                    />

                </div>
            <input type="submit" value={submit? "Submitting": "Submit"} className="form-control btn btn-success"/>
                </div>
                </form>
                </div>
            </div>
            
        </div>
       
        
        </div>
  )
}

export default NewService