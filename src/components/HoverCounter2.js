import React from 'react'

const HoverCounter2 = ({count, incrementCount}) => {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
    </div>
  )
}

export default HoverCounter2
