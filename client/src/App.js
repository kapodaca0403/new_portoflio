import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Aboutme from "./components/aboutme/aboutme";
import Projects from "./components/projects/project";
import Contactform from "./components/contactform/contactform";
import ReactDOM from "react-dom";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// add router function to links and switch
// <Route exact path="/gamestock/" component={Homepage} /> this would be the same as the link to path
function App() {
  return (
    <>
      {/* <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/Contactform" component={Contactform} />
        </Switch>
        <Footer />
      </Router> */}
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
