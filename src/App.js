import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FHelloComponent from './components/FHelloComponent';
import FInputComponent from './components/FInputComponent';

const App = () => {
  const [name, setName] = useState('Daniel');

  const changeName = (event) => {
    setName(event.target.value);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FHelloComponent nombre={name}></FHelloComponent>
        <FInputComponent nombre={name} cambiarNombre={changeName}></FInputComponent>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
