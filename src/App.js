import React, { Component } from 'react';
import './App.css';

import Messages from './components/Messages'
import Menu from './components/Menu'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      currentBox: 'Inbox',
      tags: ['Inbox' , 'Junk']
    }

    this.switchBox = this.switchBox.bind(this)
    this.addTag = this.addTag.bind(this)
  }

  switchBox(e) {
    const box = e.target.innerHTML
    this.setState(prev => {
      return {currentBox: box}
    })
  }  

    addTag(event) {
// tag just needs to be a string
        const tag = event.target.parentElement.children[0].value 
        const newTags = [...this.state.tags]
        newTags.push(tag)
        this.setState(prev => ({
            tags: newTags
        }))
        event.target.parentElement.children[0].value = ""
      }

  render() {
    const {currentBox} = this.state; 
    const {tags} = this.state

    return (
      <div className="App">
        < Menu switchBox={this.switchBox} addTag={this.addTag} tags={tags}/>
        < Messages box={currentBox} tags={tags}/> 
      </div>
    );
  }
}