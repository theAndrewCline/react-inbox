import React, {Component} from 'react';

import Tag from './Menu/Tag'

export default class Menu extends Component {
    constructor(props) {
        super()

        this.state = {
            tags: [
                    {name:'Main Inbox', box:'inbox'}, 
                    { name:'Junk Mail', box:'junk'}
                ]
        }

        this.addTag = this.addTag.bind(this)
    }

    addTag(event) {
// tag {name: 'Example', box:'example'}
        const tag = {
            name:event.target.parentElement.children[0].value, 
            box:event.target.parentElement.children[2].value, 
        }
        const newTags = [...this.state.tags]
        newTags.push(tag)
        this.setState(prev => ({
            tags: newTags
        }))
        event.target.parentElement.children[0].value = ""
        event.target.parentElement.children[2].value = ""
    }
    render() {
        return (
            <div className='Menu'>
                <h1>Menu</h1>
                {this.state.tags.map((tag) => ( 
                    <Tag name={tag.name} box={tag.box} switchBox={this.props.switchBox} />
                ))}
                <div className='add-input-component'>
                    Name:
                    <input/>
                    <br/>
                    Box:
                    <input/>
                    <button onClick={this.addTag}>Add Inbox</button>
                </div>
            </div>
        );
    }
}