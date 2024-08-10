import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    

  logOut = () => {
    this.setState({
        isLoggedIn: false
    })
  }

  logIn = () => {
    this.setState({
        isLoggedIn: true
    })
  }

  render() {
    // if(this.state.isLoggedIn) {
    //     return <h1>Welcome! John</h1>
    // } else {
    //     return <h1>Welcome! guest</h1>
    // }
    const status = this.state.isLoggedIn;

    return (
        status ? <div>
            <h1>Welcome! John</h1>
            <button onClick={this.logOut}>Log out</button>
        </div> : <div>
            <h1>Welcome! guest</h1>
            <button onClick={this.logIn}>Log in</button>
        </div>
    )

    // return (
    //   <div>
    //     <h1>Welcome! John</h1>
    //     <h1>Welcome! guest</h1>
    //   </div>
    // )
  }
}


