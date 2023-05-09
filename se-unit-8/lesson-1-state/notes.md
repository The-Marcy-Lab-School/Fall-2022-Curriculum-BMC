# Managing State

Key Terms

- Props
- `useState`
- `onClick` event handlers

```jsx
import { useState } from "react";

const App = () => {
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

export default App;
```
