import React from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import profilePic from "./images/profile-pic.jpeg";
import { TypeAnimation } from "react-type-animation";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/react";
import { SiSpringboot, SiScikitlearn, SiFlask } from "react-icons/si";

import {
  FaReact,
  FaJava,
  FaPython,
  FaAngular,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  DiMongodb,
  DiCss3,
  DiMysql,
  DiPostgresql,
  DiSqllite,
} from "react-icons/di";

const introText = `
  Welcome to my website!
  I'm Nikhil Sethuram,
  a sophomore at the University of Wisconsin-Madison.
  I'm a full-stack developer.
`;

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <>
        <div className="Navbar">{<NavbarComponent />}</div>
        <div className="App">
          <div className="Intro-container">
            <Page>
              <Page.Content>
                <h1>Hi!</h1>
                <h4 className="Intro">
                  <TypeAnimation
                    sequence={[introText, 5000, ""]}
                    speed={50}
                    style={{ whiteSpace: "pre-line", fontSize: "2em" }}
                    repeat={Infinity}
                  />
                </h4>
              </Page.Content>
            </Page>
          </div>
          <div className="ProfilePicContainer">
            <img src={profilePic} alt="Profile Pic" className="ProfilePic" />
          </div>

          {/* Your other components or content can go here */}
        </div>
        <div className="TechStackContainer">
          <div className="TechStackText">
            <h1>Tech Stack</h1>
          </div>
        </div>
        <div className="icons-container">
          <FaJava size={100} />
          <FaPython size={100} />
          <IoLogoJavascript size={100} />
          <FaReact size={100} />
          <FaAngular size={100} />
          <FaNodeJs size={100} />
          <DiMongodb size={100} />
          <DiCss3 size={100} />
          <SiSpringboot size={100} />
          <SiFlask size={100} />
          <SiScikitlearn size={100} />
          <DiMysql size={100} />
          <DiPostgresql size={100} />
          <DiSqllite size={100} />
          <FaDocker size={100} />
        </div>
      </>
    </GeistProvider>
  );
}

export default App;
