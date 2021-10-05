import React from "react";
// import Bounce from "react-animations";
import { Card, CardGroup } from "react-bootstrap";

// const bounce = styled.div`animations 2s ${keyframes` ${Bounce}`} infinite`;

export const projects = () => {
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
        Latest Projects
        <br></br>
        <br></br>
        <CardGroup>
          <Card style={{ border: "secondary", background: "#9A879d" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../Brewing Crypto.gif"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                Brewing Crypto
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                This project was something I had put together with three other
                peers. We combined our interest for beer and crypto and came up
                with the idea Brewing Crypto. We wanted the community to have
                more access to crypto information and possibly learn from
                others.
                <br></br>
                Check it out:
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ background: "#9A879d" }}>
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
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                Regex Turtorial for HTML Tag
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                A tutorial I put together to help those interested on how regex
                expressions work and specifically a regex for matching a HTML
                Tag. This goes into detail about what it is and what it does
                with examples for reference.
                <br></br>
                Check it out:
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ background: "#9A879d" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../readme.gif"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                README Generator
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                A great, easy README Generator template accessible to whomever
                would like to use.
                <br></br>
                Check it out:
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <br></br>
        <br></br>
        <CardGroup>
          <Card style={{ background: "#9A879d" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../Work Day Scheduler.gif"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                Work Day Scheduler
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                A great Scheduler app that allows you to add/delete reminders
                throughout the day for specific times.
                <br></br>
                Check it out:
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ background: "#9A879d" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../Git Outside.gif"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                Git Outside
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                Git outside is the best next camping website. Users can reivew
                campsites and let other campers know the ins and outs of their
                next favorite campspot.
                <br></br>
                Check it out:
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ background: "#9A879d" }}>
            <Card.Img
              style={{ width: "200", height: "350px" }}
              variant="top"
              src="../../../workprogress.jpg"
            />
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                Project 3
              </Card.Title>
              <Card.Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "white",
                  fontFamily: "Shadows Into Light, cursive",
                }}
              >
                An techblog made with fellow colleagues. Once this site is
                finished I will add the gif and deployed link
                <br></br>
                Check it out:
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </h1>
    </div>
  );
};

export default projects;
