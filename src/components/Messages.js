import React, { Component } from 'react';

import Viewer from './Viewer'

export default class Messages extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            selectedMessage: 0,
            messages: [ {
                    id: 0,
                    subject: 'Planning Center Notification',
                    message: 'This is from your Church, you are scheduled to play Bass Guitar on 10/31',
                    tags: ['Inbox']
                },{
                    id: 1,
                    subject: 'Thrity-Thirty Coffee',
                    message: 'Your order is ready for pick-up',
                    tags: ['Inbox']
                },{
                    id: 2,  
                    subject: 'This is clearly spam',
                    message: 'you should probably not open this',
                    tags: ['Junk']
                },{
                    id: 3,
                    subject: 'This is also spam',
                    message: 'you should probably not open this',
                    tags: ['Junk']
                }
            ]
        }

        this.openMessage = this.openMessage.bind(this)
    }

    openMessage(event) {
        
    }

    render() {
        const box = this.props.box
        let messages = [] 

        this.state.messages.forEach((i) => { 
            if (i.tags.includes(box)) {
                messages.push(i)
            }
        })

        return ( 
            <div className='Messages'>
                <ul>{messages.map(x => <li onClick={this.openMessage} id={x.id} >{x.subject}</li> )}</ul>
                {/* < Viewer currentMessage={}/> */}
            </div>
        );
    }
}