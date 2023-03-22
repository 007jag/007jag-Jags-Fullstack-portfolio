import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import JcLogo from "../assets/jc_logo.png";

function Navigation({ mobileMenu, setMobileMenu, currentSection }) {
  const NavigationList = [
    {
      id: "about",
      label: "About Me",
    },
    {
      id: "portfolio",
      label: "Portfolio",
    },
    {
      id: "contact",
      label: "Contact",
    },
    {
      id: "resume",
      label: "Resume",
    },
  ];

  return (
    <nav
      className={`${
        currentSection === "header"
          ? "md:h-[20%]"
          : "fixed top-[0%] left-[0%] w-full bg-background p-5 z-[99]"
      }`}
    >
      <div
        className={`flex items-center justify-between max-w-[1180px] mx-auto`}
      >
        <a href="#header">
          <img className="h-[3rem] w-auto" src={JcLogo} alt="" />
        </a>
        <div className="hidden md:flex items-center space-x-10 font-semibold text-[1.2rem]">
          {NavigationList.map((x) => {
            return (
              <a
                href={`#${x.id}`}
                className={`cursor-pointer ${
                  x.id === currentSection ? "text-primary" : ""
                } transition-all`}
              >
                {x.label}
              </a>
            );
          })}
        </div>
        <div
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white"
        >
          <MenuIcon className="text-[2rem]" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
