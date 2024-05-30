import React from "react";
import Cards from '../components/Cards/ProjectsCard/Cards';

const ProjectsPage = ({ title, description, techStack, livePreviewLink, codeLink }) => {

  const projects = [
    {
      title: 'Project title 1',
      description: 'This is sample project description for project 1.',
      techStack: 'HTML/CSS, JavaScript',
      livePreviewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Project title 2',
      description: 'This is sample project description for project 2.',
      techStack: 'React, Redux',
      livePreviewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Project title 3',
      description: 'This is sample project description for project 3.',
      techStack: 'Node.js, Express',
      livePreviewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Project title 4',
      description: 'This is sample project description for project 4.',
      techStack: 'Python, Django',
      livePreviewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Project title 5',
      description: 'This is sample project description for project 5.',
      techStack: 'Java, Spring Boot',
      livePreviewLink: '#',
      codeLink: '#'
    },
    {
      title: 'Project title 6',
      description: 'This is sample project description for project 6.',
      techStack: 'PHP, Laravel',
      livePreviewLink: '#',
      codeLink: '#'
    },
  ];

  return (
    <div>
      <div className="card-container">
      {projects.map((project, index) => (
        <Cards
          key={index}
          title={project.title}
          description={project.description}
          techStack={project.techStack}
          livePreviewLink={project.livePreviewLink}
          codeLink={project.codeLink}
        />
      ))}
    </div>
    </div>
  );
}

export default ProjectsPage;
