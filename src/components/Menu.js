import React, {Component} from 'react';

import Tag from './Menu/Tag'

export default class Menu extends Component {

    render() {
        return (
            <div className='Menu'>
                <h1>Menu</h1>
                {this.props.tags.map((tag , i) => ( 
                    <Tag key={i} name={tag} switchBox={this.props.switchBox} />
                ))}
                <div className='add-input-component'>
                    Name:
                    <input/>
                    <button onClick={this.props.addTag}>Add Inbox</button>
                </div>
            </div>
        );
    }
}