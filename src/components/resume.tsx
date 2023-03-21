import React from "react";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

// Logo
import HtmlLogo from "src/assets/logo/html.png";
import CssLogo from "src/assets/logo/css.png";
import JavascriptLogo from "src/assets/logo/javascript.png";
import NodejsLogo from "src/assets/logo/nodejs.png";
import PostgreLogo from "src/assets/logo/postgre.png";
import GraphqlLogo from "src/assets/logo/graphql.png";
import ReactLogo from "src/assets/logo/react.png";
import ReduxLogo from "src/assets/logo/redux.png";

const techStack = [
  {
    name: "HTML",
    image: HtmlLogo,
  },
  {
    name: "CSS",
    image: CssLogo,
  },
  {
    name: "JavaScript",
    image: JavascriptLogo,
  },
  {
    name: "Node JS",
    image: NodejsLogo,
  },
  {
    name: "Postgre SQL",
    image: PostgreLogo,
  },
  {
    name: "GraphQL",
    image: GraphqlLogo,
  },
  {
    name: "React",
    image: ReactLogo,
  },
  {
    name: "Redux",
    image: ReduxLogo,
  },
];

function Resume() {
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