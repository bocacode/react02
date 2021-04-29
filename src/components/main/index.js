import React, { useState } from 'react'

function Main() {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <p>The count is {counter}.</p>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button onClick={() => setCounter(Math.max(0,counter - 1))}>-1</button>
    </>
  )
}

export default Main