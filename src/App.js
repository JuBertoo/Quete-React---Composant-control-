import React, { Component } from 'react';
import logo from './Mail.png';
import './App.css';
import SignUp from './SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SignUp/>
        </header>
        
      </div>
    );
  }
}

export default App;
