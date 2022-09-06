# Practice Exercises 8.2

0. Why is state important in web applications? What are some examples of pieces of state that might exist in a ToDo list application?

**Suggested Answer**

State lets us keep track of important information which could be different across an application. This could refer to user information, dynamic data, or information about the page, such as whether or not some data is loading or a modal is open. Some state for a todo list might include:

  * Information about the logged-in user
  * Information about stored todos, including whether or not they are completed
  * If data is being fetched from the server
  * Other page state, such as if a modal is open or not

1. What is the difference between the `useState` and `useReducer` hooks? When might you want to use one over the other?

**Suggested Answer**

`useState` takes in a single value and returns a point to the value, as well as a function to update it. This is useful if you have a simple state value that you want to track.

`useReducer` takes in a reducer function and an initialState value. The reducer defines how state updates should occur when given actions happen. It returns a copy of the state as well as a dispatch function, which can be used to dispatch actions. This can be useful for more complex state shapes, or if you want more control over what types of actions can be dispatched.

2. Write a component called `Counter` that renders a count and two buttons - one to increment the count, and one to decrement the count. Don't worry about the behavior yet - just render the UI first. The count should start at zero.

**Suggested Answer**

```js
import React from 'react';

const Counter = () => {
  return (
    <div>
      <p>The count is 0</p>
      <button>+</button>
      <button>-</button>
    </div>
  )
};
```

3. Using the `useState` hook, add the ability to both increment and decrement the count.

**Suggested Answer**

```js
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1)
  const decrement = () => setCount((prevCount) => prevCount - 1)

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
};
```

4. Update your example above to use the `useReducer` hook instead of the `useState` hook. Our state should be an object with a key of `count` that points to our current count.

```js
import React, { useReducer } from 'react';

const initialState = {count: 0};

const countReducer = (state, action){
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const increment = () => dispatch({type: 'INCREMENT'});
  const decrement = () => dispatch({type: 'DECREMENT'});

  const {count} = state;

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
};
```

6. Pretend that each time we change our count, we want to persist those results to an API. You can assume you have access to a function called `saveCount` that makes a post request to your server and returns a promise. For our purposes, assume that it always saves successfully. Use this function to u to save the count to our database before updating our state.

```js
function saveCount(newCount) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("All things went well!");
    }, 1000);
  });
}

import React, { useReducer } from 'react';

const initialState = {count: 0};

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const increment = () => {
    const newCount = state.count + 1;
    saveCount(newCount).then(() => dispatch({type: 'INCREMENT'}) );  
  };


  const decrement = () => {
    const newCount = state.count - 1;
    saveCount(newCount).then(() => dispatch({type: 'DECREMENT'}) );  
  };

  const {count} = state;

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
};

```

7. Now, let's prevent our user from clicking any buttons if we haven't updated the API yet.

  * Add a new key to our state called `isSaving` with a default value of `false`.
  * Before we call `saveCount`, we should use our `isSaving` flag to display a "Loading" message to our user. We should also disable the buttons so they can't be clicked. (HINT: use the `disabled` property of the button)
  * Once we get our response back, we should set `isSaving` to false and update our UI to match.

```js
import React, { useReducer } from "react";

function saveCount(newCount) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("All things went well!");
    }, 1000);
  });
}

const initialState = { count: 0, isSaving: false };
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, isSaving: false };
    case "DECREMENT":
      return { count: state.count - 1, isSaving: false };
    case "SAVE":
      return {...state, isSaving: true };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  const { count, isSaving } = state;

  const increment = () => {
    const newCount = state.count + 1;
    dispatch({ type: "SAVE" });
    saveCount(newCount).then(() => dispatch({ type: "INCREMENT" }));
  };

  const decrement = () => {
    const newCount = state.count - 1;
    dispatch({ type: "SAVE" });
    saveCount(newCount).then(() => dispatch({ type: "DECREMENT" }));
  };

  return (
    <div>
      <p>The count is {count}</p>
      {isSaving && <p>Loading...</p>}
      <button onClick={increment} disabled={isSaving}>
        +
      </button>
      <button onClick={decrement} disabled={isSaving}>
        -
      </button>
    </div>
  );
};
```

8. Build a simple ToDo list application using React. Your ToDo list does not need to have persistence. You should have the ability to:

  * Display a list of ToDos
  * Add a new item to the list
  * Remove an item from the list
  * Update an item in the list

You may choose to add any other features if you like, and may also choose whether to use `useState` or `useReducer`
