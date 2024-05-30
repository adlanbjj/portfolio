import React from "react";
import "./styles/Pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faDesktop,
  faServer,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons/faJs";
import {
  faAndroid,
  faBootstrap,
  faCss3,
  faFigma,
  faHtml5,
  faNodeJs,
  faPhp,
  faReact,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const SkillsPage = () => {
  return (
    <div className="skill-global-cont">
      <h1>SKILLS</h1>
      <div className="skill-cont">
        <div className="top-cont">
          <div className="front-block">
            <div className="title-block">
              <h1 className="titl-skill">Frontend</h1>
              <FontAwesomeIcon className="desktop-icon" icon={faDesktop} />
            </div>
            <div className="front-wrap-icons">
              <FontAwesomeIcon className="front-ic" icon={faJs} />
              <FontAwesomeIcon className="front-ic" icon={faHtml5} />
              <FontAwesomeIcon className="front-ic" icon={faCss3} />
              <FontAwesomeIcon className="front-ic" icon={faSass} />
              <FontAwesomeIcon className="front-ic" icon={faBootstrap} />
              <FontAwesomeIcon className="front-ic" icon={faReact} />
              <FontAwesomeIcon className="front-ic" icon={faVuejs} />
            </div>
          </div>
          <div className="back-block">
            <div className="title-block">
              <h1 className="titl-skill">Backend</h1>
              <FontAwesomeIcon className="desktop-icon" icon={faServer} />
            </div>
            <div className="back-wrap-icons">
              <FontAwesomeIcon className="back-ic" icon={faNodeJs} />
              <FontAwesomeIcon className="back-ic" icon={faPhp} />
            </div>
          </div>
        </div>
        <div className="bottom-cont">
          <div className="db-block">
            <div className="title-block">
              <h1 className="titl-skill">Database</h1>
              <FontAwesomeIcon className="desktop-icon" icon={faDatabase} />
            </div>
            <div className="db-wrap-icons">
              <p>MySQL</p>
              <p>MongoDB</p>
            </div>
          </div>
          <div className="tools-block">
            <div className="title-block">
              <h1 className="titl-skill">Tools</h1>
              <FontAwesomeIcon className="desktop-icon" icon={faToolbox} />
            </div>
            <div className="tools-wrap-icons">
              <p>VSCode</p>
              <p>Android Studio</p>
              <p>Figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
