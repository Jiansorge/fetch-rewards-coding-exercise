import React  from 'react'
import Users from './Users'

const UsersContainer = ({ users }) =>{
  const groupedUsersByListId = arrayGroupByProperty(users, 'listId')
  return(
    <section className='users-container'>
      <h2>Users</h2>
      {
        Object.entries(groupedUsersByListId)
        .sort(function(a,b){
          return a[0]-b[0]
        })
        .map(groupTuple=> {
          return (
            <ul className="users-group" key={`userGroup-${groupTuple[0]}`}>
              <Users users={groupTuple[1]}/>
            </ul>
        )})

      }
    </section>
  )
}

const arrayGroupByProperty = function(data, key) { // `data` is an array of objects, `key` is the key (or property accessor) to group by
  // reduce runs this anonymous function on each element of `data` (the `item` parameter,
  // returning the `storage` parameter at the end
  return data.reduce(function(storage, item) {
    // get the first instance of the key by which we're grouping
    var group = item[key];
    
    // set `storage` for this instance of group to the outer scope (if not empty) or initialize it
    storage[group] = storage[group] || [];
    
    // add this item to its group within `storage`
    storage[group].push(item);
    
    // return the updated storage to the reduce function, which will then loop through the next 
    return storage; 
  }, {}); // {} is the initial value of the storage
};

export default UsersContainer

