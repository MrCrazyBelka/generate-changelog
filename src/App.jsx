import React from 'react';
import logo from './logo.svg';
import {Button, Icon} from 'mortgage-ui-kit';

import './App.css';
import 'mortgage-ui-kit/dist/main.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button title="asjdasd"/>
        <Icon name="login" size="huge"/>
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
}

export default App;
