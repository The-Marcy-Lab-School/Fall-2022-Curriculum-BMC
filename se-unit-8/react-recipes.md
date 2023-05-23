# React Recipes

Start a react project by entering the command below and then selecting _React_ and _JavaScript_ for your template.

```
npm create vite@latest project-name
```

**Table of Contents**

- Rendering the App
- Making components
- Components Rendering components
- Rendering components from an array
- Managing state with useState
- Fetching with useEffect
- Context
- React Router

## Rendering the App

```jsx
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

#### Rendering the App with a BrowserRouter and Provider

```jsx
import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ContextProvider from "./contexts/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
```

## Making Components

React components are functions that return JSX. Typically, a component will live in its own file that exports that component.

```jsx
const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <p>A React appliction by Benjamin Spector</p>
    </>
  );
};

export default App;
```

- The `()` surrounding the JSX is required unless the component returns only one JSX element.
- `<> </>` is a **fragment**. React components must return a single JSX element. Fragments don't produce any HTML but it lets a React component return multiple JSX elements. `<div>`s work find as well but they _do_ produce HTML.

## Components Rendering Components

React components can render other components.

```jsx
const Caption = ({ text }) => {
  return <p className="caption">{text}</p>;
};

const Picture = ({ src }) => {
  return <img src={src} />;
};

const InstagramPost = () => {
  return (
    <div className="insta-pic">
      <Caption text="cute cat">
      <Picture src="img/cat.jpeg">
    </div>
  )
};
```

- `text` and `src` are **props** - values passed to a component from a parent component.
- Props (and any JavaScript expression) can be inserted into JSX using the syntax `{ expression }`

## Rendering components from an array

When we fetch data from an API that returns an array of objects (e.g. a list of tech products), we will often want to render a component for each element in that array.

This example shows how we can render an `InstagramPost` for each element in the `pictures` array.

```jsx
const InstagramPost = ({ src, caption }) => {
  return (
    <div className="insta-pic">
      <img src={src} />
      <p>{caption}</p>
    </div>
  )
};

const pictures = [
  { src: "img/cat.jpeg", caption: "meow!" },
  { src: "img/dog.jpeg", caption: "arf!" },
  { src: "img/duck.jpeg", caption: "quack!" },
];

const App = () => {
  return (
    <>
      <h1>My Photos</h1>
      {
        pictures.map((picture) => (
          <InstagramPost src={picture.src} caption={picture.caption} />
        ));
      }
      <p>By Benjamin Spector</p>
    </>
  )
}
```

- The `{}` allow us to render an array of JSX elements.
- We use the `.map` method to convert an array of data (`pictures`) into an array of JSX elements/components (`InstagramPost`s)

## Managing state with useState

The `useState` hook is imported from `react` when we want to manage a piece of state between renders. `useState` is invoked with an initial state value and returns an array containing:

- the current value of the state at index `0`
- a function for re-rendering the component with a new state value at index `1`

This example shows a `LikesButton` component that counts how many times something has been "liked".

```jsx
import { useState } from "react";

const LikesButton = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="likes-container">
      <button onClick={handleClick}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  );
};
```

- The value of `likes` on the first render is set to be `0`
- Each time the `<button>` is clicked, `setLikes` will trigger the `LikesButton` to re-render with an updated `likes` value.

In this variation, we use a Boolean for state.

```jsx
import { useState } from "react";

const LikesButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button onClick={handleClick}>{isLiked ? ♥ : ♡}</button>
  );
};
```

- Using the `isLiked` state, we can conditionally render what is shown on the button.

## Fetching with useEffect

## Context

## React Router
