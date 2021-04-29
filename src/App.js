import React, { useState }  from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Coffees from './components/Coffees'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // is creating state

  return (
    <div className='App'>
      <header className='App-header'>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <section className='main-section'>
        <Main />
        <Coffees />
      </section>
      <Footer />
    </div>
  )
}

export default App
