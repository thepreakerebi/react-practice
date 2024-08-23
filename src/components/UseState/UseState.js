import React, { useState } from 'react'

const UseState = () => {

    const [count, setCount] = useState(0);
    console.log('Usestate render');

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
      <button onClick={() => setCount(0)}>Count: {count}</button>
      <button onClick={() => setCount(5)}>Count: {count}</button>
    </div>
  )
}

export default UseState
