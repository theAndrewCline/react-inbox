import React, { Component } from 'react';

import Viewer from './Viewer'

export default class Messages extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            selectedMessage: 0,
            messages: [ {
                    id: 0,
                    from: 'Planning Center Online', 
                    to: 'Andrew Cline',
                    subject: 'Planning Center Notification',
                    message: 'This is from your Church, you are scheduled to play Bass Guitar on 10/31',
                    tags: ['Inbox']
                },{
                    id: 1,
                    from: 'Thirty-thirty Coffee', 
                    to: 'Andrew Cline',
                    subject: 'Coffee Order',
                    message: 'Your order is ready for pick-up',
                    tags: ['Inbox']
                },{
                    id: 2,  
                    from: 'Unknown Personal', 
                    to: 'Andrew Cline',
                    subject: 'This is clearly spam',
                    message: 'you should probably not open this',
                    tags: ['Junk']
                },{
                    id: 3,
                    from: 'Really Unknown Person', 
                    to: 'Andrew Cline',
                    subject: 'This is also spam',
                    message: 'you should probably not open this',
                    tags: ['Junk']
                }
            ]
        }

        this.openMessage = this.openMessage.bind(this)
        this.addTagToMessage = this.addTagToMessage.bind(this)
    }

    openMessage(event) {
       this.setState({selectedMessage: event.target.id}) 
    }

    addTagToMessage(newTag , messageID) {
        let currentMessage = {}
        this.state.messages.forEach( message => {
            if(message.id = messageID) currentMessage = message 
        })

        let currentMessageTags = currentMessage.tags
        let newTags = currentMessageTags.push(newTag); 
        // need help with this part of the function
        this.setState({ messages:[messageID]})
    }



    render() {

        let currentMessage = this.state.messages[this.state.selectedMessage]
        const tags = this.props.tags
        const box = this.props.box
        let messages = [] 

        this.state.messages.forEach((i) => { 
            if (i.tags.includes(box)) {
                messages.push(i)
            }
        })

        return ( 
            <div className='Messages'>
                <h3>Messages</h3>
                <ul>{messages.map(x => <li className="message" onClick={this.openMessage} id={x.id} >{x.subject}</li> )}</ul>
                < Viewer currentMessage={currentMessage} tags={tags}/>
            </div>
        );
    }
}