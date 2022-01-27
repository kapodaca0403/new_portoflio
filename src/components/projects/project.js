import React from "react";
// import Bounce from "react-animations";
import { Carousel, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
        <Carousel fade>
          {/* <Carousel variant="dark"> */}
          <Carousel.Item>
            <img
              style={{ height: "850px", width: "1000px" }}
              src="../../../newportcry.PNG"
              alt="gitoutside"
            />
            <Carousel.Caption>
              <h5
                style={{
                  color: "white",
                }}
              >
                Brewing Crypto
              </h5>
              <p
                style={{
                  color: "white",
                }}
              >
                A site designed to bring crypto and beer together by allowing
                users to learn more about crypto and find a fun local bar near
                them.
              </p>
              <Button
                variant="link"
                size="sm"
                href="https://nascott94.github.io/Brewing-Crypto/"
                target="no-target-blank"
                style={{ color: "white" }}
              >
                View here
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "850px", width: "900px" }}
              src="../../../gal.PNG"
              alt="Git outside"
            />
            <Carousel.Caption>
              <h5>Git Outside</h5>
              <p>
                Designed to allow users to create accounts to post hidden
                gems/campsites and share memories.
              </p>
              <Button
                variant="link"
                size="sm"
                href="https://git-outside.herokuapp.com/"
                target="no-target-blank"
                style={{ color: "white" }}
              >
                View here
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "850px", width: "1000px" }}
              src="../../../newpug.PNG"
              alt="Good Doggo"
            />
            <Carousel.Caption>
              <h5>Very Good Dogs Club</h5>
              <p>
                A blog designed in the eyes of a dog. Users can create an
                account to share their life moments with their dogs to other dog
                lovers.
              </p>
              <Button
                variant="link"
                size="sm"
                href="https://good-dogs-club.herokuapp.com/"
                target="no-target-blank"
                style={{ color: "white" }}
              >
                View here
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "850px", width: "1000px" }}
              src="../../../newprog.jpg"
              alt="Event Planner"
            />
            <Carousel.Caption>
              <h5>Event Planner</h5>
              <p>
                A personal website in the making. It is designed to show off the
                client’s event planning services.
              </p>
              <Button variant="link" size="sm" style={{ color: "white" }}>
                View here
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <footer style={{ textAlign: "center", lineSpacing: "5.5px" }}>
          <a href="/aboutme">
            <FaArrowLeft
              style={{
                color: "white",
                size: "5px",
              }}
            >
              {" "}
            </FaArrowLeft>{" "}
            
            <a href="/resume">
              <FaArrowRight
                style={{
                  color: "white",
                  size: "5px",
                }}
              ></FaArrowRight>
              
            </a>
          </a>
        </footer>
      </h1>
    </div>
  );
};

export default projects;
