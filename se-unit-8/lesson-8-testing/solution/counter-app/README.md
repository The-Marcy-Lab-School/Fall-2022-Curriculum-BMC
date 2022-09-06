# Integration Testing with React

For these exercises, we'll be writing a simple counter app using test driven development. Write your code in the `src` directory, with your tests in the adjacent files.

0. Using `render` from the react testing library, write a test to see if an `App` component can render.

1. Update your test to see if the App component renders a "Counter App" header.

2. Write a test that your App displays an initial count of '0'.

3. Write a test that your App, when clicking 'increment', displays a count of '1'

4. Write a test that your App, when clicking 'decrement', displays a count of '-1'

5. Our requirements have changed a bit - write a test that, given a prop of an initialValue, your app component renders that initial value. Our previous tests should all continue to pass as well after your implementation.

6. Write a test that, given an initialCount and an 'incrementBy' prop, clicking increment increments our count by the incrementBy value. For example, given an initialCount of 2, and an incrementBy of 3, clicking increment should then display 5.

7. Write a test that, given an initialCount and an 'incrementBy' prop, clicking decrement decrements our count by the incrementBy value. For example, given an initialCount of 2, and an incrementBy of 3, clicking increment should then display -1. 
