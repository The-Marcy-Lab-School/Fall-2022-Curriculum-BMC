

const rootEl = document.getElementById("root");
const ReactDOMRoot = ReactDOM.createRoot(rootEl);

ReactDOMRoot.render(
  React.createElement("h1", {}, "Hello World")
);