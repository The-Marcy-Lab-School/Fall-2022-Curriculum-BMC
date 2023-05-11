
const Counter = () => {
  let count = 0;

  const incrementCount = () => {
    count++;
    console.log(count);
    // document.querySelector('p').innerText = count;
  }
  const decrementCount = () => {
    count--;
    console.log(count);
    // document.querySelector('p').innerText = count;
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