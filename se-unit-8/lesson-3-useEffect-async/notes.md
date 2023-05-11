# useEffect

We've already learned about one React hook: `useState`.

Let's learn about the second most important hook: `useEffect`.

You may already be seeing a pattern

```jsx
import { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  function countHigher() {
    setCount(count + 1);
    count++;
    console.log(count);
  }

  return <p onClick={countHigher}>{count}</p>;
}
```
