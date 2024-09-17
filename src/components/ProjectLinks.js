import React from 'react';

const ProjectLinks = ({ githubLink, websiteLink }) => {
  return (
    <div className="links-column">
      {githubLink && (
        <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="Voir sur GitHub">
          <i className="fab fa-github" style={{ fontSize: '24px', color: '#000' }}></i>
        </a>
      )}
      {websiteLink && (
        <a href={websiteLink} target="_blank" rel="noopener noreferrer" aria-label="Voir le site">
          <i className="fas fa-external-link-alt" style={{ fontSize: '24px', color: '#000' }}></i>
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
