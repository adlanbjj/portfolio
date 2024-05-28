import React from "react";
import myImage from "../components/public/i.png";
import "./styles/Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faMessage } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
  return (
    <div>
      <div className="glob-cont">
        <div className="left-block">
          <p>
            Hello, i'm <span>ADLAN ISAEV</span>
          </p>
          <p> Web and Mobile Applications Developer</p>
          <p className="desc-text">
            As a passionate developer, I specialize in creating innovative and
            user-friendly web and mobile applications. My focus is on delivering
            high-quality and efficient software solutions
          </p>
          <div className="social-media-icons">
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faEnvelope} />
            

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
