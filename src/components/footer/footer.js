import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from "react-icons/fa";


const styles = {
  button: {
    background: "black",
    color: "white",
    fontSize: 20,
    borderRadius: 5,
    cursor: "pointer",
    bottom: "5%",
    fontFamily: "Handlee, cursive",
  },
  back: {
    background: "black",
    textAlign: "center",
    padding: "1.2em",
    margin: -20,
    bottom: 0,
    top: 0,
    width: "101.2%",
  },
};

const Footer = () => {
  return (
    <div>
      <footer style={styles.back}>
       
      </footer>
    </div>
  );
};

export default Footer;
