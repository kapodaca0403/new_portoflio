import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Resume from "../../ApodacaResume.pdf"; 

const resume = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: 18,
          color: "white",
          textAlign: "center",
          background: "#78c2ad",
          bottom: 0,
          padding: "1.2em",
          fontFamily: "Handlee, cursive",
        }}
      >
        <br></br>
        <br></br>
        <br></br>
        <FaHeart />
        <FaRegHeart /> <br></br>
        Feel free to take a glance at my Resume
        <br></br>
        <Card.Link
          style={{ fontSize: "8", color: "white" }}
          href={Resume}
          download
          target="no_blank"
        >
          Download Resume
        </Card.Link>
        <br></br>
        <br></br>
        <br></br>
        <Card
          style={{
            width: "400",
            background: "#78c2ad",
            outlineStyle: "dotted",
          }}
        >
          <Card.Body>
            <FaHeart /> I received a Full Stack Coding Bootcamp Certificate from
            the Univeristy of Denver
            <br></br>
            <FaRegHeart /> And currently enrolled to receive my BA in Computer
            Science
            <Card.Title
              style={{
                fontSize: "20px",
                background: "#78c2ad",
                fontFamily: "Handlee, cursive",
              }}
            >
              <br></br>
              Front-end Profiencies
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "14px",
                background: "#78c2ad",
                textAlign: "inline",
                fontFamily: "Handlee, cursive",
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
            <Card.Title
              style={{ fontFamily: "Handlee, cursive", fontSize: "20px" }}
            >
              <br></br>
              Back-end Profiencies
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "14px",
                background: "#78c2ad",
                textAlign: "inline",
                fontFamily: "Handlee, cursive",
              }}
            >
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
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </h1>
    </div>
  );
};

export default resume;
