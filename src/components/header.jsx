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

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [floatingNav, setFloatingNav] = useState(false);

  const headerRef = useRef(null);

  const obsCallback = (entries) => {
    if (entries[0].isIntersecting) {
      setFloatingNav(true);
    } else {
      setFloatingNav(false);
    }
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(obsCallback, {
      root: null,
      threshold: 0.3,
    });

    sectionObserver.observe(headerRef.current);
  }, [headerRef]);

  return (
    <div
      ref={headerRef}
      className="bg-background p-5 md:px-12 md:h-screen text-white"
    >
      {/* Navigation  */}
      <nav className="md:h-[20%] flex items-center justify-between max-w-[1180px] mx-auto">
        <img className="h-[3rem] md:h-[5rem] w-auto" src={JcLogo} alt="" />
        <div className="hidden md:flex items-center space-x-10 font-semibold text-[1.2rem]">
          <a href="#about" className="cursor-pointer">
            About Me
          </a>
          <a href="#portfolio" className="cursor-pointer">
            Portfolio
          </a>
          <div
            className="cursor-pointer"
            onClick={() => document.getElementById("contact").scrollIntoView()}
          >
            Contact
          </div>
          <div
            className="cursor-pointer"
            onClick={() => document.getElementById("resume").scrollIntoView()}
          >
            Resume
          </div>
        </div>
        <div
          onClick={() => setMobileMenu(true)}
          className="md:hidden text-white"
        >
          <MenuIcon className="text-[2rem]" />
        </div>
      </nav>

      {/* Mobile Menu  */}
      <div
        onClick={() => setMobileMenu(false)}
        className={`${
          mobileMenu ? "opacity-1 visible" : "opacity-0 invisible"
        } transition-all absolute left-0 top-0 right-0 bottom-0 bg-black/[0.3]`}
      ></div>
      <div
        className={`${
          mobileMenu ? "translate-x-0" : "translate-x-[-100%]"
        } transition-all fixed z-[99] left-0 top-0 bottom-0 w-full z-[999] max-w-[60%] bg-background p-5 flex flex-col space-y-8 h-full`}
      >
        <div className="flex items-center justify-between">
          <img src={JcLogo} alt="" className="h-[4rem] w-auto" />
          <ChevronLeftIcon
            onClick={() => setMobileMenu(false)}
            className="text-[2rem]"
          />
        </div>
        <div
          onClick={() => {
            setMobileMenu(false);
            document.getElementById("about").scrollIntoView();
          }}
          className="flex items-center space-x-3"
        >
          <PersonIcon className="text-white" />
          <div>About Me</div>
        </div>
        <div
          onClick={() => {
            setMobileMenu(false);
            document.getElementById("projects").scrollIntoView();
          }}
          className="flex items-center space-x-3"
        >
          <ProjectIcon className="text-white" />
          <div>Portfolio</div>
        </div>
        <div
          onClick={() => {
            setMobileMenu(false);
            document.getElementById("contact").scrollIntoView();
          }}
          className="flex items-center space-x-3"
        >
          <ContactIcon className="text-white" />
          <div>Contact</div>
        </div>
        <div
          onClick={() => {
            setMobileMenu(false);
            document.getElementById("resume").scrollIntoView();
          }}
          className="flex items-center space-x-3"
        >
          <PdfIcon className="text-white" />
          <div>Resume</div>
        </div>
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
          <Button
            onClick={() => document.getElementById("about").scrollIntoView()}
            variant="contained"
            className="bg-primary hover:bg-primary mt-5 text-[1rem] md:text-[1.25rem]"
          >
            About Me
          </Button>
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
            onClick={() => window.open("https://github.com/007jag")}
            className="text-[3rem] md:text-[4rem] cursor-pointer hover:scale-[1.1] transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;