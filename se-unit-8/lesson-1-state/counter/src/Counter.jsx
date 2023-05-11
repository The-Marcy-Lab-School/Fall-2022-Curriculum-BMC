import { useState } from 'react';
import CounterButtons from './CounterButtons';
import CounterDisplay from './CounterDisplay';

const Counter = () => {
  const [count, setCount] = useState(0);
  
  console.log('rendering Counter');
  console.log(count);

  return (
    <>
      <CounterButtons count={count} setCount={setCount} />
      <CounterDisplay count={count}/>
    </>
  );
};

export default Counter;