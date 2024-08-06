import React from 'react';
import '../CSS/Projects.css';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of Project One, highlighting key features and technologies used.',
    link: '#',
    image: 'https://via.placeholder.com/300' // Replace with your image URLs
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two, showcasing its unique aspects and achievements.',
    link: '#',
    image: 'https://via.placeholder.com/300' // Replace with your image URLs
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three, emphasizing its impact and results.',
    link: '#',
    image: 'https://via.placeholder.com/300' // Replace with your image URLs
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

