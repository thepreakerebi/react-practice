import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "INCREMENT":
            return state + 1
        case "DECREMENT":
            return state - 1
        case "RESET":
            return initialState
        default:
            return state
    }
}

const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    console.log('useReducer render');

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch('INCREMENT')}>Increment count</button>
      <button onClick={() => dispatch('DECREMENT')}>Decrement count</button>
      <button onClick={() => dispatch('RESET')}>Reset count</button>
    </div>
  )
}

export default UseReducer
