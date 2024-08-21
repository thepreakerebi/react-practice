import React, { useEffect, useRef, useState } from 'react'

const RefTimer = () => {

    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTime => prevTime + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current);
        }
    }, [])

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear interval</button>
    </div>
  )
}

export default RefTimer
