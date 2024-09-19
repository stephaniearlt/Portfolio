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

  // Crée une fonction pour déterminer la classe de couleur en fonction du score
  const getScoreClass = (score) => {
    if (score >= 90) {
      return 'score-good';
    } else if (score >= 50) {
      return 'score-medium';
    } else {
      return 'score-bad';
    }
  };

  // Crée un tableau des scores Lighthouse avec leurs labels
  const lighthouseData = [
    { label: "Performance", value: lighthouseScores.performance },
    { label: "Accessibilité", value: lighthouseScores.accessibility },
    { label: "Bonnes pratiques", value: lighthouseScores.bestPractices },
    { label: "SEO", value: lighthouseScores.seo },
  ];

  return (
    <div className="project">
      <div className="project-column image-column">
        {image && <img src={imageUrl} alt={title} className="project-image" />}
      </div>
      <div className="project-column details-column">
        <h2>{title}</h2>
        <p>
          <strong>Technologies utilisées :</strong>{" "}
          <span className="technologies">
            {technologies.map((tech, index) => (
              <span key={index} className="technology">{tech}</span>
            ))}
          </span>
        </p>
        <p>
          <strong>Scores Lighthouse :</strong>
          <span className="lighthouse-scores">
            {lighthouseData.map((score, index) => (
              <span
                key={index}
                className={`score ${getScoreClass(score.value)}`}
              >
                <span className="score-label">{score.label}:</span> {score.value}
              </span>
            ))}
          </span>
        </p>
        <p>{description}</p>
      </div>
      <ProjectLinks githubLink={githubLink} websiteLink={websiteLink} />
    </div>
  );
};

export default Project;
