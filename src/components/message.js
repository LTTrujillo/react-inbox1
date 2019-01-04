import React, { Component } from 'react';
import '../index.css';
// import MessageList from './message-list'

const url = 'http://localhost:8082/api/messages'

class Message extends Component {
    
    toggleStar(idx){
        let temp = 5
        console.log("here")
        fetch(url,{
          method: "PATCH",
          node: "no-cors",
          body: JSON.stringify({command: "star", messageIds: [temp]}),
          headers: {
            "Content-Type": "application/json"
          }      
        }).then(response => response.json()).then(data => console.log("data",data))

          .catch(err => console.error(err))
           
      
      }
    
    render() {
      return (
        <div>  
            <div className={this.props.read ?(this.props.message.selected ? "row message read selected" : "row message read") : (this.props.message.selected ? "row message unread selected" : "row message unread") }>
                <div className="col-xs-1">
                    <div className="row">
                <div className="col-xs-2">
                    <input type="checkbox" />
                </div>
                <div className="col-xs-2">
                    <i className={this.props.message.starred ? "star fa fa-star": "star fa fa-star-o"} onClick = {this.toggleStar}></i>
                </div>
            </div>
            </div>
                <div className="col-xs-11">
                    {this.props.message.labels.map((label, idx) => <Label key={idx} name={label}/>)}
                    <a href="www.react.com">
                        {this.props.message.subject}
                    </a>
                </div>
            </div>
            {/* <div className="row message-body">
                <div className="col-xs-11 col-xs-offset-1">
                    {/* {this.props.message.body} */}
            {/* </div> */}
            {/* </div>  */}
        </div>
      );
    }
  }
  const Label = (props) => {
      return <span className= "label label-warning">{props.name}</span>
  }


  export default Message;