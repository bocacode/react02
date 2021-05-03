import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Coffees from './components/Coffees'
import CoffeeDetails from './components/Coffees/CoffeeDetails'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false) // is creating state
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </header>
        <section className='main-section'>
          <Switch>
            <Route path="/coffees/:type/:id" component={CoffeeDetails} />
            <Route path="/coffees" component={Coffees} />
            <Route path="/" component={Main} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  )
}

export default App
