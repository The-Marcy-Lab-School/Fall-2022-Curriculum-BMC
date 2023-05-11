import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count+1);
  }
  const decrementCount = () => {
    setCount(count-1);
  }

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
      <p>{count}</p>
    </>
  )
}

export default Counter;