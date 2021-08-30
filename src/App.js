import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/login'
import Home from './components/Home/home'

function App() {

  const [token, setToken] = useState()

  const userLogin = (tok) => {
    setToken(tok);
  }


  return (
    <div className="App">
      <Login userLogin={userLogin}/>
      <Home token={token}/>
    </div>
  );
}
export default App;
