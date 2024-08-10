import React from 'react'

export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={() => props.greetHandler('Child')}>Greet parent</button>
    </div>
  )
}

