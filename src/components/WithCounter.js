import React from 'react'

const WithCounter = OriginalComponent => {

    class CounterComponent extends React.Component {

        constructor(props) {
          super(props)
        
          this.state = {
             count: 0
          }
        }
        
        increaseCount = () => {
            // this.setState(prevState => {
            //     return {count: prevState.count + 1}
            // })
            this.setState({
                count: this.state.count + 1
            })
        }

      render() {
        return <OriginalComponent count={this.state.count} increaseCount={this.increaseCount} />
      }
    }
    
  return CounterComponent
}

export default WithCounter
