import React from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar";
import profilePic from "./images/profile-pic.jpeg";
import { TypeAnimation } from "react-type-animation";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/react";
import { SiSpringboot, SiScikitlearn, SiFlask } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import {
  FaReact,
  FaJava,
  FaPython,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaGithub,
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
            <div className="Intro-button">
              <a
                href="https://NikhilSethuram.github.io/nstPortfolio/ResumeOfficial.pdf"
                download="ResumeOfficial.pdf"
              >
                <button type="button" className="btn btn-outline-light">
                  Download Resume
                </button>
              </a>
            </div>
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
        <div className="Projects">
          <h1 className="ProjectTitle">Projects</h1>
          <div className="p1">
            <h2>
              {" "}
              <a
                href="https://enrollbadge.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                EnrollBadge
              </a>{" "}
            </h2>
            <div className="enroll-badge-content">
              <p
                style={{
                  maxWidth: "800px",
                  fontWeight: "bold",
                  fontSize: "18.25px",
                }}
              >
                Founder and Developer of EnrollBadge - UW-Madison's real-time
                course notification system.<br></br>
                Most students, especially students in the college of Letters and
                Science find it hard to find open seats due to demand which in
                turn leads to unwanted stress over course enrollment. We
                addressed the challenge of students struggling to secure open
                seats by creating EnrollBadge. This solution eliminates the need
                for constant logins to check for open classes, providing instant
                notifications on class availability. We are proud to say that we
                are currently serving a robust user base of over 1000 students
                at present and have been recognised by people afflitiated with
                the University. Check us out at{" "}
                <a
                  href="https://enrollbadge.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#dbdbdb", textDecoration: "underline" }}
                >
                  enrollbadge.com{" "}
                </a>
              </p>
              {/* <img
                src="/logo-black.png"
                alt="Description of the "
                className="enroll-badge-image"
              /> */}
            </div>
          </div>
          <div className="p2">
            <h2>
              {" "}
              <a
                href="https://github.com/NikhilSethuram/BuckyCourses-CheeseHacks2023"
                target="_blank"
                rel="noopener noreferrer"
              >
                BuckyCourses
              </a>{" "}
            </h2>
            <div className="bucky-courses-content">
              <p
                style={{
                  maxWidth: "800px",
                  fontWeight: "bold",
                  fontSize: "18.25px",
                }}
              >
                An LLM powered alternative to advisors.<br></br>
                Advisor at their finger-tips, BuckyCourses is an AI chatbot that
                uses an enhanced LLM model's capabilities through fine-tuning to
                assist students in efficiently navigating their four year course
                plan at UW-Madison. it uses LangChain’s Pandas Dataframe Agent
                to enable data-driven question-answering, covering course
                information, major requirements, and Degree Audit Reports(DARS).
                Uses Chainlit to create an interactive and eye-catching
                frontend.
              </p>
              <div class="embed-responsive embed-responsive-21by9">
                <iframe
                  title="Video Player 1"
                  class="embed-responsive-item custom-iframe-style"
                  src="https://www.youtube.com/embed/q-0LCDVIjOg?si=Iq9iBn12jdM2V257"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="p3">
            <h2>
              {" "}
              <a
                href="https://github.com/NikhilSethuram/DragonLearn"
                target="_blank"
                rel="noopener noreferrer"
              >
                DragonLearn
              </a>{" "}
            </h2>
            <div className="dragon-learn-content">
              <p
                style={{
                  maxWidth: "800px",
                  fontWeight: "bold",
                  fontSize: "18.25px",
                }}
              >
                A Web App to make learning fun for those with Dyslexia<br></br>
                The platform encourages interactive learning through games
                addressing reading, writing, spelling, memory, and language
                issues associated with dyslexia. The app employs machine
                learning models, including naive Bayes classification and cosine
                similarity, to personalize gameplay based on users' struggles.
                To make it more interesting DragonLearn also features a
                collectible system, motivating children to overcome challenges
                and unlock new levels and characters.DragonLearn achieved a 90%
                accuracy rate on larger datasets using Mean Squared Error
                measurements, showcasing its efficacy in addressing
                dyslexia-related challenges.
              </p>
              <div class="embed-responsive embed-responsive-21by9">
                <iframe
                  title="Video Player 2"
                  class="embed-responsive-item custom-iframe-style2"
                  src="https://www.youtube.com/embed/u_Ur5FzUwIs?si=UPcOBsco402yuFAU"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-me">
          <div className="contact-icons-container">
            <a
              href="https://github.com/NikhilSethuram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={28} style={{ marginRight: "10px" }} />
            </a>
            <a
              href="https://linkedin.com/in/nikhilsethuramth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
          <div className="contact-text-container">
            <a
              href="mailto:stnikhil2004@gmail.com"
              style={{ textDecoration: "underline", color: "#ffffff" }}
            >
              <h4>Reach out to me via email</h4>
            </a>
          </div>
        </div>

        <div className="Footer">{}</div>
      </>
    </GeistProvider>
  );
}

export default App;
