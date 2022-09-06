# Practice Exercises 8.0

0. In your own words, describe some of the features of React. What makes it so popular?

1. What is the difference between declarative and imperative programming? How can we use this in our applications?


2. What is the purpose of Babel in developing JavaScript applications? How does it make our lives easier?

3. Using `React.createElement`, create an `h1` tag with an inner text of 'Hello World'.

4. Given an html page with a div that has an id of `app`, render the `h1` tag you created previously to the DOM.

5. Using `React.createElement`, create a `div` with the following children:
  * An h1 with text of "Ice Cream Menu"
  * An unordered list with three list items inside. The list items should have inner text of "Chocolate", "Vanilla", and "Rocky Road"

6. Write a function called `App` that returns the element you created in the previous example. Use the function to render into the DOM instead of the element.


7. Update your `App` function to take in an argument called `props`. Props should have two keys:
  * `title`: a string to represent the page title (use in the text of the h1)
  * `flavors`: an array of strings, each one representing an ice cream flavor.
Change your function so that it can render that data dynamically.


8. Add Babel to your project following the guide here. This will allow us to write JSX so we don't have to keep using `React.createElement`. Update your code to use JSX.
