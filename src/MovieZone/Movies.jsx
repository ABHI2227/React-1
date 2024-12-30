import React, { useState } from 'react'
import { movies } from './data.js'




function Movies() {
    const [movieList, setMovieList] = useState(movies);

    const handleFilter = (category) => {
        const updatedList = movies.filter((movie) => movie.category === category);
        setMovieList(updatedList);
    };


    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "center  mx-3", alignItems: "center", marginTop: "20px" }}>
                    <button onClick={()=> setMovieList("movies")} type="button" className="btn btn-outline-primary  mx-3">All</button>
                    <button onClick={()=> handleFilter("Action")} type="button" className="btn btn-outline-secondary  mx-3">Action</button>
                    <button onClick={()=> handleFilter("Thriller")} type="button" className="btn btn-outline-success  mx-3">Thriller</button>
                    <button onClick={()=> handleFilter("Animation")} type="button" className="btn btn-outline-danger  mx-3">Animation</button>
                    <button onClick={()=> handleFilter("Horror")} type="button" className="btn btn-outline-warning  mx-3">Horror</button>
                    <button onClick={()=> handleFilter("Drama")} type="button" className="btn btn-outline-info  mx-3">Drama</button>
                    <button onClick={()=> handleFilter("Sci-Fi")} type="button" className="btn btn-outline-primary  mx-3">Sci-Fi</button>

                </div>
            </div>

            <div style={{
                display: "flex", flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                textAlign: "center",
                width: "1300px",
                // backgroundColor:"yellow",
                margin: "auto",
                marginTop: "20px"
            }}>
                {movieList.map((data) => (
                    <div key={data.id} style={{ maxWidth: "280px", textAlign: "center" }}>
                        <div style={{ padding: "10px", className: "hover_effect" }}>
                            <img src={data.poster_path} alt="" style={{ width: "200px", height: "280px", borderRadius: "10px", border: '1px solid yellow' }} />
                        </div>
                        <h5>{data.title}</h5>
                        <p>{data.release_date}</p>
                    </div>
                ))}

            </div>

        </>
    )
}

export default Movies