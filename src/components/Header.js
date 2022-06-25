import React from "react";
import Navigation from "./Navigation";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar className="header-height" bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <img
              className="yas-logo"
              src={`${process.env.PUBLIC_URL}/assets/yas-logo1.png`}
              alt="yas logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
