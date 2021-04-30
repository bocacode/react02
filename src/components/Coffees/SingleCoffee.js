import React from 'react'

function SingleCoffee({ coffee }) {
  if(!coffee.title) {
    return null
  }
  return (
    <li key={coffee.id}>
      <div>
        <h3>{coffee.title}</h3>
        <span>{coffee.description} </span>
      </div>
      <img src={`https://loremflickr.com/200/200/coffee?lock=${coffee.id}`} alt='' />
    </li>
  )
}

export default SingleCoffee
