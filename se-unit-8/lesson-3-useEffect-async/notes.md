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

Hooks are a deep topic that you can dive into if you really want to understand how they work under the hood. But the short of it is that **hooks allow us to control how our components interact with React's re-rendering features.**

Let's learn about the second most important hook after `useState`: `useEffect`.

## useEffect

`useEffect` allows our React components to execute "code that produces side effects".

An example of a side effect is directly modifying the DOM.

##### Importing the useEffect hook

```jsx
import { useEffect } from "react"; // when importing alone
import { useState, useEffect } from "react"; // when importing alongside other named exports
```

- `useEffect` is a _named export_ of the `react` package, just like `useState`.

##### Invoking `useEffect`

```jsx
useEffect(() => {
  document.title = count;
}, [count]); // re-execute the effect whenever count changes

useEffect(() => {
  document.title = count;
}, []); // only execute the effect once

useEffect(() => {
  document.title = count;
}); // execute after EVERY re-render
```

- `useEffect` takes in two arguments
  1. [required] a callback function to execute when the component is first rendered
  2. [optional] an array of state values to track (a "dependency array").
- If the dependency array is provided, the effect will be only be re-executed if any of those state values are updated. If the component is re-rendered but those values are not updated, the effect will be skipped.
- If the array is empty, the effect is only executed on the first render of the component.
- If the array is omitted, the effect is executed on EVERY render of the component.

##### All Together Now

```jsx
import { useState, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = count;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</p>;
      <p>{count}</p>;
    </>
  )
}
```

## Fetching with useEffect

The most

```jsx

```
