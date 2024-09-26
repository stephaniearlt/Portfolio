import React from "react";
import ProjectLinks from "./ProjectLinks";

// Définition des types pour les props
interface LighthouseScores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  websiteLink: string;
  lighthouseScores: LighthouseScores;
  image: string;
}

const Project: React.FC<ProjectProps> = ({
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
  const getScoreClass = (score: number): string => {
    if (score >= 90) return "score-good";
    if (score >= 50) return "score-medium";
    return "score-bad";
  };

  // Crée un tableau des scores Lighthouse avec leurs labels
  const lighthouseData = [
    { label: "Performance", value: lighthouseScores.performance },
    { label: "Accessibilité", value: lighthouseScores.accessibility },
    { label: "Bonnes pratiques", value: lighthouseScores.bestPractices },
    { label: "SEO", value: lighthouseScores.seo },
  ];

  // Fonction utilitaire pour afficher les scores Lighthouse
  const renderLighthouseScores = () => {
    return lighthouseData.map((score, index) => (
      <span key={index} className={`score ${getScoreClass(score.value)}`}>
        <span className="score-label">{score.label}:</span> {score.value}
      </span>
    ));
  };

  // Fonction utilitaire pour afficher les technologies utilisées
  const renderTechnologies = () => {
    return technologies.map((tech, index) => (
      <span key={index} className="technology">
        {tech}
      </span>
    ));
  };

  return (
    <div className="project">
      <div className="project-column image-column">
        {image && (
          <img
            src={imageUrl}
            alt={title}
            className="project-image"
            width={300}
            height={145}
          />
        )}
      </div>
      <div className="project-column details-column">
        <h2>{title}</h2>
        <p>
          <strong>Technologies utilisées :</strong>{" "}
          <span className="technologies">{renderTechnologies()}</span>
        </p>
        <p>
          <strong>Scores Lighthouse :</strong>
          <span className="lighthouse-scores">{renderLighthouseScores()}</span>
        </p>
        <p>{description}</p>
      </div>
      <ProjectLinks githubLink={githubLink} websiteLink={websiteLink} projectName={title} />
    </div>
  );
};

export default Project;
