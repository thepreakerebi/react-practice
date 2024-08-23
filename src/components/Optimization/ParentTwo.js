import React, { useState } from 'react';
import { MemoizedChildTwo } from './ChildTwo';

const ParentTwo = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('John');
    console.log('ParentTwo render');

  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Count: {count}</button>
      <button onClick={() => setName('Constantine')}>Change name</button>
      <MemoizedChildTwo name={name} />
    </div>
  )
}

export default ParentTwo
