import React, { Component } from 'react';
import './App.css';

import Emails from './components/Emails.jsx'
import Menu from './components/Menu'

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentBox: 'inbox'
    }

    this.switchBox = this.switchBox.bind(this)
  }

  switchBox(e) {
    const box = e.target.dataset.box
    this.setState(prev => {
      return {currentBox: box}
    })
  }  

  render() {
    const {currentBox} = this.state; 

    return (
      <div className="App">
     < Menu switchBox={this.switchBox}/>
     < Emails box={currentBox}/> 
      </div>
    );
  }
}

export default App;
