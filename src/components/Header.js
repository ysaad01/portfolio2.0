import React from "react";
import Navigation from "./Navigation";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-content">
      <Navbar
        className="header-height"
        bg="bg-light"
        expand="lg"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                className="yas-logo"
                src={`${process.env.PUBLIC_URL}/images/logos/yas-logo1.png`}
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
    </div>
  );
};

export default Header;
