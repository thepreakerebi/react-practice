import React, { useEffect, useState } from 'react'

const CounterOne = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect - updating document title');
        document.title = `Clicked ${count} times`;
    }, [count])

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times </button>
    </div>
  )
}

export default CounterOne
