import React, { Component } from 'react';
import '../index.css';

class ToolBar extends Component {
  render() {
    return (
    <div className = "container">
      <div className="row toolbar">
          <div className="col-md-12">
              <p className="pull-right">
                  <span className="badge badge">2</span>
                  unread messages
              </p>

              <button className="btn btn-default" >
                  <input  type= "checkbox" checked={this.props.selectAllButton} onChange={this.props.selectAll} />
              </button>

              <button className="btn btn-default" onClick={this.props.markAllRead}>
              Mark As Read
              </button>

              <button className="btn btn-default">
              Mark As Unread
              </button>

              <select className="form-control label-select" onChange={this.props.addLabel}>
                  <option>Apply label</option>
                  <option value="dev">dev</option>
                  <option value="personal">personal</option>
                  <option value="gschool">gschool</option>

              </select>

              <select className="form-control label-select" onChange={this.props.removeLabel}>
                  <option>Remove label</option>
                  <option value="dev">dev</option>
                  <option value="personal">personal</option>
                  <option value="gschool">gschool</option>
              </select>

              <button className="btn btn-default" onClick={this.props.deleteMessage}>
                  <i className="fa fa-trash-o"></i>
              </button>
          </div>
      </div>
    </div>  
    );
  }
}

export default ToolBar;