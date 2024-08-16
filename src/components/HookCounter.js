import React, { useState } from 'react'

const HookCounter = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

  return (
    <div>
      <button onClick={incrementCount}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounter
