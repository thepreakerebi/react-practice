import React from 'react'

const TitleComponent = () => {
    console.log('Rendering Title');
  return (
    <h2>
        useCallBack Hook
    </h2>
  )
}

export default React.memo(TitleComponent)
