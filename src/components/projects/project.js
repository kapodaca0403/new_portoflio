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
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=f5f5f5"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </h1>
    </div>
  );
};

export default projects;
