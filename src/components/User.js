import React from 'react'

const User = ({ user })=> {
  return(
    <li className="user">
      <ul>
        <p>{user?.name}</p>
      </ul>
      <br></br>
    </li>
  )
}

export default User