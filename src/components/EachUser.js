import React from 'react'

function EachUser({handleDeleteUser}) {
    // function updateLikes() {
    //     const addLikes = {
    //       likes: book.likes + 1,
    //     };
    
    //     fetch(`http://localhost:9292/books/${book.id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(addLikes),
    //     })
    //       .then((response) => response.json())
    //       .then(handleUpdateLikes);
    //   }
    
      function deleteUser(id) {
        fetch(`https://street-connect.herokuapp.com/users/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((data) => handleDeleteUser(data));
      }
          const eachUser = users.map((user) => (
        <li className="noBullet" key={user.id}>
          {/* <br /> */}
          <button className="deleteButton" onClick={() => deleteReview(user.id)}>
            ✖{" "}
          </button>
          {user.username}
        </li>
      ));
  return (
    <div>

    </div>
  )
}

export default EachUser