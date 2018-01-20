import React, { Component } from 'react';

export default class Viewer extends Component {

    render() {
        return (
            <div className='Viewer'>
                {this.props.tags.map( (x) => <button className='tagButton'>{x}</button>)}
                <p><strong>From: {this.props.currentMessage.from}</strong></p>
                <p><strong>To: {this.props.currentMessage.to}</strong></p>
                <p><strong>Subject: {this.props.currentMessage.subject}</strong></p>
                <hr/>
                <p>{this.props.currentMessage.message}</p>
            </div>
            )
    }
}
