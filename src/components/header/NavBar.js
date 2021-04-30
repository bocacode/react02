import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav>
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/coffee">Coffees</NavLink>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)} >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  )
}

export default NavBar
