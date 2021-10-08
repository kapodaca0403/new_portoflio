import React from "react";
import { Card } from "react-bootstrap";

const resume = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: 20,
          color: "white",
          textAlign: "left",
          background: "#9A879d",
          bottom: 0,
          padding: "1.2em",
          fontFamily: "Shadows Into Light, cursive",
          vwheight: "100%",
        }}
      >
        <br></br>
        Feel free to take a glance at my Resume
        <br></br>
        <br></br>
        <Card.Link style={{ fontSize: "12" }} href="#">
          Download Resume
        </Card.Link>
        <br></br>
        <br></br>
        <Card style={{ width: "400", background: "#9A879d" }}>
          <Card.Body>
            <Card.Title style={{ fontSize: "24", background: "9A879d" }}>
              <br></br>
              Front-end Profiencies
            </Card.Title>
            <Card.Text
              style={{
                fontSize: "12",
                background: "#9A879d",
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
              Back-end Profiencies
            </Card.Title>
            <Card.Text>
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
