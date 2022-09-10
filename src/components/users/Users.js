import React,{useEffect, useState} from 'react'
import Spinner from '../../common/spinner/Spinner'
import UsersList from './UsersList'


function Users() {

    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://street-connect.herokuapp.com/users")
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
        username={user.username}
        email={user.email}
        image={user.image_url}
        onAddUsers={addUsers}

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