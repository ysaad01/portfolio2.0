import React from "react";
import { Nav, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav-content">
      <Row className="nav-row">
        <Nav className="me-auto nav-bar ">
          <ul className="nav nav-tabs">
            <Nav.Link as={NavLink} to="/about">
              About Me
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact Form
            </Nav.Link>
          </ul>
        </Nav>
      </Row>
    </div>

    //   <ul class="nav nav-tabs">
    // <li class="nav-item">
    //   <a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
    // </li>
    // <li class="nav-item">
    //   <a class="nav-link" data-bs-toggle="tab" href="#profile">Profile</a>
    // </li>
    // <li class="nav-item">
    //   <a class="nav-link disabled" href="#">Disabled</a>
    // </li>
  );
};

export default Navigation;
