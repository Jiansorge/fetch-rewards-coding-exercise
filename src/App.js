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
        <UsersContainer users={users}/>
      </main>  
      <footer className="footer">
        <h5>Created by <a href="https://jiansorge.com">Jian Sorge</a> for Fetch Rewards, May 2021</h5>
        <a href="https://github.com/Jiansorge/fetch-rewards-coding-exercise/">Code Repository</a>
      </footer>
    </div>
  );
}

export default App;
