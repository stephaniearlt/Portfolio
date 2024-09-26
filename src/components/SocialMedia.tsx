import React from "react";

// Définition des types pour les réseaux sociaux
interface SocialMediaLink {
  url: string;
  label: string;
  iconClass: string;
}

// Liste des liens de réseaux sociaux
const socialMediaLinks: SocialMediaLink[] = [
  {
    url: "https://www.linkedin.com/in/stephanie-arlt/",
    label: "LinkedIn",
    iconClass: "fab fa-linkedin",
  },
  {
    url: "https://github.com/stephaniearlt",
    label: "GitHub",
    iconClass: "fab fa-github",
  },
];

const SocialMedia: React.FC = () => {
  return (
    <div className="social-media-container" id="main-content" tabIndex={0}>
      {socialMediaLinks.map((link) => (
        <a
          key={link.url} 
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
          aria-label={`Visitez mon profil ${link.label}`} 
          title={`Aller à ${link.label}`} 
        >
          <i className={link.iconClass}></i>
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
