import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
    const arr = [
        { id: 1, title: "Java_Course", price: 100, duration: "3 months" },
        { id: 2, title: "Python_Course", price: 200, duration: "6 months" },
        { id: 3, title: "NodeJS_Course", price: 300, duration: "1 year" },
        { id: 4, title: "React_Course", price: 400, duration: "2 years" }
    ]
    return (
        <>
            {arr.map((data) => (
                <div key={data.id}>
                    <li>
                        <Link to={`/Course/${data.id}`}>{data.title}</Link> 
                    </li>
                </div>
            )
            )}
        </>
    )
}

export default Product