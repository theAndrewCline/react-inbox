import React, {Component} from 'react';

import Tag from './Menu/Tag'

export default class Menu extends Component {
    constructor(props) {
        super()

        this.state = {
            tags: ['Inbox' , 'Junk']
        }

        this.addTag = this.addTag.bind(this)
    }

    addTag(event) {
// tag {name: 'Example', box:'example'}
        const tag = event.target.parentElement.children[0].value 
        const newTags = [...this.state.tags]
        newTags.push(tag)
        this.setState(prev => ({
            tags: newTags
        }))
        event.target.parentElement.children[0].value = ""
    }
    render() {
        return (
            <div className='Menu'>
                <h1>Menu</h1>
                {this.state.tags.map((tag) => ( 
                    <Tag name={tag} switchBox={this.props.switchBox} />
                ))}
                <div className='add-input-component'>
                    Name:
                    <input/>
                    <button onClick={this.addTag}>Add Inbox</button>
                </div>
            </div>
        );
    }
}