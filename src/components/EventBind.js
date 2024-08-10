import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello! John"
      }

      //this.changeMessage = this.changeMessage.bind(this);
    }
    
    changeMessage = () => {
        this.setState({
            message: `${this.state.message}, how are you doing today?`
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change greeting</button>
      </div>
    )
  }
}


