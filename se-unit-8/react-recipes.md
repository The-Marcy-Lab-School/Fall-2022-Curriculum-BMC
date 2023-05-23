# React Recipes

**Table of Contents**

- [Starting a Vite project](#starting-a-vite-project)
- [Rendering the App](#rendering-the-app)
- [Making components](#making-components)
- [Components Rendering components](#components-rendering-components)
- [Rendering components from an array](#rendering-components-from-an-array)
- [Managing state with useState](#managing-state-with-usestate)
- [Fetching with useEffect](#fetching-with-useeffect)
- [Context](#context)
- [React Router](#react-router)

---

## Starting a Vite project

[Intro to Vite Notes](./lab-review-0-intro-to-vite/)

Start a react project by entering the command below and then selecting _React_ and _JavaScript_ for your template.

```
npm create vite@latest project-name
```

---

## Rendering the App

[Intro to React Notes](./lesson-0-intro-to-react/notes.md)

```jsx
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

---

## Making Components

[Intro to React Notes](./lesson-0-intro-to-react/notes.md)

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

---

## Components Rendering Components

[Intro to React Notes](./lesson-0-intro-to-react/notes.md)

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

---

## Rendering components from an array

[Intro to React Notes](./lesson-0-intro-to-react/notes.md)

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

---

## Managing state with useState

[React State Notes](./lesson-1-state/notes.md)

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

---

## Fetching with useEffect

[useEffect Notes](./lesson-3-useEffect-async/notes.md)

This [Random Dog API](https://dog.ceo/dog-api/documentation/random) will return a JSON object like this:

```json
{
  "message": [
    "https://images.dog.ceo/breeds/mexicanhairless/n02113978_3866.jpg",
    "https://images.dog.ceo/breeds/keeshond/n02112350_7141.jpg",
    "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_1208.jpg"
  ],
  "status": "success"
}
```

We perform the `fetch()` call inside of the `useEffect` and when we get the data back, we update a piece of state created with `useState`.

```jsx
import { useState, useEffect } from 'react';

const dogImageApi = 'https://dog.ceo/api/breeds/image/random/3'

const App = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch(dogImageApi);
      const data = await res.json();
      setPictures(data.message)
    }
    doFetch();
  }, []) // run only on the first render

  return (
    <>
      <h1>My Photos</h1>
      {
        pictures.map((src) => (
          <img src={src} />
        ));
      }
      <p>By Benjamin Spector</p>
    </>
  )
}
```

The dependency array is empty meaning the effect will only run on the first render.

---

## Context

[Context Notes](./lesson-4-context/notes.md)

##### 1. Create a context object

```jsx
// src/context/InstagramContext.jsx
import { createContext } from "react";

const InstagramContext = createContext();

export default InstagramContext;
```

##### 2. Create a Context Provider Wrapper

```jsx
// src/context/InstagramContextProvider.jsx
import { useState } from "react";
import InstagramContext from "./InstagramContext";

// children is whatever this component is wrapped around
const InstagramContextProvider = ({ children }) => {
  const [totalLikes, setTotalLikes] = useState(0);
  const incrementTotalLikes = () => setTotalLikes(totalLikes + 1);

  const contextValues = { totalLikes, incrementTotalLikes };

  return (
    <InstagramContext.Provider value={contextValues}>
      {children}
    </InstagramContext.Provider>
  );
};

export default InstagramContextProvider;
```

##### 3. Wrap the App in the Provider

```jsx
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import InstagramContextProvider from "./context/InstagramContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <InstagramContextProvider>
    <App /> {/* <--- This is the `children` */}
  </InstagramContextProvider>
);
```

##### 4. Use the Context

Any component that is a descendant from a `InstagramContext.Provider` may utilize the `value` of that provider using the `useContext` hook from `react`.

The `App` doesn't need to prop drill anymore:

```jsx
import Header from "./components/Header";
import PicturesList from "./components/PicturesList";

const App = () => {
  return (
    <>
      <Header />
      <PicturesList />
    </>
  );
};
```

```jsx
import { useContext } from "react";
import InstagramContext from "../context/InstagramContext";

const Header = () => {
  const { totalLikes } = useContext(InstagramContext);

  return (
    <header>
      <h1>My Pet Pics</h1>
      <p>My pictures have been liked {totalLikes} times!</p>
    </header>
  );
};
```

```jsx
import { useState, useContext } from "react";
import InstagramContext from "../context/InstagramContext";

const LikesButton = () => {
  const [likes, setLikes] = useState(0);
  const incrementTotalLikes = useContext(InstagramContext);

  const handleClick = () => {
    incrementTotalLikes();
    setLikes(likes + 1);
  };

  return (
    <div className="likes-container">
      <button onClick={handleClick}>Like</button>
      <p>Likes: {likes}</p>
    </div>
  );
};

export default LikesButton;
```

---

## React Router

[React Router Notes](./lesson-5-react-router/notes.md)

##### 1. Render the Browser Router

<!-- prettier-ignore -->
```jsx
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// import BrowserRouter
import { BrowserRouter } from 'react-router-dom'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter> {/* wrap the entire App */}
    <App />
  </BrowserRouter>
)
```

##### 2. Create your `<Routes>` and `<Route>`s

Whenever the location changes, `<Routes>` looks through all its child `<Route>`s to find the best matching `path` and renders the provided `element`.

```jsx
import { Routes, Route } from "react-router-dom";

const Dashboard = () => <h1>Dashboard</h1>;
const About = () => <h1>About</h1>;
const Products = () => <h1>Products</h1>;

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
    </>
  );
}
```
