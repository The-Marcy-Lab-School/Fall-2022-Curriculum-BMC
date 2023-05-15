import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('')

  console.log("render");

  useEffect(() => {
    document.title = count; // the effect
    console.log("effect ran");
  }, [count]); // the dependencies

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} type='text'/>
      <p>{name}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
    </>
  )
}
export default Counter;