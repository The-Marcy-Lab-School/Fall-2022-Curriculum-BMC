import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}

export default Nav;