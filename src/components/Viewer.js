import React, { Component } from 'react';

export default class Viewer extends Component {
    constructor(props) {
        super()

        this.state = {
            messageToDisplay: this.props.currentMessage
        }
    }

    render() {

        return (
            <div className='Viewer'>
                <p>{this.state.messageToDisplay}</p>
            </div>
            )
    }
}
