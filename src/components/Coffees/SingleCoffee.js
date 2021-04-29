import React from 'react'

function SingleCoffee({ item }) {
  return (
    <li key={item.id}>
      <div>
        <h3>{item.title}</h3>
        <span>{item.description} </span>
      </div>
      <img src='https://loremflickr.com/200/200/coffee' alt='' />
    </li>
  )
}

export default SingleCoffee
