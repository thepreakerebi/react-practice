import React, { useState } from 'react'

const HookCounterThree = () => {

    const [name, setName] = useState({firstName: '', lastName: ''});


  return (
    <div>
      <form>
        <input type='text' onChange={e => setName({...name, firstName: e.target.value})} value={name.firstName} />
        <input type='text' onChange={e => setName({...name,lastName: e.target.value})} value={name.lastName} />
        <h1>Your first name is: {name.firstName}</h1>
        <h1>Your last name is: {name.lastName}</h1>
      </form>
    </div>
  )
}

export default HookCounterThree
