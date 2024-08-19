import React from 'react'
import { UserConsumer } from './ContextHook'

const ContextComponentF = () => {
  return (
    <div>
        <UserConsumer>
            {
                user => <div>{user}</div>
            }
        </UserConsumer>
    </div>
  )
}

export default ContextComponentF
