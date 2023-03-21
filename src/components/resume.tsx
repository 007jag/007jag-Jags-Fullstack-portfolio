import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import Logos from "../assets/logo";

function Resume() {
  const techStack = [
    {
      name: "HTML",
      image: Logos.HtmlLogo,
    },
    {
      name: "CSS",
      image: Logos.CssLogo,
    },
    {
      name: "JavaScript",
      image: Logos.JavascriptLogo,
    },
    {
      name: "Node JS",
      image: Logos.NodejsLogo,
    },
    {
      name: "Postgre SQL",
      image: Logos.PostgreLogo,
    },
    {
      name: "GraphQL",
      image: Logos.GraphqlLogo,
    },
    {
      name: "React",
      image: Logos.ReactLogo,
    },
    {
      name: "Redux",
      image: Logos.ReduxLogo,
    },
  ];

  return (
    <div id="resume" className="p-5 bg-secondary py-12 lg:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {techStack?.map((x) => {
          return (
            <div className="flex flex-col items-center space-y-5">
              <img className="h-[5rem] lg:h-[8rem]" src={x.image} alt="" />
              <div className="font-semibold text-[1.2rem] lg:text-[1.5rem]">
                {x.name}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-12">
        <Button
          variant="contained"
          endIcon={<DownloadIcon />}
          className="bg-primary text-white hover:bg-primary text-[1.2rem]"
        >
          Download Resume
        </Button>
      </div>
    </div>
  );
}

export default Resume;