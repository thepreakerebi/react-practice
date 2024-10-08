import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);


  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  )
}

export default HookCounterTwo
