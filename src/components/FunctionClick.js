import React from 'react'

export const FunctionClick = () => {

    const clickHandler = () => {
        console.log("Button clicked");
    }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}


