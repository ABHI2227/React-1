import React,{useState} from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import './nav.css'

export const NavigateC = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const navigate = useNavigate();

 const isLoginHandler = () => {
    setIsLoggedIn(true);
    navigate('/dashbord');
  };

  const isLogoutHandler = () => {
    setIsLoggedIn(false);
    navigate('/');
  }


    return (
        <>
            <nav>
                <span className='left'>
                    <Link to={"/"} >WDM</Link>
                </span>
                <span className='right'>
                
                {isLoggedIn && (<>
                    
                <Link to={"/meal"}>meal</Link>
                <Link to={'/course'}>Course</Link>
                <Link to={"/Dashbord"}>Dashbord</Link>
                <Link to={"/product"}>Product</Link>
                <Link to={"/Profile"}>Profile</Link>
                </> )}

                {!isLoggedIn && (<>
                <Link to={"/about"}>About</Link>
                <Link to={"/contact"}>Contact</Link>
                </>)}


                <button onClick={isLoginHandler} style={{backgroundColor:"green",fontWeight: "bold" }} to={'/login'}>Login</button>
                <button onClick={isLogoutHandler} style={{backgroundColor:"red", fontWeight: "bold" }} to={'/logout'} >LogOut</button>
                </span>
            </nav>
        </>
    )
}

export default NavigateC