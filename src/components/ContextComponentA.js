import React, { useContext } from 'react'
import { CountContext } from '../App'

const ContextComponentA = () => {

    const countContext = useContext(CountContext);
    const {countState, countDispatch} = countContext;

  return (
    <div>
      <button onClick={() => countDispatch('increment')}>Increment to {countState}</button>
      <button onClick={() => countDispatch('decrement')}>Decrement to {countState}</button>
      <button onClick={() => countDispatch('reset')}>Reset to {countState}</button>
    </div>
  )
}

export default ContextComponentA
