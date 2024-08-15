import React from 'react'
import { UserConsumer } from './userContext'

const ComponentE = () => {
  return (
    <UserConsumer>
        {
            username => <h1>Hello {username}</h1>
        }
    </UserConsumer>
  )
}

export default ComponentE
