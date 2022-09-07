import React from 'react'
import { Link } from 'react-router-dom'
import './users.css'

function UsersList({username, email, phone, service}) {
  return (
    <div className='col-md-4'>
      <div className='card shadow mt-3'>
        <div className='card-body'>
          <h3 className='card-title'>{username}</h3>
          <div className='user-info'>
          <p className='card-text'>Service: CCTV Installation</p>
            <p className='card-text'>Email: {email}</p>
            <p className='card-text'>0729078909</p>
          </div>
          <Link to="/">view</Link>
        </div>
      </div>
    </div>
  )
}

export default UsersList