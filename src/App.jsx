import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Meal from './Food_Recipe/Meal';
import Contact from './pages/Contact';
import About from './pages/About'
import Product from './pages/Product';
import Course from './pages/Course';
import NavigateC from './pages/NavigateC';
import Dashbord from './pages/Dashbord';
import Profile from './pages/Profile';
import IndiaGov from './Home/IndianGov';



function App() {
  return (
    <>
      <Router>
        <NavigateC />
        <Routes>
    
          <Route path="/" element={<IndiaGov/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meal" element={<Meal />} />
          <Route path="/product" element={<Product />} />
          <Route path="/course/:id" e lement={<Course />} />
          <Route path="/Dashbord" element={<Dashbord/>} />
          <Route path="/Profile" element={<Profile/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
