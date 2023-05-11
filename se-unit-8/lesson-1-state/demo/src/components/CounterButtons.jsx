const CounterButtons = ({ count, setCount }) => {

  const incrementCount = () => setCount(count+1);
  const decrementCount = () => setCount(count-1);

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </>
  )
}

export default CounterButtons;