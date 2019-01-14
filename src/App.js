import React, { Component } from 'react';
import './index.css';
import ToolBar from './components/tool-bar'
import MessageList from './components/message-list'



const url = 'http://localhost:8082/api/messages'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      temp: true,
      selectAllButton: false,
      allReadButton: false,
      
      
    }
   
  }
  
  fetchEmails = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})  
      })
      .catch(err => console.error(err))   
  }

  updateMessages = async (id, command, prop, value) => {
    let message = {
      messageIds: [id],
      command: command,
      [prop]: value
    }
   
    await fetch("http://localhost:8082/api/messages", {
      method: "PATCH",
      body: JSON.stringify(message),
      headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      }
    })
  }


    starMessage = (starred) => {
      const starredMessages = this.state.data.map(message => {
        if(message.id === starred){
          message.starred = !message.starred
        }
        console.log(message.starred)
        return message
      })
      this.setState({
        data: starredMessages
      })
    }

    

    messageRead = (id) => {
      // console.log("messageRead", id)
      const readUnreadToggle = this.state.data.map(message =>{
        if (message.id === id){
          message.read = !message.read
        }
        return message
      })
      this.setState({
        data:readUnreadToggle
      })
    }
    markAllRead = (id) => {
      console.log("77")
      const selectMessages = this.state.data.slice(0)
      selectMessages.forEach(message => {
        if(this.state.allReadButton === false){
          message.read = true
        } else {
          message.read = false
        }
        return message
        })
        this.setState({
          allReadButton : !this.state.allReadButton,
          data: selectMessages
        })
    }
    selectMessage = (id) => {
      //console.log("selectMessage", id)
      const updatedSelect = this.state.data.slice(0)
      updatedSelect.map(message =>{
        if(message.id === id){
          message.selected = !message.selected 
        }  
        return message
      })
      this.setState({
        check: true,
        data: updatedSelect,
        selectAllButton: false,
      })

    }

    selectAllMessages = () => {
      const selectAll = this.state.data.slice(0)
      selectAll.forEach(message =>{
        if(this.state.selectAllButton === false){
          message.selected = true
        } else {
          message.selected = false
        }
        
      })
      this.setState({
        selectAllButton: !this.state.selectAllButton,
        data: selectAll
      })
    }

    deleteMessage = () => {

      const removeMessage = this.state.data.filter(message => message.selected)
      const ids = removeMessage.map(message => message.id)
      const remainingMessage = this.state.data.filter(message => !message.selected)
      this.setState({
        data: remainingMessage
      })
      this.updateMessages(ids,'delete', 'delete')
    }

    addLabel = (e) => {
      const selectedMessages = this.state.data.map(message => {
        if(message.selected === true){
          if(!message.labels.includes(e.target.value)){
              message.labels = [...message.labels, e.target.value]
            }

          }
          return message
        })
        this.setState({
          data: selectedMessages
      })
    }

    removeLabel = (e) => {
      const selectedMessages = this.state.data.map(message => {
        if(message.selected === true){
          message.labels = message.labels.filter(label => label !== e.target.value)
        }
        return message
      })
      this.setState({
        data: selectedMessages
      })
    }

   


  

  componentDidMount(){
    this.fetchEmails()
  }
 
  render() {
    
    return (
      <div className="App">
        <ToolBar
          markAllRead={this.markAllRead}
          removeLabel={this.removeLabel}
          addLabel={this.addLabel} 
          selectAll={this.selectAllMessages}
          selectAllButton={this.state.selectAllButton}
          deleteMessage={this.deleteMessage}>
        </ToolBar>
        <MessageList 
          state={this.state.data}
          messageRead={this.messageRead} 
          starredMessages={this.starMessage}
          select={this.selectMessage}>
        </MessageList>
      </div>
    );
  }
}

export default App;
