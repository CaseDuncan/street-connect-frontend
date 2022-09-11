import React,{useEffect, useState} from 'react'
import Spinner from '../../common/spinner/Spinner'
import UsersList from './UsersList'


function Users() {

    const[users, setUsers] = useState([])
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch("https://street-connect.herokuapp.com/users")
        // fetch("https://localhost:9292/users")
        .then((res)=>res.json())
        .then((data)=>{
            setLoading(false)
            setUsers(data)
        })
    }, [])

    function addUsers(newUser) {
      const allUsers = [...users, newUser];
      setUsers(allUsers);
    }


    function handleDeleteUser(id) {
      const updatedusers = users.filter((user) => user.id !== id);
      setUsers(updatedusers);
    }
  
    function handleUpdateUser(updatedUserObj) {
      const updatedUser = users.map((user) => {
        if (user.id === updatedUserObj.id) {
          return updatedUserObj;
        } else {
          return user;
        }
      });
      setUsers(updatedUser);
    }

    const userList= users.map((user)=>(
        <UsersList
        key={user.id}
        user={user}
        onAddUsers={addUsers}
        onUpdateUser={handleUpdateUser}
        
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