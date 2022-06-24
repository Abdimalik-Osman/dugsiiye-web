import React,{useState,useEffect} from "react";
import {Collapse } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../../App.css';
import Logo from '../images/main-logo.png';
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-white ">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            className="logo"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <Collapse in={open}>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav m-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/courses" className="nav-link" >
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link  to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <form className="form-inline  my-lg-0">
            <Link  className="btn btn-login" to="/login">
              Sign In
            </Link>
            <Link className="btn btn-signup" to="/register">
              Sign Up
            </Link>
          </form>
        </div>
        </Collapse>
      </nav>
    </div>
  );
}
export default Navbar;
