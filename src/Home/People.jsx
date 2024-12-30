import React, { useContext } from 'react'
import MoneyContext from '../Context/MoneyContext'

const People = () => {
  const data = useContext(MoneyContext);
  return (
    <div>
        <h1>This is People </h1>
        <h3>Money = {data.money}</h3>
        <h3>Counter = {data.counter}</h3>
        <button onClick={() => data.setCounter(data.counter + 1)}>Incement </button>
        <h4>Name = {data.name}</h4>


    </div>
  )
}

export default People