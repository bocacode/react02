import React from 'react'
import { Link } from 'react-router-dom'

function SingleCoffee({ coffee }) {
  if(!coffee.title) {
    return null
  }
  const slug = coffee.title.toLowerCase().replace(' ', '-')
  return (
    <p><Link to={`/coffees/${slug}`}>{coffee.title}</Link></p>
  )
}

export default SingleCoffee
