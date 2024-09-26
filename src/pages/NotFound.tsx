import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main className="not-found-container" role="main">
      <h1>404 - Page non trouvée</h1>
      <p>Il semble que la page que vous recherchez n'existe pas.</p>
      <Link to="/" className="home-link">
        Retour à la page d'accueil
      </Link>
    </main>
  );
};

export default NotFound;
