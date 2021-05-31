import React, {useState} from 'react'
import User from './User'

const Users = ({ users }) =>{
  const [isShown, setIsShown] = useState(false);
  return(
    <>
      <h3 onClick={()=>setIsShown(!isShown)}>User List {users[0].listId}</h3>
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
    </>
  )
}


export default Users