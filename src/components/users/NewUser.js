import React, {useState} from 'react'


function NewUser({addUsers}) {
const[newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    user_type: "",
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
    password: newUser.password,
    user_type: newUser.user_type,
    image_url: newUser.image_url,
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
      user_type: "",
      image_url: "",
      phone: "",
    })
  })
  
  .catch((error)=>{
    console.log(error.message)
  })
      }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h5 className='text-center display-4'>Sign Up</h5>
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
                <label htmlFor='user_type'>User Type</label>
                <select name='user_type'className="form-select form-select-lg mb-3 mt-3" aria-label=".form-select-lg example">                
                  <option value={newUser.user_type} onChange={handleChange}>Customer</option>
                </select>
               
                
                <label htmlFor='password'>Password</label>
                <input 
                type='password'
                name='password'
                value={newUser.password}
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