import React from 'react'
import SingleCoffee from './SingleCoffee'

class Coffees extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      coffees: []
    }
  }
  componentDidMount() {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(data => this.setState({ coffees: data}))
      .catch(err => console.log(err))
  }
  render() {
    const { coffees } = this.state
    if(!coffees) {
      return <h2>Loading</h2>
    }
    return (
      <>
        <h2>Coffees:</h2>
        {coffees.map(coffee => {
          return <SingleCoffee key={coffee.id} item={item} />
        })}
      </>
    )

  }
}

export default Coffees
