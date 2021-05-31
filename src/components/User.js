import React from 'react'

const User = ({ user })=> {
  console.log('user',user)
  return(
    <li>
      <ul>
        <p>List Id: {user?.listId}</p>
        <p>Name: {user?.name}</p>
        <p>Id: {user?.id}</p>
      </ul>
      <br></br>
    </li>
  )
}

export default User