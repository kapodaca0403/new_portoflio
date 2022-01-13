import React from "react";
import { Form, Card, Button, Tooltip, render, OverlayTrigger } from "react-bootstrap";
import {
  FaHeart,
  FaRegHeart,
  FaAngellist,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

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
const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Simple tooltip
  </Tooltip>
);

// render(
//   <OverlayTrigger
//     placement="right"
//     delay={{ show: 250, hide: 400 }}
//     overlay={renderTooltip}
//   >
//     <Button variant="success">Hover me to see</Button>
//   </OverlayTrigger>
// );

export const contactform = () => {
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
              Thanks for visiting! Here are the best ways to contact me and i'll
              be sure to keep in touch.
              <FaAngellist style={{ fontSize: "25px" }} />
              <Card.Footer>
                <a href="mailto:ktrinaapodaca@yahoo.com">
                  <FaEnvelope
                    style={{ color: "white", fontSize: "35px" }}
                  ></FaEnvelope>
                </a>
                <a
                  href="https://www.linkedin.com/in/k%E2%80%99trina-apodaca-1b45481b6/"
                  target="no-target-blank"
                >
                  <FaLinkedin
                    style={{ color: "white", fontSize: "35px" }}
                  ></FaLinkedin>
                </a>
                <a
                  href="https://github.com/kapodaca0403"
                  target="no-target-blank"
                >
                  <FaGithub
                    style={{ color: "white", fontSize: "35px" }}
                  ></FaGithub>
                </a>
                <a
                  href="https://stackoverflow.com/users/16485844/kavocado"
                  target="no-target-blank"
                >
                  <FaStackOverflow
                    style={{ color: "white", fontSize: "35px" }}
                  ></FaStackOverflow>
                </a>
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  {/* <a href="tel:1-720-272-1501"> */}
                  <FaPhone style={{ color: "white", fontSize: "35px" }}>
                    720-272-1501
                  </FaPhone>
                  {/* </a> */}
                </OverlayTrigger>
              </Card.Footer>
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <Form>
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
            className="mb-2"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Comments
            </Form.Label>
            <Col sm="10">
              <Form.Control
                style={{ padding: "25px 2px" }}
                type="input"
             
              />
            </Col>
          </Form.Group>
        </Form>
        <Button variant="light">Submit</Button>{" "}
       
  

        <br></br> */}
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
