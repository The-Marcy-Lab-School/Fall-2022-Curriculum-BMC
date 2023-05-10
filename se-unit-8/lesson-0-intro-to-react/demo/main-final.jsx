import ReactDOM from "react-dom/client";

const Header = () => {
  return <h1>My Pet Pics</h1>;
};

const InstagramPost = ({src, caption}) => {
  return (
    <div className="insta-pic">
      <img alt="cat pic" src={src} />
      <p>{caption}</p>
    </div>
  );
};

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

ReactDOM.createRoot(document.querySelector("#root")).render(
  <App />
);