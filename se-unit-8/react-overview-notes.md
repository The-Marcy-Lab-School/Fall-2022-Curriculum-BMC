# React Overview

**React** is a JavaScript framework for building user-interfaces. 

React focuses on building small **components** that can be composed into larger components. 

Components can be reused and generated dynamically, allowing developers to build applications at scale efficiently.

## Resources

0. Hacker Rank [Basic](https://www.hackerrank.com/skills-directory/react_basic), [Intermediate](https://www.hackerrank.com/skills-directory/react_intermediate), and [Advanced](https://www.hackerrank.com/skills-directory/react_advanced)
1. [React Docs](https://react.dev/)
    - [Quick Start](https://react.dev/learn)
    - [Tic Tac Toe Tutorial](https://react.dev/learn/tutorial-tic-tac-toe)
    - [Editor Setup](https://react.dev/learn/editor-setup)
    
2. [Front End Masters Course](https://react-v8.holt.courses/lessons/no-frills-react/pure-react)
    - start with react cdn
3. Assignments
    - [multilingual app](https://classroom.github.com/a/qWgGhoy9)
      - [Ben's Solution](https://github.com/The-Marcy-Lab-School-Assignments/8-0-react-multilingual-app-benspector-mls)
    - [giphy-search](https://classroom.github.com/a/cy62ZBkP)
      - [Ben's Solution](https://github.com/The-Marcy-Lab-School-Assignments/8-1-giphy-search-benspector-mls)
    - [personal pokedex](https://classroom.github.com/a/_fORhyAU)
      - [Ben's Solution](https://github.com/The-Marcy-Lab-School-Assignments/8-2-personal-pokedex-benspector-mls)
    - [react router robot army](https://classroom.github.com/a/vupeLtbY)
      - [Ben's Solution](https://github.com/The-Marcy-Lab-School-Assignments/8-3-react-router-robot-army-benspector-mls/tree/main)

## High Level Notes

**When building a new application, there are a few ways to start:**
- Build it from scratch (initialize a node project, create the folders and file structure, install packages, etc..)
- Use an application builder like Create React App (CRA) or Vite

**In Development**

- An `index.html` file with a `#root` element is where we "attach" our components
- All React code is transformed into vanilla JS and compiled into `bundle.js` which handles all of the DOM manipulation
- `bundle.js` is created when we run `react-scripts start` / (which is aliased as `npm run dev` in `package.json`)

**In Production**
- `npm build` will create static assets that your server can simply host from a public folder

## Topics
**React development tools**
- React
- react-dom/client
- eslint
- Application builders like Create React App or Vite

**Browser-Compatible import/export with ESModules**
- Named exports — export const val / import { val }
- Default exports — export default const val / import val

**Rendering React components with createRoot and root.render() from react-dom/client**
- JSX
- Injecting JavaScript
- className and other common JSX attributes
- Function Components

**Managing State**
- useState
- Passing data through props

**Event Handlers & Controlled Forms**
- Fetching from APIs & other Async operations
- useEffect

**Component Composition**
- Using context (createContext and useContext, <Context.Provider value={}>)

**Client-Side Routing**
- React Router

**React testing**
- Jest
- RTL

**Advanced**
- Redux
- Error Boundaries

## Common Imports From React/React-DOM

```js
import {
  useState,
  useEffect,
  useContext,
  createContext,
  StrictMode,
} from 'react';

import { createRoot } from 'react-dom/client'

import './styles.css' // importing styles is also important to know!
```

## Organization Strategies

* A file structure like this is used:

```
client/
├── components/
│   ├── App.js
│   ├── OtherComponent1.js
│   └── OtherComponent2.js
├── contexts/
│   ├── MyContext.js
│   └── MyContextProvider.js
├── styles/
│   ├── App.css
│   ├── OtherComponent1.css
│   └── OtherComponent2.css
└── index.js
```

* The `index.js` file lives in the root of the `client` directory and simply renders the top-level `App` component at the `root`. We also may use the `StrictMode` utility component to wrap everything.

```jsx
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const rootEl = document.getElementById('root');
const root = ReactDOM.createRoot(rootEl);
root.render(
  <StrictMode>
      <App />
  </StrictMode>
);
```
  
* A top-level `App` component imports styles, renders the rest of the components, might wrap them in a `ContextProvider`, etc...

```jsx
import '../styles/App.css';
import OtherComponent1 from './OtherComponent1'
import OtherComponent2 from './OtherComponent2'
import MyContextProvider from '../contexts/MyContextProvider'

export default function App() {
  return (
    <MyContextProvider>
      <OtherComponent1 />
      <OtherComponent2 />
    </MyContextProvider>
  )
}
```

## JSX

## Hooks

An absolutely key concept for you to grasp is hooks rely on this strict ordering. **As such, do not put hooks inside if statements or loops.**