import React from 'react'

function Counter () {
  const [count, setCount] = React.useState(0)
  function addOne() {
    setCount(prevCount => prevCount + 1)
  }

  function subtractOne() {
    setCount(prevValue => prevValue - 1)
  }

  return (
    <div className="counter">
      <button className="counter-minus" onClick={subtractOne}>-</button>
      <div className="counter-count">
        <h1>{count}</h1>
      </div>
      <button className="counter-plus" onClick={addOne}>+</button>
    </div>
  )
}

export default Counter