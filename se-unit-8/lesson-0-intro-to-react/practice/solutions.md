# Practice Exercises 8.0

0. In your own words, describe some of the features of React. What makes it so popular?

** Suggested Answer** Here are a few things you might consider:

React is a powerful component library for building complex User Interfaces. A few reasons why it's so popular:

  * Performance - the Virtual DOM allows us to see huge performance increases over classic DOM Manipulation
  * Declarative API - React is built to prefer declarative programming, mean you can build applications that say what should happen instead of how it happens.
  * Rich community - there are a lot of open source libraries and plugins that you can take advantage of, and it's also possible to write your own reusable extensions.

1. What is the difference between declarative and imperative programming? How can we use this in our applications?

** Suggested Answer**

With declarative programming, you want your code to say what it's doing instead of how it's doing it. Consider the process of summing all numbers in an array.

```js
const array = [1, 5, 7, 9]
let sum = 0
for (let i = 0; i < array.length; i++) {
  sum += array[i]
}
```

This would be an example of imperative programming - we're describing step by step what is happening. Compare that to the code below:

```js
const array = [1, 5, 7, 9]
const sum = array.reduce((sum, number) => sum + number );
```

or even:

```js

function sum(array, initialValue=0){
  return array.reduce((sum, number) => sum + number, initialValue);
}

// In another file somewhere
const array = [1, 5, 7, 9]
const total = sum(array);
```

Notice that, in all of these examples, the details of how our code is working still has to live somewhere. We've just chosen to abstract it away into other functions. Compare this to `ReactDOM.render` - you don't have to worry about how the rendering is happening, you just know that it is happening.

2. What is the purpose of Babel in developing JavaScript applications? How does it make our lives easier?

There are many different browsers across many different operating systems, and each one could be running a slightly different version of JavaScript. Babel allows us to take advantage of modern JS features while still producing code that will be backwards compatible. This happens through transpiling - taking the JS code that we write, and producing JS code that will run on older browsers.

3. Using `React.createElement`, create an `h1` tag with an inner text of 'Hello World'.

```js
const h1 = React.createElement('h1', {}, 'Hello World')
```

4. Given an html page with a div that has an id of `app`, render the `h1` tag you created previously to the DOM.

```js
const h1 = React.createElement('h1', {}, 'Hello World')
ReactDOM.render(h1, document.getElementById('app'));
```

5. Using `React.createElement`, create a `div` with the following children:
  * An h1 with text of "Ice Cream Menu"
  * An unordered list with three list items inside. The list items should have inner text of "Chocolate", "Vanilla", and "Rocky Road"

```js
const app = React.createElement('div', {}, [
    React.createElement('h1', {}, 'Hello World'),
    React.createElement('ul', {}, [
      React.createElement('li', {}, 'Chocolate'),
      React.createElement('li', {}, 'Vanilla'),
      React.createElement('li', {}, 'Strawberry'),
    ])
  ])
ReactDOM.render(app, document.getElementById('app'));
```

6. Write a function called `App` that returns the element you created in the previous example. Use the function to render into the DOM instead of the element.

```js

const App = () => {
  return React.createElement('div', {}, [
      React.createElement('h1', {}, 'Hello World'),
      React.createElement('ul', {}, [
        React.createElement('li', {}, 'Chocolate'),
        React.createElement('li', {}, 'Vanilla'),
        React.createElement('li', {}, 'Strawberry'),
      ])
    ])
}
ReactDOM.render(App(), document.getElementById('app'));
```

7. Update your `App` function to take in an argument called `props`. Props should have two keys:
  * `title`: a string to represent the page title (use in the text of the h1)
  * `flavors`: an array of strings, each one representing an ice cream flavor.
Change your function so that it can render that data dynamically.

```js
const App = (props) => {
  const { title, flavors } = props;
  return React.createElement('div', {}, [
      React.createElement('h1', {}, title),
      React.createElement('ul', {}, flavors.map(flavor => React.createElement('li', {}, flavor)))
    ])
}
ReactDOM.render(App({title: 'Hello!', flavors: ['Mint']}), document.getElementById('app'));
```

8. Add Babel to your project following the guide here. This will allow us to write JSX so we don't have to keep using `React.createElement`. Update your code to use JSX.


```js
const App = ({title, flavors}) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>{flavors.map(flavor => <li>{flavor}</li>) }</ul>
    </div>
  )
}
ReactDOM.render(<App title="Hello World!" flavors={["Mint Chip", "Cookie Dough"]} />, document.getElementById('app'));
```
