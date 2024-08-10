import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component {

    constructor(props) {
      super(props)
    
      this.focusRef = React.createRef();
    }
    

    handleFocus = () => {
        this.focusRef.current.focusInput();
    }

  render() {
    return (
      <div>
        <Input ref={this.focusRef} />
        <button onClick={this.handleFocus}>Focus input</button>
      </div>
    )
  }
}

export default FocusInput
