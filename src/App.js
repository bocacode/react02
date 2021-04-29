import React, { useState } from 'react'
import Coffees from './components/Coffees'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'

import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // is creating state

  return (
    <div className='App'>
      <header className='App-header'>
        {/* <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}> button in App</button>
        <h1>Welcome {isLoggedIn ? 'hi mr ' : 'log in pls'}</h1>
      </header>
      <section className='main-section'>
        <Main />
      </section>
      <Coffees />
      <Footer />
    </div>
  )
}

export default App
