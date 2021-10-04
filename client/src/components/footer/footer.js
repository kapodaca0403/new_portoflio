import React from "react";
import { Button } from "react";

const styles = {
  button: {
    background: "#9A879d",
    color: "white",
    fontSize: 20,
    borderRadius: 5,
    cursor: "pointer",
    bottom: "5%",
    fontFamily: "Shadows Into Light, cursive",
  },
  back: {
    background: "#7a3b69",
    textAlign: "center",
    padding: "1.2em",
    margin: -20,
    bottom: 0,
    top: 0,
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
          <button style={styles.button}>LinkedIn</button>
        </a>
        <a href="https://github.com/kapodaca0403" target="no-target-blank">
          <button style={styles.button}>Github</button>
        </a>
        <a
          href="https://stackoverflow.com/users/16485844/kavocado"
          target="no-target-blank"
        >
          <button style={styles.button}>Stack</button>
        </a>
      </footer>
    </div>
  );
};

export default Footer;
