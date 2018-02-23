import React, { Component } from "react";

export default class ViewerHeader extends Component {
  render() {
    const { currentMessage, addTagToMessage, tags } = this.props;

    return (
      <div className="ViewerHeader">
        {tags.map((x, i) => (
          <button
            key={i}
            data-id={currentMessage.id}
            className="tagButton"
            onClick={addTagToMessage}
          >
            {x}
          </button>
        ))}
        <p>
          <strong>From: {currentMessage.from}</strong>
        </p>
        <p>
          <strong>To: {currentMessage.to}</strong>
        </p>
        <p>
          <strong>Subject: {currentMessage.subject}</strong>
        </p>
      </div>
    );
  }
}
