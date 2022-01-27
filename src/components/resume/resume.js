import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const resume = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: 18,
          color: "white",
          textAlign: "center",
          background: "black",
          bottom: 0,
          padding: "1.2em",
          fontFamily: "Handlee, cursive",
          vwheight: "100%",
        }}
      >
        <br></br>
        <br></br>
        <FaHeart />
        <FaRegHeart /> <br></br>
        Feel free to take a glance at my Resume
        <br></br>
        <Card.Link
          style={{ fontSize: "8" }}
          href="../../../ApodacaResume (1).pdf"
          download
          target="no_blank"
        >
          Download Resume
        </Card.Link>
        <br></br>
        <br></br>
        <Card style={{ width: "400", background: "black" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "16", background: "black" }}>
              <br></br>
              <br></br>
              Front-end Profiencies
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "8",
                background: "#black",
                textAlign: "inline",
              }}
            >
              <br></br>
              HTML
              <br></br>
              CSS
              <br></br>
              JAVASCRIPT
              <br></br>
              REACT
              <br></br>
              jQuery
              <br></br>
              Bootstrap
              <br></br>
            </Card.Text>
            <Card.Title>
              <br></br>
              <br></br>
              Back-end Profiencies
            </Card.Title>
            <Card.Text>
              <br></br>
              <br></br>
              APIs
              <br></br>
              Node Express
              <br></br>
              MySql || Sequelize
              <br></br>
              MongoDB || Mongoose
              <br></br>
              GraphQL
              <br></br>
              <br></br>
            </Card.Text>
          </Card.Body>
        </Card>
        <footer style={{ textAlign: "center", lineSpacing: "5.5px" }}>
          <a href="/projects">
            <FaArrowLeft
              style={{
                color: "white",
                size: "5px",
              }}
            >
              {" "}
            </FaArrowLeft>{" "}
            <a href="/contactForm">
              <FaArrowRight
                style={{
                  color: "white",
                  size: "5px",
                }}
              ></FaArrowRight>
            </a>
          </a>
        </footer>
      </h1>
    </div>
  );
};

export default resume;
