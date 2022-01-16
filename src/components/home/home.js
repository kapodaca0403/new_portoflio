import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
// import background from "../../../1183560.jpg"
import { Button } from "react-bootstrap"
import "../aboutme/aboutme.css";

const home = () => {
  return (
    <div>
      <div style={{ backgroundColor: "black", textAlign: "center" }}>
        <img
          src="../../../1183560.jpg"
          className="evangelion"
          style={{ overflow: "hidden", width: "52%", textAlign: "right" }}
        ></img>
        <main className="maininfo">
          <p
            style={{
              backgroundColor: "black",
              textAlign: "center",
              color: "white",
              fontFamily: "'Orbitron', sans-serif",
              bottom: "25%",
              fontSize: "20px",
            }}
          >
            <br></br>
            <Button variant="link" href="/aboutme"
            style={{color:"white"}}>E N T E R</Button>
          </p>
        </main>
      </div>
    </div>
  );
};

export default home;
