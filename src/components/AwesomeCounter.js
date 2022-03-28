import React, { useState } from 'react'
import Header from './header/Header'

const AwesomeCounter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue ?? 0)
  const add = () => {
    setCount((prevCount) => prevCount + 1)
  }
  const remove = () => {
    setCount((prevCount) => {
      const result = prevCount - 1
      if (result < 0) {
        return 0
      }
      return result
    })
  }
  return (
    <div>
      <Header />
      <button onClick={remove}>Remove</button>
      <span>{count}</span>
      <button onClick={add}>Add</button>
    </div>
  )
}

export default AwesomeCounter
