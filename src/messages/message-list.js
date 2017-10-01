import React, { Component } from 'react';
import MessageView from './message-view';

class MessageList extends Component {
  state = {
      messages: [
      {
        from: 'Arvind',
        content: 'hi',
        status: 'unread',
      },
      {
        from: 'Joe',
        content: 'bye',
        status: 'read',
      }
    ]
  
  }

  render() {
    const messageViews = this.state.messages.map(function(message, index) {
      return(
        <MessageView key={index} message={message}/>
      )
    })
    return(
        <div>
            <h1>List of messages</h1>
            {messageViews}
        </div>
    )
  }
}

export default MessageList;
