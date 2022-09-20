import React from 'react'
import '../../App.css';

function CourseCard({courseData}) {
  return (
    <div className="card" id="course-card">
    <div className=""><img src={courseData.image} alt="course" /></div>
    <div className="card-body">
        <h3 className="text-center">This Course includes</h3>
        <ul>
            <li>10 Hours Of HD videos</li>
            <li>Access to exclusive Dugsiiye community</li>
            <li>Certificate of Completion</li>
            <li><span className="price">$15.00</span></li>
        </ul>
        <button className="btn btn-success">Login to Enroll</button>
    </div>
    </div>
  )
}

export default CourseCard;