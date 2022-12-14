import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function NewUser({addUsers}) {
  let navigate = useNavigate()
const[newUser, setNewUser] = useState({
    username: "",
    email: "",
    image_url: "",
    phone: "",
})

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setNewUser({ ...newUser, [name]: value });
};
        
function handleSubmit(e){
  e.preventDefault();
  const addNewUser = {
    username: newUser.username,
    email: newUser.email,
    phone: newUser.phone,

  };
  fetch("https://street-connect.herokuapp.com/users",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addNewUser),
  })
  .then((response)=>response.json())
  .then((addUsers)=>{
    setNewUser({
      username: "",
      email: "",
      password: "",
      image_url: "",
      phone: "",
    })
  })
  navigate('/users', {replace:true})
  }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h5 className='text-center display-4'>New User</h5>
            <form method='POST' onSubmit={handleSubmit}>
                <label htmlFor='username'>Name</label>
                <input type='text'
                name='username'
                value={newUser.username}
                onChange={handleChange}
                className='form-control'
                required
                />

               <label htmlFor='email'>Email</label>
                <input type='email'
                name='email'
                value={newUser.email}
                onChange={handleChange}
                className='form-control'
                required
                />

                <label htmlFor='phone'>Phone</label>
                <input type='text'
                name='phone'
                value={newUser.phone}
                onChange={handleChange}
                className='form-control'
                required
                />

                <label htmlFor='phone'>Image url</label>
                <input type='text'
                name='image_url'
                value={newUser.image_url}
                onChange={handleChange}
                className='form-control'
                required
                />
                
                <button type='submit' className='form-control btn btn-outline-dark my-3'>submit</button>
            </form>
            </div>
        </div>


    </div>
  )
}

export default NewUser