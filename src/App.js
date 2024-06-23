import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <section name="Home" className="section">
        <Home />
      </section>
      <section name="About" className="section">
        <About />
      </section>
      <section name="portfolio" className="section">
        <Portfolio />
      </section>
      <section name="Skills" className="section">
        <Skills />
      </section>
      <section name="Contact" className="section">
        <Contact />
      </section>
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;
