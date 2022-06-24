import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/main-logo.png";
import {
  Container,
  Collapse,
  Navbar,
  Nav,
  Toggle,
  NavDropdown,
} from "react-bootstrap";
import "../../App.css";
function ReactNavbar() {
  return (
    <Navbar
      expand="md"
      bg="white"
      fixed=""
      className="container-fluid react-navbar text-black">
      <Container>
        <Nav>
          <Navbar.Brand>
            <Link to="/"><img src={Logo} className="logo" alt="logo" /></Link>
          </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/courses" className="nav-link">
              Courses
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </Nav>
          <Nav className="user-info">
            <Link to="/login" className="btn btn-sign-in">
              Sign In
            </Link>
            <Link to="/register" className="btn btn-sign-up">
              Sign Up
            </Link>
            <span className="text-center my-3 d-none">
              Existing User?<Link to="/login">Sign In</Link>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default ReactNavbar;
