import React from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import profilePic from "./images/profile-pic.jpeg";
import { TypeAnimation } from "react-type-animation";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/react";

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
      </>
    </GeistProvider>
  );
}

export default App;
