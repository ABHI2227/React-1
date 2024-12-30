import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} times`;
    });

    return (
        <>  
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Plus {count} times</button>
            <button onClick={() => setCount(count - 1)}>Click Minus {count} times</button>

            </>
    )
}


export default UseEffect
