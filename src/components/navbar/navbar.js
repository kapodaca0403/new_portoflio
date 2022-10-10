import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const navbar = () => {
  return (
    <div>
      <Navbar variant="light" expand="lg" style={{ background: "#78c2ad" }}>
        <Container style={{ background: "#78c2ad" }}>
          <Navbar.Brand
            href="#home"
            style={{
              background: "#78c2ad",
              color: "white",
              fontFamily: "Handlee, cursive",
              fontSize: "34px",
            }}
          >
            K'trina Apodaca
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                style={{ color: "white", fontFamily: "Handlee, cursive" }}
                href="/aboutme"
              >
                About Me
              </Nav.Link>
              <Nav.Link
                style={{ color: "white", fontFamily: "Handlee, cursive" }}
                href="/portfolio"
              >
                Projects
              </Nav.Link>
              <Nav.Link
                style={{ color: "white", fontFamily: "Handlee, cursive" }}
                href="/resume"
              >
                Resume{" "}
              </Nav.Link>
              <Nav.Link
                style={{ color: "white", fontFamily: "Handlee, cursive" }}
                href="/contactform"
              >
                Contact Info{" "}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default navbar;
