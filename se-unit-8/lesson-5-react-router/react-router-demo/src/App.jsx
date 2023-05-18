import './App.css'

import { Routes, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>
  )
}
const Dashboard = () => {( <h1>Dashboard</h1> )};
const About = () => <h1>About</h1>;
const Products = () => <h1>Products</h1>;
const Fallback = () => <h1>Page Not Found</h1>

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/about' element={<About />}/>
        <Route path="*" element={<Fallback />}/>
      </Routes>
    </>
  )
}

export default App
