import React from "react";
import JcLogo from "../assets/jc_photo.jpg";
import MenuIcon from "@mui/icons-material/Menu";

function Navigation() {
  return (
    <nav className="flex items-center justify-between p-5">
      <img className="h-[5rem] w-auto" src={JcLogo} alt="" />
      <div className="flex items-center space-x-5">
        <div onClick={() => document.getElementById("about").scrollIntoView()}>
          About Me
        </div>
        <div onClick={() => document.getElementById("about").scrollIntoView()}>
          Projects
        </div>
        <div onClick={() => document.getElementById("about").scrollIntoView()}>
          Contact Me
        </div>
      </div>
      <MenuIcon />
    </nav>
  );
}

export default Navigation;