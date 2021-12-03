import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const navbar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg py-5"
        bg="#689689"
        variant="light"
        style={{ background: "black", marginLeft: "0px", width: "100%" }}
      >
        <Container>
          <Navbar.Brand
            style={{
              color: "white",
              background: "black",
              fontSize: "40px",
              fontFamily: "Handlee, cursive",
            }}
          >
            K'trina Apodaca
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link
                href="/aboutme"
                style={{
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="/portfolio"
                style={{
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="/resume"
                style={{
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                href="/contactform"
                style={{
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="/home"
                style={{
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default navbar;
