import React from 'react'
import User from './User'

const Users = (props) =>{
  let currentListId = 0
  return(
    <ol>
      <h2>Users</h2>
      {
        props.users.sort(function(a,b){
          let m1=a.listId,
              m2=b.listId,
              n1=a.id,
              n2=b.id;
          return m1<m2 ? -1 : m1>m2 ? 1 :
                 n1<n2 ? -1 : n1>n2 ? 1 : 0;
        })
        .map(user=>{
          return (
            <>
            {
             
              !!user.name  &&
              <User user={user}/>
            }
            </>
            )
        })
      }
    </ol>
  )
}

export default Users