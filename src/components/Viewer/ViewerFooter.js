import React, { Component } from 'react'

export default class ViewerHeader extends Component {
    render() {
        return (
            <div className='ViewerFooter'>
                <p><strong>Click Tag to Remove</strong></p>
                {this.props.currentMessage.tags.map( (x , i) => <p key={i} onClick={this.props.removeTagFromMessage} >{x}</p>) }
            </div>
        )
    }
} 