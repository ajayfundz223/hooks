import React, { useState } from 'react';

const State = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    
    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)
    }
  return (
    <div className='migo'>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default State