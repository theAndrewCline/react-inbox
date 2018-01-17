import React, {
    Component
} from 'react';

export default class Emails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            inbox: [
                {
                    subject: 'Planning Center Notification',
                    message: 'This is from your Church, you are scheduled to play Bass Guitar on 10/31'
                },
                {
                    subject: 'Thrity-Thirty Coffee',
                    message: 'Your order is ready for pick-up'
                }
            ],
            junk:[
                {
                    subject: 'This is clearly spam',
                    message: 'you should probably not open this'
                },
                {

                    subject: 'This is also spam',
                    message: 'you should probably not open this'
                }
            ]

        }
    }

    render() {

        const box = this.props.box

        return ( 
            <div className='Messages'>
                <ul>{this.state[box].map(x => <li>{x.subject}</li> )}</ul>
            </div>
        );
    }
}