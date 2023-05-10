# Managing State

Key Terms

- Props
- `useState`
- `onClick` event handlers
- Lifting state up

## Use State

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <p>{count}</p>
    </>
  );
};

export default Counter;
```

## Lifting State Up
