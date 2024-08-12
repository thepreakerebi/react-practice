import React from 'react';
import WithCounter from './WithCounter';

const HoverCounter = ({count, increaseCount}) => {
  return (
    <div>
      <h1 onMouseOver={increaseCount}>Hovered {count} times</h1>
    </div>
  )
}

export default WithCounter(HoverCounter)
