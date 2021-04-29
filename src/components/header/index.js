import React from 'react'
import NavBar from './NavBar'

function Header({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <h1>Welcome {isLoggedIn ? 'Back' : 'Guest'} </h1>
    </>
  )
}

export default Header
