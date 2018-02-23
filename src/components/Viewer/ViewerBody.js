import React, { Component } from "react";

export default class ViewerBody extends Component {
  render() {
    return <p>{this.props.currentMessage.message}</p>;
  }
}
