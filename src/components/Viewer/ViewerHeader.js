import React, { Component } from 'react'

export default class ViewerHeader extends Component {
    render() {
        return (
            <div className='ViewerHeader'>
                {this.props.tags.map( (x , i) => <button  key={i} data-id={this.props.currentMessage.id} className='tagButton' onClick={this.props.addTagToMessage}>{x}</button>)}
                <p><strong>From: {this.props.currentMessage.from}</strong></p>
                <p><strong>To: {this.props.currentMessage.to}</strong></p>
                <p><strong>Subject: {this.props.currentMessage.subject}</strong></p>
            </div>
        )
    }
} 