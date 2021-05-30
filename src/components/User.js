import React from 'react'

const User = (props)=> {
  const user = props.user
  return(
    <li key={user.id}>
      <ul>
        <p>List Id:{user.listId}</p>
        <p>Name: {user.name}</p>
        <p>Id: {user.id}</p>
      </ul>
      <br></br>
    </li>
  )
}

export default User