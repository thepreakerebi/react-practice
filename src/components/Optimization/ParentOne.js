import React, { useState } from 'react'

const ParentOne = ({children}) => {

    const [count, setCount] = useState(0);
    console.log('ParentOne render');

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
      {children}
    </div>
  )
}

export default ParentOne
