import React from 'react'
import Person from './Person'

export const NameList = () => {

    // const names = ['Bruce', 'Clark', 'Diana'];
    // const nameList = names.map(name => <h1 key={names.length * Math.random()}>{name}</h1>);

    const persons = [
        {
            id: 1,
            name: 'Jack',
            age: 24,
            skill: 'React' 
        },
        {
            id: 2,
            name: 'Queen',
            age: 20,
            skill: 'Vue' 
        },
        {
            id: 3,
            name: 'Joker',
            age: 29,
            skill: 'Nextjs' 
        }
    ]

    //const personList = persons.map(person => <h2 key={person.id}>I am {person.name}, I am {person.age} years, and I know {person.skill}</h2> )
    //const personList = persons.map(person => <Person person={person} />)

  return (
    <div>
      <Person persons={persons} />
    </div>
  )
}


