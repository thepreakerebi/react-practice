import React, { Component } from 'react'

class RefDemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef();
      this.cbRef = null;
      this.setCbRef = element => {
        this.cbRef = element;
      }
    }

    componentDidMount() {
        // this.inputRef.current.focus();
        // console.log(this.inputRef);

        if (this.cbRef) {
            this.cbRef.focus();
        }
    }

    handleClick = () => {
        alert(this.inputRef.current.value);
    }
    

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default RefDemo
