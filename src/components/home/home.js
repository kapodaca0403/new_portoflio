import { text } from "@fortawesome/fontawesome-svg-core";
import React from "react";
// import background from "../../../1183560.jpg"
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
          fontSize: "20px"
        }}
      >
        Greetings! My name is K'trina Apodaca. I am a Full Stack Jr Dev and you are about to explore my portfolio designed to show my expertise and personality. Any questions, thoughts, or feedback feel free to reach out to me!
    
        </p>
        </main>
      </div>
         
    </div>
  );
};

export default home;
