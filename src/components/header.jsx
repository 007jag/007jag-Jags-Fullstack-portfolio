import { useEffect, useRef, useState } from "react";
import JcLogo from "../assets/jc_logo.png";
import { Button } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";

import PersonIcon from "@mui/icons-material/Person";
import ProjectIcon from "@mui/icons-material/Receipt";
import ContactIcon from "@mui/icons-material/Phone";
import PdfIcon from "@mui/icons-material/PictureAsPdf";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Navigation from "./navigation";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const [currentSection, setCurrentSection] = useState("header");

  const sections = ["header", "about", "portfolio", "contact", "resume"];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 200; // Add some offset to make sure the active section changes before the user reaches the next one

    for (const section of sections) {
      const element = document.getElementById(section);

      if (element) {
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setCurrentSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="header"
      className="bg-background p-5 md:px-12 md:h-screen text-white"
    >
      {/* Navigation  */}
      <Navigation
        setMobileMenu={setMobileMenu}
        currentSection={currentSection}
      />

      {/* Mobile Menu  */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`${
          mobileMenu ? "opacity-1 visible" : "opacity-0 invisible"
        } transition-all fixed left-0 top-0 right-0 bottom-0 bg-black/[0.3] z-[999]`}
      ></div>
      <div
        className={`${
          mobileMenu ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all fixed left-0 top-0 bottom-0 w-full z-[999] max-w-[60%] bg-background p-5 flex flex-col space-y-8 h-full`}
      >
        <div className="flex items-center justify-between">
        <a href="#header" onClick={() => setMobileMenu(false)}>
            <img src={JcLogo} alt="" className="h-[4rem] w-auto" />
          </a>
          <ChevronLeftIcon
            onClick={() => setMobileMenu(false)}
            className="text-[2rem]"
          />
        </div>
        <a
          href="#about"
          onClick={() => setMobileMenu(false)}
          className={`${
            currentSection === "about" ? "text-primary" : "text-white"
          } flex items-center space-x-3`}
        >
          <PersonIcon />
          <div>About Me</div>
        </a>
        <a
          href="#portfolio"
          onClick={() => setMobileMenu(false)}
          className={`${
            currentSection === "portfolio" ? "text-primary" : "text-white"
          } flex items-center space-x-3`}
        >
          <ProjectIcon />
          <div>Portfolio</div>
        </a>
        <a
          href="#contact"
          onClick={() => setMobileMenu(false)}
          className={`${
            currentSection === "contact" ? "text-primary" : "text-white"
          } flex items-center space-x-3`}
        >
          <ContactIcon />
          <div>Contact</div>
        </a>
        <a
          href="#resume"
          onClick={() => setMobileMenu(false)}
          className={`${
            currentSection === "resume" ? "text-primary" : "text-white"
          } flex items-center space-x-3`}
        >
          <PdfIcon />
          <div>Resume</div>
        </a>
      </div>
      {/* Mobile Menu End  */}

      {/* Navigation End  */}

      {/* Content  */}
      <div className="max-w-[1180px] mx-auto md:h-[80%] flex flex-col md:flex-row md:items-center justify-between py-12 max-[1180px] mx-auto">
        <div>
          <div className="text-[2.5rem] lg:text-[4rem] font-semibold">
            Jagmit Cheema
          </div>
          <div className="mt-3 md:mt-0 text-[1.75rem] md:text-[2rem]">
            Full Stack Developer
          </div>
          <a href="#about">
            <Button
              variant="contained"
              className="bg-primary hover:bg-primary mt-5 text-[1rem] md:text-[1.25rem]"
            >
              About Me
            </Button>
          </a>
        </div>
        <div className="flex flex-row md:flex-col md:space-y-3 mt-12 md:mt-0 space-x-5 md:space-x-0">
          <InstagramIcon
            onClick={() => window.open("https://www.instagram.com/")}
            className="text-[3rem] md:text-[4rem] cursor-pointer hover:scale-[1.1] transition-all"
          />
          <LinkedinIcon
            onClick={() => window.open("https://www.linkedin.com/")}
            className="text-[3rem] md:text-[4rem] cursor-pointer hover:scale-[1.1] transition-all"
          />
          <GithubIcon
            onClick={() => window.open("https://github.com/")}
            className="text-[3rem] md:text-[4rem] cursor-pointer hover:scale-[1.1] transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;