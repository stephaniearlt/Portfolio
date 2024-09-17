import React from "react";
import ProjectLinks from "./ProjectLinks";

const Project = ({
  title,
  description,
  technologies,
  githubLink,
  websiteLink,
  lighthouseScores,
  image,
}) => {
  // Construit l'URL de l'image en utilisant le chemin relatif du dossier public
  const imageUrl = `/images/${image}`;

  return (
    <div className="project">
      <div className="project-column image-column">
        {image && <img src={imageUrl} alt={title} className="project-image" />}
      </div>
      <div className="project-column details-column">
        <h2>{title}</h2>
        <p>
          <strong>Technologies utilisées :</strong> {technologies.join(", ")}
        </p>
        <p>
          <strong>Scores Lighthouse :</strong> Performance:{" "}
          {lighthouseScores.performance}, Accessibilité:{" "}
          {lighthouseScores.accessibility}, Bonnes pratiques:{" "}
          {lighthouseScores.bestPractices}, SEO: {lighthouseScores.seo}
        </p>
        <p>{description}</p>
      </div>
      <ProjectLinks githubLink={githubLink} websiteLink={websiteLink} />
    </div>
  );
};

export default Project;
