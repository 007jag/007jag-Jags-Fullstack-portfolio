import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="flex flex-col items-center p-5  py-12 bg-background text-white">
      <div className="text-[1.2rem] font-semibold">
        Copyright © 2023 Jagmit Cheema
      </div>
      <div className="mt-5 flex items-center space-x-5">
        <GithubIcon
          className="hover:scale-[1.1] transition-all cursor-pointer text-[2.5rem]"
          onClick={() => window.open("github.com")}
        />
        <LinkedinIcon
          className="hover:scale-[1.1] transition-all cursor-pointer text-[2.5rem]"
          onClick={() => window.open("github.com")}
        />
        <TwitterIcon
          className="hover:scale-[1.1] transition-all cursor-pointer text-[2.5rem]"
          onClick={() => window.open("github.com")}
        />
      </div>
    </div>
  );
}

export default Footer;