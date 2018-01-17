import React, { Component } from 'react';
import './App.css';

import Messages from './components/Messages'
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
     < Messages box={currentBox}/> 
      </div>
    );
  }
}

export default App;
