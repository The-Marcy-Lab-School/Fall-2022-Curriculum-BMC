# React Router

[React docs](https://reactrouter.com/en/main/router-components/browser-router)
[Full Example](https://github.com/benspector-mls/react-router-with-fetch-and-context)

## React Router Basics

React Router is a package for handling **client-side routing** in a React application and lets us simulate navigation between different "pages" in our application.

> **What do we mean by "simulate navigation"?**

Normally, when we click on a link like...

```html
<a href="./home.html">Home</a>
```

...we are redirected to a separate HTML page that our browser needs to fetch from the server.

With React Router, we can do the same kind of navigation, _but we actually never leave the page_. **Instead of opening a separate HTML file, the same HTML file is used, but we just render different components to the screen.**

![](./notes-img/react-router-demo.gif)

😮 _oooooh so smooth_...

## Using React Router

### 0) Install the package `react-router-dom`

React Router is not provided by default in Vite projects so we have to install it.

```sh
npm i react-router-dom
```

_There is also a `react-router-native` version for building mobile React apps with React Router_

### 1) Render a `<BrowserRouter>`

We're going to be importing a lot of things from the `react-router-dom` package. The first is the `BrowserRouter` component.

The `BrowserRouter` component hijacks the URL bar, letting us:

- render what we want to render based on the current URL (the "browser location")
- use back-and-forward navigation
- directly update the current browser location

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

### 2) Create your `<Routes>` and `<Route>`s

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

### 3) Create `<Link>`s

The `<Link>` component will replace the `<a>` tags in our HTML.

- Like the `<a>` tag, the `<Link>` will provide a clickable button to redirect to another page.
- Unlike the `<a>` tag, the `<Link>` will NOT actually navigate to a different file, causing a fetch. Instead, only the URL is changed, causing the `<Routes>` to render a new `<Route>`, but we stay on the same "page".

<!-- prettier-ignore -->
```jsx
function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}
```

## More React Router Topics

### Fallback Component

Suppose I had this component that I wanted to render when a URL was entered that didn't match _any_ of the routes I defined:

```jsx
const NotFound = () => <h1>Not Found</h1>;
```

This can easily be accomplished using the `"*"` catch-all route. If none of the previous `<Route>` had a matching `path`, then this `"*"` will match.

```jsx
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Dyanimc Paths

Suppose I want to render a single `<Product>` when someone visits a page like `/products/5`.

I can define a route to render a single `<Product>` with the dynamic path `/products/:id`. In this dynamic path, the `:id` part is a variable that will match to any string following `/products/`.

```jsx
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<Product />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

Then, I can provide links to specific products from my `/products` page.

<!-- prettier-ignore -->
```jsx
const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <ul>
        <li><Link to='/products/1'>Product 1</Link></li>
        <li><Link to='/products/2'>Product 2</Link></li>
        <li><Link to='/products/3'>Product 3</Link></li>
      </ul>
    </>
  )
}
```

Finally, how does the `Product` component know about which `:id` value is currently in the URL?

Using the `useParams` hook from `react-router-dom`! It returns an object containing all of the dynamic portions of the path. In this case, we want the `:id`.

```jsx
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return <h1>Product {id}</h1>;
};
```

## Route Specificity

**Q: Which of the following paths will match the `/products/:id` path?**

- /products
- /products/apple
- /products/5
- /products/5/about

Suppose I wanted to create a page where a user could create a new product. Let's say the path is `/products/create`:

```jsx
<Routes>
  {/* Other routes... */}
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<Product />} />
  <Route path="/products/create" element={<CreateProduct />} />
</Routes>
```

Even though the `/create` portion of the last `<Route>` would match the `:id`, **React Router is smart enough to know that the `/products/create` path is hard-coded and therefore more specific** than the dynamic path `/products/:id` so it properly redirects us.

## Nesting Routes

Currently, I'm defining all of the `/products` routes by providing the full path.

```jsx
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<Product />} />
  <Route path="/products/create" element={<CreateProduct />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

We can nest `<Route>`s to create sections of our application that share the same base path.

```jsx
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/about" element={<About />} />
  <Route path="/products">
    <Route index element={<Products />} />
    <Route path=":id" element={<Product />} />
    <Route path="create" element={<CreateProduct />} />
  </Route>
  <Route path="*" element={<NotFound />} />
</Routes>
```

- We wrap our three `<Route>`s in an outer `<Route>` whose `path` is the base path that the child `<Route>`s use.
- For the first `<Route>` which renders the `<Products />` component, we remove the `path` entirely and instead use `index` which will match with the base path (`/products`) provided in the parent `<Route>`
- For each child, we can remove the `/products/` part of the `path`
