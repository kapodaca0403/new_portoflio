import React from "react";
// import Bounce from "react-animations";
import { Card, CardGroup, ButtonGroup, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa"

// const bounce = styled.div`animations 2s ${keyframes` ${Bounce}`} infinite`;

export const projects = () => {
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
        Latest Projects <FaHeart />
        <FaRegHeart />
        <br></br>
        <br></br>
        <CardGroup>
          <Card style={{ border: "secondary", background: "black" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../newportcry.PNG"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Brewing Crypto
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                This project was something I had put together with three other
                peers. We combined our interest for beer and crypto and came up
                with the idea Brewing Crypto. We wanted the community to have
                more access to crypto information and possibly learn from
                others.
                <br></br>
                <br></br>
                <ButtonGroup
                  style={{
                    color: "white",
                    background: "black",
                    fontFamily: "Handlee, cursive",
                    fontSize: "8",
                  }}
                >
                  <Button
                    variant
                    href="https://nascott94.github.io/Brewing-Crypto/"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Deployed
                  </Button>
                  <Button
                    href="https://github.com/nascott94/Brewing-Crypto"
                    target="no-target-blank"
                    variant
                    style={{ background: "black", color: "white" }}
                  >
                    Github
                  </Button>
                </ButtonGroup>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ background: "black" }}>
            <Card.Img
              style={{
                width: "200",
                height: "350px",
              }}
              variant="top"
              src="../../../regex.gif"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Regex Turtorial for HTML Tag
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                A tutorial I put together to help those interested on how regex
                expressions work and specifically a regex for matching a HTML
                Tag. This goes into detail about what it is and what it does
                with examples for reference.
                <br></br>
                <br></br>
                <ButtonGroup
                  style={{
                    color: "white",
                    background: "black",
                    fontFamily: "Handlee, cursive",
                    fontSize: "8",
                  }}
                >
                  <Button
                    href="https://gist.github.com/kapodaca0403/197892918ca3c82ec42b06ba8ec9de65"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Deployed
                  </Button>
                  <Button
                    href="https://github.com/kapodaca0403/regex_tutor"
                    target="no-target-blank"
                    variant
                    style={{ background: "black", color: "white" }}
                  >
                    Github
                  </Button>
                </ButtonGroup>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ background: "black" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../demogif.gif"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                README Generator
                <br></br>
              </Card.Title>

              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                A great, easy README Generator template accessible to whomever
                would like to use. Just answer a few questions and all set!
                <br></br>
                <br></br>
                <ButtonGroup
                  style={{
                    color: "white",
                    background: "black",
                    fontFamily: "Handlee, cursive",
                    fontSize: "8",
                  }}
                >
                  <Button
                    variant
                    href="https://kapodaca0403.github.io/README/"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Deployed
                  </Button>
                  <Button
                    variant
                    href="https://github.com/kapodaca0403/README"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Github
                  </Button>
                </ButtonGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <br></br>
        <br></br>
        <CardGroup>
          <Card style={{ background: "black" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Around the World
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                This is a solo project that I am currently working on. It is a
                blog that allow users to meet new people from different cultures
                and share their most favorite recipe. Nothing beats a homemade
                meal and I thought why not have users make new potentially life
                long friends and share their love of food. This is still a
                working progress and I will update accordingly.
                <br></br>
                <br></br>
                <ButtonGroup
                  style={{
                    color: "white",
                    background: "black",
                    fontFamily: "Handlee, cursive",
                    fontSize: "8",
                  }}
                >
                  <Button
                    variant
                    href=""
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Deployed
                  </Button>
                  <Button
                    variant
                    href=""
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Github
                  </Button>
                </ButtonGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ background: "black" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../newportgit.PNG"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Git Outside
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Git outside is the best next camping website. Users can reivew
                campsites and let other campers know the ins and outs of their
                next favorite campspot.
                <br></br>
                <br></br>
                <ButtonGroup
                  style={{
                    color: "white",
                    background: "black",
                    fontFamily: "Handlee, cursive",
                    fontSize: "8",
                  }}
                >
                  <Button
                    variant
                    href="https://git-outside.herokuapp.com/"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Heroku
                  </Button>
                  <Button
                    variant
                    href="https://github.com/dereklewis/Git-Outside"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Github
                  </Button>
                </ButtonGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ background: "black" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../newportdoggo.PNG"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                Very Good Dog Club
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Handlee, cursive",
                }}
              >
                This is a project I created with three others. One of my
                colleagues jokingly told us about how she sometimes assumes what
                her dog is thinking. We decided why not make a blog where others
                can share pictures of their dogs and what they might be
                thinking. We thought why not make the blog be completely dog
                user friendly and made just FOR dogs *wink*.
                <br></br>
                <br></br>
                <ButtonGroup
                  style={{
                    color: "white",
                    background: "black",
                    fontFamily: "Handlee, cursive",
                    fontSize: "8",
                  }}
                >
                  <Button
                    variant
                    href="https://good-dogs-club.herokuapp.com/"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Deployed
                  </Button>
                  <Button
                    variant
                    href="https://github.com/Danfirech/Very-good-dogs-club"
                    target="no-target-blank"
                    style={{ background: "black", color: "white" }}
                  >
                    Github
                  </Button>
                </ButtonGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </h1>
    </div>
  );
};

export default projects;
