import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const Course = () => {

  
  const courses = [
    { id: 1, title: "Java_Course", price: 100, duration: "3 months" },
    { id: 2, title: "Python_Course", price: 200, duration: "6 months" },
    { id: 3, title: "NodeJS_Course", price: 300, duration: "1 year" },
    { id: 4, title: "React_Course", price: 400, duration: "2 years" }
  ];

  const { id } = useParams();
  const location = useLocation();


  const courseId = parseInt(id, 10); // Convert `id` to a number
  const course = courses.find((data) => data.id === courseId); // Use `find` to get a single course

  if (!course) {
    return <h1>Course not found</h1>;
  }

  return (
    <>
      <div>
        <h1>Course ID: {course.id}</h1>
        <h2>Course Title: {course.title}</h2>


        /* Pathname added here which shows the exapmle of use location hook */
        {location.pathname != "/Course/2"&& <>
          <h3>Course Price: ${course.price}</h3>
          <h4>Course Duration: {course.duration}</h4>
        </> }
        
        <button>
          <Link to={"/Product"} style={{ textDecoration: 'none', color: 'black'}}>
            All Courses
          </Link>
        </button>
      </div>
    </>
  );
};

export default Course;
