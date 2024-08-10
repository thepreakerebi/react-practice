import React, { Component } from 'react'

export class ClassClick extends Component {

  clickHandler() {
    console.log('Jumping');
  }  

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}


