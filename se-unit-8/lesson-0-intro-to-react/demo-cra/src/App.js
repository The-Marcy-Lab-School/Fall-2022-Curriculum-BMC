import logo from './logo.svg';
import './App.css';

function Header() {
  return <h1>Hello World</h1>;
}

function InstagramPost() {
  return (
    <div>
      <img alt="logo" src={logo} />
      <p>Check out my cute cat!</p>
    </div>
  );
}

const styles = {
  width: '300px',
  background: 'red'
};

export default function App() {
  return ( 
    <div style={styles}>
      <Header />
      <InstagramPost />
    </div>
  )
}
