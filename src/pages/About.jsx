import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {

const navigate = useNavigate();
const goBack = () => {
  navigate(-1);
}

const goHome = () => {
  navigate("/");
}

  return (
    <>
    /* use navigation hook use  */
    <div>
      <button onClick={goHome} style={{margin:"10px"}} >Go to home</button>
      <button onClick={goBack}>Go to back</button>



      
    </div>
    
    </>
  )
}

export default About