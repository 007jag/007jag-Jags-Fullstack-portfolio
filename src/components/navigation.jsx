import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import JcLogo from "../assets/jc_logo.png";

function Navigation() {
  return (
    <nav className="md:h-[20%] flex items-center justify-between max-w-[1180px] mx-auto">
      <img className="h-[3rem] md:h-[5rem] w-auto" src={JcLogo} alt="" />
      <div className="hidden md:flex items-center space-x-10 font-semibold text-[1.2rem]">
        <a href="#about" className="cursor-pointer">
          About Me
        </a>
        <a href="#portfolio" className="cursor-pointer">
          Portfolio
        </a>
        <a href="#contact" className="cursor-pointer">
          Contact
        </a>
        <a href="#resume" className="cursor-pointer">
          Resume
        </a>
      </div>
      <div onClick={() => setMobileMenu(true)} className="md:hidden text-white">
        <MenuIcon className="text-[2rem]" />
      </div>
    </nav>
  );
}

export default Navigation;