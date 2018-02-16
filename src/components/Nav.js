import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        const style = {
            backgroundColor: 'black'
        }

        return (
            <nav className='Nav' style={style}>
                <h3 style={{color: 'white', margin: '5px'}}>Log In</h3>
            </nav>
        );
    }
}