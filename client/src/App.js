import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Aboutme from "./components/aboutme/aboutme";
import Contactform from "./components/contactform/contactform";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import aboutme from "./components/aboutme/aboutme";

// add router function to links and switch
// <Route exact path="/gamestock/" component={Homepage} /> this would be the same as the link to path
function App() {
  return (
    <>
      <Navbar />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={aboutme} />
          <Route exact path="/aboutme" component={about} />
        </Switch>
      </Router> */}
      <Aboutme />
      <Footer />
    </>
  );
}

export default App;
