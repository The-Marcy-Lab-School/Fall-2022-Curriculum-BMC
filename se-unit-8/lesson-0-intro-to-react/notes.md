# Intro to React

Key Terms:

- React
- Component
- JSX
- Render
- ReactDom
- ESModule `import` syntax (to import `react` and `react-dom/client`
- injecting JS
- props

```js
import React from "react";
import ReactDOM from "react-dom/client";
```

## What is React?

**React** is a JavaScript framework for building user-interfaces.

React focuses on building small **components** that can be composed into larger components.

Components can be reused and generated dynamically, allowing developers to build applications at scale efficiently.

## Why Use React?

It is fast and lets us use JSX to intuitively build UIs.

Vanilla JS with the DOM API (imperative style):

```js
const makeHeader = (message) => {
  const h1 = document.createElement("h1");
  h1.className = "header";
  h1.innerText = message;
  return h1;
};
```

React (declarative style):

```jsx
const Header = ({ message }) => {
  return <h1 className="header">{message}</h1>;
};
```

## Components & JSX

In React, a **component** is a piece of **reusable** code that represents a part of a user interface.

React uses JSX, an HTML-like syntax that can be written in JS files, to create React components.

Components in React are functions that return a single JSX element:

```jsx
const Header = () => {
  return <h1>Hello World</h1>;
};
```

- This `Header` component returns a `<h1>` _JSX element_.
- Component names are capitalized

## Component Composition

Components can return as much (or as little) JSX as you want, **but they all need to return a single surrounding element.** An easy way to achieve this is by using **fragments** (`<> </>`) or just use a `<div>`

```jsx
const Header = () => {
  return <h1>Hello World</h1>;
};

const InstagramPost = () => {
  return (
    <div>
      <img alt="cat pic" src="imgs/my-img.jpg" />
      <p>Check out my cute cat!</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <InstagramPost />
    </>
  );
};
```

**Q: What are the differences in the syntax between these three components?**

<details>
<summary>Answer</summary>

- `InstagramPost` and `App` each return more than one line of JSX so the returned value is wrapped in `()`
- The `App` component uses fragments (`<>`) to wrap its child elements while `InstagramPost` uses a `<div>`.
- `Header` and `InstagramPost` are both rendered by `App` and are self-closing

</details>

## Rendering Components

To make our components visible in our UI, we need to **render** them. React doesn't provide this functionality out of the box. Instead, we import a package called `ReactDOM`. We're using the `client` version (there is also a `native` version for mobile).

```jsx
import ReactDOM from "react-dom/client";

const Header = () => {
  return <h1>Hello World</h1>;
};

// It is a best practice to bundle all components in a top-level App component.
const App = () => {
  return (
    <>
      <Header />
      <Header />
      <Header />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

React code cannot simply be loaded into an HTML file. It must first be **compiled** (converted to vanilla JS).

We're using a tool called Vite (french for "quick", rhymes with "feet") to create a development server that will do that compilation and serve our website.

Use the `npm run dev` command to start the React development server.

> <details><summary>What is the React Development Server?</summary>
> <br>
>
> The development server is a bit like express in that it runs on a port on our computer where we can access our compiled website. This development server has **hot-reloading** which lets us instantly see any changes we make while developing. In production, we compile the React code once to produce **static assets** which can be served by our traditional Express server. Any changes we make would require use to "rebuild" those static assets.
>
> </details>

## Injecting JavaScript Values

We can inject JavaScript values into our components using `{}`.

```jsx
// We can inject these JS values into JSX
const catName = "Tom";
const catPicUrl = "./img/cat-pic.jpg";

const InstagramPost = () => {
  return (
    <div>
      <img alt="cat pic" src={catPicUrl} />
      <p>Check out my cute cat named ${catName}!</p>
    </div>
  );
};
```

## Props

Every React function-component is passed an argument called `props`. It is an object containing properties provided to the component by the parent.

In this example, the parent component is `App` and it provides a `name` prop to each instance of the `NameHeader` component.

```jsx
const NameHeader = (props) => {
  const { name } = props;
  return (
    <h1>Hello! My name is {name}</h1>
  )
}

const App = () => {
  return (
    <NameHeader name="Ben" />
    <NameHeader name="Carmen" />
    <NameHeader name="Motun" />
  )
}
```

Which renders...

![](./img/props.png)

The `props` parameter will _always_ be an object so it is often destructured immediately within the parameter list:

```jsx
const NameHeader = ({ name }) => {
  return <h1>Hello! My name is {name}</h1>;
};
```

## Adding Style

We can add style by using the `className` prop and defining styles for that class in an imported CSS file.

```jsx
import "./styles/styles.css";

const NameHeader = ({ name }) => {
  return <h1 className="red">Hello! My name is {name}</h1>;
};

const App = () => {
  return (
    <div>
      <NameHeader name="Ben" />
      <NameHeader name="Carmen" />
      <NameHeader name="Motun" />
    </div>
  );
};
```

With this CSS in a `styles/styles.css` file:

```css
.red {
  color: red;
}
```

Which will render this...

![](./img/classes.png)
