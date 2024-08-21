import React, { useCallback, useState } from 'react'
import TitleComponent from './TitleComponent'
import CounterOfParent from './CounterOfParent';
import ButtonOfParent from './ButtonOfParent';

const OverallParent = () => {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(prevAge => prevAge + 1);
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(prevSalary => prevSalary + 1000);
    }, [salary])


  return (
    <div>
        <TitleComponent />
        <CounterOfParent count={age} text='Age' />
        <ButtonOfParent handleClick={incrementAge}>Increment Age</ButtonOfParent>
        <CounterOfParent count={salary} text='Salary' />
        <ButtonOfParent handleClick={incrementSalary}>Increment Salary</ButtonOfParent>
    </div>
  )
}

export default OverallParent
