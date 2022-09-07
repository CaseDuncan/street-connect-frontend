import React, {useState} from 'react'


function NewUser({addUser}) {
const[newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: ""
})

const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;
  setNewUser({ ...newUser, [name]: value });
};
        
function handleSubmit(e){
  e.preventDefault();
  const addNewUser = {
    name: newUser.name,
    email: newUser.email,
    password: newUser.password,
  };
  fetch("http://localhost:9292/users",{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(addNewUser),
  })
  .then((response)=>response.json())
  .then(addUser)
  setNewUser({
          name: "",
          email: "",
          password: "",
        });
}

     

      

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h5 className='text-center display-4'>Sign Up</h5>
            <form method='POST' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text'
                name='name'
                value={newUser.name}
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
                
                <label htmlFor='password'>Password</label>
                <input type='text'
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