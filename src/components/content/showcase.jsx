import React from "react";
import {Link} from 'react-router-dom';
import '../../App.css';
function Showcase() {
  return (
  // showcase or main header
  <section id="showcase" className="">
  <div className="showcase-content">
      <h1 className="l-heading">Let's Get Skilled.</h1>
      <p className="lead">We’re committed to changing the future of learning for the  better and provide the tools and skills to teach what you love.</p>
      <div><Link  to="/" className="btn btn-primary get-started">Get Started</Link>
      <Link to="/about" className="btn bg-green btn-about">About Us</Link></div>
  </div>
</section>
  );
}
export default Showcase;
