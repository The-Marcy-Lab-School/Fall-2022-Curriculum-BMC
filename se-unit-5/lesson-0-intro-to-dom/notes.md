# Unit 5 Lesson 0: Intro to the DOM

## Key Terms
* Document Object Model
* tree
* element node

## Essential Questions
* What is the DOM and why must we learn to manipulate it?
  - HTML page as an object
  - to make our websites dynamic 
* Why is it important that we build dynamic webpages? 
  - So that we can have the BEST user experience (easy to digest, attract for people!)

* Which sort of engineers would work with the DOM most often?
  - frontend engineers 
  - full-stack engineers 

* What tools can we use to visualize the DOM?
  - Developer Tools
    - Inspect
    - Elements 
    - Console

* What is the `document` object?
  - The DOM and HTML are two similar, but they are DIFFERENT 
  - The DOM is alive, changes, can grow, can be dynamic
  - Access properties like any object
  - data properties as well as methods
  - Update/assignmetn property values like any other object 

* How does the _tree_ data structure allow us to visualize relationships between elements in the DOM?
  - Helps us see parent-child relationships 
  - HTML file can be thought of as a tree!

## Learning Changes
* We will be developing in VSCode and our local (Ubuntu) terminal.
* We will be using `Inspect` to view the `Elements` tab and the `Console`.
* `debugger` is your new best friend.

## Experimenting with our own DOM!
* Same set up as in previous units!
  * `index.html` links to any `styles.css` with a script tag to `index.js`
  * Open up your `index.html` in the browser
  * _Or_ use the Live Server VSCode Extention

### The `document` is a Tree
* So we can access its children and traverse it like a tree!

### The `document` is a JavaScript Object
* So we can access and edit its properties like a regular object!