import React from 'react'
import './users.css'
import { useNavigate } from 'react-router-dom'

function UsersList({user, handleDeleteUser}) {
  let navigate = useNavigate()

  function deleteUser(id) {
    fetch(`https://street-connect.herokuapp.com/users/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err)=>{
        console.log(err.message)
      })
      navigate('/', {replace: true})
  }

  return (
    <div className='col-md-4'>
      <div className='card shadow mt-3'>
        <div className='card-body'>
          <img src={user.image} alt="user-image"/>
          <h3 className='card-title'>{user.username}</h3>
          <div className='user-info'>
            <p className='card-text'>Email: {user.email}</p>
            <p className='card-text'>Phone:{user.phone}</p>
          </div>
          <div className='actions'>
            <button className='btn btn-success'>Edit</button>
            <button className='btn btn-danger' onClick={()=>deleteUser(user.id)}>Delete</button>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default UsersList