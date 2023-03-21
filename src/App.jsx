import React from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;