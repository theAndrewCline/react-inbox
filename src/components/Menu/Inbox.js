import React, {Component} from 'react';

export default class Inbox extends Component {
    render() {
        return (
            <h3>{this.props.name}</h3>
        );
    }
}