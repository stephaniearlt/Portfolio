import React, { useState, useEffect } from 'react';
import Project from './Project';
import projectsData from '../datas/projects.json';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Chargement des projets depuis le fichier JSON 
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-page">
      <h1>Mes Projets</h1>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          githubLink={project.githubLink}
          websiteLink={project.websiteLink}
          lighthouseScores={project.lighthouseScores}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ProjectsPage;
