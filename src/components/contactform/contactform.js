import React from "react";
import { Form, Card, Button } from "react-bootstrap";

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
          fontSize: 24,
          color: "white",
          textAlign: "center",
          background: "#9A879d",
          bottom: 0,
          padding: "1.2em",
          fontFamily: "Shadows Into Light, cursive",
        }}
      >
        Contact Me
        <br></br>
        <br></br>
        <Card
          style={{
            width: "600px",
            textAlign: "center",
            margin: "auto",
            background: "#9A879d",
          }}
        >
          <Card.Img variant="top" src="../../../conactfoto.jpg" />
          <Card.Body>
            <Card.Text style={{ background: "#9A879d" }}>
              Greetings! Here is a space to send inquiries, questions, or
              concerns here. Please include your name in the response and I will
              get back to you right away! Thank you so much.
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <Form style={{ background: "#9A879d" }}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label id="form" style={{ fontSize: "18" }}>
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
                background: "#7a3b69",
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
        </Form>
      </h1>
    </div>
  );
};

export default contactform;
