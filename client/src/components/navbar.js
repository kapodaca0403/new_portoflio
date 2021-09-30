import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const navbar = () => {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#projects">Latest Projects</Nav.Link>
            <Nav.Link href="#contactinfos">Contact Information</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default navbar;
