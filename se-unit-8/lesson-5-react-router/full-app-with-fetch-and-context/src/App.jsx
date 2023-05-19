import './App.css'

import { 
  Routes, 
  Route, 
} from "react-router-dom";

import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Fallback from './components/Fallback'
import Products from './components/Products'
import Product from './components/Product'

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/products/:id' element={<Product />}/>
        <Route path='/about' element={<About />}/>
        <Route path="*" element={<Fallback />}/>
      </Routes>
    </>
  )
}

export default App
