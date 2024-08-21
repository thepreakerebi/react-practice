import React from 'react'

const CounterOfParent = ({text, count}) => {
    console.log(`Rendering ${text}`)
  return (
    <div>
      {text} - {count}
    </div>
  )
}

export default React.memo(CounterOfParent)
