import React, { Component } from 'react';

import Viewer from './Viewer'

export default class Messages extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedMessage: 0,
            messages: [{
                id: 0,
                from: "Planning Center Online",
                to: "Andrew Cline",
                subject: "Planning Center Notification",
                date: "1-11-11",
                message: "This is from your Church, you are scheduled to play Bass Guitar on 10/31",
                tags: ["Inbox"],
                read: false
            }, {
                id: 1,
                from: "Thirty-thirty Coffee",
                to: "Andrew Cline",
                subject: "Coffee Order",
                date: "1-11-11",
                message: "Your order is ready for pick-up",
                tags: ["Inbox"],
                read: false
            }, {
                id: 2,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 3,
                from: "Really Unknown Person",
                to: "Andrew Cline",
                subject: "This is also spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 4,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 5,
                from: "Unknown Personal",
                to: "Andrew Cline",
                date: "1-11-11",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 6,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 7,
                from: "Unknown Personal",
                to: "Andrew Cline",
                date: "1-11-11",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 8,
                from: "Unknown Personal",
                to: "Andrew Cline",
                date: "1-11-11",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 9,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 10,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 11,
                from: "Unknown Personal",
                to: "Andrew Cline",
                date: "1-11-11",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 12,
                from: "Unknown Personal",
                to: "Andrew Cline",
                date: "1-11-11",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 13,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 14,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 15,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 16,
                from: "Unknown Personal",
                to: "Andrew Cline",
                date: "1-11-11",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 17,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 18,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                date: "1-11-11",
                tags: ["Junk"],
                read: false
            }, {
                id: 19,
                from: "Unknown Personal",
                to: "Andrew Cline",
                date: "1-11-11",
                subject: "This is clearly spam",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 20,
                from: "Unknown Personal",
                to: "Andrew Cline",
                subject: "This is clearly spam",
                date: "1-11-11",
                message: "you should probably not open this",
                tags: ["Junk"],
                read: false
            }, {
                id: 21,
                subject: "A Team secret message",
                from: "Mr T",
                to: "Andrew Cline",
                date: "2-11-11",
                message: "I pity the fool!",
                tags: ["Inbox"],
                read: false
            }, {
                id: 22,
                subject: "Lady with an umbrella",
                from: "Mary Poppins",
                to: "Andrew Cline",
                date: "1-11-11",
                message: "Supercalifragilisticexpialidocious.",
                tags: ["Inbox"],
                read: false
            }, {
                id: 24,
                subject: "Lady with an umbrella",
                from: "Mary Poppins",
                to: "Andrew Cline",
                date: "1-11-11",
                message: "Close your mouth please, we are not a codfish.",
                tags: ["Inbox"],
                read: false
            }, {
                id: 25,
                subject: "Lady with an umbrella",
                from: "Mary Poppins",
                date: "1-11-11",
                to: "Andrew Cline",
                message: "First of all, I would like to make one thing clear. I never explain anything.",
                tags: ["Inbox"],
                read: false
            }, {
                id: 26,
                subject: "Lady with an umbrella",
                from: "Mary Poppins",
                date: "1-11-11",
                to: "Andrew Cline",
                message: "What do you get when you feed the birds? Fat birds.",
                tags: ["Inbox"],
                read: false
            }, {
                id: 27,
                subject: "Lady with an umbrella",
                from: "Mary Poppins",
                to: "Andrew Cline",
                date: "1-11-11",
                message: "Though we adore men individually, we agree that as a group they are rather stupid.",
                tags: ["Inbox"],
                read: false
            }, {
                id: 23,
                subject: "Message from the Republic",
                from: "Senator Palpatine",
                to: "Andrew Cline",
                date: "3-11-11",
                message: "Pretty sure I'd do a better job as an emperor.",
                tags: ["Junk"],
                read: false
            }]
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

                <ul>{messages.map(x => (
                    <li className="message"
                        onClick={this.openMessage}
                        id={x.id}>
                        {x.subject}
                    </li>
                ))}</ul>

                <Viewer currentMessage={currentMessage} tags={tags} />
            </div>
        );
    }
}