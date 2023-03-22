import React from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className="flex flex-col items-center p-5 py-12 bg-background text-white">
      <div className="text-center text-[1.2rem] font-semibold">
        Copyright © 2023 Jagmit Cheema
      </div>
      <div className="mt-5 flex items-center space-x-5">
        <GithubIcon
          className="hover:scale-[1.1] transition-all cursor-pointer text-[2.5rem]"
          onClick={() => window.open("https://github.com/")}
        />
        <LinkedinIcon
          className="hover:scale-[1.1] transition-all cursor-pointer text-[2.5rem]"
          onClick={() => window.open("https://www.linkedin.com/")}
        />
        <InstagramIcon
          className="hover:scale-[1.1] transition-all cursor-pointer text-[2.5rem]"
          onClick={() => window.open("https://www.instagram.com/")}
        />
        <TwitterIcon
          className="hover:scale-[1.1] transition-all cursor-pointer text-[2.5rem]"
          onClick={() => window.open("https://twitter.com/")}
        />
      </div>
    </div>
  );
}

export default Footer;
