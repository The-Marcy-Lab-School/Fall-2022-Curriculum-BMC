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

## What is React & Why Use It?

**React** is a JavaScript framework for building user-interfaces.

React focuses on building reusable **components** that can be composed into larger components. This allows developers to build applications that scale efficiently.

Need more reasons to want to learn React?

**A) Say goodbye to the clunky DOM API**

Vanilla JS with the DOM API (imperative style):

```js
const makeTextElement = (message) => {
  const p = document.createElement("p");
  p.className = "header";
  p.innerText = message;
  return p;
};
```

React (declarative style) and JSX:

```jsx
const Text = ({ message }) => {
  return <p className="header">{message}</p>;
};
// This HTML-like syntax ^ is JSX
```

**B) Component Composition is fast and easy to read**

Vanilla JS with the DOM API (imperative style):

```jsx
const makeCatInstaElement = () => {
  const container = document.createElement("div");
  container.className = "insta-pic";

  const caption = document.createElement("p");
  caption.className = "caption";
  caption.innerText = "cute cat pics";

  const img = document.createElement("img");
  img.src = "img/cat.jpeg";

  container.append(img, caption);
  return container;
};
```

React (declarative style):

```jsx
const Caption = ({ text }) => {
  return <p className="caption">{text}</p>;
};

const Picture = ({ src }) => {
  return <img src={src} />;
};

const CatInsta = () => {
  return (
    <div className="insta-pic">
      <Caption text="cute cat">
      <Picture src="img/cat.jpeg">
    </div>
  )
}
```

**C) The Virtual DOM offers some performance benefits when re-rendering components.**

[Read more about it here](https://blog.logrocket.com/virtual-dom-react/#comparison-chart-real-virtual-shadow-dom)

## Rendering Components

To make our components visible in our UI, we need to **render** them. React doesn't provide this functionality out of the box.

Instead, we:

- Import a package called `ReactDOM`
- Use the `ReactDOM.createRoot` method to create a `root` object.
- Then we call `root.render`:

```jsx
// inside main.jsx
import ReactDOM from "react-dom/client";

// Get the #root from the DOM
const rootEl = document.querySelector("#root");

// Create a ReactDOM root
const root = ReactDOM.createRoot(rootEl);

// Render JSX
root.render(<h1>Hello World</h1>);
```

- `import` is the front-end (browser) equivalent of the `require` function which is only used in the back-end (Node).
- We're using the `client` version of `ReactDOM` (there is also a `native` version for mobile).
- Note that the filename ends with `.jsx`. This is a new file type that enables us to use JSX in our code.

Often, the rendering code will be condensed like this:

```jsx
// inside main.jsx
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <h1>Hello World</h1>
);
```

### JSX Code must be compiled

JSX in our code (`<h1>...</h1>`) cannot simply be executed by our browser. It must first be **compiled** (converted) to vanilla JS.

> <details><summary>See what this code would look like if it were written without JSX</summary><br>
>
> Note how we have to use `React.createElement` here
>
> ```js
> const rootEl = document.getElementById("root");
> const root = ReactDOM.createRoot(rootEl);
>
> root.render(React.createElement("h1", {}, "Hello World"));
> ```
>
> </details>

To help us compile our JSX code, we're using a tool called [Vite](https://vitejs.dev/) (french for "quick", rhymes with "feet"). Vite will compile our code and then create a development server that will serve our compiled website.

We'll go over how to create a new React project using Vite a little later. For now, take a look at the `package.json` file to see the project's dependencies and available scripts.

- Use the `npm run dev` command to start the React development server.

<br>

> <details><summary>What is the React Development Server?</summary>
> <br>
>
> The development server is a bit like express in that it runs on a port on our computer where we can access our compiled website. This development server has **hot-reloading** which lets us instantly see any changes we make while developing. In production, we compile the React code once to produce **static assets** which can be served by our traditional Express server. Any changes we make would require use to "rebuild" those static assets.
>
> </details>

## Components & JSX

React is at its best when we separate the UI into individual **components**.

React components are functions that return a single JSX element.

The first component that we create is typically called `App`

```jsx
// inside main.jsx
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>Hello World</h1>;
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
```

- Component are functions. Note the capitalized name.
- This `App` component returns a `<h1>` _JSX element_.

## Nested Components

By writing our UI as individual function-components, we can nest our components within each other.

```jsx
import ReactDOM from "react-dom/client";

const Header = () => {
  return <h1>My Pet Pics</h1>;
};

const InstagramPost = () => {
  return (
    <div>
      <img alt="cat pic" src="img/cat.jpeg" />
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

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
```

**Q: What are the differences in how each of these components return their children?**

<details>
<summary>Answer</summary>

- `InstagramPost` and `App` each return more than one line of JSX so the returned value is wrapped in `()`
- The `App` component uses fragments (`<>`) to wrap its child elements while `InstagramPost` uses a `<div>`.
- `Header` and `InstagramPost` are both rendered by `App` and are self-closing

Components can return as much (or as little) JSX as you want, **but they all need to return a single surrounding element.**

This can be achieved using using a `<div>` or using **fragments** (`<> </>`).

</details>

## Adding Style

Imagine we had this style rule defined in a CSS file:

```css
.red {
  color: red;
}
```

We can add style by using the `className` property.

```jsx
const Message = () => {
  return <h1 className="red">Hello World!</h1>;
};

const App = () => {
  return (
    <div>
      <Message />
      <Message />
      <Message />
    </div>
  );
};
```

<details><summary><strong>Q: What will this render?</strong></summary><br>

![](./img/style.png)

Note how the `className` attribute in JSX is converted into the HTML attribute `class`.

We can't use the name `class` for this attribute because it is a reserved keyword in JavaScript.

The `for` attribute for `<label>` elements is another example of this. Instead, we use the `htmlFor` attribute.

</details>

<details><summary><strong>Q: How can I add a <code>class="insta-pic"</code> attribute to the <code>div</code> in my <code>InstagramPost</code> component?</strong></summary><br>

```jsx
const InstagramPost = () => {
  return (
    <div className="insta-pic">
      <img alt="cat pic" src="img/cat.jpeg" />
      <p>Check out my cute cat!</p>
    </div>
  );
};
```

</details>

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

Note how we can inject JavaScript values into our components using `{}`.

<details><summary><strong>Q: What will this render?</strong></summary>

<br>

![](./img/props.png)

</details><br>

The `props` parameter will _always_ be passed as an object (even if it is empty) so it is often destructured immediately within the parameter list:

```jsx
const NameHeader = ({ name }) => {
  return <h1>Hello! My name is {name}</h1>;
};
```

## Rendering A List of Elements

- Use array to store data
- Render `{array.map}`
- Give each element a `key` that should be unique (using the index of the array is okay but not ideal)

```jsx
import ReactDOM from "react-dom/client";

const Header = () => {
  /* ... */
};

const InstagramPost = ({ src, caption }) => {
  /* ... */
};

// Array of data
const pictures = [
  { src: "img/cat.jpeg", caption: "meow!" },
  { src: "img/dog.jpeg", caption: "arf!" },
  { src: "img/duck.jpeg", caption: "quack!" },
];

// Create an <InstagramPost /> for each element
const InstagramPosts = pictures.map((picture, idx) => {
  return (
    <InstagramPost key={idx} src={picture.src} caption={picture.caption} />
  );
});

// Render the array in a ul
const PicturesList = () => {
  return <div>{InstagramPosts}</div>;
};

const App = () => {
  return (
    <>
      <Header />
      <PicturesList />
    </>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
```
