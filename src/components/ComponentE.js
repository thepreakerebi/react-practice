// import React from 'react'
// import { UserConsumer } from './userContext'

// const ComponentE = () => {
//   return (
//     <UserConsumer>
//         {
//             username => <h1>Hellow {username}</h1>
//         }
//     </UserConsumer>
//   )
// }

// export default ComponentE

import React, { Component } from 'react'
import UserContext from './userContext'

class ComponentE extends Component {
  render() {
    return (
      <div>
        Hello {this.context}
      </div>
    )
  }
}

ComponentE.contextType = UserContext;

export default ComponentE

