import React from 'react';
import '../../App.css';
function About(){
    return(
        <div className="about">
            <h4 className="text-center text-success fw-bold">About Us</h4>
            <div className="introduction">
            <h1 className='text-lg-center fw-bold font-extrabold'>Introduction</h1>
            <p>When we started Dugsiiye Online Courses back in 2018, our goal was to give Somalis from all across the world the ability to learn the skills they’d need to succeed in this modern century. We set out to create a new, interactive way of learning — making it engaging, flexible, and accessible for as many people as possible. Since then, we have helped hundreds of Somali people worldwide unlock modern technical skills and reach their full potential through code. There are two commitments we've made to the world. We've been grounded by these since day one: Increase access to high-quality education for everyone, everywhere; Enhance teaching and learning online through research.</p>
            </div>
            <div className="vision">
            <h1 className="text-lg-center fw-bold">Our Vision</h1>
                <p>To reach out to all Somali communities through knowledge and to be a comprehensive online institute that offers quality-oriented education and accredited certification.</p>
            </div>
            <div className="mission">
            <h1 className="text-lg-center fw-bold">Our Mission</h1>
                <p>We want to create a world where anyone can build something meaningful with technology, and everyone has the learning tools, resources, and opportunities to do so. Code contains a world of possibilities — all that’s required is the curiosity and drive to learn. At Dugsiiye, we are dedicated to empowering all people, regardless of where they are in their coding journeys, to continue to learn, grow, and make an impact on the world around them.</p>
            </div>

        </div>
    )
}
export default About;