import React, { Component } from 'react';

export default class Viewer extends Component {

    render() {

        return (
            <div className='Viewer'>
                <p>{this.props.currentMessage.message}</p>
            </div>
            )
    }
}
