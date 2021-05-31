import React, {useEffect, useState} from 'react'
import './App.css';
import UsersContainer from './components/UsersContainer'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then((res)=>res.json())
    .then(setUsers)
    .catch(e=>console.log(e));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fetch Rewards Coding Exercise</h1>
      </header>
      <main>
        <UsersContainer users={users}/>
      </main>  
    </div>
  );
}

export default App;
