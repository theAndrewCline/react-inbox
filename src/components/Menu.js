import React, {Component} from 'react';

import Inbox from './Menu/Inbox'

export default class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <h1>Menu</h1>
                <Inbox name='Main Inbox' box='inbox' switchBox={this.props.switchBox}/>
                <Inbox name='Junk Mail' box="junk" switchBox={this.props.switchBox}/>
                <button>Add Inbox</button>
            </div>
        );
    }
}