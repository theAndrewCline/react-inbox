import React, { Component } from 'react';
import ViewerBody from './Viewer/ViewerBody'
import ViewerHeader from './Viewer/ViewerHeader'
import ViewerFooter from './Viewer/ViewerFooter'

export default class Viewer extends Component {


    render() {

        const { addTagToMessage, currentMessage, removeTagFromMessage, tags } = this.props

        return (
            <div className='Viewer'>
                <ViewerHeader tags={tags} currentMessage={currentMessage} addTagToMessage={addTagToMessage} />
                <hr/>
                <ViewerBody currentMessage={currentMessage}/>
                <hr/>
                <ViewerFooter 
                    currentMessage={currentMessage}
                    removeTagFromMessage={removeTagFromMessage}
                />
            </div>
            )
    }
}
