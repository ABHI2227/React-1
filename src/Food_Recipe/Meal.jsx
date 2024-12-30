import React, { useEffect, useState } from 'react';

function Meal() {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState("Indian");
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
        const data = await api.json();
        console.log(data.meals);
        setMealData(data.meals || []); // Handle null responses
      } catch (error) {
        console.error("Error fetching area meals:", error);
      }
    };
    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputData}`);
      const data = await api.json();
      console.log("Search data =", data.meals);
      setMealData(data.meals || []); // Update state with search results
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  return (
    <>
      {/* Filter Buttons */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          {["Indian", "American", "Thai", "Japanese", "Canadian", "Russian"].map((cuisine) => (
            <button
              key={cuisine}
              onClick={() => setArea(cuisine)}
              type="button"
              className={`btn btn-outline-${cuisine === "Indian" ? "primary" : cuisine === "American" ? "secondary" : cuisine === "Thai" ? "success" : cuisine === "Japanese" ? "danger" : cuisine === "Canadian" ? "warning" : "info"} mx-3`}
            >
              {cuisine}
            </button>
          ))}
        </div>
      </div>

      {/* Search Form */}
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "30px",
        }}
      >
        <input
          type="text"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          placeholder="Search for a meal..."
          style={{
            padding: "10px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "300px",
          }}
        />
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* Meal Display */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {mealData.length > 0 ? (
          mealData.map((data) => (
            <div key={data.idMeal}>
              <div>
                <img
                  src={data.strMealThumb}
                  alt={data.strMeal}
                  style={{
                    width: "220px",
                    height: "290px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    margin: "20px",
                    border: "1px solid blue",
                  }}
                />
              </div>
              <h6 style={{ textAlign: "center" }}>{data.strMeal}</h6>
            </div>
          ))
        ) : (
          <p style={{ marginTop: "20px", fontSize: "18px", color: "gray" }}>No meals found. Try a different search.</p>
        )}
      </div>
    </>
  );
}

export default Meal;
