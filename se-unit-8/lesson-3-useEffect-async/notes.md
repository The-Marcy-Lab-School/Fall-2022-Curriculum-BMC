# useEffect

## What exactly is a hook?

We've already learned about `useState`. Did you know that this function is called a **hook**?

React has many more **hook** functions:

- `useEffect`
- `useContext`
- `useReducer`
- `useMemo`
- `useRef`
- and more...

You may already be seeing a pattern - they all start with the word `use`! That's a helpful pattern to easily identify a hook function.

Hooks are so called because they "hook" into React's rendering "lifecycle" which has 3 main phases:

1. A component has been added to the page (it has been "mounted" onto the page)
2. A component has been updated
3. A component has been removed from the page (it has been "demounted")

Each step in this lifecycle is like an "event"

Let's learn about the second most important hook: `useEffect`.

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
