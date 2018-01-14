import React, {Component} from 'react';

export default class Inbox extends Component {
    render() {
        return (
            <h3 onClick={this.props.switchBox} data-box={this.props.box} >{this.props.name}</h3>
        );
    }
}