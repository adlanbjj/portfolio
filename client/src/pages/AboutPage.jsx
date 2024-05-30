import React from "react";
import myImage from "../public/adlan.png";
import "./styles/Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <div className="glob-cont">
      <div className="glob-wrap-cont">
        <div className="left-block">
          <p>
            Hello, I'm <span className="name-title">ADLAN ISAEV</span>
          </p>
          <p className="sec-title-text">
            Web and Mobile Applications Developer
          </p>
          <p className="desc-text">
            As a passionate developer, I specialize in creating innovative and
            user-friendly web and mobile applications. My focus is on delivering
            high-quality and efficient software solutions.
          </p>
          <div className="social-media-icons">
            <a
              href="https://www.instagram.com/adlan.str/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/adlan-isaev-1097a6227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="contact-icon" icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/adlanbjj/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="contact-icon" icon={faGithub} />
            </a>{" "}
            <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
            <a href="/resume.pdf" download className="download-icon contact-icon">
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </div>
        </div>
        <div className="right-block">
          <img src={myImage} alt="My Image" />
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
