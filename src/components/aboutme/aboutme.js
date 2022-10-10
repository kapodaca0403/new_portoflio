import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "../aboutme/aboutme.css";
import { FaHeart, FaRegHeart, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Headshot from "../../Headshot_exam.jpg";
import Another from "../../anotha.jpg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const aboutme = () => {
  return (
    <div>
      <div class="row">
        <main className="maininfo">
          <br></br>
          <br></br>
          <p
            style={{
              fontSize: 18,
              textAlign: "center",
              fontFamily: "Handlee, cursive",
              background: "#78c2ad",
            }}
          >
            {" "}
            <FaHeart /> <FaRegHeart />{" "}
          </p>
          <br></br>
          <h1
            style={{
              color: "white",
              fontFamily: "Handlee, cursive",
              textAlign: "center",
              fontSize:"20px"
            }}
          >
            W E L C O M E
          </h1>

          <Card
            className="text-center"
            style={{
              background: "#78c2ad",
              outlineStyle: "dotted",
              fontFamily: "Handlee, cursive",
              margin: 0,
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
            }}
          >
            <br></br>
            <Row xs={1} md={2}>
              <img
                src={Headshot}
                alt="headshot"
                style={{
                  overflow: "hidden",
                  height: "355px",
                  width: "%",
                  objectPosition: "center top",
                  background: "#78c2ad",

                  display: "table",
                }}
              />
              <img
                src={Another}
                alt="pic"
                style={{
                  objectPosition: "right top",
                  float: "right",
                  height: "355px",
           
                }}
              />
            </Row>

            <br></br>

            <Card.Text style={{ fontSize: "22px" }}>
              I'm K'trina Apodaca a Full Stack Developer located in Denver,
              Colorado. As someone who is the early stage of my career I like
              trying out new things while strengthening my capabilities. My
              portfolio may look plain but I use it to play around with fun new
              things I am learning with react. <br></br> "I know not all that
              may be coming, but be it what it will, I’ll go to it laughing."
              —Herman Melville, Moby Dick
            </Card.Text>
          </Card>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          {/* <Figure style={{ objectPosition: "center top" }}>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src={Headshot}
            />
            <Figure.Caption
              style={{
                color: "white",
                fontFamily: "Handlee, cursive",
                textAlign: "center",
              }}
            >
              I'm K'trina Apodaca a Full Stack Developer located in Denver,
              Colorado. As someone who is the early stage of my career I like
              trying out new things while strengthening my capabilities. My
              portfolio may look plain but I use it to play around with fun new
              things I am learning with react. <br></br> "I know not all that
              may be coming, but be it what it will, I’ll go to it laughing."
              —Herman Melville, Moby Dick
            </Figure.Caption>
          </Figure>

          {/* <Container>
            <Row>
              <Col>
                <img
                  variant="top"
                  src="../../../Headshot_exam.jpg"
                  style={{
                    background: "#78c2ad",
                    height: "550px",
                    width: "350px",
                    right: "5%",
                    opacity: 0.5,
                  }}
                />
              </Col>

              <Col>
                <br></br>
                <h5
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontFamily: "Handlee, cursive",
                    background: "#78c2ad",
                  }}
                >
                  {" "}
                  W E L C O M E{" "}
                </h5>
                <br></br>
                <p
                  style={{
                    lineHeight: "3.0",
                    fontFamily: "Handlee, cursive",
                    fontSize: "20px",
                  }}
                >
                  Hi there, my name is K'trina Apodaca and I am a full stack developer. Here is some of my latest work and ways to get in touch with me!
                </p>
              </Col>
            </Row>
          </Container> */}
          <br></br>
        </main>
      </div>
    </div>
  );
};

export default aboutme;
