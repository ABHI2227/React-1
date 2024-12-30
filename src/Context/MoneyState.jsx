import React , { useState } from 'react'
import MoneyContext from './MoneyContext'

const MoneyState = (props) => {
    const money = 5500;
    const [counter, setCounter] = useState(0);
    const name = `suman`;
  return (
    <MoneyContext.Provider 
    value={{
        money, 
        counter,
        setCounter,
        name

    }}>
        {props.children}</MoneyContext.Provider>
)
}

export default MoneyState