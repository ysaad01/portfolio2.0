import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Nav className="me-auto">
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
    </Nav>
  );
};

export default Navigation;
