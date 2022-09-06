# Intro To React

## Lesson Plan

By the end of the lecture today we will understand what React is and how it can simplify our workflow

## What is React?

Well, according to the docs, React is a js library for building user interfaces
Link: https://reactjs.org

## Ask Students

- What are some similariteis/difference between a library and a framework?

  - Libraries give you more freedom in terms of choices and code structure
  - Frameworks often provide multiple choices
  - Frameworks invert control of the program

  NOTE: give analogy of building a house

## Why is React so popular

- Used (and created) by FB to solve some problems they were having
- Declarative
- Component Based
- Used to also build mobile apps

## What does it mean to be declarative?

- imperative programming is like how you do something, and declarative programming is more like what you do.

NOTE: analogy of asking a friend to paint a picture, and you don't care
how its done (declarative), vs Bob Ross way of paining a picture (imperative)

## Let's look at some code!

Let's go through how we would create an element and insert it into the DOM
For example, show Me how I could add a h1 to the page with text of Hello World

Answer

```js
const root = document.getElementById("app");
const title = document.createElement("h1");
title.innerText = "Hello World";
root.appendChild(title);
```

Now, let's look at how we can accomplish the same thing using React

- Either uncomment react lines or show them new html page

NOTE: discuss arguments in React.createElement

Answer

```js
const h1 = React.createElement("h1", {}, "Hello World");

ReactDOM.render(h1, document.getElementById("react-root"));
```

### Ask, how is this difference between the bit of code and the last piece of code.

## Student do (5 min)

Ask students to create similar component the renders a button using React with text inside

## Props

How do we pass in properties (abbreviated as props) to our components?

We use the empty object we ignored earlier to pass in properties to our objects
For example, styles and classes

NOTE: Caveat, in React to add classes we use the word classNames. Can anyone think of why?
Ans: class is a reserved word in javascript, and DOM Components mostly use JS api, so they
use JS properties (e.g. node.className, node.htmlFor, etc)

NOTE: props have to be expressions, no if or for loops

## Nested Elements

How do we have nested elements in our components?

Well, the third argument in createElement accepts an array of children to be inserted

## Student Do

Create a react element that is a div with 2 children paragraphs,

- 1st p background of color blue
- 2nd p font italic

### Ask: using what we've learned so far, how can we create elements with dynamic props?

NOTE: Mention capitalizing function names because they resemble an instance of a specific element

## Student Do (5 min)

Ask students to create a function that returns a button element with dynamic color, and dynamic text

## Deep dive into components

- What exactly are components?
  Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

NOTE: Note: Always start component names with a capital letter.
React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

## Show example of React functions with JSX

Fundamentally, JSX just provides syntactic sugar for the React.createElement(component, props, ...children) function

We use something called a compiler to take our JSX and convert our code to valid javascript

What is a compiler? A compiler is a program that converts one language into another (usually lower level) language

The name of the compiler is called Babel https://babeljs.io/docs/en/

LINK: Show online babel editor https://babeljs.io/repl/#?browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACQKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8amciA7nGevQEJaAekasA3EQC-RIA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.9.0&externalPlugins=

Demonstrate My Old Project and give students assignment to go over
https://github.com/erwinsaget/Neighborhood-Chef
file:///Users/erwinssaget/Code/Neighborhood-Chef/index.html
