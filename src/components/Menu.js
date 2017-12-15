import React, {Component} from 'react';

import Inbox from './Menu/Inbox'

export default class Menu extends Component {
    render() {
        return (
            <div className='Menu'>
                <h1>Menu</h1>
                <Inbox name='Main Inbox'/>
                <Inbox name='Junk Mail'/>
                <button>Add Inbox</button>
            </div>
        );
    }
}