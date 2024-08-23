import React from 'react'

const ChildTwo = () => {

    console.log('ChildTwo rencer');

  return (
    <div>
      Child One
    </div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo);
