import React, {useState} from 'react'
import User from './User'

const Users = ({ users }) =>{
  const [isShown, setIsShown] = useState(true);
  console.log("users",users)
  return(
    <ul onClick={()=>setIsShown(!isShown)}
    >
      <h3>User List {users[0].listId}</h3>
      {
        isShown &&
        users.sort(function(a,b){return a.id-b.id})
        .map(user=>{
          return (
            <>
            {
              !!user.name  &&
              <User key={`list-${user.listId}-userId-${user.id}`} user={user}/>
            }
            </>
          )
        })
      }
    </ul>
  )
}


export default Users