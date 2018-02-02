import React, { Component } from 'react';
import ViewerBody from './Viewer/ViewerBody'
import ViewerHeader from './Viewer/ViewerHeader'
import ViewerFooter from './Viewer/ViewerFooter'

export default class Viewer extends Component {

    render() {
        return (
            <div className='Viewer'>
                <ViewerHeader tags={this.props.tags} currentMessage={this.props.currentMessage} />
                <hr/>
                <ViewerBody currentMessage={this.props.currentMessage}/>
                <hr/>
                <ViewerFooter currentMessage={this.props.currentMessage}/>
            </div>
            )
    }
}
