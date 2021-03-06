import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import "../aboutme/aboutme.css";
import { FaHeart, FaRegHeart, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Footer from "../footer/footer";


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
            }}
          >
            {" "}
            A little bit about me <FaHeart /> <FaRegHeart />{" "}
          </p>
          <br></br>
        
          <Container>
            <Row>
              <Col>
                <img
                  variant="top"
                  src="../../../Headshot_exam.jpg"
                  style={{
                    background: "black",
                    height: "550px",
                    width: "350px",
                    right: "5%",
                  }}
                />
              </Col>

              <Col>
                <br></br>
                <h5
                  style={{
                    textAlign: "center",
                    fontFamily: "Handlee, cursive",
                  }}
                >
                  {" "}
                  W E L C O M E{" "}
                </h5>
                <br></br>
                <p
                  style={{
                    lineHeight: "3.8",
                    fontFamily: "Handlee, cursive",
                    fontSize: "20px",
                  }}
                >
                  Hope you enjoyed the Neon Evangelion image on the homepage.
                  About the good stuff, I go by K'trina! I recently graduated
                  from the Univeristy of Denver Full Stack Coding Bootcamp. My
                  favorite thing to do is learn, learn and more learning. I have
                  expertise in HTML5, React, Javascript and Bootstrap and of
                  course taking the journey to add more to the list. I will change my portfolio from time to time just to see what new things I can do to add to make it more fun and inviting. Feel free
                  to stay and browse!
                </p>
              </Col>
            </Row>
          </Container>
          <footer style={{ textAlign: "center", lineSpacing: "5.5px" }}>
            {/* <a href="/aboutme">
              <FaArrowLeft
                style={{
                  color: "white",
                  size: "5px",
                }}
              >
                {" "}
              </FaArrowLeft> */}
<a href="/portfolio">
              <FaArrowRight
                style={{
                  color: "white",
                  size: "5px",
                }}
              ></FaArrowRight>
            </a>
          </footer>

          <br></br>
        
        </main>
      </div>
    </div>
  );
};

export default aboutme;
