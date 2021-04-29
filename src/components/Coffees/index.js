import React from 'react'
import SingleCoffee from './SingleCoffee'

// function Coffees() {
//   return <section>functional component coffees</section>
// }

class Coffees extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    console.log('my component loaded painfully')

    fetch('https://api.sampleapis.com/coffee/hot')
      .then(response => response.json())
      .then(dataReceived => this.setState({ data: dataReceived }))
      .catch()
  }

  render() {
    console.log('this is the data', this.state.data)

    return (
      <>
        <ul className='allCoffees'>
          {this.state.data.map(item => {
            return <SingleCoffee item={item} />
          })}
        </ul>
      </>
    )
  }
}

export default Coffees
