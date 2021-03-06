import React, { Component } from 'react';
import '../index.css';
import Message from './message'


class MessageList extends Component {
 
  
    render() {
    
      return (
        <div>
          {this.props.state.map((subject, idx) => {
            return <Message
              messageRead={this.props.messageRead} 
              messageStarred={this.props.starredMessages}
              selectMessage={this.props.select}
              key={idx}
              message={subject}
              read={subject.read}
              label={subject.label}
              
              />              
            })}
        </div>
      );
    }
  }
  
  export default MessageList;