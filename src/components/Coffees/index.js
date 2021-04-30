import React from 'react'
import SingleCoffee from './SingleCoffee'

class Coffees extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coffees: null
    }
  }
  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/iced')
      .then(response => response.json())
      .then(data => this.setState({ coffees: data }))
      .catch(err => console.log(err))
  }
  handleButtonClick(type) {
    this.setState({ coffees: null })
    fetch(`https://api.sampleapis.com/coffee/${type}`)
      .then(response => response.json())
      .then(data => this.setState({ coffees: data }))
      .catch(err => console.log(err))
  }
  render() {
    const { coffees } = this.state
    return (
      <>
        <h2>Coffees:</h2>
        <button onClick={() => this.handleButtonClick('hot')}>HOT</button>
        <button onClick={() => this.handleButtonClick('iced')}>ICED</button>
        {!coffees ? <p>Loading...</p> : coffees.map(coffee => {
          return <SingleCoffee key={coffee.id} coffee={coffee} />
        })}
      </>
    )
  }
}

export default Coffees
