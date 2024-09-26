import React from "react";
import Project from "../components/Project";
import projectsData from "../datas/projects.json";
import FocusHandler from "../components/FocusHandler";

const Projets: React.FC = () => {
 
  return (
    <FocusHandler navLinkSelector='nav a[href="/projets"]'>
    <main className="projects-container" role="main">
      <h1>Mes Projets</h1>
      <p className="intro">
        Découvrez une sélection de projets développés avec des technologies
        modernes, mettant en avant mon expertise dans la création de solutions
        web performantes, intuitives et accessibles. Chaque réalisation est
        pensée pour répondre à des besoins spécifiques, tout en évoluant au fil
        du temps pour s’adapter aux nouvelles exigences.
      </p>
      <section className="projects-list">
        {projectsData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            githubLink={project.githubLink}
            websiteLink={project.websiteLink}
            lighthouseScores={project.lighthouseScores}
            image={project.image}
          />
        ))}
      </section>
    </main>
    </FocusHandler>
  );
};

export default Projets;
