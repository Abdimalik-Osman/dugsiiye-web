import React from 'react';
import Courses from './Courses';
import CoursesDetails from "../content/CourseDetails";
import Testimonials from '../content/Testimonials';
import Questions from '../content/Questions';
import QuestionsData from '../content/QuestionsData';
import Showcase from '../content/showcase';

function Home(){

      // creating questions 
  function createQuestion(question){
    return(
      <Questions 
      key={question.id}
      question = {question.question}
      answer = {question.answer}
      />
    )
  }
    return(
        <div>
        <Showcase />
        <Courses />
        
        <Testimonials />

        <div className="questions py-5 ">
        <div className="question-title">
        <h2>Su'aalaha Inta badan Nala Waydiiyo</h2>
        <p className="text-lg-secondary">Hadadan Heli Su'shaada Jawaabteeda Toos Nala Soo Xiriircustomer supportteam</p>
        </div>    
        <div>
        {QuestionsData.map(createQuestion)}
        </div>
        </div> 
        </div>
    )
}
export default Home;