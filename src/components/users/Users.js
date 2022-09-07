import React,{useEffect, useState} from 'react'
import Spinner from '../../common/spinner/Spinner'
import UsersList from './UsersList'
import { Link } from 'react-router-dom'




function Users() {

    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("http://localhost:9292/users")
        .then((res)=>res.json())
        .then((data)=>{
            setLoading(false)
            setUsers(data)
        })
    }, [])

    function addUsers(newUser) {
      const allUsers = [newUser, ...users];
      setUsers(allUsers);
    }

    const userList= users.map((user)=>(
        <UsersList
        key={user.id}
        name={user.username}
        email={user.email}

        />
    ))
  return (
    <div className='container'>
      <h5>Available Service Providers</h5>
      <div className='row'>
    
      {
        loading ? <Spinner/> : userList
      }

      </div>

    </div>
  )
}

export default Users