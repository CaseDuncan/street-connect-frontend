import React, { useState } from "react";

function EditMessage({ id, username, onUpdateUser }) {
  const [messageBody, setMessageBody] = useState(body);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`https://street-connect.herokuapp.com/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: messageBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedUser) => onUpdateUser(updatedUser));
  }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h5 className='text-center display-4'>New User</h5>
            <form method='POST' onSubmit={handleFormSubmit}>
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
  );
}

export default EditMessage;
