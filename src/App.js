import React, {useEffect, useState} from 'react'
import './App.css';
import Users from './components/Users'

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
      <body>
        <Users users={users}/>
      </body>  
    </div>
  );
}

export default App;
