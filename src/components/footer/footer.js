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
    fontFamily: "Orbitron, sans-serif",
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
        <a
          href="https://www.linkedin.com/in/k%E2%80%99trina-apodaca-1b45481b6"
          target="no-target-blank"
        >
          <FaLinkedin style={{ color: "white", fontSize: "40px" }} />
        </a>

        <a href="https://github.com/kapodaca0403" target="no-target-blank">
          <FaGithub style={{ color: "white", fontSize: "40px" }} />
        </a>

        <a
          href="https://stackoverflow.com/users/16485844/kavocado"
          target="no-target-blank"
        >
          <FaStackOverflow style={{ color: "white", fontSize: "40px" }} />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
