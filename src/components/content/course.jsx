import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import axios from 'axios';
import CourseDetails from './CourseDetails';
import CourseCard from './course-card';
import "../../App.css";
function Course() {
    const {id} = useParams();
    // find the course details
    const findCourse = (id) => {
      return CourseDetails.find(course => course.id == id);
    }
    const courseData =findCourse(id)
    const lecName = courseData.lecturer.slice(0, 1);
    
  return (
    <React.Fragment>
    <section className="course-details">
      <div className="courses-showcase-content">
        <h2 className="">{courseData.Cname}</h2>
        <span className="info">
        {courseData.info}
        </span><br />
        <p>Last Update: {courseData.lastUpdate}</p>
        <div className="course-lecturer"> <span>{lecName}</span> {courseData.lecturer}</div>
      </div>
    </section>
      <CourseCard courseData={courseData}/>
      </React.Fragment>
  );

}

export default Course;