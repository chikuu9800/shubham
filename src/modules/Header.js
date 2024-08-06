import '../CSS/header.css'; // Custom styles
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="custom-navbar">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link brand-link" to={"/"}>
              Shubham C
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" className="nav-link">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link">
                About Me
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link">
                contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
