import React from "react";
import { Form, Card, Button, Row, Col } from "react-bootstrap";
import { FaHeart, FaRegHeart} from "react-icons/fa";

import emailjs from "emailjs-com";

function contactbutton() {
  const btn = document.getElementById("button");

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "default_service";
    const templateID = "template_xt624j8";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
}

export const contactform = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: 17,
          color: "white",
          textAlign: "center",
          background: "black",
          bottom: 0,
          padding: "1.2em",
          fontFamily: "Handlee, cursive",
        }}
      >
        Contact Me <FaHeart />
        <FaRegHeart />
        <br></br>
        <br></br>
        <Card
          style={{
            width: "600px",
            textAlign: "center",
            margin: "auto",
            background: "black",
          }}
        >
          <Card.Img variant="top" src="../../../conactfoto.jpg" />
          <Card.Body>
            <Card.Text style={{ background: "black" }}>
              Thanks for visiting! Here is a space to write any questions or concerns, or a contact request. I'll be sure to get you. <FaHeart />
              <FaRegHeart /> 
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                style={{ padding: "1px 5px" }}
                type="email"
                placeholder="email@example.com"
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Comments
            </Form.Label>
            <Col sm="10">
              <Form.Control
                style={{ padding: "25px 4px" }}
                type="input"
             
              />
            </Col>
          </Form.Group>
        </Form>
        <Button variant="light">Submit</Button>{" "}
       
  

        <br></br>
        
        {/* <Form style={{ background: "black", size: "small" }}>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Label id="form" style={{ fontSize: "10" }}>
              Email address:
            </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Response:</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Button
              id={{ contactbutton }}
              n
              style={{
                background: "black",
                color: "white",
                fontSize: 20,
                borderRadius: 5,
                cursor: "pointer",
                bottom: "5%",
                fontFamily: "Shadows Into Light, cursive",
              }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form> */}
      </h1>
    </div>
  );
};

export default contactform;
