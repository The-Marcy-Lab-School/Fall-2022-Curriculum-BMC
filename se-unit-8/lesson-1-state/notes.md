# Managing State

Key Terms

- Props
- `useState`
- `onClick` event handlers
- Lifting state up

## onClick handlers

Imagine building the most basic example of all time - a counter.

![](./img/counter-app.gif)

The application is simple, it has two buttons to increment a counter and a display element to show the current value.

For now lets focus on a single button.

Maybe the code could look like this?

```jsx
const Counter = () => {
  let count = 0;

  const incrementCount = () => {
    count++;
    console.log(count);
  };

  return (
    <>
      <button onClick={incrementCount}>+</button>
      <p>{count}</p>
    </>
  );
};

export default Counter;
```

When we open up the console, we can see that the value of `count` is in fact changing. But the UI isn't! Why not?

**We haven't told our UI to update.** We _could_ insert some vanilla JS like this:

```js
document.querySelector("p").innerText = count;
```

But that isn't very React-ey.

## Use State

What we want is to make our component **stateful**: we want our `Counter` to be able to keep track of the `count`.

In React, we can achieve this using the `useState` function from the `react` package.

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
      <p>{count}</p>
    </>
  );
};

export default Counter;
```

### Code Breakdown

```jsx
import { useState } from "react";
```

<details><summary>Explanation</summary>

`useState` is a _named export_ of the `react` package (note the `{}` around the function in the `import` statement).

</details><br>

```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  //...
};
```

<details><summary>Explanation</summary>

`useState` _must_ be called at the top of a component. [Otherwise weird stuff happens](https://legacy.reactjs.org/docs/hooks-rules.html).

Invoking `useState` creates two values:

1. A piece of state data (`count`) with a starting value (`0`)
2. A "setter" function for updating that state data (`setCount`)

Whenever we update the state data using the setter function (`setCount`), React will re-render the component with the new state.

</details><br>

```jsx
const incrementCount = () => {
  setCount(count + 1); // Do this
  count++; // Don't do this
};
```

<details><summary>Explanation</summary>

`setCount` is invoked to update the value of `count`. We can use the current value of `count` to calculate its next value.

NEVER directly modify the value of a piece of state.

</details><br>

```jsx
return (
  <>
    <button onClick={incrementCount}>+</button>
    <p>{count}</p>
  </>
);
```

<details><summary>Explanation</summary>

The state value `count` is rendered by the `<p>` and will reflect the most up-to-date value of `count`.

When `setCount` is invoked, this portion of the component will be re-rendered.

</details>

## Lifting State Up

Often, we will find ourselves in situations where a piece of state is needed by multiple components.

In these circumstances, we can move the state value to the shared ancestor component. Then, we pass the state value and setter function down as props.

```jsx
import CounterButtons from "./components/CounterButtons";
import CounterDisplay from "./components/CounterDisplay";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterButtons count={count} setCount={setCount} />
      <CounterDisplay count={count} />
    </>
  );
};

export default App;
```

### Code Demo

1. Implement a `LikesButton` component rendered by each `InstagramPost`
2. Use state for each button
3. Keep a total likes tally displayed in the header
