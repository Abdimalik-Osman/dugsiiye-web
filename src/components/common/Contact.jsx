import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import '../../App.css';
function Contact() {
  return (
    <div className="container bg-light my-5">
      <h1>Contact Us</h1>
      <div className="contact bg-white shadow my-5">
      <div className="contact-details">
        <h3>Contact Information</h3>
        <p>If you have any question or simply want to contact with us</p>
        <h6>
          <CallIcon />  +252 614 251 112
        </h6>
        <h6>
          <EmailIcon />  info@dugsiiye.com
        </h6>
        <br />
        <ul>
          <li>
            <a href="/"><FacebookIcon /></a>
          </li>
          <li>
            <a href="/"><GitHubIcon /> </a>
          </li>
          <li>
            <a href="/"><TwitterIcon /></a>
          </li>
        </ul>
      </div>
      {/* contact us form */}
      <div className="contact-form py-5">
      <h3>Send Us a Message</h3>
      <form>
        <div className="row">
          <div className="form-group col-6">
            <label htmlFor="inputFirstName4">First Name</label>
            <input
              type="text"
              className="form-control"
              id="inputFirstName4"
              placeholder=""
            />
          </div>
          <div className="form-group col-6">
            <label htmlFor="inputLastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="inputLastName"
              placeholder=""
            />
          </div>
        </div>
        
        <div className="row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder=""
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPhone4">Phone</label>
          <input
            type="text"
            className="form-control"
            id="inputPhone4"
            placeholder=" "
          />
        </div>
        </div>
        <div className="row">
        <div className="form-group col-md-12">
          <label htmlFor="inputSubject">Subject</label>
          <input
            type="text"
            className="form-control"
            id="inputSubject"
            placeholder=""
          />
        </div>
        </div>
        <div className="form-group col-md-12">
          <label htmlFor="message">Message</label>
          <textarea className="form-control"  id="message" rows="4"></textarea>
        
        </div>
        
        <button type="submit" disabled className="btn btn-sign-up my-2 float-end">
          Sign in
        </button>
      </form>
      </div>
      </div>
    </div>
  );
}
export default Contact;
