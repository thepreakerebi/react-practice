import React from 'react'

const Person = ({persons}) => {

    const personList = persons.map(
        person => <h2 key={person.id}>
                I am {person.name}, I am {person.age} years old, and I know {person.skill}
            </h2> 
    )

//   return (
//     <div>
//       <h2 key={person.id}>
//         I am {person.name}, I am {person.age} years old, and I know {person.skill}
//       </h2> 
//     </div>
//   )

    return <div>{personList}</div>

}

export default Person
