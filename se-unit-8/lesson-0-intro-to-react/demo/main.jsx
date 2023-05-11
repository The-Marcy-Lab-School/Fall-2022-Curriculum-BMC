import ReactDOM from 'react-dom/client';

const Header = (props) => {

  console.log('Header props:', props)

  return (
    <h1>My Pet Pics</h1>
  )
};

const InstagramPost = (props) => {
  console.log('InstagramPost props:', props)

  return (
    <div className='insta-pic'>
      <img alt="cat pic" src={props.source} />
      <p>My pet says {props.caption}</p>
    </div>
  );
};

// Array of data
const pictures = [
  { src: "img/cat.jpeg", caption: "meow!" },
  { src: "img/dog.jpeg", caption: "arf!" },
  { src: "img/duck.jpeg", caption: "quack!" },
];

const firstImage = <InstagramPost source="img/cat.jpeg" caption="meow!"/>
const secondImage = <InstagramPost source="img/dog.jpeg" caption="arf!"/>
const thirdImage = <InstagramPost source="img/duck.jpeg" caption="quack!"/>

const App = (props) => {
  console.log('App props:', props)

  return (
    <>
      <Header />
      {Math.random() > 0.5 ? firstImage : secondImage}
    </>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(
  <App />
)