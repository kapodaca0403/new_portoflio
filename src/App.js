import React from "react";
import Navbar from "./components/navbar/navbar";

import Aboutme from "./components/aboutme/aboutme";
import Resume from "./components/resume/resume";
import Projects from "./components/projects/project";
import Contactform from "./components/contactform/contactform";
// import ReactDOM from "react-dom";
// import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/minty/bootstrap.min.css";
//import "/App.js/app.css";

// add router function to links and switch
// <Route exact path="/gamestock/" component={Homepage} /> this would be the same as the link to path
function App() {
  return (
    // <>
    <div>
      <Router>
        <Navbar />
        <Route exact path="/">
          <Aboutme />
        </Route>
        <Route exact path="/aboutme">
          <Aboutme />
        </Route>
        <Route exact path="/Resume">
          <Resume />
        </Route>
        <Route exact path="/portfolio">
          <Projects />
        </Route>
        <Route exact path="/contactform">
          <Contactform />
        </Route>
       
      
      </Router>
    </div>
  );
}

export default App;
