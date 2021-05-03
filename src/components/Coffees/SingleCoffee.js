import React from 'react'
import { Link } from 'react-router-dom'

function SingleCoffee({ coffee, type }) {
  if(!coffee.title) {
    return null
  }
  return (
    <p><Link to={`/coffees/${type}/${coffee.id}`}>{coffee.title}</Link></p>
  )
}

export default SingleCoffee
