import React from "react";

// Définition des types pour les props
interface ProjectLinksProps {
  projectName: string;
  githubLink?: string;
  websiteLink?: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  projectName,
  githubLink,
  websiteLink,
}) => {
  return (
    <div className="links-column" aria-label="Liens du projet">
      {githubLink && (
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Voir le projet ${projectName} sur GitHub`}
          className="link"
        >
          <i
            className="fab fa-github"
            style={{ fontSize: "24px" }}
            aria-hidden="true"
          ></i>
        </a>
      )}
      {websiteLink && (
        <a
          href={websiteLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visiter le site web du projet ${projectName}`}
          className="link"
        >
          <i
            className="fas fa-external-link-alt"
            style={{ fontSize: "24px" }}
            aria-hidden="true"
          ></i>
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
