import React from "react";
//import { FaHeart, FaRegHeart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
//import { Card, CardGroup, Row } from "react-bootstrap"; 
import "../projects/project.css";
import "bootswatch/dist/spacelab/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import GitImage from '../../newportgit.PNG';
import CrypImage from '../../newportcry.PNG';
import PugImage from '../../newpug.PNG';
import Button from "react-bootstrap/Button";
import { FaHeart, FaRegHeart, FaArrowRight, FaArrowLeft } from "react-icons/fa";
// const bounce = styled.div`animations 2s ${keyframes` ${Bounce}`} infinite`;


export const projects = () => {
  return (
    <div style={{ background: "#78c2ad" }}>
      <br></br>
      <br></br> 
      <p style={{color:"white", fontSize:"18", textAlign:"center", fontFamily: "Handlee, cursive"}}> <FaHeart />
      <FaRegHeart /> Projects
      </p>
      <h1
        style={{
          color: "white",
          fontSize: "18px",
          textAlign: "center",
          fontFamily: "Handlee, cursive",
        }}
      >
        {" "}
        Here are some of my latest Projects. I have also included the deployed
        link if you'd like to take a look.
      </h1>
      <div>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header style={{ fontFamily: "Handlee, cursive" }}>
              GitOutside
            </Accordion.Header>

            <Accordion.Body>
              <img
                src={GitImage}
                alt="gitimage"
                style={{
                  overflow: "hidden",
                  width: "30%",
                  textAlign: "right",
                  background: "#78c2ad",
                }}
              />
              <p style={{ fontFamily: "Handlee, cursive" }}>
                Designed to allow users to create accounts to post hidden
                gems/campsites and share memories.
              </p>
              <Button
                size="sm"
                style={{
                  background: "#78c2ad",
                  textColor: "white",
                  fontFamily: "Handlee, cursive",
                }}
                href="#"
              >
                GitOutside
              </Button>{" "}
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ fontFamily: "Handlee, cursive" }}>
              Very Good Dogs Club
            </Accordion.Header>
            <Accordion.Body>
              <img
                src={PugImage}
                alt="pugimage"
                style={{
                  overflow: "hidden",
                  width: "30%",
                  textAlign: "right",
                  backgroundColor: "#78c2ad",
                }}
              />
              <p style={{ fontFamily: "Handlee, cursive" }}>
                A blog designed in the eyes of a dog. Users can create an
                account to share their life moments with their dogs to other dog
                lovers.
              </p>
              <Button
                size="sm"
                style={{
                  background: "#78c2ad",
                  textColor: "white",
                  textAlign: "center",
                  fontFamily: "Handlee, cursive",
                }}
                href="#"
              >
                Very Good Dogs Club
              </Button>{" "}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Accordion>
          <Accordion.Item eventKey="1">
            <Accordion.Header style={{ fontFamily: "Handlee, cursive" }}>
              Brewing Crypto
            </Accordion.Header>
            <Accordion.Body>
              <img
                src={CrypImage}
                alt="crypimage"
                style={{
                  overflow: "hidden",
                  width: "30%",
                  textAlign: "right",
                  backgroundColor: "#78c2ad",
                }}
              />
              <p style={{ fontFamily: "Handlee, cursive" }}>
                A site designed to bring crypto and beer together by allowing
                users to learn more about crypto and find a fun local bar near
                them.
              </p>
              <Button
                size="sm"
                style={{
                  background: "#78c2ad",
                  textColor: "white",
                  fontFamily: "Handlee, cursive",
                }}
                href="#"
              >
                Brewing Crypto
              </Button>{" "}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default projects;
