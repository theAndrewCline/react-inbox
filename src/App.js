import React, { Component } from 'react';
import './App.css';

import Emails from './components/Emails'
import Menu from './components/Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
     < Menu />
     < Emails /> 
      </div>
    );
  }
}

export default App;
