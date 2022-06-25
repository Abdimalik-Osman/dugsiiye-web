import React from "react";
import "../../App.css";
// import PHP from "../components/images/PHP.png";
import Cards from "../content/Cards";
import CoursesDetails from "../content/CourseDetails";
import CourseShowcase from "../content/coursesShowcase";
function Courses(props) {
  // creating course card
  function createCourse(course) {
    return (
      <Cards
        key={course.id}
        image={course.image}
        title={course.title}
        Cname={course.Cname}
        lecturer={course.lecturer}
        price={course.price}
      />
    );
  }
return (
    <>
      <CourseShowcase />
      
      <div className="my-5">
        <h1 className="text-center py-4 text-3xl sm:text-5xl fw-bold font-Inter ">
          Papular Courses
        </h1>
        <p className="text-center pb-5 text-gray text-sm">
          Discover Your Perfect Program In Our Courses
        </p>
      </div>
      <div className="courses container">
        {CoursesDetails.map(createCourse)}
      </div>
    </>
  );
}
export default Courses;
