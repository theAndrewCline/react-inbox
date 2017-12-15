import React, { Component } from 'react';
import './App.css';

import Emails from 'Emails'
import Menu from 'Menu'

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
