import React from 'react';
import './Card.css';

const Cards = ({ title, description, techStack, livePreviewLink, codeLink }) => {
  return (
    <div className="card">
      <div className="card-image"></div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <p className="card-tech-stack">
          <strong>Tech Stack :</strong> {techStack}
        </p>
        <div className="card-links">
          <a href={livePreviewLink} className="card-link">Live Preview</a>
          <a href={codeLink} className="card-link">View Code</a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
