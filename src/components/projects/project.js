import React from "react";
import { FaHeart, FaRegHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Card, CardGroup, Row } from "react-bootstrap"; 

// const bounce = styled.div`animations 2s ${keyframes` ${Bounce}`} infinite`;

export const projects = () => {
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
            Projects, Projects and more Projects
            <FaHeart /> <FaRegHeart />{" "}
          </p>
          <br></br>

          <CardGroup>
            <Card
              style={{
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="../../../breww.png"
                style={{
                  background: "black",
                  height: "450px",
                  width: "350px",
                  textAlign: "center",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontFamily: "Handlee, cursive",
                  }}
                >
                  Brewing Crypto
                </Card.Title>
                {/* <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text> */}
              </Card.Body>
            </Card>
            <Card
              style={{
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="../../../newportgit.png"
                style={{
                  background: "black",
                  height: "450px",
                  width: "350px",
                  textAlign: "center",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontFamily: "Handlee, cursive",
                  }}
                >
                  Git Outside
                </Card.Title>
                {/* <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text> */}
              </Card.Body>
            </Card>
            <Card
              style={{
                background: "black",
              }}
            >
              <Card.Img
                variant="top"
                src="../../../newpug.png"
                style={{
                  background: "black",
                  height: "450px",
                  width: "350px",
                  textAlign: "center",
                  display: "block",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                }}
              />
              <Card.Body>
                <Card.Title
                  style={{
                    textAlign: "center",
                    fontFamily: "Handlee, cursive",
                  }}
                >
                  Very Good Dogs Club
                </Card.Title>
                {/* <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text> */}
              </Card.Body>
            </Card>
          </CardGroup>
        </main>
      </div>
    </div>
  );
};

export default projects;
