# Practice Exercises 8.2

0. Why is state important in web applications? What are some examples of pieces of state that might exist in a ToDo list application?

1. What is the difference between the `useState` and `useReducer` hooks? When might you want to use one over the other?

2. Write a component called `Counter` that renders a count and two buttons - one to increment the count, and one to decrement the count. Don't worry about the behavior yet - just render the UI first. The count should start at zero.

3. Using the `useState` hook, add the ability to both increment and decrement the count.

4. Update your example above to use the `useReducer` hook instead of the `useState` hook. Our state should be an object with a key of `count` that points to our current count.

5. Pretend that each time we change our count, we want to persist those results to an API. You can assume you have access to a function called `saveCount` that makes a post request to your server and returns a promise. For our purposes, assume that it always saves successfully. Use this mock function (below) to save the count to our database before updating our state.

6. Now, let's prevent our user from clicking any buttons if we haven't updated the API yet.

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

```

7. Build a simple ToDo list application using React. You should have the ability to:

  * Display a list of ToDos
  * Add a new item to the list
  * Remove an item from the list
  * Update an item in the list

You may choose to add any other features if you like, and may also choose whether to use `useState` or `useReducer`. For extra credit, build persistence into your app by using the [Local Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
