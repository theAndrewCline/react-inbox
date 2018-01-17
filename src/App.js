import React, { Component } from 'react';
import './App.css';

import Messages from './components/Messages'
import Menu from './components/Menu'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentBox: 'Inbox'
    }

    this.switchBox = this.switchBox.bind(this)
  }

  switchBox(e) {
    const box = e.target.innerHTML
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