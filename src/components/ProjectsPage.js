import React, { useState, useEffect } from "react";
import Project from "./Project";
import projectsData from "../datas/projects.json";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Chargement des projets depuis le fichier JSON
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects-container">
      <h1>Mes Projets</h1>
      <p className="intro">
        Découvrez une sélection de projets développés avec des technologies modernes, 
        mettant en avant mon expertise dans la création de solutions web performantes, 
        intuitives et accessibles. Chaque réalisation est pensée pour répondre à des 
        besoins spécifiques, tout en évoluant au fil du temps pour s’adapter aux nouvelles exigences.
      </p>
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
