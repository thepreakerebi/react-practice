import React from 'react'

const ClickCounter2 = ({count, incrementCount}) => {
    // const {count, incrementCount} = this.props;

  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  )
}

export default ClickCounter2
