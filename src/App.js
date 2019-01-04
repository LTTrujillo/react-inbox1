import React, { Component } from 'react';
import './index.css';
import ToolBar from './components/tool-bar'
import MessageList from './components/message-list'



const url = 'http://localhost:8082/api/messages'
class App extends Component {
  constructor(){
    super()
    this.state={
      data:[],
      temp: true
    }
  }

  fetchEmails = async() => {
    let get = await fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})
        // console.log("data", data)
        
      })
      .catch(err => console.error(err))
    return get
  }

  componentDidMount(){
    this.fetchEmails()
  }

  // toggleStar(idx){
  //   fetch(url,{
  //     method: "PATCH",
  //     node: "no-cors",
  //     body: JSON.stringify({command: "star", messageIds: [idx]}),
  //     headers: {
  //       "Content-Type": "application/json"
  //     }      
  //   }).then(response => response.json()).then(data => console.log("data",data))
  //     .catch(err => console.error(err))
  
  // }

  render() {
    // this.toggleStar(3)
    return (
      <div className="App">
        <ToolBar></ToolBar>
        <MessageList state={this.state.data}></MessageList>
      </div>
    );
  }
}

export default App;
