import React, { Component } from 'react'

export default class ViewerHeader extends Component {
    render() {
        return (
            <div className='ViewerFooter'>
                {this.props.currentMessage.tags.map( (x , i) => <p key={i} >{x}</p>) }
            </div>
        )
    }
} 