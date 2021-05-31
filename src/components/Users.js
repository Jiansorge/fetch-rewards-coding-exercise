import React, {useState} from 'react'
import User from './User'
import '../styles/users.css'

const Users = ({ users }) =>{
  const [isShown, setIsShown] = useState(true);
  return(
    <>
      <h3 onClick={()=>setIsShown(!isShown)}>User List {users[0].listId} Names</h3>
      {
        isShown &&
          <ol className='users'> {
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
          })}
      </ol>

      }
    </>
  )
}


export default Users