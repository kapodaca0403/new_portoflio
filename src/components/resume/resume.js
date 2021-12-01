import React from "react";
import { Card } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const resume = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: 16,
          color: "white",
          textAlign: "center",
          background: "black",
          bottom: 0,
          padding: "1.2em",
          fontFamily: "Shadows Into Light, cursive",
          vwheight: "100%",
        }}
      >
        <br></br>
        <br></br>
        <FaHeart />
        <FaRegHeart /> <br></br>
        Feel free to take a glance at my Resume 
        <br></br>
        <br></br>
        <Card.Link style={{ fontSize: "8" }} href="#">
          Download Resume
        </Card.Link>
        <br></br>
        <br></br>
        <Card style={{ width: "400", background: "black" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "16", background: "black" }}>
              <br></br>
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
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
      </h1>
    </div>
  );
};

export default resume;
