import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Aboutme from "./components/aboutme";
import Contactform from "./components/contactform";

function App() {
  return (
    <>
      <Aboutme />
      <Navbar />
      <Contactform />
      <Footer />
    </>
  );
}

export default App;
