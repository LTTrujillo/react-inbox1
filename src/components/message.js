import React, { Component } from 'react';
import '../index.css';

class Message extends Component {
    
   

    render() { 
       
      return (
        <div className ="container">
        <div>  
            <div className={this.props.message.read ?(this.props.message.selected ? "row message read selected" : "row message read") : (this.props.message.selected ? "row message unread selected" : "row message unread") } >
                <div className="col-xs-1">
                    <div className="row">
                <div className="col-xs-2" >
                    <input  type="checkbox" 
                            checked={this.props.message.selected ? this.props.message.selected : false} 
                            onChange = {() => this.props.selectMessage(this.props.message.id)} />     
                </div>
                <div className="col-xs-2">
                    <i   className= {this.props.message.starred ? "star fa fa-star": "star fa fa-star-o"}
                         onClick={()=>this.props.messageStarred(this.props.message.id)}>
                    </i>
                </div>
            </div>
            </div>
                <div className="col-xs-11" onClick={() => this.props.messageRead(this.props.message.id)}>
                    {this.props.message.labels.map((label, idx) => <Label key={idx} name={label}/>)}
                    <a href="#">
                        {this.props.message.subject}
                    </a>
                </div>
            </div>
            {/* <div className="row message-body">
                <div className="col-xs-11 col-xs-offset-1">
                    {this.props.message.body}
                </div>
            </div>  */}
        </div>
        </div>
      );
    }
  }
  const Label = (props) => {
      return <span className= "label label-warning">{props.name}</span>
  }


  export default Message;