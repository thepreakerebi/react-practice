import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {

    const [count, setCount] = useState(0);
    console.log('Parent render');

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
      <button onClick={() => setCount(0)}>Count: {count}</button>
      <button onClick={() => setCount(5)}>Count: {count}</button>
      <Child />
    </div>
  )
}

export default Parent
