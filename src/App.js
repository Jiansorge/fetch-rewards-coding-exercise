import React, {useEffect, useState} from 'react'
import './styles/app.css';
import UsersContainer from './components/UsersContainer'
import FetchLogo from './logo192.png'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then((res)=>res.json())
    .then(setUsers)
    .catch(e=>console.log(e));
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img src={FetchLogo} alt='Fetch Logo'/>
        <h1>Fetch Rewards Coding Exercise</h1>
      </header>
      <main>
        <h2>Users</h2>
        <UsersContainer users={users}/>
      </main>  
      <footer className="footer">
        <h4>Created by <a href="https://jiansorge.com">Jian Sorge</a> for Fetch Rewards</h4>
        <h4>May 2021</h4>
        <h4><a href="https://github.com/Jiansorge/fetch-rewards-coding-exercise/">Code Repository</a></h4>
      </footer>
    </div>
  );
}

export default App;
