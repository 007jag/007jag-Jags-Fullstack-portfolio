import { createTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useEffect } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const currentSection = document.querySelector(hash);
          if (currentSection) {
            currentSection.scrollIntoView();
          }
        }
      }, []);
    
  return (
    <div>
         <ToastContainer
        autoClose={2000}
        progressStyle={{ background: "#B41A22" }}
      />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;