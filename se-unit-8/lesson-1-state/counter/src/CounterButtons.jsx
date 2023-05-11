/* eslint-disable react/prop-types */
const CounterButtons = ({ setCount, count }) => {

  const incrementCount = () => {
    setCount(count + 1); // rerenders Counter with a new value
  };

  return (
    <>
      <div id='buttons'>
        <button onClick={incrementCount}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
      </div>
    </>
  );
};

export default CounterButtons;