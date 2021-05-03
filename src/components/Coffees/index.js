import React, { useState, useEffect } from 'react'
import SingleCoffee from './SingleCoffee'

function Coffees() {
  const [coffees, setCoffees] = useState(null)
  const [type, setType] = useState('hot')
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/${type}`)
      .then(response => response.json())
      .then(data => setCoffees(data))
      .catch(err => console.log(err))
  }, [type])
  return (
    <>
      <h2>Coffees:</h2>
      <button onClick={() => setType('hot')}>HOT</button>
      <button onClick={() => setType('iced')}>ICED</button>
      {!coffees ? <p>Loading...</p> : coffees.map(coffee => {
        return <SingleCoffee key={coffee.id} coffee={coffee} type={type} />
      })}
    </>
  )
}

export default Coffees
