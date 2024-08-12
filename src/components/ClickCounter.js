import React from 'react';
import WithCounter from './WithCounter';

const ClickCounter = ({count, increaseCount}) => {
  return (
    <div>
      <button onClick={increaseCount}>Clicked {count} times</button>
    </div>
  )
}

export default WithCounter(ClickCounter)
