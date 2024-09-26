import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "./DarkMode";

// Définition des types pour les props
interface NavigationProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

// Liste des pages de navigation
const pages = ["projets", "methodologie", "a-propos", "contact"];

const Navigation: React.FC<NavigationProps> = ({ isDarkMode, toggleDarkMode }) => {
  // Fonction utilitaire pour créer les liens de navigation
  const renderNavLinks = () => {
    return pages.map((page) => (
      <li key={page}>
        <Link
          to={`/${page}`}
          className="button"
          aria-label={`Accéder à la page ${page.charAt(0).toUpperCase() + page.slice(1)}`} 
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </Link>
      </li>
    ));
  };

  return (
    <nav className="navigation" role="navigation" aria-label="Navigation principale">
      <Link to="/" className="button" aria-label="Accueil">
        <img
          src={`${process.env.PUBLIC_URL}/images/developpeur.webp`}
          alt="Logo, Stéphanie Arlt, développeuse web."
          aria-hidden="true"
          className="logo"
          width={25}
          height={25}
        />
      </Link>
      <ul className="nav-buttons"> {/* Utilisation de <ul> pour une navigation accessible */}
        {renderNavLinks()}
      </ul>
      <div className="dark-mode-switch">
        <DarkMode isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navigation;
